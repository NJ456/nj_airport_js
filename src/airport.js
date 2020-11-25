class Airport {
  constructor(name,capacity){
    this.name = name;
    this.planeLanded = true;
    this.hangar = []
    this.fullAirport = true;
    this.capacity = capacity
  }

  land(plane) {
    this.hangar.push(plane);
    return this.planeLanded;
  }

  takeOff(plane) {
    this.hangar.pop(plane)
    return this.confirmLeave = 'Plane has taken off'
    return this.planeLanded = false;
  }

  full() {
    if(this.capacity === this.hangar.length) {
       throw new Error('Airport full, DO NOT land!')
    }
   // return this.noLanding = 'Airport full, DO NOT land!'
  }

};
