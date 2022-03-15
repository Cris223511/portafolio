import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BiCode} from 'react-icons/bi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/cris223511" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/cris223511" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/cris223511" target="_blank"><BsTwitter/></a>
        <a href="https://www.instagram.com/cris223511" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/cris223511" target="_blank"><BsFacebook/></a>
        <a href="https://www.youtube.com/channel/UC9CdEoE4egh0uHrHMn7J5lA" target="_blank"><BsYoutube/></a>
        <a href="https://github.com/cris223511" target="_blank"><BiCode/></a>
    </div>
  )
}

export default HeaderSocial