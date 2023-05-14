import React from 'react'

const buttonIndigo = ({className,icon, text, onClick}) => {
    return (
        <button type="button" onClick={onClick} className={className || "transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"}>
            <span className="inline-block mr-2">{text || "Action"}</span>
            {icon}
        </button>
    )
}

export default buttonIndigo