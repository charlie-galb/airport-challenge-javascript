'use strict';

class Airport{
  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = [];
  };

  clearForLanding(plane){
    if(this._weather.isStormy()){
      throw new Error('STORMY WEATHER ALERT');
    }
    this._hangar.push(plane);
  };

  clearForTakeoff(){
    if(this._weather.isStormy()){
      throw new Error('STORMY WEATHER ALERT');
    }
    this._hangar.pop();
  }

  planes(){
    return this._hangar;
  }
}
