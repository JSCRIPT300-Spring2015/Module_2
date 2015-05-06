var enhancedDate = (function(window, undefined) {

	var _date;
	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var month = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "Novenber", "December"];
	var current = new Date();
	var oDate = false;

	function _setDate(oDate) {
		if(oDate instanceof Date) {
			_date = oDate;
		} else {
			_date = current;
		}

		oDate = true;
	}
	function _getDate(oDate) {
		if(oDate === true) {
			return _date;
		} else {
			return _date.getTime();
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
		var today = new Date();
		var month = today.getMonth();
		var date = today.getDate();
		var year = today.getYear();

		if (current.getMonth() === month && current.getDate() === date && current.getYear === year) {
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