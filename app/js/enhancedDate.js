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
            console.log("In set date - date = ", theDate);      
        }, 

        getDate: function getDate(userDate) {            
            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }          
        },

        getDayName: function getDayName(userDate) {
            
            var dayName;

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }
            dayName = Date.prototype.getDayName(theDate);
            return dayName;
        },

        getMonthName:  function getMonthName(userDate) {
        	
            var monthName;

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }

            monthName = Date.prototype.getMonthName(theDate);
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