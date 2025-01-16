import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
    const socials1 = (e) => {
        window.location.href = 'https://github.com/sushil-sagar05';
      };
      const socials2 = (e) => {
        window.location.href = 'https://www.linkedin.com/in/sushil-sagar-0b4538290/';
      };
    
      return (
        <>
          <footer className='flex h-8 mt-8 justify-center '>
            <hr />
           <div className='flex gap-5'>
           <h1>Made with ♥ by Sagar</h1>
            <div className='flex w-10 mt-1 mr-1  justify-evenly  '>
              <FaGithub onClick={(e) => {
                socials1(e)
              }} />
              <FaLinkedin onClick={(e) => {
                socials2(e)
              }} />
            </div>
            </div> 
          </footer>
        </>
      )
    }
export default Footer