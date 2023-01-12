import { ScrapeRegistrationAPICall } from './ScrapeRegistrationAPICall';

export function scraper() {
  //create memory tag and age identifier
  const a: number = Math.floor(Math.random() * 23);
  const mems: string[] = [
    'AA',
    'AB',
    'AC',
    'AD',
    'AE',
    'AF',
    'AG',
    'AH',
    'AJ',
    'AK',
    'AL',
    'AM',
    'AN',
    'AO',
    'AP',
    'AR',
    'AS',
    'AT',
    'AU',
    'AV',
    'AW',
    'AX',
    'AY'
  ];
  const tag = mems[a];
  let ageID = 0;
  let found = 0;
  while (found == 0) {
    const b: number = Math.floor(Math.random() * 79);
    if (b >= 2) {
      ageID = b;
      found = 1;
    }
  }
  let finalAgeID: string = ageID.toString();
  if (ageID < 10) {
    ageID.toString();
    finalAgeID = '0' + ageID;
  }

  let randomLets = '';
  for (let i = 0; i < 3; i++) {
    const num: number = Math.floor(Math.random() * 26);
    const randomLet: string = String.fromCharCode(65 + num);
    randomLets = randomLets + randomLet;
  }

  tag.toString();
  const finalReg = tag + finalAgeID + ' ' + randomLets;
  ScrapeRegistrationAPICall(finalReg);
}
