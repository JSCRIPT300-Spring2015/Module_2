/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 *
 * excellent explaination of module method http://toddmotto.com/mastering-the-module-pattern/
 *
 *◦ setDate: Stores the passed-in date. Takes milliseconds after epoch or a date object. Do some 
 *  type-checking to make sure you have a valid type. If no value is passed, default to now.
 *◦ getDate: Returns either milliseconds after epoch by default or a date object if true is passed as an 
 *  argument.
 *◦ getDayName: Returns the full day name as a string, e.g. 'Monday', 'Tuesday', etc.
 *◦ getMonthName: Return the full month name as a string, e.g. 'January', 'February', etc.
 *◦ isFuture: Return boolean true if date is in the future (from when method is called)
 *◦ isToday: Return boolean true if the stored date is 'today'.
 *
 *
 *  JavaScript 300 Spring 2015
 *  Ted Morrill-McClure
 */
 
 
var enhancedDate = (function () {
    
    //create object
    var myObject= {};

    myObject.setDate = function (passedDate) {
        var now;
        if(passedDate){
            if(passedDate instanceof Date){
                now = passedDate;
            }else if (typeof(passedDate) === 'number'){
                now = new Date(passedDate);
            }else {
                now = new Date(); 
            }
        }else{
            //nothing passed in so get current datetime
            now = new Date();
        }
        myObject.now = now;
    };

    myObject.getDate = function (wantObject){
        if(wantObject==true){
            return myObject.now;
        }else{
            return myObject.now.getTime();
        }        
    }

    myObject.getDayName = function (){
        var daysOfWeek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var dayNumber= myObject.now.getDay();
        return daysOfWeek[dayNumber];
    }

    myObject.getMonthName = function(){
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
        var monthNumber = myObject.now.getMonth();
        return monthNames[monthNumber];
    }

    myObject.isFuture = function(){
        var currentTime = new Date();
        if(myObject.now > currentTime){
            return true;
        }else{
            return false;
        }
    }

   myObject.isToday = function(){
        var currentTime = new Date();
        var currentYear = currentTime.getYear();
        var currentMonth = currentTime.getMonth();
        var currentDay = currentTime.getDay();
        
        var objectTime = myObject.now;
        var objectYear = objectTime.getYear();
        var objectMonth = objectTime.getMonth();
        var objectDay = objectTime.getDay();
        if(objectYear===currentYear && objectMonth===currentMonth && objectDay===currentDay){
            return true;
        }else{
            return false;
        }
    }


  return myObject;

})();
