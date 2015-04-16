/*
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 * /

/*
 * Carolyn Velez
 * JSCRIPT 300
 * 04/14/15
 */

var enhancedDate = (function iife() {

	var myDate;

	return {

		setDate: function setDate(specificDate) {
			if (specificDate === undefined) {
				myDate = new Date;
			} else {
				myDate = specificDate;
			}
		},

		getDate: function getDate(isObject) {

			var dateMilliseconds;

			if (isObject === true) {
				return myDate;
			} else {
				dateMilliseconds = myDate.getTime();
				return dateMilliseconds;
			}
		},

		getDayName: function getDayName() {

			var dayValue;

			var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

			if (myDate === undefined) {
				myDate = new Date;
			}

			dayValue = myDate.getDay();

			return weekdays[dayValue];
		},

		getMonthName: function getMonthName() {

			var monthValue;

			var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			if (myDate === undefined) {
				myDate = new Date;
			}

			monthValue = myDate.getMonth();

			return months[monthValue];
		},

		isFuture: function isFuture() {

			// Get today's date in milliseconds
			var todayValue = Date.now();
			console.log(todayValue);

			// Get date entered in milliseconds
			var myDate = new Date("3/4/15");
			var myNewDate = myDate.getTime();
			console.log(myNewDate);

			// Compare today's date with date entered
			if (myNewDate > todayValue) {
				return true;
			} else {
				return false;
			}
		}

	};
})();

// Show today's date by default when no date is passed into setDate:
var newDate = new Date;
enhancedDate.setDate(newDate);
console.log(newDate);

// Pass in specific date to setDate:
var newDate = new Date("3/18/09");
enhancedDate.setDate(newDate);
console.log(newDate);

// Show number of seconds since epoch becuse no date was passed into setDate:
console.log("Seconds: " + enhancedDate.getDate(false));

// Show specific date that was passed into setDate:
console.log("Specific date: " + enhancedDate.getDate(true));

// Show name of day:
console.log("Name of day: " + enhancedDate.getDayName());

// Show name of month:
console.log("Name of month: " + enhancedDate.getMonthName());

// Date is in future true:
console.log("Date is in the future: " + enhancedDate.isFuture());
