/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 */
var enhancedDate = (function enhancedDate() {

    'use strict';

    // Private data, not accessible outside the enhancedDate module
    var data = {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
                'Saturday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                'August', 'September', 'October', 'November', 'December']
    };

    // check if date has been set, otherwise create a new date object
    function hasDate() {
        
        if (!data.date) {
            data.date = new Date();
        }
    }

    // Methods availabls as a public API
    return {
        // setDate allows users to change the date without touching our hidden date variable
        setDate: function setDate(dateValue) {

            hasDate();
            if (typeof dateValue === 'number' || dateValue instanceof Date) {
                data.date = new Date(dateValue);
            }
        },
        
        // getDate returns the value of date: epoch by default, object if true is passed
        getDate: function getDate(returnObject) {

            hasDate();
            return returnObject === true ? data.date : data.date.getTime();
        },

        // getDayName returns the name of the date's day, based on the days array
        getDayName: function getDayName() {

            hasDate();
            return data.days[data.date.getDay()];
        },

        // getMonthName returns date's month's name, based on the months array
        getMonthName: function getMonthName() {

            hasDate();
            return data.months[data.date.getMonth()];
        },

        // isFuture compares the set date to the actual time at the moment,
        // returns true if date is in the future
        isFuture: function isFuture() {

            hasDate();
            return (data.date > Date.now());
        },

        // isToday sets up a function that pulls the numerical year, month and day
        // from a Date object, then compares the set date to today's date,
        // returns true if set date has the same year, month and day
        isToday: function isToday() {

            hasDate();
            var today = new Date();

            function makeString(startValue) {

                return '' + startValue.getFullYear() + startValue.getMonth() + startValue.getDate();
            }
            return (makeString(data.date) === makeString(today));
        }
    };
})();
