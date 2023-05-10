// // const Jazzcash = require('jazzcash-checkout')

// // Jazzcash.credentials({
// //    config: {
// //       merchantId: "MC56301",
// //       password: "2v2gybgu29",
// //       hashKey: "dyu6w1090w",
// //    },
// //    environment: 'sandbox'
// // });

// // Jazzcash.setData({
// //    pp_Amount: 1 * 100,
// //    pp_BillReference: "billRef123",
// //    pp_Description: "Test Payment",
// //    pp_MobileNumber: "03123456789",
// //    pp_CNIC: "345678",
// // });

// // Jazzcash.createRequest("PAY").then((res) => {
// //    res = JSON.parse(res);
// //    console.log(res);
// // });


// // const axios = require('axios');

// // // Request payload
// // const payload = {
// //    "pp_CustomerID": "25352",
// //    "pp_CustomerEmail": "abc@abc.com",
// //    "pp_CustomerMobile": "03331234567",
// //    "pp_Version": "1.1",
// //    "pp_TxnType": "MPAY",
// //    "pp_TxnRefNo": "T20230429205921",
// //    "pp_MerchantID": "MC56301",
// //    "pp_Password": "2v2gybgu29",
// //    "pp_Amount": "1000",
// //    "pp_TxnCurrency": "PKR",
// //    "pp_TxnDateTime": "20230429205921",
// //    "pp_TxnExpiryDateTime": "20230429205921",
// //    "pp_BillReference": "billRef",
// //    "pp_Description": "Description of transaction",
// //    "pp_CustomerCardNumber": "5123450000000008",
// //    "pp_CustomerCardCVV": "100",
// //    "pp_CustomerCardExpiry": "01/39",
// //    "pp_SecureHash": "E4600AB0FB882A271B934913BB750A53FBCBCFBB23B40A4C90FA6890CCE4ED96",
// //    "pp_DiscountedAmount": "",
// //    "pp_DiscountBank": "",
// //    "pp_UsageMode": "API"
// // }
// // // Send request to JazzCash API
// // axios.post('https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Purchase/PAY', payload)
// //    .then(response => {
// //       const responseData = response.data;
// //       // Process the response
// //       if (responseData.responseCode === '000') {
// //          // Payment successful
// //          console.log('Payment successful!');
// //          console.log('Retrieval Reference Number:', responseData.pp_RetreivalReferenceNo);
// //       } else {
// //          // Payment failed
// //          console.log('Payment failed!');
// //          console.log(responseData)
// //          console.log('Error:', responseData.responseMessage);
// //       }
// //    })
// //    .catch(error => {
// //       // An error occurred during the request
// //       console.error('Error:', error.message);
// //    });



// // const Jazzcash = require('jazzcash-checkout')

// // Jazzcash.credentials({
// //    config: {
// //       merchantId: "MC56301",
// //       password: "2v2gybgu29",
// //       hashKey: "dyu6w1090w",
// //    },
// //    environment: 'sandbox'
// // });

// // Jazzcash.setData({
// //    pp_Amount: 100,
// //    pp_BillReference: "billRef123",
// //    pp_Description: "Test Payment",
// //    pp_MobileNumber: "03123456789",
// //    pp_CNIC: "345678",
// //    pp_TxnExpiryDateTime: "20230429205921",
// //    pp_TxnDateTime: "20230429205921",
// //    pp_TxnType: "MPAY",
// //    pp_Version: "2.0",
// // });

// // Jazzcash.createRequest("PAY").then((res) => {
// //    res = JSON.parse(res);
// //    console.log(res);
// // });

// // const stripe = require('stripe')('sk_test_51MxRs7E4M8lhMp5xHI89lkaVXeJkEeqxH1uZSVTslzQlrhPiX35hJPUn6hRxZ1UokrIeEHektdQWcC4WTekNiTu800tjKeZAv0');

// // app.post('/create-payment-intent', async (req, res) => {
// //    const { amount } = req.body;

// //    const paymentIntent = await stripe.paymentIntents.create({
// //       amount,
// //       currency: 'usd',
// //    });

// //    res.send({
// //       clientSecret: paymentIntent.client_secret,
// //    });
// // });

// 'use strict';

// var cybersourceRestApi = require('cybersource-rest-client');
// var path = require('path');
// var filePath = path.resolve('config/PaymentConfig.js');
// var configuration = require(filePath);

// function simple_authorization_internet(callback, enable_capture) {
//    try {
//       var configObject = new configuration();
//       var apiClient = new cybersourceRestApi.ApiClient();
//       var requestObj = new cybersourceRestApi.CreatePaymentRequest();

//       var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
//       clientReferenceInformation.code = 'TC50171_3';
//       requestObj.clientReferenceInformation = clientReferenceInformation;

//       var processingInformation = new cybersourceRestApi.Ptsv2paymentsProcessingInformation();
//       processingInformation.capture = false;
//       if (enable_capture === true) {
//          processingInformation.capture = true;
//       }

//       requestObj.processingInformation = processingInformation;

//       var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
//       var paymentInformationCard = new cybersourceRestApi.Ptsv2paymentsPaymentInformationCard();
//       paymentInformationCard.number = '4111111111111111';
//       paymentInformationCard.expirationMonth = '12';
//       paymentInformationCard.expirationYear = '2031';
//       paymentInformation.card = paymentInformationCard;

//       requestObj.paymentInformation = paymentInformation;

//       var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
//       var orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
//       orderInformationAmountDetails.totalAmount = '50.00';
//       orderInformationAmountDetails.currency = 'USD';
//       orderInformation.amountDetails = orderInformationAmountDetails;

//       var orderInformationBillTo = new cybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
//       orderInformationBillTo.firstName = 'John';
//       orderInformationBillTo.lastName = 'Doe';
//       orderInformationBillTo.address1 = '1 Market St';
//       orderInformationBillTo.locality = 'san francisco';
//       orderInformationBillTo.administrativeArea = 'CA';
//       orderInformationBillTo.postalCode = '94105';
//       orderInformationBillTo.country = 'US';
//       orderInformationBillTo.email = 'test@cybs.com';
//       orderInformationBillTo.phoneNumber = '4158880000';
//       orderInformation.billTo = orderInformationBillTo;

//       requestObj.orderInformation = orderInformation;


//       var instance = new cybersourceRestApi.PaymentsApi(configObject, apiClient);

//       instance.createPayment(requestObj, function (error, data, response) {
//          if (error) {
//             console.log('\nError : ' + JSON.stringify(error));
//          }
//          else if (data) {
//             console.log('\nData : ' + JSON.stringify(data));
//          }

//          console.log('\nResponse : ' + JSON.stringify(response));
//          console.log('\nResponse Code of Process a Payment : ' + JSON.stringify(response['status']));
//          var status = response['status'];
//          write_log_audit(status);
//          callback(error, data, response);
//       });
//    }
//    catch (error) {
//       console.log('\nException on calling the API : ' + error);
//    }
// }

// function write_log_audit(status) {
//    var filename = path.basename(__filename).split(".")[0];
//    console.log(`[Sample Code Testing] [${filename}] ${status}`);
// }

// if (require.main === module) {
//    simple_authorization_internet(function () {
//       console.log('\nCreatePayment end.');
//    });
// }
// module.exports.simple_authorization_internet = simple_authorization_internet;
