import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPswrd, setShowPswrd] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const LoginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/login', {
        ...loginData,
      });
      console.log(response);
      navigate('/movies');
      // localStorage.setItem('login', 'true');
      // if (localStorage.getItem('login')) {
      //   navigate('/movies'); // Redirecting to movies catalog after successful login
      // }
    } catch (error) {
      console.log(error);

      if (error.message === 'Network Error') {
        toast.error('server is low');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    }
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleShowPswrd = () => {
    setShowPswrd(!showPswrd);
  };

  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <ToastContainer />
      <form
        onSubmit={LoginHandler}
        className="bg-white flex flex-col gap-3 w-[35%] p-4 shadow-2xl"
      >
        <h1 className="text-black font-bold text-3xl text-center">LOGIN</h1>
        <label htmlFor="email">Email </label>
        <input
          name="email"
          type="email"
          className="border p-2 rounded outline-none"
          placeholder="Enter Email"
          onChange={inputHandler}
        />

        <label htmlFor="password"> Password</label>
        <div className="flex border rounded items-center">
          <input
            type={showPswrd ? 'text' : 'password'}
            name="password"
            placeholder="Enter Password"
            className="p-2 outline-none w-[90%]"
            onChange={inputHandler}
          />
          {showPswrd ? (
            <VisibilityIcon onClick={handleShowPswrd} />
          ) : (
            <VisibilityOffIcon onClick={handleShowPswrd} />
          )}
        </div>

        <button className="bg-black text-white p-2 rounded text-lg">
          Login
        </button>

        <p className="text-center">
          Create account{' '}
          <Link to="/signup" className="underline">
            Signup
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
