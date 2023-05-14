import React from 'react'

const card = (props) => {
  return (
    <div className="bg-white shadow w-full text-left rounded-lg divide-y divide-gray-200">
        {props.children}
    </div>
  )
}

export default card