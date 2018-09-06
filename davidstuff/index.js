document.addEventListener('DOMContentLoaded', (event) => {
    let firstNameInput = document.querySelector('#firstName')
    let secondNameInput = document.querySelector('#secondName')
    let lastNameInput = document.querySelector('#lastName')
    let dateInput = document.querySelector('#weddingDate')
    let locationInput = document.querySelector('#weddingLocation')
    const aCateredAffairStyle = document.getElementById('catered-affair')
    const iDoiDoStyle = document.getElementById('ido-ido')
    const sweeneyToddStyle = document.getElementById('sweeney-todd')
    
    aCateredAffairStyle.addEventListener('click', (event) => {
      document.getElementById("invitation-display").className = "style-cateredaffair"
    })
    
    iDoiDoStyle.addEventListener('click', (event) => {
      document.getElementById("invitation-display").className = "style-idoido"
    })
    
    sweeneyToddStyle.addEventListener('click', (event) => {
      document.getElementById("invitation-display").className = "style-sweeneytodd"
    })
    
    firstNameInput.addEventListener('keyup', (event) => {
      let value = firstNameInput.value
      let invitationFirstNameText = document.querySelector("#invitationFirstName")
      invitationFirstNameText.innerHTML = value
      let invitationFirstInitial = document.querySelector("#firstInitial")
      let firstLetter = value.slice(0,1)
      invitationFirstInitial.innerHTML = firstLetter.toUpperCase()
      document.querySelector("#initial-ampersand").innerHTML = "&nbsp; &amp; &nbsp;"
      document.querySelector("#name-ampersand").innerHTML = "&nbsp; &amp; &nbsp;"
      document.querySelector("#inviteText").innerHTML = "You are cordially invited to the wedding of"
    })
  
    secondNameInput.addEventListener('keyup', (event) => {
      let value = secondNameInput.value
      let invitationSecondNameText = document.querySelector("#invitationSecondName")
      invitationSecondName.innerHTML = value
      let invitationSecondInitial = document.querySelector("#secondInitial")
      let secondLetter = value.slice(0,1)
      invitationSecondInitial.innerHTML = secondLetter.toUpperCase()
    })
    
    lastNameInput.addEventListener('keyup', (event) => {
      let value = lastNameInput.value
      let invitationLastNameText = document.querySelector("#invitationLastName")
      invitationLastNameText.innerHTML = value
    })
    
    dateInput.addEventListener('keyup', (event) => {
      let value = dateInput.value
      let invitationDateText = document.querySelector("#invitationDate")
      invitationDateText.innerHTML = value
    })
    
    locationInput.addEventListener('keyup', (event) => {
      let value = locationInput.value
      let invitationLocationText = document.querySelector("#invitationLocation")
      invitationLocationText.innerHTML = value
    })
    
    //for screenshot
    
    $('#goButton').click(function() {
      html2canvas($('#invitation-display'), {
        onrendered: function(canvas) {
          //myImage = canvas.toDataURL("image/png");
         // $('#image').append(canvas);
           var myImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
           window.location.href=myImage;
          
           //var img = canvas.toDataURL()
           //window.open(myImage);
        }
      });
    });
    
})