import React from 'react';
import styles from '../styles/AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Me</h1>
      <div>Hi! My name is <span className={styles.name}>Vipul Pathak</span> and I am a Frontend Developer from India. I have 7 years of experience building responsive and user-friendly web applications using technologies such as React, HTML, CSS, and JavaScript.</div>
      <div>Throughout my career, I have worked on a variety of projects ranging from small websites to large-scale web applications. I am passionate about creating intuitive and engaging user experiences and am always looking for new challenges and opportunities to grow my skills.</div>
    </div>
  );
}

export default AboutMe;