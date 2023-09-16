import React from 'react';
import { useState } from 'react';
// import './slideNavbarStyle.css'; // Make sure to import your CSS file
// import 'https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap';


function LoginForm({ loginHandler }) {


  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const body = { username, password, email }

  // const [rBody, setrBody] = ({
  //   username : ""
  //   password : ""
  //   email : ""
  // })

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");


  const showAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 3000);
  };

  const addProductToUserProducts = (product) => {
    setUserProducts([...userProducts, product]);

  };

  const handleRegister = async (event) => {
    event.preventDefault()

    const body = {
      "username": event.target.username.value,
      "password": event.target.password.value,
      "email": event.target.email.value
    }

    const response = await fetch(process.env.NEXT_PUBLIC_URL + "account/signup/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      // Registratiotn successful, handle accordingly (e.g., show a success message)
      showAlert("Registratiotn successful!", "success");
    } else {
      // Registration failed, handle error (e.g., show an error message)
      showAlert("Registratiotn failed!");
    }
  };


  return (
    <div className='body_login'>
      {alertMessage && (
        <div className={`alert ${alertType === 'success' ? 'alert-success' : ''}`}>
          {alertMessage}
        </div>
      )}
      <div className="main_login">
        <input className='login_input' type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleRegister}>
            <label className='login_label' htmlFor="chk" aria-hidden="true">Sign up</label>
            <input className='login_input' type="text" name="username" placeholder="User name" required />
            <input className='login_input' type="email" name="email" placeholder="Email" required />
            <input className='login_input' type="password" name="password" placeholder="Password" required />
            <button className='login_buttom'>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={loginHandler}>
            <label className='login_label' htmlFor="chk" aria-hidden="true">Login</label>
            <input className='login_input' type="text" name="userName" placeholder="User Name" required />
            <input className='login_input' type="password" name="password" placeholder="Password" required />
            <button className='login_buttom'>Login</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default LoginForm;
