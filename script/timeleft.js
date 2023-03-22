let targetTime = new Date("April 4, 2023");

let oneSecond = 1000;
let oneMinute = oneSecond * 60;
let oneHour = oneMinute * 60;
let oneDay = oneHour * 24;

let $daysEl = $(".time-el #days");
let $hoursEl = $(".time-el #hours");
let $minutesEl = $(".time-el #minutes");
let $secondsEl = $(".time-el #seconds");

function startCountDown() {
  updateTick();
  let timeInterval = setInterval(updateTick, oneSecond);
  
  function updateTick() {
    let timeLeft = Date.parse(targetTime) - Date.parse(new Date());
    let spanContent = `
      <div class="digit">
         <div class="next">
        <span class="top"><span class="inner">$1</span></span>
        <span class="bottom"><span class="inner">$1</span></span>
          </div>
         <div class="current">
        <span class="top"><span class="inner">$1</span></span>
        <span class="bottom"><span class="inner">$1</span></span>
          </div>
      </div>`;

    $daysEl.html(Math.floor(timeLeft / oneDay)).html((i, digit) => digit.replace(/(\d)/g, spanContent));
    $hoursEl.html(("0" + Math.floor((timeLeft % oneDay) / oneHour)).slice(-2)).html((i, digit) => digit.replace(/(\d)/g, spanContent));
    $minutesEl.html(("0" + Math.floor((timeLeft % oneHour) / oneMinute)).slice(-2)).html((i, digit) => digit.replace(/(\d)/g, spanContent));
    $secondsEl.html(("0" + Math.floor((timeLeft % oneMinute) / oneSecond)).slice(-2)).html((i, digit) => digit.replace(/(\d)/g, spanContent));
    
    // let tl = new TimelineMax()
     //  .to('.current .top', 0.5, {rotationX: -90, ease: Power0.easeNone}, 0)
     //  .fromTo('.current .bottom', 0.5, {rotationX: 90}, {rotationX: 0, ease: Power0.easeNone}, 0.5);  
    
    if (timeLeft <= 0) clearInterval(timeInterval);
  }
}


function flip() {
  let timeLeft = Date.parse(targetTime) - Date.parse(new Date());
  let tl = TweenMax.to({}, 1, {repeat: -1, onRepeat: function() { console.log(Date.parse(targetTime) - Date.parse(new Date())); }});
}

$(function() {
  startCountDown();
 // flip();
});
