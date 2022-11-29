import { UserMap } from '../Maps/userMap';
import { vehMap } from '../Maps/vehMap';

export function createSpots() {
  const spotsArr= [
    {id:'A1',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A2',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A3',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A4',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A5',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A6',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A7',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A8',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A9',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'A10',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B1',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B2',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B3',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B4',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B5',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B6',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B7',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B8',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B9',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'B10',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C1',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C2',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C3',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C4',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C5',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C6',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C7',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C8',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C9',
    reservation:createStatus(),
    occupied:createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    },
    {id:'C10',
    reservation: createStatus(),
    occupied: createStatus(),
    vehicle: "Unoccupied",
    owner: "Unoccupied"
    }
  ];

  const used: string[] = new Array(30);
  for(let i = 0;i<=spotsArr.length;i++){
      if(spotsArr[i]?.occupied){ // the chaining ? checks the value is not undefined before proceeding to check type
        spotsArr[i].vehicle = createOccupying();
        let count = 0;
        while(count == 0) {
          const id = Math.floor(Math.random()*30);
          const proposed: string = UserMap.get(id) as string;
          if(!used.includes(proposed)) {
            count = 1;
            spotsArr[i].owner = proposed;
            used.push(proposed);
          }
        }
      }
  }

  console.log(spotsArr);
  const creation: string = JSON.stringify(spotsArr,null,2);

  const fs = require('fs');
  fs.writeFile('arrays.json',creation,(err: any) => {
    if(err) throw err;
    console.log("Data created");
  })
}

function createStatus(): boolean {
  return Math.random() < 0.5;
}

function createOccupying(): string {
  const a = Math.floor(Math.random()*12);
  return vehMap.get(a) as string;
}
