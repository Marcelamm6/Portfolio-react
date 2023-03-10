import React, { useState } from "react";
import styles from './NavBar.module.css'
import SendEmail from "../Email/EmailBox";

import envelopeImg from './images/envelope-paper.svg'
import gitImg from './images/github.svg'
import linkedinImg from './images/linkedin.svg'
import fileImg from './images/file-earmark-person.svg'
import profileImg from './images/person-circle.svg'

const NavBar = (props) => {
  const [sendEmail, setSendEmail] = useState(false);

  const email = (event) => {
    event.preventDefault();
    setSendEmail(true);

  }

  const emaiCloselHandler = () => {
    setSendEmail(false)
  }


  return (
    <div className={styles.fundo}>
    {sendEmail && <SendEmail onCloseBtn={emaiCloselHandler}/>}
    <div className={styles.nav}>
      <div><h1 className={styles.name}>Marcela Borges Corrêa</h1></div>
      <div>
      <img className={styles.nav_icon} title="Enviar email" src={envelopeImg} onClick={email}></img>
      <img className={styles.nav_icon} title="GitHub" src={gitImg}></img>
      <img className={styles.nav_icon} title="LinkedIn" src={linkedinImg}></img>
      <img className={styles.nav_icon} title="Meu currículo" src={fileImg}></img>
      <img className={styles.nav_icon} title="Sobre Marcela" src={profileImg}></img>
      </div>
    </div>
  </div>
  )
}

export default NavBar;