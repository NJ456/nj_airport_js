describe('Plane', function (){

  it('responds to land', function(){
    let plane = new Plane('');

    expect(plane.land(plane)).toEqual('Heathrow')
  });
});
