// MODULE 02 - ENHANCEDDATE.JS
// Eric Gould
// 20 April 2015


/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
*/


// API Requirements include the Methods identified and explained below

// setDate | getDate | getDayName | getMonthName | isFuture | isToday

/*
 * setDate: Stores the passed-in date. This function can take milliseconds after epoch or a  Date object. Do some type-checking to make sure you have a valid type. If no value is passed, default your internally stored date to now.
 * 
 * getDate: Returns either milliseconds after epoch by default or a Date object if true is passed as an argument.
 * 
 * getDayName: Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
 * 
 * getMonthName: Return the full month name as a string, e.g. "January", "February", etc.
 * 
 * isFuture: Return boolean true if date is in the future (from when method is called)
 * 
 * isToday: Return boolean true if the stored date is "today".
 * 
*/
 


var enhancedDate = (function DateModule() {
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

    // function getDate
    function getDate() {
        
    }
    
    // function setDate
    function setDate() {
        
    }
    
    // function getDateName
    function getDateName() {
        
    }
    
    // function getMonthName
    function getMonthName() {
        
    }
    
    // function isFuture
    function isFuture() {
        
    }
    
    // function isToday
    function isToday() {
        
    }
    
    return {
    
        getDate: getDate,
        
        setDate: setDate,
        
        getDateName: getDateName,
        
        getMonthName: getMonthName,
        
        isFuture: isFuture,
        
        isToday: isToday
    };
    
})();

console.log
                    
                    
