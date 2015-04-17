/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 */

var enhancedDate = (function enhancedDate() {

    'use strict';
 		 
	var date = null;
	var isDateSet = false;
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
			'Friday', 'Saturday'];
	var months = ['Januray', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'November', 'December'];

    var publicAPI = {

    	setDate: function setDate(myDate) {

    		if (myDate == "Invalid Date") {
    			alert("The date you've entered is invalid.");
    		} else if (myDate instanceof Date) {
				date = myDate;
    			isDateSet = true;
    		} else {
    			date = new Date();
 				isDateSet = true;
    		}
        },

    	getDate: function getDate() {

        	if (isDateSet) {
        		return date;
        	} else {
        		alert("Please set the date first.");
        	}
        },

    	getDayName: function getDayName() {

    		if (isDateSet) {
    			return days[date.getDay()];
    		} else {
        		alert("Please set the date first.");
        	}
        },

    	getMonthName: function getMonthName() {

    		if (isDateSet) {
    			return months[date.getMonth()];
    		} else {
        		alert("Please set the date first.");
        	}
        },

    	isFuture: function isFuture() {

    		if (isDateSet) {
    			return date < Date.now();
    		} else {
        		alert("Please set the date first.");
        	}
        },

    	isToday: function isToday() {

    		if (isDateSet) {
    			var now = new Date();
    			return date.getDay() === now.getDay();
    		} else {
        		alert("Please set the date first.");
        	}
        }
    };

    return publicAPI;

})();



//test
var message = '';

enhancedDate.setDate(new Date());

message += "Today is " + enhancedDate.getDayName() + " in the month of " + enhancedDate.getMonthName() + ".";

console.log(message);


