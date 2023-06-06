function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var timeString =
      addZeroPadding(hours) +
      ':' +
      addZeroPadding(minutes) +
      ':' +
      addZeroPadding(seconds);
  
    document.getElementById('clock').innerHTML = timeString;
  
    setTimeout(updateTime, 1000);
  }
  
  function addZeroPadding(value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  }
  
  updateTime();
  