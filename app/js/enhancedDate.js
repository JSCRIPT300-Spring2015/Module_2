var myDate = (function iife() {    
    var theDate;
    // explicit object enhancedDate   
    var enhancedDate = {    

        checkDate: function checkDate(userDate) {
            if (theDate instanceof Date) {
                return true; 
            } else {
                return false;    
            }
        },

        setDate: function setDate(userDate) { 
            if (userDate instanceof Date) {
                theDate = userDate;
            } else { 
                if (typeof userDate === 'number') {
                theDate = new Date(userDate);
                } else {
                    theDate = new Date();
                }
            }           
            //console.log("In set date - date = ", theDate);      
        }, 

        getDate: function getDate(userDate) {            
            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }          
        },

        getDayName: function getDayName(userDate) {
            
            var dayName;
            var dayNumber;

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }

            dayNumber = theDate.getDay();
            //console.log('dayNumber = ', dayNumber);
            if (dayNumber === 0) {
                dayName = 'Sunday';
            } else if (dayNumber === 1) {
                dayName = 'Monday';
            } else if (dayNumber === 2) {
                dayName = 'Tuesday';
            } else if (dayNumber === 3) {
                dayName = 'Wednesday';
            } else if (dayNumber === 4) {
                dayName = 'Thursday';
            } else if (dayNumber === 5) {
                dayName = 'Friday';
            } else {
                dayName = 'Saturday';
            }
        //console.log("Day of the week is ", dayName);
        return dayName;
        },

        getMonthName:  function getMonthName(userDate) {
        	
            var monthName;
            var monthNumber
            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }

            monthNumber = theDate.getMonth();            

            if (monthNumber === 0) {
                monthName = 'January';
            } else if (monthNumber === 1) {
                monthName = 'February';
            } else if (monthNumber === 2) {
                monthName = 'March';
            } else if (monthNumber === 3) {
                monthName = 'April';
            } else if (monthNumber === 4) {
                monthName = 'May';
            } else if (monthNumber === 5) {
                 monthName = 'June';
            } else if (monthNumber === 6) {
                monthName = 'July';
            } else if (monthNumber === 7) {
                monthName = 'August';
            } else if (monthNumber === 8) {
                monthName = 'September';
            } else if (monthNumber === 9) {
                monthName = 'October';
            } else if (monthNumber === 10) {
                monthName = 'November';
            } else {
                monthName = 'December';
            }

        //console.log("Month is ", monthName);
        return monthName;

        },

        isFuture: function isFuture(userDate) {

            var todaysDate = new Date();

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }
            if (todaysDate > theDate) {
                return false;
            } else {
                return true;
            }
        },

        isToday: function isToday(userDate) {

            var todaysDate = new Date();

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }
            if (todaysDate === theDate) {
                return true;
            } else {
                return false;
            }
        }

    };    

    return enhancedDate; 
    })();

myDate.getDate();