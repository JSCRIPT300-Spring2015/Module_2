/*
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 */

var enhancedDate = (function iffe() {
  'use strict'
    function now() {
        return new Date()
    }
    var dateObjects = {
      dateTime: now(),
      monthNames: ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }
  return {
      setDate: function setDate(e) {
          if (e instanceof Date) {
              dateObjects.dateTime = e;
          }
          else if (!isNaN(e) && e > 0) {
              dateObjects.dateTime = new Date(e);
          }
          else if (e === undefined){
              dateObjects.dateTime = new Date();
          }
          else {
              console.log('argument is not istanceof Date');
          }
          console.log(dateObjects.dateTime);
      },
      getDate: function getDate(e) {
          if (e === true){
              console.log(dateObjects.dateTime);
          }
      },
      getDayName: function getDayName() {
          var day = dateObjects.dateTime.getDay()
          console.log(dateObjects.dayNames[day]);
      },
      getMonthName: function getMonthName () {
          var month = dateObjects.dateTime.getMonth();
          console.log(dateObjects.monthNames[month]);
      },
      isFuture: function isFuture() {
          if (now().getTime() > dateObjects.dateTime.getTime()) {
              console.log(true);
          }
      },
      isToday: function isToday() {
          if (now().getTime() > dateObjects.dateTime.getTime()) {
              console.log(true);
          }
      }
  };

})();

enhancedDate.getDate(true);
enhancedDate.isFuture()
enhancedDate.is
