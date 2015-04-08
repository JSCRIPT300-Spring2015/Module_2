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
 *◦ getDayName: Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
 *◦ getMonthName: Return the full month name as a string, e.g. "January", "February", etc.
 *◦ isFuture: Return boolean true if date is in the future (from when method is called)
 *◦ isToday: Return boolean true if the stored date is "today".
 *
 * /
 
 
var Module = (function () {
    
    //create object
    var myObject= {};

    myObject.setDate = function(passedDate){
        if(passedDate){
            
            
        }else{
            //nothing passed in so get current datetime
            getDate();
        }
        
    };












  return myObject;

})();
