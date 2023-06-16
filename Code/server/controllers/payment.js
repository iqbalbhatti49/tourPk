'use strict';
var cybersourceRestApi = require('cybersource-rest-client');
var path = require('path');
var filePath = path.resolve('config/payment.js');
var configuration = require(filePath);

function simple_authorization_internet(callback, enable_capture, cardNumber, expirationMonth, expirationYear, cardType, totalAmount, firstName, lastName, address1, city, email, phoneNumber) {
   try {
      var configObject = new configuration();
      var apiClient = new cybersourceRestApi.ApiClient();
      var requestObj = new cybersourceRestApi.CreatePaymentRequest();

      var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
      clientReferenceInformation.code = 'TC50171_3';
      requestObj.clientReferenceInformation = clientReferenceInformation;

      var processingInformation = new cybersourceRestApi.Ptsv2paymentsProcessingInformation();
      processingInformation.capture = false;
      if (enable_capture === true) {
         processingInformation.capture = true;
      }

      requestObj.processingInformation = processingInformation;

      var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
      var paymentInformationCard = new cybersourceRestApi.Ptsv2paymentsPaymentInformationCard();
      paymentInformationCard.number = cardNumber;
      paymentInformationCard.expirationMonth = expirationMonth;
      paymentInformationCard.expirationYear = expirationYear;
      paymentInformationCard.type = cardType;
      paymentInformation.card = paymentInformationCard;

      requestObj.paymentInformation = paymentInformation;

      var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
      var orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
      orderInformationAmountDetails.totalAmount = totalAmount;
      orderInformationAmountDetails.currency = "USD";
      orderInformation.amountDetails = orderInformationAmountDetails;

      var orderInformationBillTo = new cybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
      orderInformationBillTo.firstName = firstName;
      orderInformationBillTo.lastName = lastName;
      orderInformationBillTo.address1 = address1;
      orderInformationBillTo.locality = city;
      orderInformationBillTo.country = "PK";
      orderInformationBillTo.email = email;
      orderInformationBillTo.phoneNumber = phoneNumber;
      orderInformation.billTo = orderInformationBillTo;
      requestObj.orderInformation = orderInformation;
      console.log(requestObj)
      var instance = new cybersourceRestApi.PaymentsApi(configObject, apiClient);
      instance.createPayment(requestObj, function (error, data, response) {
         if (error) {
            console.log('\nError : ' + JSON.stringify(error));
         }
         else if (data) {
            console.log('\nData : ' + JSON.stringify(data));
         }

         console.log('\nResponse : ' + JSON.stringify(response));
        { response!= undefined && 
         console.log('\nResponse Code of Process a Payment : ' + JSON.stringify(response['status']));
         var status = response['status'];
         write_log_audit(status);}
         callback(error, data, response);
      });
   }
   catch (error) {
      console.log('\nException on calling the API : ' + error);
   }
}

function write_log_audit(status) {
   var filename = path.basename(__filename).split(".")[0];
   console.log(`[Sample Code Testing] [${filename}] ${status}`);
}

if (require.main === module) {
   simple_authorization_internet(function () {
      console.log('\nCreatePayment end.');
   });
}
module.exports.simple_authorization_internet = simple_authorization_internet;

