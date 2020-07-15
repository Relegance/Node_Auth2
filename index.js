const speakeasy = require('speakeasy');
const qrcode = require('qrcode');


const secret = speakeasy.generateSecret({
    name: "iki factorrr"
});

console.log(secret);

qrcode.toDataURL(secret.otpauth_url,(err,data) => {
    console.log(data);
})



