'use client'
import {FaSpinner} from "react-icons/fa"
import { useFormStatus} from "react-dom"

const ButtonForm = () => {

    const {pending} = useFormStatus();

  return (
    <button type="submit" className="border rounded border-gray-400 mr-2 p-1">
   {pending? (
    <span className="block animate-spin">
        <FaSpinner className="transform rotate-90"/>
    </span>
   ) : "Add"}
  </button>
  )
}

export default ButtonForm