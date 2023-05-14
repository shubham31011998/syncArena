import React from 'react'

const buttonGray = ({className, text}) => {
    return (
        <button
            type="button"
            className={className || "transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"}>
            {text || "Action"}
        </button>
    )
}

export default buttonGray