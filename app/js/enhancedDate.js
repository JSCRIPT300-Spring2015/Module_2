


var enhancedDate = (function iife () {

	'use strict';
	var myDate = null;
	var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//declare any private vars or funcs needed

	function setDate(date) {

		if (date instanceof Date || typeof date === 'number') {
			myDate = new Date(date);
		} else {
			myDate = new Date();
		}
	}

	function getDate(returnObj) {

		if (returnObj) {
			returnObj myDate;
		} else {
			return myDate.getTime();
		}
	}

	function getDayName() {

		var day = myDate.getDay();

		return dayNames[day;]
	}

	function getMonthNames() {

		var month = myDate.getMonth();

		return monthNames[month];
	}

	function isToday () {
		var today = new Date();
		var month = today.getMonth();
		var date = today.getDate();
		var year = today.getYear();

		if (myDate.getMonth() === month && myDate.getDate() === date &&myDate.getYear() === year) {
			return true;
		} else {
			return false;
		}
	}

	function isFuture() {
		return myDate.getTime() > Date.now();
	}
//return methods form object - module's API
	return {
		getDate: function (isObj) {}, //isObj: boolean to determine whether to return object or milliseconds
		setDate: function (date) {}, // date: user can pass in a Date object, or a millisecond value (or nothing)
		getDayName: function () {},
		isToday:function() {},
		isFuture: function() {},
	};



}) ();




