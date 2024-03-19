const form = document.querySelector('form')

const handleSubmit  = (event) => {
  event.preventDefault()

  alert('No information has been submitted, this is a project demo, not an actual production. For develpment/prod it should\'ve been connected to backend.')
  event.target.reset()
}

form.addEventListener('submit', handleSubmit)