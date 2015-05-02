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
            if (newDate instanceof Date || typeof newDate === 'number') {
                myDate = new Date(newDate);
                dateSet = true;           
            }
            else {
                myDate = new Date();                                                   
            }              
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
            return (myDate.getTime() > Date.now());             
        },
        isToday: function()  {
            if (!dateSet) {
                this.setDate();
            }
            var d = new Date();
            var month = d.getMonth();
            var date = d.getDate();
            var year = d.getFullYear();
            if (myDate.getMonth() === month && myDate.getDate() === date && myDate.getFullYear() === year) {
                return true;
            } else {
                return false;
            }        
        }       
    };
}) ();

var message = '';

enhancedDate.setDate(new Date(2016,1,1));

message += enhancedDate.getDate(true); 
message += '\n' + enhancedDate.getDate(false);
message += '\nIs ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName();
message += '\nIs date today: ' + enhancedDate.isToday() + '. isFuture: ' + enhancedDate.isFuture(); 

console.log(message);

