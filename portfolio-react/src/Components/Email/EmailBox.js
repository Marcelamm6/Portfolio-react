import React, { useState } from "react";
import closeIcon from './close-circle-outline.svg'
import styles from './EmailBox.module.css'

const SendEmail = props => {

  return (
    <div className={styles.email_box}>
      <div className={styles.text_x}>
      <h1>Entrar em contato</h1>
      <img className={styles.icon} src={closeIcon}></img>
      </div>
      <h2>Remetente</h2>
      <input>{props.remetente}</input>
      <h2>Mensagem</h2>
      <textarea className={styles.message_input}>{props.mensagem}</textarea>
      <button className={styles.btn_position}>Enviar</button>
    </div>
  )
}

export default SendEmail;