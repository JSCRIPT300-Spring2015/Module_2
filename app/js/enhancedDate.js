/*
 * Carolyn Velez
 * JSCRIPT 300
 * 04/14/15
 */

var foo = (function iife() {

	var currentDate;

	return {

		setDate: function setDate(specificDate) {
			if (specificDate === undefined) {
				currentDate = new Date;
			} else {
				currentDate = specificDate;
			}
		},

		getDate: function getDate(isObject) {

			var dateMilliseconds;

			if (isObject === true) {
				return currentDate;
			} else {
				dateMilliseconds = currentDate.getTime();
				return dateMilliseconds;
			}
		},

		getDayName: function getDayName() {

			var dayValue;

			var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

			if (currentDate === undefined) {
				currentDate = new Date;
			}

			dayValue = currentDate.getDay();

			return weekdays[dayValue];
		},

		getMonthName: function getMonthName() {

			var monthValue;

			var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			if (currentDate === undefined) {
				currentDate = new Date;
			}

			monthValue = currentDate.getMonth();

			return months[monthValue];
		},

		isFuture: function isFuture() {

			// Get today
			var today = new Date("3/4/2005");
			var todayValue = today.toDateString();

			// Compare date enter with today's date
			if (currentDate > todayValue) {
				return true;
			}

			console.log("today value; " + todayValue);
		}

	};
})();

// Show today's date by default when no date is passed into setDate:
var newDate = new Date;
foo.setDate(newDate);
console.log(newDate);

// Show month when the date object is using the getMonth property:
console.log(newDate.getMonth());

// Pass in specific date to setDate:
var newDate = new Date("3/18/09");
foo.setDate(newDate);
console.log(newDate);

// Show number of seconds since epoch becuse no date was passed into setDate:
console.log("Seconds: " + foo.getDate(false));

// Show specific date that was passed into setDate:
console.log("Specific date: " + foo.getDate(true));

// Show name of day:
console.log("Name of day: " + foo.getDayName());

// Show name of month:
console.log("Name of month: " + foo.getMonthName());

// Date is in future true:
console.log("Date is in the future: " + foo.isFuture());
