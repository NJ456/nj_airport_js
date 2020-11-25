describe('Plane', function (){

  it('responds to land', function(){
    let plane = new Plane('');

    expect(plane.land(plane)).toEqual('Heathrow')
  });
});


// if(this.capacity === this.hangar.length) {
//    throw new Error('Airport full, DO NOT land!')
// }
