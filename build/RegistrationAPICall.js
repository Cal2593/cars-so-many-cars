"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationAPICall = void 0;
const fs = require('fs');
const https = require('follow-redirects').https;
const APItoken = require('../config.json');
function RegistrationAPICall(vehicleRegistration) {
    const options = {
        method: 'POST',
        hostname: 'driver-vehicle-licensing.api.gov.uk',
        path: '/vehicle-enquiry/v1/vehicles',
        headers: {
            'x-api-key': APItoken.token,
            'Content-Type': 'application/json',
        },
        maxRedirects: 20,
    };
    var req = https.request(options, function (res) {
        const chunks = [];
        res.on('data', function (chunk) {
            chunks.push(chunk);
        });
        res.on('end', function (chunk) {
            const body = Buffer.concat(chunks).toString();
            fs.writeFileSync('userReg.json', body, (err) => {
                if (err)
                    throw err;
            });
        });
        res.on('error', function (error) {
            console.error(error);
        });
    });
    const postData = JSON.stringify({ registrationNumber: vehicleRegistration }, null, 2);
    req.write(postData);
    req.end();
    return;
}
exports.RegistrationAPICall = RegistrationAPICall;
