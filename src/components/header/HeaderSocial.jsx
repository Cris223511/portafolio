import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { BiCode } from 'react-icons/bi'
import { FaStackOverflow } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://es.stackoverflow.com/users/262104/cris223511-dev" target="_blank" rel="noopener noreferrer"><FaStackOverflow /></a>
      <a href="https://www.linkedin.com/in/cris223511" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/cris223511" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      <a href="https://twitter.com/cris223511" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
      <a href="https://www.instagram.com/cris223511.dev" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
      <a href="https://www.facebook.com/cris223511" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
      <a href="https://www.youtube.com/channel/UC9CdEoE4egh0uHrHMn7J5lA" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
      <a href="https://github.com/cris223511/portafolio" target="_blank" rel="noopener noreferrer"><BiCode /></a>
    </div>
  )
}

export default HeaderSocial
