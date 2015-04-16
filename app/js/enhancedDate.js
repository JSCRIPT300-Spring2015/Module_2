//  Brian Forcum Module 2
 

var enhancedDate = (function iffe() {
  
  'use strict';
  
  var theDate = {
    time: new Date(),
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
           'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November',
             'December'],
    
  };
  
 
  var publicAPI = {
    setDate: function setDate(d) {
      
      if (!(d instanceof Date)) {
          theDate.time = new Date();
      } else {
        theDate.time = d;
      }
          return theDate.time;
    },
    getDate: function getDate(param) {
      var gDate;
      if (param === true) {
        gDate = theDate.time;
      }  else {
        gDate = theDate.time.getTime();
      }
      return gDate;
     },
    getDayName: function getDayName() {
      var dayI = theDate.time.getDay();
      var day = theDate.days[dayI];
      return day;
     },
    getMonthName: function getMonthName() {
      var monthI = theDate.time.getMonth();
      var month = theDate.months[monthI];
      return month;
     },
    isFuture: function isFuture() {
      var now = new Date();
      if (theDate.time.getTime() > now) {
        return true;
      }  else {
        return false;
      }
     },
    isToday: function isToday() {
      var today = new Date();
      if (today.getYear() === theDate.time.getYear() && 
          today.getMonth() === theDate.time.getMonth() &&
          today.getDay() === theDate.time.getDay()) {
        return true;
      } else {
        return false;
      }
    }
      
  };
  
    return publicAPI;
  
})();
console.log(enhancedDate.setDate());
console.log(enhancedDate.getDate());
console.log(enhancedDate.getDayName());
console.log(enhancedDate.getMonthName());
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());

    