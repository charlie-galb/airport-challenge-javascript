'use strict';

class Plane{

  constructor(){
    this._location;
  };

  land(airport){
    this._location = airport;
    airport.clearForLanding(this)
  };

  takeoff(){
    this._location.clearForTakeoff();
  };
}
