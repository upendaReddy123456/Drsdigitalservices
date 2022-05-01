/*faq*/ 
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
/*pre-loader*/
/*scroll to top*/
const colorMax = 192;
const scrollBreakpoint = window.innerHeight * 0.9;

document.addEventListener('DOMContentLoaded', () => {
  randomizeBackgrounds();
  setupScrollListener();
  setupScrollEvent();  
});
function setupScrollEvent() {
  const scrollButton = document.querySelector('.scroll-top');
  scrollButton.addEventListener('click', (e) => {
    smoothVerticalScrolling(scrollButton.parentElement, 250, "top");
  });
}
function setupScrollListener() {  
   window.addEventListener('scroll', (e) => {
     const scrollButton = document.querySelector('.scroll-top');
     const scrollOffset = window.scrollY;
    
     if (scrollOffset >= scrollBreakpoint) {
       scrollButton.classList.add('visible');
     } else if (scrollOffset <= 0) {
       scrollButton.classList.remove('visible');
     }    
  });
}

function randomizeBackgrounds() {
  const contentContainers = document.querySelectorAll('.content-container');
  [].forEach.call(contentContainers, container => {
    container.style.background = `rgb(${randVal(colorMax)},${randVal(colorMax)},${randVal(colorMax)})`;
  });
}
function randVal(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function smoothVerticalScrolling(e, time, where) {
  const eTop = e.getBoundingClientRect().top;
  const eAmt = eTop / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where);
    curTime += time / 100;
  }
}
function SVS_B(eAmt, where) {
  if(where == "center" || where == "") {
    window.scrollBy(0, eAmt / 2); 
  }
  if (where == "top") {
    window.scrollBy(0, eAmt);
  }    
}