import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../services/operations/authAPI';
import { useLocation } from 'react-router-dom';
import  {AiFillEyeInvisible, AiFillEye}  from "react-icons/ai"
import { Link } from 'react-router-dom';



const UpdatePassword = () => {

    const location = useLocation();
   const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
   
    const {password, confirmPassword} = formData;

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { loading } = useSelector((state) => state.auth);
    
    const handleOnChange = (e) => {
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token)) 
    }

    return (
        <div className='text-white'>
            {
                loading ? (<div>
                    Loading.....
                </div>) : (
                    <div>
                     <h1>Choose New Password</h1>
                     <p>Almost done. Enter your new password and you're all set.</p>
                     <form onSubmit={handleOnSubmit} >
                      
                      <label>
                        <p>New Pasword</p>
                        <input 
                        required
                        name='password'
                        type={showPassword ? "text": "password"}
                        value={password}
                        onChange={handleOnChange}
                        className='text-richblack-5  p-6 bg-richblack-600'
                        placeholder='Enter new Password'
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {
                                showPassword ? <AiFillEyeInvisible fontSize={24}/> : <AiFillEye fontSize={24}/>
                            }
                        </span>
                      </label>

                      <label>
                        <p> Confirm New Pasword</p>
                        <input 
                        required
                        name='confirmPassword'
                        type={showConfirmPassword ? "text": "password"}
                        value={confirmPassword}
                        onChange={handleOnChange}
                        placeholder='confirm Password'
                        className='text-black'
                        />
                        <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {
                                showConfirmPassword ? <AiFillEyeInvisible fontSize={24}/> : <AiFillEye fontSize={24}/>
                            }
                        </span>
                      </label>
                        
                        <button type='submit' >
                            Reset Password
                        </button>

                     </form>

                     <div>
                        <Link>
                        <p> Back to Login </p>
                        </Link>
                     </div>

                    </div>
                )
            }
        </div>
    )
}

export default UpdatePassword

