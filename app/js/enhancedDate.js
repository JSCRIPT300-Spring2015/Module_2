/*
 * Homework 
 * JSCRIPT300-Spring2015/Module_2
 * by Diane Zevenbergen
 *
 * Note: I assumed that the setDate method was supposed to be flexible and store 'theDate' either
 * as a Date object OR in epoch milliseconds, depending on the argument that was passed.
 * So wherever I use a Date object method such as getTime(), I call a fcn getDateObj to
 * convert 'theDate' if needed.
 */

var enhancedDate = (function iife() {
    
    var theDate;
    
    /*
     * This function checks whether 'theDate' has been set by the setDate
     * method yet.  If not, it calls setDate & sets date to now.
     * Called  by all methods in publicAPI (except setDate).
     */
    function verifyDate(){
        if (typeof theDate === 'undefined') {
            publicAPI.setDate();
        }        
    }
    
    // Function returns date object regardless if argument passed is epoch ms or Date obj
    function getDateObj(date) {
        if (date instanceof Date) {
            return date;
        } else {
            return new Date(date);
        }        
    }

    // Function returns epoch milliseconds regardless if argument passed is epoch ms or Date obj
    function getDateMilli(date) {
        if (date instanceof Date) {
            return date.getTime();
        } else {
            return date;
        }        
    }
    
    var publicAPI = {
        
        // Store date passed in as Date object or epoch milliseconds (default to now)
        setDate: function setDate(date) {
            
            // If no argument passed set date to now 
            if (typeof date === 'undefined') {
                date = Date.now();
                
            //  If date is NOT a Date obj OR a number (ms), set date to now
            } else if (!(date instanceof Date) && (typeof date !== 'number')) {
                date = Date.now();
            }
            
            theDate = date;
        },
        
        // Return date as Date object if argument is true, otherwise return milliseconds
        getDate: function getDate(isDateObj) {
            verifyDate();            

            if (isDateObj) {
                return getDateObj(theDate);
            } else {
                return getDateMilli(theDate);
            }            
        },
        
        // Return day of week ('Monday', etc.)
        getDayName: function getDayName() {
            var dayValue;
            var dayLabel;

            verifyDate();
            
            // Use getDay method on Date obj (getDateObj fcn converts from ms to obj if needed)
            dayValue = getDateObj(theDate).getDay();
            
            // Assign weekday label based on weekday value
            switch (dayValue) {
                case 0:
                    dayLabel = "Sunday";
                    break;
                case 1:
                    dayLabel = "Monday";
                    break;
                case 2:
                    dayLabel = "Tuesday";
                    break;
                case 3:
                    dayLabel = "Wednesday";
                    break;
                case 4:
                    dayLabel = "Thursday";
                    break;
                case 5:
                    dayLabel = "Friday";
                    break;
                case 6:
                    dayLabel = "Saturday";
                    break;
                default:
                    dayLabel = "Error";
                    break;
            }
            
            return dayLabel;
        },
        
        // Return month label ('January', etc.)        
        getMonthName: function getMonthName() {
            var monthValue;
            var monthLabel;

            verifyDate();

            // Use getMonth method on Date obj (getDateObj fcn converts from ms to obj if needed)            
            monthValue = getDateObj(theDate).getMonth();
            
            // Assign month label based on month value
            switch (monthValue) {
                case 0:
                    monthLabel = "January";
                    break;
                case 1:
                    monthLabel = "February";
                    break;
                case 2:
                    monthLabel = "March";
                    break;
                case 3:
                    monthLabel = "April";
                    break;
                case 4:
                    monthLabel = "May";
                    break;
                case 5:
                    monthLabel = "June";
                    break;
                case 6:
                    monthLabel = "July";
                    break;
                case 7:
                    monthLabel = "August";
                    break;
                case 8:
                    monthLabel = "September";
                    break;
                case 9:
                    monthLabel = "October";
                    break;
                case 10:
                    monthLabel = "November";
                    break;
                case 11:
                    monthLabel = "December";
                    break;
                default:
                    monthLabel = "Error";
                    break;
            }
            
            return monthLabel;
        },
        
        // Return true if date is in future
        isFuture: function isFuture() {
            var isInFuture;
            var dateNow;
            
            verifyDate();
            
            dateNow = new Date();
            
            // Use getTime method to compare dates
            isInFuture = (getDateObj(theDate).getTime() > dateNow.getTime());
                        
            return isInFuture;
        },
        
        // Return true if setDate is today
        isToday: function isToday() {
            var isTodaysDate = false;
            var dateNow;
            var dateEstab;
            
            verifyDate();
             
            dateNow = new Date();
            dateEstab = getDateObj(theDate);
                        
            // If month, day & year all match, set boolean to true (ignores time of day)
            if (dateNow.getMonth() === dateEstab.getMonth()) {
                if (dateNow.getDate() === dateEstab.getDate()) {
                    if (dateNow.getFullYear() === dateEstab.getFullYear()) {
                        isTodaysDate = true;
                    }
                }
            }
            
            return isTodaysDate;
        }
    };

    return publicAPI;

})();


// Pass Date object (today)
var today = new Date;
dateInfoToConsole(today);

// Pass 7/4/15 as Date obj
var fourth = new Date('7/4/2015');
dateInfoToConsole(fourth);

// Pass nothing (should default to now)
dateInfoToConsole();

// Pass epoch milliseconds (now)
dateInfoToConsole(fourth.getTime());

// Lists results of API methods to console (except setDate)
function dateInfoToConsole(date) {
    enhancedDate.setDate(date);
    console.log('argument passed to setDate:  ' + date);
    console.log('getDate(true):  ' + enhancedDate.getDate(true));
    console.log('getDate():  ' + enhancedDate.getDate());
    console.log('getDayName:  ' + enhancedDate.getDayName());
    console.log('getMonthName:  ' + enhancedDate.getMonthName());
    console.log('isFuture:  ' + enhancedDate.isFuture());
    console.log('isToday:  ' + enhancedDate.isToday());
    console.log('');
}
