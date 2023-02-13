import React from 'react';
import {Link} from 'react-router-dom'

import '../styles/contact.css';
export default function Contact (){

    return (
      <div className="container">
        <div className="row">
                <Link to='/' className='text-black-50 p-2 col-md-5'>Back | <i className="fa fa-home-alt"></i></Link>
            </div>
            <div className='row'>
                <h1 className='display-6 py-2 col-md-8 text-primary'>Contact</h1>
                <div className='col-8 border border-2 border-primary rounded p-5 mx-3'>
                <div class="form-group row ">
                  <label for="fullName" class="col-4 col-form-label">Full Name</label> 
                    <div class="col-8">
                    <div class="input-group">
                    <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-address-book"></i>
                    </div>
                  </div> 
                </div> 
      <span id="fullNameHelpBlock" class="form-text text-muted">Please write your full name</span>
    </div>
  </div>
  <div class="form-group row">
    <label for="gender" class="col-4 col-form-label">Gender</label> 
    <div class="col-8">
      <select id="gender" name="gender" class="custom-select" required="required" aria-describedby="genderHelpBlock">
        <option value="1">Man</option>
        <option value="2">Woman</option>
        <option value="3">No answer</option>
        <option value="0">- None -</option>
      </select> 
      <span id="genderHelpBlock" class="form-text text-muted">Select your gender from the list</span>
    </div>
  </div>
  <div class="form-group row">
    <label for="email" class="col-4 col-form-label">Email Address</label> 
    <div class="col-8">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fa fa-envelope"></i>
          </div>
        </div> 
      </div> 
      <span id="emailHelpBlock" class="form-text text-muted">Please insert your contact email</span>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
                </div>
                
            </div>
      </div>
        

)
}