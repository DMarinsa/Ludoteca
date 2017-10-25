'use strict';

describe('Controller: ContactctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ludotecaApp'));

  var ContactctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactctrlCtrl = $controller('ContactctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactctrlCtrl.awesomeThings.length).toBe(3);
  });
});
