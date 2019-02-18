const bead = document.getElementsByClassName('bead');
const megaBead = document.getElementsByClassName('megabead');
const units = document.getElementById("7");
const tens = document.getElementById("6");
const hundreds = document.getElementById("5");
const thousands = document.getElementById("4");
const tenThousands = document.getElementById("3");
const lakh = document.getElementById("2");
const tenLakh = document.getElementById("1");
let totalSum = 0;
function toggle(event) {
  let selectedBead = event.target;
  let base = Math.pow(10, parseInt(selectedBead.parentElement.id));
  if(selectedBead.classList.contains("megabead")) {
    if(selectedBead.classList.toggle('on')) {
      totalSum += base*5;
    }
    else {
      totalSum -= base*5;
    }
  }
  else if(selectedBead.classList.contains("bead")){
    if(selectedBead.classList.toggle('on'))
    {
      totalSum += base;
    }
    else {
      totalSum -= base;
    }
  }
  updateResult();
}

function operation() {
  
}

function updateResult() {
  console.log(totalSum);
  document.getElementById("result").innerHTML = totalSum;
}
updateResult();