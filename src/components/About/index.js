import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import SocialFollow from '../../SocialFollow';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Mel Pietrowski</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Former teacher in need of a career change. Having a little too much fun building things on the internet. 
          With a baby on the way, I want to create an app that will be my future baby.
          I started the Coding Bootcamp at University of North Carolina at Charlotte in October of 2021. 
          Since then, I have completed projects that include usage of: 
          * HTML
          * Advanced CSS
          * JavaScript
          * Web, server, and third party APIs
          * Node JS
          * Object-Oriented Programming
          * Express.JS
          * SQL
          * Object-Relational Mapping
          * Model-View controller
          * NoSQL
          * Progressive Web Applications
          * React
          * Github and Gitlab 

          I have worked in collaborative projects, such as the Baby Shower Games Application that will be released to the public soon.
        </p>
      </div>
      <SocialFollow />
    </section>
  );
}

export default About;
