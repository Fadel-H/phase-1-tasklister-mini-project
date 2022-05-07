document.addEventListener("DOMContentLoaded", () => {
  // your code here

  
  const task = document.getElementById("tasks")
  document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault()
    const inputValue = document.getElementById("new-task-description").value
    
    
    toDoList(inputValue)
  })
})

   
function toDoList(description){
  let p = document.createElement('p')
  let button = document.createElement("button")
  button.textContent = ' x'
  p.textContent = ` ${description} `
  p.appendChild(button)
  tasks.appendChild(p)

  button.addEventListener("click", e => toDoListDelete(e))
}

function toDoListDelete(event){
  event.target.parentNode.remove()
}
