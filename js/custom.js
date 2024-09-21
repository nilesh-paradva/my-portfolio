const name = document.getElementById("name");
const mNumber = document.getElementById("p-number");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const massage = document.getElementById("massage");
const nameError = document.getElementById("error-name");
const numberError = document.getElementById("error-number");
const emailError = document.getElementById("error-email");
const errorSubject = document.getElementById("error-subject");

const celebrateBtn = document.getElementById('celebrateBtn');

celebrateBtn.addEventListener('click', () => {
    // trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // button animation
    celebrateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        celebrateBtn.style.transform = 'scale(1)';
    }, 100);
});

$(window).on('load', function () {
    $('.loader-wrepper').delay('1200').fadeOut('fast')
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $(".top-btn").fadeIn();
    }
    else {
        $(".top-btn").fadeOut();
    }
});

$('.js-tilt').tilt({
    reset : true,
    scale: 0.8
})

$('.linkdin-big').tilt({
    reset : true,
    scale: 1.3
})

//submit form
const submitForm = () =>{
    event.preventDefault;
    const obj = {
        Name : name.value,
        Mnumber: mNumber.value,
        Email : email.value,
        Subject : subject.value,
        Massage : massage.value,
    }
    // Validate name
    nameError.innerHTML = (!/^[A-Za-z ]{2,}$/.test(name.value) || name.value === "")? "Enter your correct name": " ";
    nameError.style.color = (!/^[A-Za-z ]{2,}$/.test(name.value) || name.value === "")? "red": "white";
    // Validate phone number
    numberError.innerHTML = (!/^[0-9]{0,10}$/.test(mNumber.value) || mNumber.value === "")? "Enter your correct Number": " ";
    numberError.style.color = (!/^[0-9]{0,10}$/.test(mNumber.value) || mNumber.value === "")? "red": "white";
    // Validate email
    emailError.innerHTML = (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(email.value) || email.value === "")? "Enter your correct Email": " ";
    emailError.style.color = (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(email.value) || email.value === "")? "red": "white";
    // Validate subject
    errorSubject.innerHTML = (!/^[A-Za-z ]{2,}$/.test(subject.value) || subject.value === "")? "Enter your correct subject": " ";
    errorSubject.style.color = (!/^[A-Za-z ]{2,}$/.test(subject.value) || subject.value === "")? "red": "white"; 

    name.value = mNumber.value = email.value = subject.value = massage.value = '';
}

//keyboard event
const  nameValidate = () =>{ //name validation
    if (name.value < 2) {
        nameError.innerHTML = "Enter your corect name"; nameError.style.color = "red";
    } else {
        (/^[A-Za-z ]{2,}$/.test(name.value)) ? nameError.innerHTML = "valid name" : nameError.innerHTML = "invalid name";
        nameError.style.color = /^[A-Za-z ]{2,}$/.test(name.value) ? "green" : "red";
    }
}
const mobileError = () => { //mobile number validation
    if (mNumber.value < 2) {
        numberError.innerHTML = "Enter your corect Number"; numberError.style.color = "red";
    } else {
        (/^[0-9]{10}$/.test(mNumber.value)) ? numberError.innerHTML = "valid name" : numberError.innerHTML = "invalid name";
        numberError.style.color = /^[0-9]{10}$/.test(mNumber.value) ? "green" : "red";
    }
}
const emailValidate = () => { //mail validation 
    if (email.value < 1) {
        emailError.innerHTML = "Enter your corect Email"; emailError.style.color = "red";
    } else {
        (/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(email.value)) ? emailError.innerHTML = "valid Email" : emailError.innerHTML = "invalid Email";
        emailError.style.color = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(email.value) ? "green" : "red";
    }
}
const subjectValidate = () => { //subject validation
    if (subject.value < 2) {
        errorSubject.innerHTML = "Enter your corect name"; errorSubject.style.color = "red";
    } else {
        (/^[A-Za-z. ]{2,}$/.test(subject.value)) ? errorSubject.innerHTML = "valid name" : errorSubject.innerHTML = "invalid name";
        errorSubject.style.color = /^[A-Za-z. ]{2,}$/.test(subject.value) ? "green" : "red";
    }
}