import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
        <div className='mydiv bg-danger text-light'>
            <h1>
              404
            </h1>
            <h6>Page Not found</h6>
            <a className="mt-5 btn btn-success" href='/weather-app-react'>
              Go Back
            </a>
        </div>
  )
}
