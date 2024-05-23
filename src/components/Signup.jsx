import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
  const [showPswrd, setShowPswrd] = useState(false);
  const [showConfirmPswrd, setShowConfirmPswrd] = useState(false);
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleShowPswrd = () => {
    setShowPswrd(!showPswrd);
  };

  const handleShowConfirmPswrd = () => {
    setShowConfirmPswrd(!showConfirmPswrd);
  };

  const SignupAPIHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/signup', {
        ...signupData,
      });
      console.log(response);
      toast.success('Account Created Successfully!');
      navigate('/login'); // Redirecting to login after successful signup
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <ToastContainer />
      <form
        className="bg-white flex flex-col gap-3 w-[35%] p-4 shadow-2xl"
        onSubmit={SignupAPIHandler}
      >
        <h1 className="text-black font-bold text-3xl text-center">SIGNUP</h1>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter Email"
          className="border p-2 rounded focus:to-blue-600"
          onChange={inputHandler}
        />

        <label htmlFor="password">Password</label>
        <div className="flex border rounded items-center">
          <input
            type={showPswrd ? 'text' : 'password'}
            name="password"
            id="password"
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

        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="flex border rounded items-center">
          <input
            type={showConfirmPswrd ? 'text' : 'password'}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter Confirm Password"
            className="p-2 outline-none w-[90%]"
            onChange={inputHandler}
          />
          {showConfirmPswrd ? (
            <VisibilityIcon onClick={handleShowConfirmPswrd} />
          ) : (
            <VisibilityOffIcon onClick={handleShowConfirmPswrd} />
          )}
        </div>
        <button className="bg-black text-white p-2 rounded text-lg">
          Signup
        </button>

        <p className="text-center">
          Already have an account{' '}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
