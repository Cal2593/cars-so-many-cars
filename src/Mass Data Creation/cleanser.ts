export function cleanser() {
  const fs = require('fs');
  const rawData = fs.readFileSync('singleReg.json');
  const finalData = JSON.parse(rawData);

  const listToWrite: string[] = [];
  for (let i = 0; i <= finalData.length - 1; i++) {
    const num: string = finalData[i].registrationNumber;
    listToWrite.push('"' + num + '"');
  }

  const finalListToWrite: string = listToWrite.toString();
  fs.writeFileSync('regs.json', finalListToWrite, (err: any) => {
    if (err) throw err;
  });
}
