const form = document.querySelector("#rsvp-form")
const submitButton = document.querySelector("#rsvp-submit")
const macroURL = 'https://script.google.com/macros/s/AKfycbxIjQ-tpbNqa76wzcCl446LaYqFWZ-UqApKdHn2J1uSe-m5XFGTQAUYTMwtNLP8nYPvOw/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(macroURL, { method: 'POST', body: requestBody})
    .then(response => {
    alert('Thank you!', response)
    submitButton.disabled = false
  })
    .catch(error => {
    alert('Error...', error.message)
    submitButton.disabled = false
  })
})