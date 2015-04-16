/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 * The api for this module will consist of the following methods:
setDate: Stores the passed-in date. This function can take milliseconds after 
epoch or a Date object. Do some type-checking to make sure you have a valid type. 
If no value is passed, default your internally stored date to now.
getDate: Returns either milliseconds after epoch by default or a Date object i
f true is passed as an argument.
getDayName: Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
getMonthName: Return the full month name as a string, e.g. "January", "February", etc.
isFuture: Return boolean true if date is in the future (from when method is called)
isToday: Return boolean true if the stored date is "today".
You module should return an object with each of these methods defined on it. You'll need to use the built-in Date constructor to implement some of these methods.
The module should have a notion of "private" data, that is data that is used only internally by the module and is not exposed as part of the public API.
The module should handle the case when an API method (other than setDate) is called before a date has been set. One approach to this is to check if a date has already been set, and if not, set a new date at that time. Only the setDate method should be able to change the internally stored date after it has been set once.
You may wish to test your enhancedDate module by writing code that calls methods on the enhancedDate object it creates. For example:
 * 
 * 
 * 
 */

var enhancedDate = (function () {
	
	var publicAPI={};
	
	var privateAPI ={
		days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'],
		months : ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October','November', 'December']
	};
	
	var newDate;
	var now = new Date();
	var setNewDate = function(){
		if (!newDate){
			newDate= new Date();			
		} 
	};
	
    function setDate(date) {
    	if (date){
    		if (typeof date === "number"){
    			newDate = new Date(date);
    		} else if(date instanceof Date){
    			newDate= date;
    		}else {
    			newDate= new Date();
    		}
    		
    	} else {
    		newDate= new Date();
    	}
    	return newDate
    }
    
	function getDate(arg){
		setNewDate();
		if(arg===true){
			return newDate;
		}else {
			return newDate.getTime();
		}
				
	}
	
	function getDayName(){
		setNewDate();
		return privateAPI.days[newDate.getDay()];
	}
	
	function getMonthName(){
		setNewDate();
		return privateAPI.months[newDate.getMonth()];
	}
	
	function isFuture(){
		setNewDate();
		return (now.getTime() < newDate.getTime());
	}
	
	function isToday(){
		setNewDate();
		return (now.getTime() == newDate.getTime());
		return (newDate.getFullYear() === now.getFullYear() && newDate.getMonth() === now.getMonth() && newDate.getDay() === now.getDay());
	}

    publicAPI = {
    	setDate: setDate,
    	getDate: getDate,
    	getDayName: getDayName,
    	getMonthName: getMonthName,
    	isFuture: isFuture,
    	isToday:isToday
    };
    
    return publicAPI;
})();

var message = '';

enhancedDate.setDate(new Date());

message += 'Today is ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName();

console.log(message);