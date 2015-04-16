var foo = (function iife(dateInput) {

    var date = new Date();

    // explicit object to easily identify the API
    return {
            setDate: function setDate() {
                //stores passed-in date
                console.log(date);
            },
            // returns true if passed as argument
            getDate: function getDate() {
                console.log('getDate');
            },
            
            getDayName: function getDayName() {
            // returns full day name as a string
                console.log('getDayName');
            },

            getMonthName: function getMonthName() {
            // returns full month name as a string
                console.log('getMonthName');
            },
            isFuture: function isFuture() {
            // return boolean true if date is in the future
                console.log('isFuture');
            },
            isToday: function isToday() {
                console.log('isToday');
            }
    };
})();