
describe('Airport', function(){

  it('responds to land method', function() {
    const airport = new Airport('Heathrow')
    const plane = '737'
    expect(airport.land(plane)).toEqual(true)
  });

  it('tells plane to take off from airport', function(){
    const airport = new Airport('Heathrow')
    const plane = '737'
    airport.land(plane)
    console.log(airport.hangar)
    airport.takeOff(plane)
    console.log(airport.hangar)
    expect(airport.hangar).toEqual([])
  });
});
