var enhancedDate = require('./enhancedDate');

//Set Date

//Call setDate with millisecond
enhancedDate.setDate(0);
var myDate = enhancedDate.getDate();

if (!(myDate === 0)){

	console.log("ERROR: MS SetDate(0)");
} 

//Call setDate with Date Object
var newDate = new Date();
enhancedDate.setDate(newDate);
var myDate = enhancedDate.getDate(true);

if ( !(myDate.getTime() === newDate.getTime()) ){

	console.log("ERROR: Date SetDate(Date)");

} 

//Call setDate with no params
enhancedDate.setDate();
var myDate = enhancedDate.getDate(true);

if ( !(myDate instanceof Date) ){

	console.log("ERROR: Date SetDate()");

}

//Returns the full day name as a string
//getDayName
enhancedDate.setDate(0);
if( !(enhancedDate.getDayName() === "Wednesday") ) {

	console.log("ERROR: getDayName");

}

//getMonthName
if( !(enhancedDate.getMonthName() === "December") ) {
	
	console.log("ERROR: getMonthName");

}
//isFuture
if( !(enhancedDate.isFuture() === false) ) {

	console.log("ERROR: isFuture - false");

}
enhancedDate.setDate(new Date(2016, 11, 17));
if( !(enhancedDate.isFuture() === true) ) {

	console.log("ERROR: isFuture - true");

}

//isToday
if( !(enhancedDate.isToday() === false) ) {

	console.log("ERROR: isToday - false");

}
//isToday 
enhancedDate.setDate();
if( !(enhancedDate.isToday() === true) ) {

	console.log("ERROR: isToday - true");

}






function checkUndefined(a, str) {
	if (typeof a == 'undefined') {
		return;
	} else {
		console.log("ERROR: " + str + " - " + a + " not undefined" );
	}
}

//Test Private
checkUndefined(enhancedDate.myDate, "Test 1");
checkUndefined(enhancedDate.dayOfWeek, "Test 2");
checkUndefined(enhancedDate.month, "Test 3");

try {
	enhancedDate.isDateSet();
	console.log("ERROR: Private function was called");
}
catch (e) {
	if (e == 'TypeError: undefined is not a function') {
		return;
	}
}

try {
	enhancedDate.setDefaultDate();
	console.log("ERROR: Private function was called");
}
catch (e) {
	if (e == 'TypeError: undefined is not a function') {
		return;
	}
}