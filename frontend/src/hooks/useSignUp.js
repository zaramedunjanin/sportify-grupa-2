import { useState } from "react";
import { signup } from "../services/UserService"


const useSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let isDisabled = false;

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setFirstNameError("");
  setLastNameError("");
  setCityError("");
  setPhoneNumberError("");
  setUserNameError("");
  setEmailError("");
  setPasswordError("");

  let isFormValid = true;

  if (firstName.trim() === "") {
    setFirstNameError("First Name is required");
    isFormValid = false;
  }

  if (lastName.trim() === "") {
    setLastNameError("Last Name is required");
    isFormValid = false;
  }

  if (city.trim() === "") {
    setCityError("City is required");
    isFormValid = false;
  }

  if (phoneNumber.trim() === "") {
    setPhoneNumberError("Phone Number is required");
    isFormValid = false;
  } else if (!isValidPhoneNumber(phoneNumber)) {
    setPhoneNumberError("Invalid phone number format");
    isFormValid = false;
  }

  if (username.trim() === "") {
    setUserNameError("Username is required");
    isFormValid = false;
  }

  if (email.trim() === "") {
    setEmailError("E-mail is required");
    isFormValid = false;
  } else if (!isValidEmail(email)) {
    setEmailError("Invalid email format");
    isFormValid = false;
  }

  if (password.trim() === "") {
    setPasswordError("Password is required");
    isFormValid = false;
  } else if (password.length < 6) {
    setPasswordError("Password should be at least 6 characters long");
    isFormValid = false;
  }

  if (isFormValid) {
    try {
      const userData = {
        first_name: firstName,
        last_name: lastName,
        city: city,
        phone_number: phoneNumber,
        username: username,
        password: password,
        email: email
      };

      const response = await signup(userData);
      console.log("Signup successful", response);
      window.location.href = "/login";
    } catch (error) {
      console.error("Signup error:", error);
    }
  }
};


  return {
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
    emailError,
  };
};

export default useSignUp;
