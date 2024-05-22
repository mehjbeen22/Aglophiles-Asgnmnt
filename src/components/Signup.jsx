import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPswrd, setShowPswrd] = useState(false);
  const [showConfirmPswrd, setShowConfirmPswrd] = useState(false);

  const handleShowPswrd = () => {
    setShowPswrd(!showPswrd);
  };

  const handleshowConfirmPswrd = () => {
    setShowConfirmPswrd(!showConfirmPswrd);
  };
  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <form
        action=""
        className="bg-white flex flex-col gap-3 w-[35%] p-4  shadow-2xl"
      >
        <h1 className="text-black font-bold  text-3xl text-center">SIGNUP</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          className="border p-2 rounded focus:to-blue-600"
        />

        <label htmlFor="password">Password</label>
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

        <label htmlFor="confirm password">Confrim Password</label>
        <div className="flex border rounded items-center ">
          <input
            type={showPswrd ? 'text' : 'password'}
            name=""
            id=""
            placeholder="Enter Confirm Password"
            className=" p-2  outline-none w-[90%]"
          />
          {showConfirmPswrd ? (
            <VisibilityIcon onClick={handleshowConfirmPswrd} />
          ) : (
            <VisibilityOffIcon onClick={handleshowConfirmPswrd} />
          )}
        </div>
        <button className="bg-black text-white  p-2  rounded text-lg">
          Login
        </button>

        <p className="text-center">
          Aready have an account{' '}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
