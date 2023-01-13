"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeRegistrationAPICall = void 0;
const fs = require('fs');
const https = require('follow-redirects').https;
const APItoken = require('C:/Users/callu/Desktop/cars-so-many-cars/config.json');
function ScrapeRegistrationAPICall(vehicleRegistration) {
    const options = {
        method: 'POST',
        hostname: 'driver-vehicle-licensing.api.gov.uk',
        path: '/vehicle-enquiry/v1/vehicles',
        headers: {
            'x-api-key': APItoken.token,
            'Content-Type': 'application/json'
        },
        maxRedirects: 20
    };
    const req = https.request(options, function (res) {
        const chunks = [];
        res.on('data', function (chunk) {
            chunks.push(chunk);
        });
        res.on('end', function (chunk) {
            const body = Buffer.concat(chunks).toString();
            if (!body.includes('errors')) {
                fs.appendFile('singleReg.json', body + '\n', (err) => {
                    if (err)
                        throw err;
                });
            }
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
exports.ScrapeRegistrationAPICall = ScrapeRegistrationAPICall;
