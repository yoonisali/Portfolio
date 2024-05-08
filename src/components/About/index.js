import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          My journey into the world of programming began at Epicodus, where I immersed myself in over 800 hours of coding and collaboration, honing my skills in C#, React, JavaScript, HTML, and CSS. From there, I embarked on internships at Opine and CODE PDX, where I tackled real-world projects, collaborated with seasoned developers, and enhanced my expertise in frontend and full-stack development.
        </p> 
        <p>
          Following my internships, I launched Imperium, a venture dedicated to crafting custom websites for businesses and individuals seeking to establish or enhance their online presence. As the owner of Imperium, I leveraged my skills and creativity to deliver tailored solutions and engaging digital experiences.
        </p>
        <p>
          Driven by a thirst for further knowledge and academic growth, I made the decision to pursue a Bachelor's in Computer Science at Portland State University. Though my academic journey is ongoing, I've already begun to apply my knowledge and experience outside the classroom. As a Computer Science tutor at Varsity Tutors, I've had the opportunity to guide students through the intricacies of coding, offering personalized assistance and fostering their problem-solving skills. 
        </p>
        <p>
          Beyond my professional and academic pursuits, I find fulfillment in various hobbies, including playing soccer, indulging in a good book, strategizing in chess games, admiring watches, and exploring the great outdoors. With a passion for continuous learning and community enrichment, I am committed to making meaningful contributions in every facet of my life, both personally and professionally.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About