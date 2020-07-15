const speakeasy = require('speakeasy');


const verified = speakeasy.totp.verify({
    secret : ':<58Kh{*sm1PzQ3S%daznVH0}{D[;FRm',
    encoding : 'ascii',
    token : '788778'
});

console.log(verified);