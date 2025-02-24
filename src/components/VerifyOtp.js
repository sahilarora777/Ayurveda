import React, { useState } from 'react'

const VerifyOtp = () => {
    const [otp,setOtp]=useState("");
    const[token,setToken]=useState(localStorage.getItem('token') || "");
    const handleOtpChange = (e)=>{
        setOtp(e.target.value)
    }
    const handleVerifyOTP = async (e) =>{
        e.preventDefault();
        try{
            const response=await fetch("https://eayurveda-1.onrender.com/api/users/verify-otp",{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                  },
                body:JSON.stringify({token:token,userOtp:otp})
            })
            const data= await response.json();
            console.log(token)
            if(response.ok){
               alert("Woooo OTP Verification Successfully")
               console.log("OTP Verification Successfull",data);
            }else{
                throw new Error(data.message || "OTP Verification Failed")
            }
        }catch(error){
            console.log(error)
            alert('OTP verification failed');
          }
    }
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbW9kaXhpdDc2QGdtYWlsLmNvbSIsIm90cCI6IjE2ODk3MiIsImlhdCI6MTczOTYwODUxNSwiZXhwIjoxNzM5NjA5MTE1fQ.7ud3GHFXpKD7maTd8zZ2IoedfWQzOMcD8BAXuLAB54A
  return (
    <div>
      <form onSubmit={handleVerifyOTP}>
        <input type='text' value={otp} onChange={handleOtpChange} placeholder='Enter your otp' />
        <button type='submit'>Verify OTP</button>
      </form>
    </div>
  )
}

export default VerifyOtp