function setBackground() {
    var backgrounds = getBackground();
    
      var index = getWeekNumber(new Date())[1];
    
      //console.log(index);
    
      //$("#hero").css("background-image", "url(" + backgrounds[index] + ")");
}



function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
  }

function getBackground(){
    return [
        "./img/Background/background000.jpg",
        "./img/Background/background001.jpg",
        "./img/Background/background002.jpg",
        "./img/Background/background003.jpg",
        "./img/Background/background004.jpg",
        "./img/Background/background005.jpg",
        "./img/Background/background006.jpg",
        "./img/Background/background007.jpg",
        "./img/Background/background008.jpg",
        "./img/Background/background009.jpg",
        "./img/Background/background010.jpg",
        "./img/Background/background011.jpg",
        "./img/Background/background012.jpg",
        "./img/Background/background013.jpg",
        "./img/Background/background014.jpg",
        "./img/Background/background015.jpg",
        "./img/Background/background016.jpg",
        "./img/Background/background017.jpg",
        "./img/Background/background000.jpg",
        "./img/Background/background001.jpg",
        "./img/Background/background002.jpg",
        "./img/Background/background003.jpg",
        "./img/Background/background004.jpg",
        "./img/Background/background005.jpg",
        "./img/Background/background006.jpg",
        "./img/Background/background007.jpg",
        "./img/Background/background008.jpg",
        "./img/Background/background009.jpg",
        "./img/Background/background010.jpg",
        "./img/Background/background011.jpg",
        "./img/Background/background012.jpg",
        "./img/Background/background013.jpg",
        "./img/Background/background014.jpg",
        "./img/Background/background015.jpg",
        "./img/Background/background016.jpg",
        "./img/Background/background017.jpg",
        "./img/Background/background000.jpg",
        "./img/Background/background001.jpg",
        "./img/Background/background002.jpg",
        "./img/Background/background003.jpg",
        "./img/Background/background004.jpg",
        "./img/Background/background005.jpg",
        "./img/Background/background006.jpg",
        "./img/Background/background007.jpg",
        "./img/Background/background008.jpg",
        "./img/Background/background009.jpg",
        "./img/Background/background010.jpg",
        "./img/Background/background011.jpg",
        "./img/Background/background012.jpg",
        "./img/Background/background013.jpg",
        "./img/Background/background014.jpg",
        "./img/Background/background015.jpg",
        "./img/Background/background016.jpg",
        "./img/Background/background017.jpg",
        "./img/Background/background007.jpg"
      ];
}
