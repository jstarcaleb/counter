const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const kissBtn = document.querySelector(".kiss-btn")
const saveBtn = document.querySelector(".save-btn")
const deleteBtn = document.querySelector(".delete-btn")
const deleteRecentBtn = document.querySelector(".delete-recent-btn")

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


deleteBtn.addEventListener("click", function(){
  prevArray = []
  saveEl.textContent = ""
  localStorage.removeItem("prevArray")
  alert("Previous Entries Deleted!")
})

deleteRecentBtn.addEventListener("click", function(){
  prevArray.pop()
  saveEl.textContent = prevArray.join(" ")
  localStorage.setItem("prevArray", JSON.stringify(prevArray));
  alert("Recent Entry Deleted!")
})