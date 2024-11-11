const form = document.querySelector("#rsvp-form")
const submitButton = document.querySelector("#rsvp-submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxzWWWTkBxLs-vw99MFN-X7p-03c9oQ_pOVMh4R7-TZ3t20FLT9-gtOEG7V9IO7y9sMYA/exec'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
        .then(response => {
        alert('Thank you!', response)
        submitButton.disabled = false
    })
        .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
    })
})