import { exit } from 'process';
import { parseArrays } from '../parseArrays';
import Spot from './spot';
import { SpotBuilder } from './SpotBuilder';

export default class StandardUnoccupiedSpotDirector {
  static construct(): Spot {
    const data = parseArrays();
    let found = 0;
    try {
      for (let i = 0; found == 0; i++) {
        if (
          !data[i]?.occupied &&
          !data[i]?.reservation &&
          data[i].spotType == 'Standard'
        ) {
          var spotFound = data[i].id;
          var spotLoc = data[i].location;
          var spotCov = data[i].covering;
          found = 1;
        }
      }
    } catch (error) {
      console.log('No spot found');
      exit;
    }
    return new SpotBuilder(spotCov)
      .setID(spotFound)
      .setSpotType('Standard') //error on enum is either in the builder or the spot
      .setReservedStatus(false)
      .setOccupiedStatus(false)
      .setLocation(spotLoc)
      .setCoveringStatus(spotCov)
      .setBasePrice(2)
      .getResult();
  }
}
/*To do
    Create other directors for the list in the enum + valet
    Build out the array creation to have the other relevant details
    Get everything pulling in via various directors and printing out
    Set it up so that this info pulls in and then I can set a reservation into a spot
*/
