var enhancedDate = (function (date) {
// still maintains access to all globals
  
  var dateMethods = {};
  var myDate = date;
  var dateString = Date(year, month, day, hours, minutes, seconds, milliseconds);
  var newDate = new Date();
  var epochDate = newDate.getTime();
  
//Stores the passed-in date.  
  dateMethods.checkDate = function () {
      
//Do some type-checking to make sure you have a valid type. 
//Takes milliseconds after epoch or a date object. 
//Do some type-checking to make sure you have a valid type.
    
      if (date){
        if(myDate instanceof Date)
        {
        return true;
        
        } else if (typeof myDate === 'number' && (myDate > 0 && myDate <= epochDate))
        {
        return true;
        
        } else {
        return false;  
        } 
      }

//If no value is passed, default to now.   
      else {
        myDate = newDate;
        return true;
      }
  };


//Returns either milliseconds after epoch by default or a date object if true is passed as an argument.            
  dateMethods.getDate = function (){
    dateMethods.checkDate();
    
    if (dateMethods.checkDate === true) {
        return myDate;
    }
  };

//Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.  
  dateMethods.getDayName = function () {
    dateMethods.checkDate();
    
   if (dateMethods.checkDate === true) {
      switch (myDate.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
      }
    } 
    
    return;
    
  };
  
//Determines the full month name as a string, e.g. "January", "February", etc.  
  dateMethods.getMonthName = function () {
    dateMethods.checkDate();
    
    if (dateMethods.checkDate === true) {   
      switch (setDate.getMonth()) {
        case 0:
            day = "January";
            break;
        case 1:
            day = "February";
            break;
        case 2:
            day = "March";
            break;
        case 3:
            day = "April";
            break;
        case 4:
            day = "May";
            break;
        case 5:
            day = "June";
            break;
        case 6:
            day = "July";
            break;
        case 7:
            day = "August";
            break;
        case 8:
            day = "September";
            break;
        case 9:
            day = "October";
            break;
        case 10:
            day = "November";
            break;
        case 11:
            day = "December";
            break; 
      }
    }
    
    return;
  };
  
//Return boolean true if date is in the future (from when method is called)  
  dateMethods.isFuture = function () {
    var today = new Date();
    
    if (myDate.getTime() > epochDate) {
      return true;
    } else {
      return false;
    }
  };
  
//Return boolean true if the stored date is "today".  
  dateMethods.isToday = function () {
    var today = new Date();
    
    if (myDate.getTime() === epochDate) {
      return true;
    } else {
      return false;
    }
  };
  
  return dateMethods;	
}());



