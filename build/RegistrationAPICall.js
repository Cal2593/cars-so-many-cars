"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationAPICall = void 0;
const fs = require('fs');
const https = require('follow-redirects').https;
const APItoken = require('../config.json');
function RegistrationAPICall(vehicleRegistration) {
    return __awaiter(this, void 0, void 0, function* () {
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
                const body = Buffer.concat(chunks);
                const body2 = body.toString();
                const creation = JSON.stringify(body2);
                fs.writeFile('userReg.json', creation, (err) => {
                    if (err)
                        throw err;
                    console.log('Data created');
                });
                console.log(body.toString());
            });
            res.on('error', function (error) {
                console.error(error);
            });
        });
        const postData = JSON.stringify({ registrationNumber: vehicleRegistration }, null, 2);
        req.write(postData);
        req.end();
        return;
        /*const raw = fs.readFileSync('userReg.json');
        const parsedData = JSON.parse(raw);
        
        const vehicleMake = parsedData.make;
        const vehicleType = parsedData.wheelplan;
        const vehicleFuelType = parsedData.fuelType;
        const vehicleColour = parsedData.colour;
    
        return [vehicleMake, vehicleType, vehicleFuelType, vehicleColour] as const;*/
    });
}
exports.RegistrationAPICall = RegistrationAPICall;
