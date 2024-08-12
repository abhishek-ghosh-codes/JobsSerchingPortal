import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index';
import User from './User';
const SignUpForm = ({addCandidate}) => {
    const dispatch = useDispatch();
    const {signUp} = bindActionCreators(actionCreators,dispatch);
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        fullname:"",
        email:"",
        phoneNumber:"",
        password:""
    })
    
const handleChange = (e)=>{
    console.log(e.target.name);
    setFormData({...formData,[e.target.name]:e.target.value})
}
const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formData);
    addCandidate(formData);
    toast.success("Successfully Signed up");
    signUp();
    return navigate("/jobs");
}
  return (
    <>
    <User/>
    <section className="bg-indigo-50">
    <div className="container m-auto max-w-2xl py-24">
      <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-center font-semibold mb-6">Sign Up</h2>
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="border rounded w-full py-2 px-3"
              placeholder="FullName"
              required
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          
         

          <div className="mb-4">
            <label
              htmlFor="contact_email"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Email
            </label>
            <input
              type="email"
              id="contact_email"
              name="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact_phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Phone
            </label>
            <input
              type="tel"
              id="contact_phone"
              name="phoneNumber"
              className="border rounded w-full py-2 px-3"
              placeholder="Optional phone for applicants"
              value={formData.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pass"
              className="block text-gray-700 font-bold mb-2"
            >
            Password
            </label>
            <input
              type="password"
              id="pass"
              name="password"
              className="border rounded w-full py-2 px-3"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  </>
  )
}

export default SignUpForm