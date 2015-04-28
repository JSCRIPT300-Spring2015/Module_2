var enhancedDate = (function() {
	
	'use strict'

	var myDate = null;
	var dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
	var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

	function setDate(date) {
		if (date instanceof Date || typeof date ==='number') {
			myDate = new Date(date);
		} else {
			myDate = new Date();
		}
	}

	function getDate(returnObj) {
		if (returnObj) {
			return myDate;
		} else {
			return myDate.getTime();
		}
	}

	function getDayName() {
		var day = myDate.getDay();
		return dayNames[day];
	}

	function getMonthNames() {
		var month = myDate.getMonth();
		return monthNames[month];
	}

	function isToday() {
		var today = new Date();
		var month = today.getMonth();
		var date = today.getDate();
		var year = today.getYear();

		if (myDate.getMonth() === month && myDate.getDate() === date && myDate.getYear() === year) {
			return true;
		} else {
			return false;
		}
	}

	function isFuture() {
		return myDate.getTime() > Date.now();
	}

	var publicAPI = {
		setDate: setDate,
		getDate: getDate,
		getDayName: dayName,
		getMonthName: getMonthName,
		isFuture: isFuture,
		isToday: isFuture
	};

	return publicAPI;

})();
