type data = {
    username: string;
    email: string;
    message: string;
}

const validateForm = ({
  username,
  email,
  message,
}:data) => {
    const newErrors: data = {
    username: "",
    email: "",
    message: "",
  };

  if (username.length < 3 || /^(?=.*[A-Za-z])[A-Za-z]+( [A-Za-z]+)*$/.test(username) === false) {
    newErrors.username = "Invalid name";
  }
  if (email.length < 12) {
    newErrors.email = "Invalid email";
  }
  if (message.length < 10) {
    newErrors.message = "Message too short";
  }

  return newErrors;
};

export default validateForm