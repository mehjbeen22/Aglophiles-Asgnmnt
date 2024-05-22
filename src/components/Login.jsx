import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPswrd, setShowPswrd] = useState(false);

  const handleShowPswrd = () => {
    setShowPswrd(!showPswrd);
  };
  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <form
        action=""
        className="bg-white flex flex-col gap-3 w-[35%] p-4  shadow-2xl"
      >
        <h1 className="text-blue-600 font-bold  text-3xl text-center">LOGIN</h1>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          className="border p-2 rounded outline-none"
          placeholder="Enter Email"
        />

        <label htmlFor="password"> Password</label>
        <div className="flex border rounded items-center ">
          <input
            type={showPswrd ? 'text' : 'password'}
            name=""
            id=""
            placeholder="Enter Password"
            className=" p-2  outline-none w-[90%]"
          />
          {showPswrd ? (
            <VisibilityIcon onClick={handleShowPswrd} />
          ) : (
            <VisibilityOffIcon onClick={handleShowPswrd} />
          )}
        </div>

        <button className="bg-blue-600 text-white  p-2  rounded text-lg">
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
