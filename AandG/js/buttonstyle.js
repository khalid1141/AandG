document.addEventListener("submit", (event) => {
  event.preventDefault();
});

var animateButton = function (e) {
  e.preventDefault();
  
  let validationStatus = true;
  let alerted = false;

  const formData = new FormData(document.dataform);
  
  const uname = formData.get("uname");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  
  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    if(!alerted)
      alert("You have entered an invalid email address!");
    alerted = true
    return false;
  }

  if (!validateEmail(email)) {
    validationStatus = false;
    console.log("Email Validation fails!");
  }

  if (phone.length <= 7 || phone.length >= 15) {
    if(!alerted)
      alert("Invalid Mobile Number");
    alerted = true;
    validationStatus = false;
    console.log("phone Validation fails!");
  }

  if (uname === "" || uname.length <= 2 || /\d/.test(uname)) {
    validationStatus = false;
    if(!alerted)
      alert("Your Name isn't valid");
    alerted = true;
    console.log("name Validation fails!");
  }

  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 6000);

  if (validationStatus) {
    console.log("Success");
    document.querySelector('.button').classList.remove('butforbg1')
    document.querySelector('.button').classList.add('butforbg2')
    e.target.classList.remove("animate");
    e.target.classList.remove("error");
    e.target.classList.add("animate");
    e.target.classList.add("success");
    console.log("Submitting... form...");

    postData({uname , email , phone , message});

    return true;
  } else {
    e.target.classList.remove("animate");
    e.target.classList.remove("success");
    e.target.classList.add("animate");
    e.target.classList.add("error");
    window.location.href = "#contact";
    return false;
  }

  //reset animation
};

function postData(data) {
  document.dataform.reset();
  fetch("https://ag-products.herokuapp.com/api/formRespose/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        if(data.status){
          console.log('Form Submitted');
          setTimeout(() => { window.location.href = "#" } , 4000)
        }
    })
    .catch((err) => {
      console.log('Error Message : ' + err);
    });
}

var classname = document.getElementsByClassName("button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener("click", animateButton, false);
}
