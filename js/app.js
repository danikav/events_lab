document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


const form = document.querySelector('#new-item-form')
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const newListItem = document.createElement('li')
  newListItem.textContent = `Title : ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`

  const list = document.querySelector('ul');
  list.appendChild(newListItem)
  
  form.reset()

})

const delete_button = document.querySelector('#delete_button')
delete_button.addEventListener('click', () => {
  window.location.reload();
})

})

