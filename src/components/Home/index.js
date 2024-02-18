import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['Y', 'o', 'o', 'n', 'n', 'i', 's']
  const jobArray = ['W', 'e', 'b',]

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br/> I'm Yoonis
        <br />
        Web Developer
        </h1>
        <h2>Fullstack Developer / Frontend Expert</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home;