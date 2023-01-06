export function cleanser(){
    const fs = require('fs');
    const rawData = fs.readFileSync('singleReg.json');
    const finalData = JSON.parse(rawData);

    let listToWrite: string[] = [];
    for(let i = 0;i <= finalData.length-1;i++){
        let num: string = finalData[i].registrationNumber;
        listToWrite.push("\""+num+"\"");
    }
    
    let finalListToWrite: string = listToWrite.toString();
    fs.writeFileSync('regs.json',finalListToWrite, (err:any) => {
        if (err) throw err;
    });
}