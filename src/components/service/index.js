export class MapService {
    getStores() {
      return fetch('../../../src/resources/data/data.json')
        .then(response => response.json())
        .then(data => {
          if (!data)
            throw Error(
              'Error on reading file.'
            );
          return data;
        }
      );
    }
  }
  
  export default MapService;
  