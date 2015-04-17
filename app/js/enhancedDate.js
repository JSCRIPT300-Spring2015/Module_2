/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 */

var enhancedDate = (function () {
	
	"use strict";

	var myDate = null;
	var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	function setDefaultDate() {
		if (myDate === null) {
			setDate();
		} 
	}

	return {
		
		/* Stores the passed-in date. 
		 * This function can take milliseconds after epoch 
		 * or a Date object. Do some type-checking to make 
		 * sure you have a valid type. If no value is passed, 
		 * default your internally stored date to now.
		 */
		setDate: function ( date ) {

			if ( typeof date === 'number' ){
				myDate = new Date(date);
			} else if ( date instanceof Date ) {
				myDate = date;
			} else if ( date === undefined ) {
				myDate = new Date();
			} else {
				console.log("ERROR: A type other than a Number or Date was provided");
			}
		},

		/* Returns either milliseconds after epoch by default 
		 * or a Date object if true is passed as an argument.
		 */ 
		getDate: function ( date ) {
			
			setDefaultDate();

			if ( date === true ){
				return myDate;
			} else {
				return myDate.getTime();
			}
		},

		// Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
		getDayName: function () {
			
			setDefaultDate();

			return dayOfWeek[ myDate.getDay() ];
		},

		// Return the full month name as a string, e.g. "January", "February", etc.
		getMonthName: function () {
			
			setDefaultDate();

			return month[ myDate.getMonth() ];
		},

		// Return boolean true if date is in the future (from when method is called)
		isFuture: function () {
			
			setDefaultDate();

			var dateNow = Date.now();

			if ( myDate.getTime() > dateNow ) {
				return true;
			} else {
				return false;
			}
		},

		// Return boolean true if the stored date is "today".
		isToday: function () {
			
			setDefaultDate();

			var dateNow = new Date();
			var dayNow = dateNow.getDay();
			var monthNow = dateNow.getMonth();
			var yearNow = dateNow.getFullYear();

			if ( dayNow === myDate.getDay() &&
				 monthNow === myDate.getMonth() &&
				 yearNow === myDate.getFullYear ) {

				return true;

			} else {

				return false;

			}
		}
	};
})();
