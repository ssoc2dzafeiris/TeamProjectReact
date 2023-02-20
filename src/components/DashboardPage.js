import React from 'react';

export default function DashboardPage(){

    return (
      <>
       <header>
        <div class="p-5 m-5 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Welcome to our Dashboard</h1>
              <p class="col-md-8 fs-4">Manage everything and have fun!!</p>
            </div>
          </div>
      </header>
      <hr className="text-center mx-sm-5 bg-secondary"/>
      <main>
      <div class="row mx-3 mb-5 d-flex align-items-center justify-content-around">
      <div class="col-md-3">
        <div class="p-3 text-dark bg-light rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button class="btn btn-outline-primary" type="button">Example button</button>
        </div>
      </div>
      <div class="col-md-3 ">
      <div class="p-3 text-dark bg-light rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
      <div class="col-md-3">
      <div class="p-3 text-dark bg-light rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
      <div class="col-md-3">
      <div class="p-3 text-dark bg-light rounded-3 ">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>
    
      </main>
      <section>
      <h3>Latest 5 Courses</h3>
    </section>
      </>

     
        
    )
}