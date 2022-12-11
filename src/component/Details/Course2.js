import React from 'react';
import img1 from '../../assests/artLand/artland-1.png'
import img2 from '../../assests/artLand/artland-2.png'
import img3 from '../../assests/artLand/artland-3.png'

const Course2 = () => {
    return (
        <div>
    <h3 className='text-4xl font-semibold text-red-900 m-4'>Project Name: Art Land Photography</h3>
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
* This is a photography service website <br />
* A client or user can know about the details about photographic package and price,<br />
* An user can see other review and post his own review also,<br />
* User can login with google and email and password,<br />
* The owner of this website can submit any of new package by give proper information<br />
* User login info also saved<br />

</p>
<h3 className='text-xl font-bold text-gray-900 mx-10 mt-5'>Technology</h3>
<div class="grid grid-cols-3 lg:grid-cols-9 container mx-auto mt-3 gap-4 justify-center lg:justify-start mx-10">
<button class="btn btn-outline">ReactJs</button>
<button class="btn btn-outline">NodeJs</button>
<button class="btn btn-outline">MongoDB</button>
<button class="btn btn-outline">Firebase</button>
<button class="btn btn-outline">ExpressJS</button>
<button class="btn btn-outline">Bootstarp</button>
<button class="btn btn-outline">HTML</button>

</div>
<div class="text-left mt-6 flex flex-col lg:flex-row gap-4 container mx-auto mb-4 mx-10">
    <button class="btn btn-primary"><a target="_blank" href="https://artland-photography.web.app/">Live Link</a></button>
    <button class="btn btn-primary"><a target="_blank" href="https://github.com/khorshedjhoni/Recyle-Shop-Client-repo">Client Side</a></button>
    <button class="btn btn-primary"><a target="_blank" href="https://github.com/khorshedjhoni/artLand-photogrpahy-server">Server Side</a></button></div>

   </div>
    );
};

export default Course2;