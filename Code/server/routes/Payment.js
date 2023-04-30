const Jazzcash = require('jazzcash-checkout')

Jazzcash.credentials({
   config: {
      merchantId: "MC56301",
      password: "2v2gybgu29",
      hashKey: "dyu6w1090w",
   },
   environment: 'sandbox'
});

Jazzcash.setData({
   pp_Amount: 1 * 100,
   pp_BillReference: "billRef123",
   pp_Description: "Test Payment",
   pp_MobileNumber: "03123456789",
   pp_CNIC: "345678",
});

Jazzcash.createRequest("PAY").then((res) => {
   res = JSON.parse(res);
   console.log(res);
});


// const axios = require('axios');

// // Request payload
// const payload = {
//    "pp_CustomerID": "25352",
//    "pp_CustomerEmail": "abc@abc.com",
//    "pp_CustomerMobile": "03331234567",
//    "pp_Version": "1.1",
//    "pp_TxnType": "MPAY",
//    "pp_TxnRefNo": "T20230429205921",
//    "pp_MerchantID": "MC56301",
//    "pp_Password": "2v2gybgu29",
//    "pp_Amount": "1000",
//    "pp_TxnCurrency": "PKR",
//    "pp_TxnDateTime": "20230429205921",
//    "pp_TxnExpiryDateTime": "20230429205921",
//    "pp_BillReference": "billRef",
//    "pp_Description": "Description of transaction",
//    "pp_CustomerCardNumber": "5123450000000008",
//    "pp_CustomerCardCVV": "100",
//    "pp_CustomerCardExpiry": "01/39",
//    "pp_SecureHash": "E4600AB0FB882A271B934913BB750A53FBCBCFBB23B40A4C90FA6890CCE4ED96",
//    "pp_DiscountedAmount": "",
//    "pp_DiscountBank": "",
//    "pp_UsageMode": "API"
// }
// // Send request to JazzCash API
// axios.post('https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Purchase/PAY', payload)
//    .then(response => {
//       const responseData = response.data;
//       // Process the response
//       if (responseData.responseCode === '000') {
//          // Payment successful
//          console.log('Payment successful!');
//          console.log('Retrieval Reference Number:', responseData.pp_RetreivalReferenceNo);
//       } else {
//          // Payment failed
//          console.log('Payment failed!');
//          console.log(responseData)
//          console.log('Error:', responseData.responseMessage);
//       }
//    })
//    .catch(error => {
//       // An error occurred during the request
//       console.error('Error:', error.message);
//    });
