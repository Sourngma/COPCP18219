{/* <script>  */}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyUCyir_D2Y8fFHEjuwcNwB_DaQ-1rlXpwrq8RNFbrX-oBdc0iWAWqH7M1kULZzVJVN/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")  

  const scriptURL2 = 'https://script.google.com/macros/s/AKfycbwmLAryRrleAmZuIKFbJwiV_zRjzhDr3aNOvCU5hI4fDLXW4ps_LD_r1qaTpGD4NMyn/exec'  
  
  const form2 = document.forms['contact-to-google-sheet']
  const msg2 = document.getElementById("msg2")  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Thank you For Subscribing My Site by 18219 Sourng"
          setTimeout(function(){
              msg.innerHTML = "This site powered by 18219 Sourng in 2024"
          }, 5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })  

  form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
      .then(response => {
          msg2.innerHTML = "Thanks for your contact details by 18219 Sourng"
          setTimeout(function(){
              msg2.innerHTML = "Contact"
          }, 5000)
          form2.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
// </script>
