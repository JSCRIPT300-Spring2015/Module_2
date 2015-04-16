/* 
 * Module 2
 * Author: Samson Negassi
 */

var enhancedDate = (function() {

    //private 
    var d = {};
    var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                'Friday', 'Saturday'];
    var months = ["January" , "February" , "March" , "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"];
    
    //function to check and set a date if setDate wasn't called first
    var checkAndSetDate = function () {
        if (!(d instanceof Date)) {
            d = new Date();
        }
    };
        
            
    //public
    return {
        
        setDate: function(inputDate) {            
            var newDate = new Date(inputDate);   
            if (inputDate instanceof Date) {
                d = inputDate;
            } else if (newDate instanceof Date){
                d = newDate;                
            } else if (!(d instanceof Date)) {
                d = new Date();
            }
        },
        
        getDate: function(param) {
            checkAndSetDate();
            if (param) {
                return d;
            }
            return d.getTime();             
        },  
        
        getDayName: function() {
            checkAndSetDate();
            var dayIndex = d.getDay();
            return days[dayIndex];
        },
        
        getMonthName: function() {
            checkAndSetDate();
            var monthIndex = d.getMonth();
            return months[monthIndex];
        },
        
        isFuture: function() {
            checkAndSetDate();
            var now = new Date();
            return (now.getTime() < d.getTime());
        },
        
        isToday: function() {
            checkAndSetDate();
            var now = new Date();
            return (d.getFullYear() === now.getFullYear() && 
                    d.getMonth() === now.getMonth() &&
                    d.getDay() === now.getDay());
        }       
    };
    
})();