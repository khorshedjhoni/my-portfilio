import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assests/recyleshop.png'
import img2 from '../assests/artaland.png'
import img3 from '../assests/edulearning.png'


const Projects = () => {
    return (
        <div className='mt-5 ms-10'>
            <h2 className='text-4xl font-bold text-center mt-10 mb-5 '>Projects</h2>
            <hr />
            <div className='grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 mx-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Recycle Shop</h2>
    
    <div className="card-actions justify-between">
      <a href='https://recycle-shop-3ff39.web.app/'><button className="btn btn-primary">Live Link</button></a>
      <Link to='/course1'><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Art Land Photography</h2>
    
    <div className="card-actions justify-between">
      <a href='https://artland-photography.web.app/'><button className="btn btn-primary">Live Link</button></a>
      <Link to='/course2'><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Edu Learning</h2>
    
    <div className="card-actions justify-between">
      <a href='https://boisterous-tartufo-28edc5.netlify.app/'><button className="btn btn-primary">Live Link</button></a>
      <Link to='/course3'><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>


            </div>
        </div>
    );
};

export default Projects;