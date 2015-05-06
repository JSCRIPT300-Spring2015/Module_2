var enhancedDate = (function(window, undefined) {

	var _date;
	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var month = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "Novenber", "December"];
	var current = new Date();
	var setDate = false;

	function _setDate(oDate) {
		if(oDate instanceof Date) {
			_date = oDate;
		} else {
			_date = current;
		}

		setDate = true;
	}
	function _getDate(oDate) {
		if(!setDate) {
			_setDate();
		}

		if(oDate === true) {
			return _date;
		} else {
			return _date.getTime();
		}
	}
	function _getDayName() {
		if(!setDate) {
			_setDate();
		}
		return weekday[_date.getDay()];
	}
	function _getMonthName() {
		if(!setDate) {
			_setDate();
		}
		return month[_date.getMonth()];
	}
	function _isFuture() {
		if(!setDate) {
			_setDate();
		}
		if( _date.getDay() >= current.getDay() ) {
			return true;
		} else {
			return false;
		}
	}
	function _isToday() {
		if(!setDate) {
			_setDate();
		}
		
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