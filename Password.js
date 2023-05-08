import React from 'react'
import { useState } from 'react';

export default function Password() {
  
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        };
        return(
     
        <>
        
        <label 
        htmlFor="input-group-1" 
        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    
        <div className="relative mb-6">
            
      <input 
      type={showPassword ? 'text' : 'password'}  
      id="password" 
      className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full mb-2 font-medium " 
       placeholder="•••••••••" 
       required/>
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
       <svg 
       xmlns="http://www.w3.org/2000/svg" 
       fill="none" 
       viewBox="0 0 24 24" 
       strokeWidth={1.5} 
       stroke="currentColor" className="w-4 h-4 cursor-pointer text-gray-500 mb-2" onClick={togglePasswordVisibility}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    
      </div>
    </div>
    </>
  )
}
