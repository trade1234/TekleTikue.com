    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message')
  
        
    const sendEmail = (e) =>{
        e.preventDefault()
  
      //serviceID - temeplet - #form - publickey
  
        emailjs.sendForm("service_j0wlkdg","template_vma120t","#contact-form","i5tuL7Pl_hNxu6Wxd")
        .then(() =>{
           // Show sent message 
            contactMessage.textContent = 'Message sent successfully ✅'
  
           // Remove message after five seconds
            setTimeout(()=>{
                contactMessage.textContent = ''
            }, 5000)
  
            //Clear input Fields
            contactForm.reset()
  
        }, () =>{
            // Show error message
            contactMessage.textContent= 'Message not sent (service error) ❌'
          })
    }
    contactForm.addEventListener('submit', sendEmail)