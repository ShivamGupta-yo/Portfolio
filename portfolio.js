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

    const msg=document.getElementById("msg");


    // google sheets
    
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzIFtSgeUyUbRgUijJnupV2xYahtPsxOZVS0CDdykNz83dw0TOeSNNnRRhzOATZLMW5/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML=" Message submitted successfully!!";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

  document.addEventListener("header-text", function() {
    const typingText = document.getElementById("autotype");
    const textLength = typingText.textContent.length;
    const animationDuration = 4 * textLength / 30; // Adjust the animation duration based on text length

    typingText.style.animationDuration = `${animationDuration}s`;
});
