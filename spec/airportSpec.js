'use strict';

describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it('Can instruct planes to land', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

})
