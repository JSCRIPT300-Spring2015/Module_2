var myDate = (function iife() {    
    var theDate;
    // explicit object enhancedDate   
    var enhancedDate = {    

        checkDate: function checkDate(userDate) {
            if (theDate instanceof Date) {
                return true; 
            } else {
                return true;    
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
            //TODO:  from the date set with setDate, calculate the
            //name of the day
            this.checkDate();
        },

        getMonthName:  function getMonthName(userDate) {
        	//TODO:  from the date set with setDate, calculate the 
        	//name of the month
        },

        isFuture: function isFuture(userDate) {
        	//TODO:  from the date set with setDAte, determine if 
        	//that date is in the future
        },

        isToday: function isToday(userDate) {
        	//TODO:  from the date set with setDate, determine if
        	//that date is today
        }

    };    

    return enhancedDate; 
    })();

myDate.getDate();