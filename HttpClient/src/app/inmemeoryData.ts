import {InMemoryDbService} from "angular-in-memory-web-api/index";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let employesDetails = [
      {id: 11, name: 'Mr. Nice',surname:'navinice'},
      {id: 12, name: 'Narco',surname:'navinice'},
      {id: 13, name: 'Bombasto',surname:'navinice'},
      {id: 14, name: 'Celeritas',surname:'navinice'},
      {id: 15, name: 'Magneta',surname:'navinice'},
      {id: 16, name: 'RubberMan',surname:'navinice'},
      {id: 17, name: 'Dynama',surname:'navinice'},
      {id: 18, name: 'Dr IQ',surname:'navinice'},
      {id: 19, name: 'Magma',surname:'navinice'},
      {id: 20, name: 'Tornado',surname:'navinice'}
    ];
    return {employesDetails};
  }
}