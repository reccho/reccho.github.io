document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#rsvp-form")
  const submitButton = document.querySelector("#rsvp-submit")
  const macroURL = form.dataset.macro;
  console.log(macroURL);

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
});