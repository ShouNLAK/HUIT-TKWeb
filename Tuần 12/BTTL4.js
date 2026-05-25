function Validate(event) {
    event.preventDefault();
    
    let isValid = true;

    const name = document.getElementById("txtName").value;
    const nameRegex = /^[\p{L}0-9\s_]{10,}$/u; 
    if (!nameRegex.test(name)) {
        document.getElementById("errName").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errName").style.display = "none";
    }

    const email = document.getElementById("txtEmail").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errEmail").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errEmail").style.display = "none";
    }

    const pass = document.getElementById("txtPass").value;
    if (pass.length < 10) {
        document.getElementById("errPass").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errPass").style.display = "none";
    }

    const repass = document.getElementById("txtRePass").value;
    if (repass !== pass || repass === "") {
        document.getElementById("errRePass").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errRePass").style.display = "none";
    }

    const phone = document.getElementById("txtPhone").value;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("errPhone").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errPhone").style.display = "none";
    }

    const country = document.getElementById("txtCountry").value;
    const countryRegex = /^[a-zA-Z]{2}$/;
    if (!countryRegex.test(country)) {
        document.getElementById("errCountry").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errCountry").style.display = "none";
    }
    if (isValid) {
        alert("Chúc mừng! Đăng ký tài khoản thành công.");
        // document.getElementById("registerForm").reset();
    }
}