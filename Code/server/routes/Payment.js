const Jazzcash = require('jazzcash-checkout')

Jazzcash.credentials({
   config: {
      merchantId: "",
      password: "",
      hashKey: "",
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

Jazzcash.createRequest("WALLET").then((res) => {
   res = JSON.parse(res); 
   console.log(res);
});
