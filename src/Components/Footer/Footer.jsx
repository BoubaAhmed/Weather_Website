import React from 'react'

export default function Footer(props) {
    return (
        <div className='footer'>
            <p className="text-center"><b>© {props.currentYear} {props.appName}. Powered by {props.authorName}.</b></p>
        </div>  
    )
}
