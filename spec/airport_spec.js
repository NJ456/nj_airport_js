
describe('Airport', function(){

  it('responds to land method', function() {
    const airport = new Airport('Heathrow')
    const plane = '737'
    expect(airport.land(plane)).toEqual(true)
  });

  it('tells plane to take off from airport', function(){
    const airport = new Airport('Heathrow')
    const plane = '7177'
    airport.land(plane)
    // console.log(airport.hangar)
    airport.takeOff(plane)
    // console.log(airport.hangar)
    expect(airport.hangar).toEqual([])
  });

  it('error message when weather is stormy', function(){
    const airport = new Airport('Heathrow')
    const plane = '5640'
    airport.land(plane)
    MyCustomError = new Error('Plane can not take off due to stormy weather!')
    expect(function() {airport.noLeaving()}).toThrowError('Plane can not take off due to stormy weather!')
  });

  it('brings up an error message if airport is full', function(){
    const airport = new Airport('Heathrow', 5)
    let plane = "934"
    airport.land(plane)
    var plane2 = "789"
    airport.land(plane)
    const plane3 = "3455"
    airport.land(plane)
    var plane4 = "234"
    airport.land(plane)
    var plane5 = "3454"
    airport.land(plane)

    console.log(airport.hangar)
    MyCustomError = new Error('Airport full, DO NOT land!')
    expect(function() {airport.full()}).toThrowError('Airport full, DO NOT land!')
  });
});
// Think how to land multiple planes maybe use a for loop.
