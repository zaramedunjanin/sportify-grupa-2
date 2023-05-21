import {useState} from "react";

const useSignUp = () =>{
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState('');
    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [username, setUsername] = useState("");
    const [usernameError, setUserNameError] = useState('');
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState('');
    let isDisabled = false;

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(phoneNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFirstNameError("")
        setLastNameError("")
        setCityError("")
        setPhoneNumberError("")
        setUserNameError("")
        setEmailError("")
        setPasswordError("")


        if (firstName.trim() === "") {
            setFirstNameError("First Name is required");
            isDisabled = true;
        }

        if (lastName.trim() === "") {
            setLastNameError("Last Name is required");
            isDisabled = true;

        }

        if (city.trim() === "") {
            setCityError("City is required");
            isDisabled = true;

        }

        if (phoneNumber.trim() === "") {
            setPhoneNumberError("Phone Number is required");
            isDisabled = true;
        } else if (!isValidPhoneNumber(phoneNumber)) {
            setPhoneNumberError("Invalid phone number format");
            isDisabled = true;
        }

        if (username.trim() === "") {
            setUserNameError("Username is required");
            isDisabled = true;

        }

        if (email.trim() === "") {
            setEmailError("E-mail is required");
            isDisabled = true;

        } else if (!isValidEmail(email)) {
            setEmailError("Invalid email format");
            isDisabled = true;

        }

        if (password.trim() === "") {
            setPasswordError("Password is required");
            isDisabled=true
        } else if (password.length < 6) {
            setPasswordError("Password should be at least 6 characters long");
            isDisabled=true
        }


    };

    return{
        handleSubmit,
        isDisabled,

        firstName,
        setFirstName,
        firstNameError,

        lastName,
        setLastName,
        lastNameError,

        city,
        setCity,
        cityError,

        phoneNumber,
        setPhoneNumber,
        phoneNumberError,

        username,
        setUsername,
        usernameError,

        password,
        setPassword,
        passwordError,

        email,
        setEmail,
        emailError
    };
}

export default useSignUp;