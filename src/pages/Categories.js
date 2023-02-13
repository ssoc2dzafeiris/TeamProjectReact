import React from 'react';
import {Link} from 'react-router-dom'
export default function Categories(props){
    return(
        <div className="container" >
            <div className="row">
                <Link to='/' className='text-black-50 p-2 col-md-5'>Back | <i className="fa fa-home-alt"></i></Link>
            </div>
            <div>
            <h1 className='display-6 py-2 col-md-8 text-primary'>Categories</h1>
            <hr className="my-2 text-primary"/>
            <div className="categories--row row d-flex justify-content-around align-content-center">
            <div className="category--item col-md-3 card p-3">
                    <div>
                        <img src="https://dummyimage.com/400x300/f500f5/fff.jpg&text=Category" className="card-img-top rounded" />
                    </div>
                    <div className="card-body">
                        <h3 className="text-primary text-center card-title">Category1</h3>
                        <p className="category--title card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            </p>
                        <p className="category--title card-footer" >Courses: <span className="category--courses-num badge bg-secondary"><i>5</i></span></p>
                    </div>
                </div>
                <div className="category--item col-md-3 card p-3">
                    <div>
                    <img src="https://dummyimage.com/400x300/f500f5/fff.jpg&text=Category" className="card-img-top rounded" />
                    </div>
                    <div className="card-body">
                        <h4 className="text-primary text-center card-title">Category2</h4>
                        <p className="category--title card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                        <p className="category--title card-footer" >Courses: <span className="category--courses-num badge bg-secondary"><i>5</i></span></p>
                    </div>
                </div>
                <div className="category--item col-md-3 card p-3">
                    <div>
                    <img src="https://dummyimage.com/400x300/f500f5/fff.jpg&text=Category" className="card-img-top rounded" />
                    </div>
                    <div className="card-body">
                        <h4 className="text-primary text-center card-title">Category3</h4>
                        <p className="category--title card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                        <p className="category--title card-footer" >Courses: <span className="category--courses-num badge bg-secondary"><i>5</i></span></p>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    )
}