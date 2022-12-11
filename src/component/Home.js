import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Introduce from './Introduce';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
         
         <Introduce></Introduce>
         <Projects></Projects>
         <Contact></Contact>
         <Footer></Footer>
         
        </div>
    );
};

export default Home;