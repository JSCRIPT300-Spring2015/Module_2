// MODULE 02 - ENHANCEDDATE.JS
// Eric Gould
// 14 April 2015


/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 * /


// API Requirements include the Methods identified and explained below

// setDate | getDate | getDayName | getMonthName | isFuture | isToday

/*
setDate: Stores the passed-in date. This function can take milliseconds after epoch or a Date object. Do some type-checking to make sure you have a valid type. If no value is passed, default your internally stored date to now.

getDate: Returns either milliseconds after epoch by default or a Date object if true is passed as an argument.

getDayName: Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.

getMonthName: Return the full month name as a string, e.g. "January", "February", etc.

isFuture: Return boolean true if date is in the future (from when method is called)

isToday: Return boolean true if the stored date is "today".

*/

var greeting = '';

var greetingTime = (function greetingTime() {

    var sd = { setDate: 'setDate' };
    var gd = { getDate: 'getDate' };
    var gdn = { getDayName: 'getDayName' };
    var gmn = { getMonthName: 'getMonthName' };
    var f = { isFuture: 'isFuture' };
    var t = { isToday: 'isToday' };

    return {
        setDate: function setDate() {
            console.log(sd.setDate);
        getDate: function getDate() {
            console.log(gd.getDate);
        getDayName: function getDayName() {
            console.log(gdm.getDayName);
        getMonthName: function getMonthName() {
            console.log(gmn.getMonthName);
        isFuture: function isFuture() {
            console.log(f.isFuture);
        isToday: function isToday() {
            console.log(t.isToday);
        }
    };
})();

greeting.bar();