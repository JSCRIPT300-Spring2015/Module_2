var enhancedDate = (function() { 
    'use strict';
    var myDate = null;
    var dateSet = false;     

    return {    
        getDate: function(returnObj) {  
            if (!dateSet)  {
                this.setDate();
            }
            if (returnObj) {
                return myDate;
            } else {
                return myDate.getTime();
            }
        },
        setDate: function(newDate) {
            if (isNaN(Date.parse(newDate))) {
                myDate = newDate();           
            }
            else {
                myDate = new Date(newDate);
                dateSet = true;                                     
            }
            myDate.setHours(0, 0, 0, 0);    
        },
        getDayName: function() {            
            var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            if (!dateSet) {
                this.setDate();
            }
            var dayName =  weekday[myDate.getDay()];           
            return dayName;
        },
        getMonthName: function() {          
            var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            if (!dateSet) {
                this.setDate();
            }
            var monthName =  month[myDate.getMonth()];             
            return monthName;
        },
        isFuture: function() {
            if (!dateSet) {
                this.setDate();
            }
            var d = new Date();
            d.setHours(0, 0, 0, 0);
            return (myDate.valueOf() > d.valueOf());             
        },
        isToday: function()  {
            if (!dateSet) {
                this.setDate();
            }
            var d = new Date();
            d.setHours(0, 0, 0, 0);
            return (d.valueOf() === myDate.valueOf());                  
        }       
    };
}) ();

var message = '';

enhancedDate.setDate(new Date());

message += enhancedDate.getDate(true); 
message += '\n' + enhancedDate.getDate(false);
message += '\nIs ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName();
message += '\nIs date today: ' + enhancedDate.isToday() + '. isFuture: ' + enhancedDate.isFuture(); 

console.log(message);

