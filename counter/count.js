let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("increment-btn");
let dcount = document.getElementById("decrement-btn")
let countTen = document.getElementById("batch-ten");
let dcountTen = document.getElementById("substract-ten");
let sumEl = document.getElementById("sum-el")

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  sumAll()
}
function decrement(){
  count -= 1;
  dcount.textContent = count;
  sumAll()

}
function increment_ten() {
  count += 10;
  countTen.textContent = count;
  sumAll()

}
function decrement_ten(){
  count -= 10;
  dcountTen.textContent = count;
  sumAll()

}
function sumAll(){
  let sum = count;
  sumEl.textContent = sum;
}


function save() {
  let countStr = "(" + count + ")";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  dcount.textContent = 0;
  countTen.textContent = 0;
  dcountTen.textContent =0;
  count = 0;
}
