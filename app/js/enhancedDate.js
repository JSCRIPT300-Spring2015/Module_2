var enhancedDate = (function iffe() {
  'use strict';

  //variables for all of the functions below declared here


  var myDate;
  var myDayName;
  var dayNames = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var myMonth;
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var todaysDate;


  return {


    setDate: function setDate(enterDate) {
        if (enterDate instanceof Date){
          myDate = enterDate;
        } else if (isNaN(enterDate) === false){
          myDate = enterDate;
        } else{
          myDate = new Date();
        }
    },


    getDate: function getDate(enterDate) {
         if (enterDate instanceof Date){
            myDate = enterDate;
         }else if (typeof enterDate === "number"){
            myDate = enterDate;
         }else{
           myDate = new Date();
         }
         return myDate;

    },

    getDayName: function getDayName(enterDate) {

      if (enterDate instanceof Date){
         myDate = enterDate;
      }else if (typeof enterDate === "number"){
         myDate = enterDate;
      }else{
        myDate = new Date();
      }
      myDayName = dayNames[myDate.getDay()];
      return myDayName;
    },

    getMonthName: function getMonthName(enterDate) {
      if (enterDate instanceof Date){
         myDate = enterDate;
      }else if (typeof enterDate === "number"){
         myDate = enterDate;
      }else{
        myDate = new Date();
      }
      myMonth = monthNames[myDate.getMonth()];
      return myMonth;
    },

    isFuture: function isFuture(enterDate) {
      if (enterDate instanceof Date){
         myDate = enterDate;
      }else if (typeof enterDate === "number"){
         myDate = enterDate;
      }else{
        myDate = new Date();
      }

      todaysDate= new Date();
      if (todaysDate > myDate) {
        return true;
      }
    },

    isToday: function isToday(enterDate) {
      if (enterDate instanceof Date){
         myDate = enterDate;
      }else if (typeof enterDate === "number"){
         myDate = enterDate;
      }else{
        myDate = new Date();
      }

      todaysDate= new Date();
      if (myDate === todaysDate) {
        return true;
      }
    }
  };
})();

enhancedDate.getDayName();
enhancedDate.getMonthName();

var message = '';

enhancedDate.setDate(new Date());

message += 'Today is ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName();

console.log(message);
