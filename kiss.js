const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const kissBtn = document.querySelector(".kiss-btn")
const saveBtn = document.querySelector(".save-btn")

let count = 0
kissBtn.addEventListener("click", function(){
  count += 1
  countEl.textContent = count
})

saveBtn.addEventListener("click", function(){
  let prev = count + " - "
  saveEl.textContent += prev
  countEl.textContent=0
  count = 0

})