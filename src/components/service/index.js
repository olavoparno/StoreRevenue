export class MapService {
    getStores() {
      return fetch('./data/data.json')
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
  