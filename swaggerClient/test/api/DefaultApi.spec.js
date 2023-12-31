/**
 * task-manager
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TaskManager);
  }
}(this, function(expect, TaskManager) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TaskManager.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('deleteTaskDeleteTaskId', function() {
      it('should call deleteTaskDeleteTaskId successfully', function(done) {
        //uncomment below and update the code to test deleteTaskDeleteTaskId
        //instance.deleteTaskDeleteTaskId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaskGetTaskId', function() {
      it('should call getTaskGetTaskId successfully', function(done) {
        //uncomment below and update the code to test getTaskGetTaskId
        //instance.getTaskGetTaskId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postTaskPostTask', function() {
      it('should call postTaskPostTask successfully', function(done) {
        //uncomment below and update the code to test postTaskPostTask
        //instance.postTaskPostTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putTaskPutTaskId', function() {
      it('should call putTaskPutTaskId successfully', function(done) {
        //uncomment below and update the code to test putTaskPutTaskId
        //instance.putTaskPutTaskId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
