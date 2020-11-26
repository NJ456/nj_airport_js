class Airport {
  constructor(name,capacity){ //add capacity back if needed
    this.name = name;
    this.planeLanded = true;
    this.hangar = []
    this.capacity = capacity;
    this.isStormy = true;
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
    if(this.hangar.length === this.capacity) {
       throw new Error('Airport full, DO NOT land!')
    }
  }

  noLeaving() {
    if(this.isStormy === true) {
      throw new Error('Plane can not take off due to stormy weather!')
       return this.confirmLeave = false;
    }


  }
};
