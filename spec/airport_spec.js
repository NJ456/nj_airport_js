
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
    // console.log(airport.hangar)
    airport.takeOff(plane)
    // console.log(airport.hangar)
    expect(airport.hangar).toEqual([])
  });

  it('brings up an error message if airport is full', function(){
    const airport = new Airport('Heathrow', 1)
    const plane = '737'
    airport.land(plane)
    console.log(airport.hangar)
    MyCustomError = new Error('Airport full, DO NOT land!')
    expect(function() {airport.full()}).toThrowError('Airport full, DO NOT land!')
  })
});
// Think how to land multiple planes maybe use a for loop.
