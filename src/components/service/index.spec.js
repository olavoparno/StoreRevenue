import  "jest-fetch-mock"
import MapService from './'

it('test', () => {
  const service = new MapService();

  service.getStores()
  .then((data) => {
    expect(data).toBeTruthy()
  })
})