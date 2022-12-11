import React from 'react';
import img1 from '../../assests/course/course-1.png'
import img2 from '../../assests/course/course-2.png'
import img3 from '../../assests/course/course-3.png'
const Course3 = () => {
    return (
        <div>
        <h3 className='text-4xl font-semibold text-red-900 m-4'>Project Name: Edu Learning</h3>
        <div className='flex flex-wrap gap-5 mx-10'>
        
        <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img className='img-course' src={img1} alt="Album"/></figure>
    
    </div>
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img className='img-course'  src={img2} alt="Album"/></figure>
    
    </div>
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img className='img-course'  src={img3} alt="Album"/></figure>
    
    </div>
    
    </div>
    <h2 className='text-3xl font-bold text-gray-900 mx-10'>Project Details</h2>
    <h3 className='text-xl font-bold text-gray-900 mx-10'>Features</h3>
    <p className='mx-10 font-bold'>
    *This is a programming learning website <br />
    *It contains most trending language and details <br />
    *To know more details about clients choice language ,the client must log in this website <br />
    *Anyone can sign in this website by using google or github profile <br />
    *User can also log in this website after providing their email and password <br />
    *User can get premium access to admit the course <br />
    *User login information saved if anyone log once <br />
    
    </p>
    <h3 className='text-xl font-bold text-gray-900 mx-10 mt-5'>Technology</h3>
    <div class="grid grid-cols-3 lg:grid-cols-9 container mx-auto mt-3 gap-4 justify-center lg:justify-start mx-10">
    <button class="btn btn-outline">ReactJs</button>
    <button class="btn btn-outline">NodeJs</button>
    <button class="btn btn-outline">MongoDB</button>
    <button class="btn btn-outline">Firebase</button>
    <button class="btn btn-outline">ExpressJS</button>
    <button class="btn btn-outline">Bootsrap</button>
    <button class="btn btn-outline">HTML</button>
    
    </div>
    <div class="text-left mt-6 flex flex-col lg:flex-row gap-4 container mx-auto mb-4 mx-10">
        <button class="btn btn-primary"><a target="_blank" href="https://boisterous-tartufo-28edc5.netlify.app/">Live Link</a></button>
        <button class="btn btn-primary"><a target="_blank" href="https://github.com/khorshedjhoni/programming-course-client">Client Side</a></button>
        <button class="btn btn-primary"><a target="_blank" href="https://github.com/khorshedjhoni/programming-course-server">Server Side</a></button></div>
    
       </div>
    );
};

export default Course3;