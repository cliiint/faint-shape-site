import * as React from 'react'
import { links, link } from './footer.module.css'
import { FaBandcamp } from "@react-icons/all-files/fa/FaBandcamp";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";

const Footer = () => {
  return (
    <footer>
      <ul className={links}>
        <li className={link}><a href="https://faintshape.bandcamp.com/" target="_blank"><FaBandcamp/></a></li>
        <li className={link}><a href="https://www.instagram.com/faint_shape/" target="_blank"><FaInstagram/></a></li>
        <li className={link}><a href="mailto:faintshape@gmail.com" target="_blank"><HiOutlineMail/></a></li>
        <li className={link}>{new Date().getFullYear()}</li>
      </ul>
    </footer>
  )
}

export default Footer