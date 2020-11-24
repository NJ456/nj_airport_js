// let plane = 'land plane'

class Airport {
  constructor(name){
    this.name = name;
    this.planeLanded = true;
    this.hangar = []
    // this.planeLeaving = 'Plane takeoff'

  }

  land(plane) {
    this.hangar.push(plane);
    return this.planeLanded;
  }

  takeOff(plane) {
    this.hangar.pop(plane)
    return this.confirmLeave = 'Plane has taken off'
  }

};
