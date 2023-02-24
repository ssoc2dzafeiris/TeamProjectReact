import React from 'react';
import {Link} from 'react-router-dom';

export default function About(){
    return(
        <div className="container mt-2 bg-white rounded-sm text-gray-700 flex flex-col flex-nowrap flex-auto justify-between items-center px-5 mx-auto">
             <div className="col">
                <Link to='/' className='text-black-50 px-2 col-md-5'>Back | <i className="fa fa-home-alt"></i></Link>
            </div>
            
            <section className='col'>
            <h1>About our project</h1>
            <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lacus a mi condimentum congue et quis purus. In vestibulum risus nunc, vel pharetra lorem gravida vitae. Suspendisse interdum, nunc non pretium rhoncus, nisl arcu vulputate eros, placerat tempus leo arcu eu erat. Vestibulum sodales, quam in dapibus commodo, dui leo accumsan est, ac sagittis tellus augue non sapien. Proin vel ligula felis. Nunc laoreet risus a metus gravida, sed rutrum dui tempus. Sed a dapibus ante, non efficitur sem. Cras rhoncus neque et nibh varius, vel mattis erat bibendum. Phasellus non lacinia diam, at sollicitudin mauris. Nullam porttitor justo vitae orci pellentesque, in vehicula mauris dapibus. Cras dictum pellentesque velit, eu aliquam dolor rhoncus a. Nullam nisl ante, dapibus facilisis malesuada in, sagittis at ligula. <br/>
                Etiam arcu purus, euismod vel interdum at, fringilla eu mi. Curabitur vehicula maximus porta.
                </p>
            </section>
            <section className='col'>
                <h2>Team</h2>
                <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lacus a mi condimentum congue et quis purus. In vestibulum risus nunc, vel pharetra lorem gravida vitae. Suspendisse interdum, nunc non pretium rhoncus, nisl arcu vulputate eros, placerat tempus leo arcu eu erat. Vestibulum sodales, quam in dapibus commodo, dui leo accumsan est, ac sagittis tellus augue non sapien. Proin vel ligula felis. Nunc laoreet risus a metus gravida, sed rutrum dui tempus. Sed a dapibus ante, non efficitur sem. Cras rhoncus neque et nibh varius, vel mattis erat bibendum. Phasellus non lacinia diam, at sollicitudin mauris. Nullam porttitor justo vitae orci pellentesque, in vehicula mauris dapibus. Cras dictum pellentesque velit, eu aliquam dolor rhoncus a. Nullam nisl ante, dapibus facilisis malesuada in, sagittis at ligula. <br/>
                Etiam arcu purus, euismod vel interdum at, fringilla eu mi. Curabitur vehicula maximus porta.
                </p>
            </section>
            <section className='col'>
                <h2>Tools We use</h2>
                <p className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lacus a mi condimentum congue et quis purus. In vestibulum risus nunc, vel pharetra lorem gravida vitae. Suspendisse interdum, nunc non pretium rhoncus, nisl arcu vulputate eros, placerat tempus leo arcu eu erat. Vestibulum sodales, quam in dapibus commodo, dui leo accumsan est, ac sagittis tellus augue non sapien. Proin vel ligula felis. Nunc laoreet risus a metus gravida, sed rutrum dui tempus. Sed a dapibus ante, non efficitur sem. Cras rhoncus neque et nibh varius, vel mattis erat bibendum. Phasellus non lacinia diam, at sollicitudin mauris. Nullam porttitor justo vitae orci pellentesque, in vehicula mauris dapibus. Cras dictum pellentesque velit, eu aliquam dolor rhoncus a. Nullam nisl ante, dapibus facilisis malesuada in, sagittis at ligula. <br/>
                Etiam arcu purus, euismod vel interdum at, fringilla eu mi. Curabitur vehicula maximus porta.
                </p>
            </section>
            </div>
    )
}