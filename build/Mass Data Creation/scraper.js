"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scraper = void 0;
const ScrapeRegistrationAPICall_1 = require("./ScrapeRegistrationAPICall");
function scraper() {
    //create memory tag and age identifier
    const a = Math.floor(Math.random() * 23);
    const mems = ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY"];
    const tag = mems[a];
    let ageID = 0;
    let found = 0;
    while (found == 0) {
        let b = Math.floor(Math.random() * 79);
        if (b >= 2) {
            ageID = b;
            found = 1;
        }
    }
    let finalAgeID = ageID.toString();
    if (ageID < 10) {
        ageID.toString();
        finalAgeID = "0" + ageID;
    }
    let randomLets = "";
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 26);
        let randomLet = String.fromCharCode(65 + num);
        randomLets = randomLets + randomLet;
    }
    tag.toString();
    let finalReg = tag + finalAgeID + " " + randomLets;
    (0, ScrapeRegistrationAPICall_1.ScrapeRegistrationAPICall)(finalReg);
}
exports.scraper = scraper;
