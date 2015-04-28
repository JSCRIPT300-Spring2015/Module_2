// The api for this module will consist of the following methods:
// setDate: Stores the passed-in date. This function can take milliseconds after epoch or a Date object. Do some type-checking to make sure you have a valid type. If no value is passed, default your internally stored date to now.
// getDate: Returns either milliseconds after epoch by default or a Date object if true is passed as an argument.
// getDayName: Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
// getMonthName: Return the full month name as a string, e.g. "January", "February", etc.
// isFuture: Return boolean true if date is in the future (from when method is called)
// isToday: Return boolean true if the stored date is "today".

var enhancedDate = (function(window, undefined) {

	var _date;
	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var month = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "Novenber", "December"];

	var current = Math.floor( Date.now());

	function _setDate(oDate) {
		if(oDate instanceof Date) {
			_date = oDate;
		} else {
			_date = current;
		}
	}

	function _getDate(oDate) {
		if(oDate === true) {
			return _date;
		} else {
			return _date;
		}
	}
	function _getDayName() {
		return weekday[_date.getDay()];
	}
	function _getMonthName() {
		return month[_date.getMonth()];
	}
	function _isFuture() {
		if( _date.getDay() >= current.getDay() ) {
			return true;
		} else {
			return false;
		}
	}
	function _isToday() {
		if( _date.getDay() == current.getDay() ) {
			return true;
		} else {
			return false;
		}
	}

	return {
		setDate : _setDate,
		getDate : _getDate,
		getDayName : _getDayName,
		getMonthName : _getMonthName,
		isFuture : _isFuture,
		isToday : _isToday
	};
})(window);