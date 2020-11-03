'use strict';

describe('Airport', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  describe('under good weather conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it('Can instruct planes to land', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('Can instruct planes to take-off', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeoff();
      expect(airport.planes()).toEqual([]);
    });
  })
  
  describe('under stormy weather conditions', function(){

    it('Can prevent landing', function(){
      weather.isStormy.and.returnValue(true);
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('STORMY WEATHER ALERT');
    })

    it('Can prevent take-off', function(){
      weather.isStormy.and.returnValues(false, true);
      airport.clearForLanding(plane);
      expect(function(){ airport.clearForTakeoff(); }).toThrowError('STORMY WEATHER ALERT');
    })
  })

})
