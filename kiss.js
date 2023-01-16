const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const kissBtn = document.querySelector(".kiss-btn")
const saveBtn = document.querySelector(".save-btn")

let count = 0
kissBtn.addEventListener("click", function(){
  count += 1
  countEl.textContent = count
})

let prevArray = []


saveBtn.addEventListener("click", function(){
  let prev = count + " - "
  prevArray.push(prev)
  saveEl.textContent += prev
  countEl.textContent=0
  count = 0
  

  localStorage.setItem("prevArray", JSON.stringify(prevArray))
})

window.onload = function() {
  
  if (localStorage.getItem("prevArray")) {
    let prevArray = JSON.parse(localStorage.getItem("prevArray"));
      prevArray.forEach(function(prev){
        saveEl.textContent += prev;

      })
      
  }
}


