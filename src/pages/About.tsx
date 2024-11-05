import React from "react"
import Wrapper from "../sections/Wrapper"
import avatarImage from "../assets/Perfil.jpg"
import avatarImage2 from "../assets/Perfil2.jpg"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

function About() {
  return (
    <div className="profile">
      <div className="avatarImages">
        <img src={avatarImage} alt="avatar" className="profile-image" />
        <img src={avatarImage2} alt="avatar" className="profile-image" />
      </div>
      <h1 className="profile-text">Olá, Somos a PokéTips!</h1>
      <h2 className="profile-text">
        Criadores da PokéTips: Vitor Brefore e Matheus Garcia
      </h2>
      <h4 className="profile-text">
        Projeto Criado para Trabalho de Graduação e Fatec Aberta 2024
      </h4>
      <div className="profile-links">
        <a href="https://github.com/Vitor-Brefore">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/vitor_brefore/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/vitor-brefore/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Wrapper(About)
