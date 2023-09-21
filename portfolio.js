document.getElementById("home").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = "index.html"; // Navigate to the home page
});

let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");}

    let sidemenu = document.getElementById('sidemenu');
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }

   


    // google sheets
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzIFtSgeUyUbRgUijJnupV2xYahtPsxOZVS0CDdykNz83dw0TOeSNNnRRhzOATZLMW5/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');
    const submitButton = document.getElementById('submitButton');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        // Show "Submitting..." on the submit button and disable it
        submitButton.innerHTML = 'Please Wait..';
        submitButton.disabled = true;
        submitButton.classList.add('submitting-button'); // Add the blue styling class
    
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    msg.innerHTML = 'Message sent successfully!!';
                    setTimeout(function(){
                            msg.innerHTML=""
                    },1000);
                    form.reset();
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                msg.innerHTML = 'An error occurred while submitting.';
            })
            .finally(() => {
                // Revert the button text and enable it after the response
                submitButton.innerHTML = 'Submit';
                submitButton.disabled = false;
                submitButton.classList.remove('submitting-button'); // Remove the violet styling class
            });
    });
    

  
  

  document.addEventListener("header-text", function() {
    const typingText = document.getElementById("autotype");
    const textLength = typingText.textContent.length;
    const animationDuration = 4 * textLength / 30; // Adjust the animation duration based on text length

    typingText.style.animationDuration = `${animationDuration}s`;
});




var typed = new Typed(".auto-type",{
    strings: [" a Web Developer."," a Programmer."," a Student."," an Engineer."],
    typeSpeed: 32,
    backSpeed: 32,
    loop: true
});