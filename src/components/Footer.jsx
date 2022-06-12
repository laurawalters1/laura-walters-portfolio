import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer w-100 mt-5'>
        <a href='https://www.linkedin.com/in/laura-walters-099137215/' className='text-white text-decoration-none footer-i nav-text'><i class="devicon-linkedin-plain footer-i"></i></a>
        <a
            href="mailto:lauraewalters1098@gmail.com"
            className="text-white text-decoration-none"
          >
            <i class="devicon-google-plain text-white fs-5 w-100"></i>
          </a>
        <a href='https://github.com/laurawalters1' className='text-white'><i class="devicon-github-original-wordmark footer-i nav-text"></i></a>
    </div>
  )
}

export default Footer