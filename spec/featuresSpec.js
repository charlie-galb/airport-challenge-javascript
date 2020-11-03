'use strict';

describe('feature test', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  })

  describe('in good weather conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('can land planes', function(){
      plane.land(airport);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane)
    })
  })

  describe('in stormy weather conditions', function(){
    it('prevents take-off', function(){
      spyOn(Math, 'random').and.returnValues(0, 1);
      plane.land(airport);
      expect(function(){ plane.takeoff(); }).toThrowError('STORMY WEATHER ALERT');
    });

    it('prevents landing', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('STORMY WEATHER ALERT');
    });
  })
});
