import React, { useEffect, useState } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';
// import './banner.css'

const Introduce = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  
    const toRotate = [ "MD KHORSHEDUL ALAM"];
    const period = 1000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    

    return (
        <div className='mt-5 text-center'>
            {/* <h2 className='text-5xl font-bold '>MD KHORSHEDUL ALAM</h2>
            <h3 className='text-3xl font-semibold '>FrontEnd Web Developer</h3>
            <p className='font-semibold'>I am a Passionate Web Developer, fast learner, and team player <br />
also have strong desire to develop professionally and constantly enhance my skills.</p>
<a href='https://drive.google.com/file/d/1NPjFgg4nCuMvcvGnAiOa98UZAEGGmwPf/view?fbclid=IwAR2yVANHIPWnbbOXEhHlBQOCg4w6TFzK26QzMHGt63s5l8zamlXYZDX40t4'><button className="btn btn-active btn-primary mx-3 mt-3">Resume</button></a>

<button className="btn btn-active btn-primary">Hire me</button> */}
<TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="text-xl font-bold">Welcome to my Portfolio</span>
                <h1><span className='text-5xl font-bold text-red-700 ' dataPeriod="1000" data-rotate='[ "MD KHORSHEDUL ALAM" ]'><span className="wrap">{text}</span></span></h1>
                <h3 className='text-3xl font-semibold '>FrontEnd Web Developer</h3>
                <p className='font-semibold'>I am a Passionate Web Developer, fast learner, and team player <br />
also have strong desire to develop professionally and constantly enhance my skills.</p>
<a href='https://drive.google.com/file/d/1NPjFgg4nCuMvcvGnAiOa98UZAEGGmwPf/view?fbclid=IwAR2yVANHIPWnbbOXEhHlBQOCg4w6TFzK26QzMHGt63s5l8zamlXYZDX40t4'><button className="btn btn-active btn-primary mx-3 mt-3">Resume</button></a>

<Link to='/contact'><button className="btn btn-active btn-primary">Hire me</button></Link>
                 
              </div>}
            </TrackVisibility>


        </div>
    );
};

export default Introduce;