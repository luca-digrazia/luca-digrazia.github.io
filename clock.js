function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

       
        if(hou > 24){
          hou = hou - 24;
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "hour", "minutes"];
        var values = [week[dname], months[mo], dnum.pad(2), hou.pad(2), min.pad(2)];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  
    updateClock();
   // window.setInterval("updateClock()", 1);
  
 
      setInterval(showTime, 1000);
      function showTime() {
          let time = new Date();
          let hour = time.getHours();
          let min = time.getMinutes();
          let sec = time.getSeconds();
          am_pm = "AM";

          if (hour > 12) {
              hour -= 12;
              am_pm = "PM";
          }
          if (hour == 0) {
              hr = 12;
              am_pm = "AM";
          }

          hour = hour < 10 ? "0" + hour : hour;
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;

          let currentTime = hour + ":" 
              + min + ":" + sec + am_pm;

         // document.getElementById("clock")
           //   .innerHTML = currentTime;
      }

      showTime();