const fs = require('fs');
const https = require('follow-redirects').https;
const APItoken = require('../config.json');

export function ScrapeRegistrationAPICall(vehicleRegistration: string) {
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

  const req = https.request(options, function (res: any) {
    const chunks: any = [];

    res.on('data', function (chunk: any) {
      chunks.push(chunk);
    });

    res.on('end', function (chunk: any) {
      const body = Buffer.concat(chunks).toString();
      if(!body.includes('errors')){
        fs.appendFile('singleReg.json', body+"\n", (err: any) => {
          if (err) throw err;
        });
      }
    });

    res.on('error', function (error: any) {
      console.error(error);
    });
  });

  const postData: string = JSON.stringify(
    { registrationNumber: vehicleRegistration },
    null,
    2
  );
  req.write(postData);
  req.end();

  return;
}
