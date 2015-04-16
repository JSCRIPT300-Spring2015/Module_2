var enhancedDate = (function (dateOne, dateTwo) {
    var publicAPI = {};
    
    function getDate(test) {
        console.log(test);
    }
    
    function setDate(test2) {
        console.log(test2);
    }
    function isToday(test4) {
        console.log(test4);
    }
    
    publicAPI = {
    // Access the prive methods above
        getDate: getDate,
        setDate: setDate
    };
    
    
    return publicAPI;
})();