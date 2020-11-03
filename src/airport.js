'use strict';

class Airport{
  constructor() {
    this._hangar = [];
  };

  clearForLanding(plane){
    this._hangar.push(plane);
  };

  clearForTakeoff(){
    this._hangar.pop()
  }

  planes(){
    return this._hangar;
  }
}
