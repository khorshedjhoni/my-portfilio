import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rtvqm6g', 'template_wt1yvuv', form.current, 'mXeZQb-SWi0xXxbrZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    }
    return (
      <div className='mt-10 mb-10 flex justify-center items-center'>
        <div  className='w-96 p-7 border-solid border-2 border-teal-800 '>
        <form ref={form} onSubmit={sendEmail}>
            {/* <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text" name="user_email" >Email</span></label>
                        <input type="text"
                           
                            className="input input-bordered w-full max-w-xs" />
                       
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Text</span></label>
                        <input type="text"
                           
                            className="input input-bordered w-full max-w-xs" />
                       
                        
                    </div >
                    
                    <input className='btn btn-primary w-full mt-5' type="submit" value="Send" /> */}
<h3 className='text-2xl text-center'> Contact</h3>
                    <label>Name</label>
<input   className="input input-bordered w-full max-w-xs" type="text" name="name" />
<label>Email</label>
<input   className="input input-bordered w-full max-w-xs" type="email" name="email" />
<label >Message</label>
<textarea   className="input input-bordered w-full max-w-xs" name="message" />
<input className='btn btn-primary w-full mt-5' type="submit" value="Send" />

     
    </form>
        </div>
      </div>
    );
};

export default Contact;

