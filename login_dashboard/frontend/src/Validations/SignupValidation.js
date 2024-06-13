function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.username === "") {
        error.username = "Username is required"
    } else {
        error.username = ""
    }

    if (values.email === "") {
        error.email = "Email is required"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email pattern"
    }
    else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Passwored is required"
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password should contain only alphanumeric characters,one uppercase letter,numbers,one lowercase letter,and length at least 8 characters"
    }
    else {
        error.password = "";
    }
    if (values.confirmPassword === "") {
        error.confirmPassword = "Confirm password required"
    }
    else if (values.password !== values.confirmPassword) {
        error.confirmPassword = "Passwords do not match"
    }
    else {
        error.confirmPassword = "";
    }
    return error;
}

export default Validation;