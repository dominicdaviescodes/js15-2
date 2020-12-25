var end = new Date('december 25, 2020 13:07:0').getTime();

function timer() {
  var start = new Date().getTime();
  var difference = end - start;

  var hrs = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  var mins = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
  var secs = Math.floor((difference % (60 * 1000)) / 1000);
  document.getElementById('counter').innerHTML = hrs + ':' + mins + ':' + secs;
  if(difference<0){
    document.getElementById('counter').innerHTML = '';
    document.getElementById('counter').style.display = 'none';
    document.getElementById('badge').style.display = 'block';
    document.getElementById('offerBtn').style.pointerEvents = 'none';
  }
}

setInterval(timer, 1000);
setTimeout(timer, 0);
