import React from 'react';
import {Link} from 'react-router-dom'

import '../styles/contact.css';
export default function Contact (){

  const [formStatus, setFormStatus] = React.useState('Send')
  
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
  const {fName,lName,gender,email,message}= e.target.elements;
  let conFom = {
    fname: fName.value,
    lname: lName.value,
    gender: gender.value,
    email: email.value,
    message: message.value,
  }}
    return (
      <div className="container">
        <div className="row">
                <Link to='/' className='text-black-50 p-2 col-md-5'>Back | <i className="fa fa-home-alt"></i></Link>
            </div>
            <div className='row'>
            <h1 className='display-6 py-2 col-md-6 text-primary'>Contact</h1>
                <div className="col-md-8 m-2 p-2">
                    <form onSubmit={onSubmit}>
                      <div className="row">
                        <div className="mb-3 col-md-4">
                          <label className="form-label" htmlFor="name">
                            First Name
                          </label>
                          <input className="form-control" type="text" id="fname" required />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label className="form-label" htmlFor="name">
                            Last Name
                          </label>
                          <input className="form-control" type="text" id="lname" required />
                        </div>
                     </div>
                     <div className="row">
                          <div className="mb-3 col-md-4">
                              <label className="form-label" htmlFor="email">
                                Email
                              </label>
                        <input className="form-control" type="email" id="email" required />
                            </div>
                            <div className="mb-3 col-md-4">
                              <label className="form-label" htmlFor="gender">
                                Gender
                              </label>
                        <input className="form-control" type="text" id="gender" required />
                            </div>
                     </div>
                     
                    <div className="mb-3 col-md-4">
                    <label className="form-label" htmlFor="message">
                     Message
                    </label>
                    <textarea className="form-control" id="message" rows="4" cols="50" required/>
                  </div>
                  <div className="">
                  <button className="btn btn-outline-primary btn-lg" type="submit">
                    {formStatus}
                  </button>
                  </div>
                  
      </form>
    </div>
                
            </div>
      </div>
        

)
}