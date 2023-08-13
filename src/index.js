document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const form = document.querySelector('form')
        task = document.getElementById('new-task-description').value
        setToDo(task)
        priority(task)
        form.reset()

    })
})
  
function setToDo(e){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    p.textContent = `${e} `
    btn.textContent = 'x'
    p.appendChild(btn)
    btn.addEventListener('click', handleRemove)
    document.querySelector('#tasks').appendChild(p)
}
  
  function handleRemove(e) {
    e.target.parentNode.remove()
  }

  function priority(e) {
      console.log(task)
  }