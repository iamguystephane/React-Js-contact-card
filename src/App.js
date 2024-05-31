import React from 'react'
import './App.css'
import './JS/all'
import contactImage from './images/github.jpg';
function Header(){
  return(
    <>
    <img src={contactImage} alt="contact" width="300px" height="350px"></img>
    <h3> Guy Stephane </h3>
    <p> Full Stack Developer </p>
    <p>company name and logo here</p>
    <div className="contact-links">
      <div className="email-contact">
        <i className='fa fa-envelope icons'></i>
        <button type="button"><a href="https://accounts.google.com/b/0/AddMailService"> Email </a></button>
      </div>
      <div className="linkedIn-contact email-contact">
      <i className="fa-brands fa-linkedin-in icons"></i>
        <button type="button"><a href="https://accounts.google.com/b/0/AddMailService"> LinkedIn </a></button>
      </div>
      </div>
    </>
  );
}

function About(){
  return(
    <section class="about">
      <h3> About </h3>
      <p>
        I am a passionate software developer with a knack for creating dynamic and responsive web applications. With a background in computer science and a love for problem-solving, I have honed my skills in various programming languages and frameworks. </p>
    </section>
  );
}

function Interests(){
  return (
    <section class = "interests">
      <h3> Interests </h3>
      <p> Apart from being a developer, I enjoy spending my time on a variety of hobbies and interests that keep me inspired and balanced </p>
    </section>
  );
}

function Footer(){
  return(
    <>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-youtube"></i>
    </>
  )
}

function Page(){
  return(
    <>
      <main>
        <header>
          <Header />
        </header>
        <section class="main-section">
          <About />
          <Interests />
        </section>
        <footer>
        <Footer />
        </footer>
      </main>
    </>
  )
}

export default Page;