var enhancedDate = (function() {
	var dateIsSet;
	var enhancedDateObject = {
		setDate: setDate,
		getDate: getDate,
		getDayName: getDayName,
		getMonthName: getMonthName,
		isFuture: isFuture,
		isToday: isToday
	};
	return enhancedDateObject;


	function setDate(date) {
		if (!date) {dateIsSet = new Date(); return;}
		if (!(date instanceof Date)) {console.warn('sorry, not a date'); return;}
		dateIsSet = new Date(date);
	};

	function getDate() {
		isDateSet();
		return dateIsSet;
	}

	function getDayName() {
		isDateSet();
		var dayName = dateIsSet.getDay();
		var dayOfWeekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return dayOfWeekArray[dayName];
	}
	function isDateSet() {
		if(!dateIsSet) {console.warn('date hasn\'t been set! Please call setDate first!'); return false;}
	}
	function getMonthName() {
		isDateSet();
		var monthName = dateIsSet.getMonth();
		var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return monthArray[monthName];
	};
	function isFuture() {
		isDateSet();
		if(dateIsSet.getTime() > new Date().getTime()) {
			return true;
		}
		return false;
	};
	function isToday() {
		isDateSet();
		if(today(dateIsSet) === today(new Date())) {return true;}
		return false;
	}
	function today(input) {
		var day = input.getDay();
		var month = input.getMonth();
		var year = input.getFullYear();
		return "Date : " + day + month + year;
	}
})();

/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable

 setDate: Stores the passed-in date. This function can take milliseconds after epoch or a Date object. Do some type-checking to make sure you have a valid type. If no value is passed, default your internally stored date to now.
getDate: Returns either milliseconds after epoch by default or a Date object if true is passed as an argument.
getDayName: Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
getMonthName: Return the full month name as a string, e.g. "January", "February", etc.
isFuture: Return boolean true if date is in the future (from when method is called)
isToday: Return boolean true if the stored date is "today".
 * /

