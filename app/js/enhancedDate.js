/*
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 */

var enhancedDate = (function iffe() {
  'use strict'
    function now() {
        var now = new Date();
        return now;
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
              dateObjects.dateTime = 'argument is not istanceof Date or number';
          }
          return dateObjects.dateTime;
      },
      getDate: function getDate(e) {
          if (e === true){
              return dateObjects.dateTime;
          }
      },
      getDayName: function getDayName() {
          var day = dateObjects.dateTime.getDay()
          return dateObjects.dayNames[day];
      },
      getMonthName: function getMonthName () {
          var month = dateObjects.dateTime.getMonth();
          return dateObjects.monthNames[month];
      },
      isFuture: function isFuture() {
          if (now().getTime() < dateObjects.dateTime.getTime()) {
              true;
          }
          else {
              return false;
          }
      },
      isToday: function isToday() {
          var year = now().getFullYear();
          var month = now().getMonth();
          var day = now().getDate();
          var nextDay = new Date(year, month, day).getTime() + 86400000;
          var currentDay = new Date(year,month,day).getTime();
          var time = dateObjects.dateTime.getTime();
          if (time < nextDay && time >= currentDay) {
              return true;
          } else {
              return false;
          }
      }
  };

})();

console.log(enhancedDate.getDate(true));
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());
console.log(enhancedDate.setDate());
console.log(enhancedDate.getDate(true));
console.log(enhancedDate.getMonthName());
console.log(enhancedDate.getDayName());
console.log(enhancedDate.setDate(24026454306430));
console.log(enhancedDate.getDate(true));
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());