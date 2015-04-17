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
    
    //checks if d is an instansof Date and if not then set a date when
    //other methods are invoked before setDate() method sets the date.
    var checkAndSetDate = function () {
        if (!(d instanceof Date)) {
            d = new Date();
        }
    };
        
            
    //public
    return {
        
        setDate: function(arg = new Date()) {
            var passedDateObj = new Date(arg);

            //change input date into millisecond after epoch
            passedInMillisecond = passedDateObj.getTime();
        
            if (isNaN(passedInMillisecond)) {        
                //arg is invalid input type if passedInMillisecond is NaN
                return alert("Invalid input date type");
            } else {        
                d = passedDateObj;               
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


//test code: uncomment and run to see what the code does

// when no date arg is passed to setDate method
//enhancedDate.setDate()
//enhancedDate.getDate(true)  //--> output: time the code is excuted

// when a millisecond after epoch is passed to code
//enhancedDate.setDate(3425787899498)
//enhancedDate.getDate(true)  //--> output: Date {Sat Jul 23 2078 00:44:59 GMT-0700 (Pacific Standard Time)}

// when a date object is passed as arg
//enhancedDate.setDate(new Date())
//enhancedDate.getDate()  //--> output: milliseconds after epoch of now

//when a garbage arg is passed to setDate
//enhancedDate.setDate("some string")
//enhancedDate.getDate()  //--> output: alert--> "Invalid input date type

//enhancedDate.isToday()   //-->output: true

//enhancedDate.setDate(0)
//enhancedDate.isToday()   //-->output: false



