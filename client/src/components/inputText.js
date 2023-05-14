import React from 'react'

const InputText = ({type,className, onChange}) => {
  return (
    <input type={type || "text"} className={className || "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"} onChange={onChange}/>
  )
}

export default InputText