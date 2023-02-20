import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
import axios from 'axios';  

function BasicForm() {
  const [checked, setChecked] = React.useState(true);

    // initialize all the fields of the form 

    const urlAPI = 'http://localhost:3001/courses';
    const [data,setData] = useState({
      id: "",
      title: "",
      description: "",
      imagePath: "",
      duration: "",
      online: "",
      dates: {
        start_date: "",
        end_date: ""
      },
      price: {
        early_bird: "",
        normal: "",
      }
      
      
    }
     
    );

    // check the value of the input fields
    console.log("dataInput",data);

    // function to handle onChange event for all inputs
    const handleChange = (event) => {
      const newData = {...data}
      newData[event.target.id] = event.target.value;
      setData(newData);
      console.log(newData);
    }

    //function to handle onSubmit event of form
    const handleSubmit = (event) => {
      event.preventDefault();
      

      //axios.post to make a new HTTP POST request in specific url with specific parameters
      axios.post(urlAPI,
        {
        title: data.title,
        duration: data.duration,
        imagePath: data.imagePath,
        online: data.online,
        description: data.description,
        start_date: data.dates.start_date,
        end_date: data.dates.end_date,
        early_bird: data.price.early_bird,
        normal: data.price.normal
        
    })
      .then(res=>
        {
        console.log(res);
        console.log(res.data);
        window.location = "/courses" //This line of code will redirect you once the submission is succeed
        })
    .catch((error)=> console.error(error))
    }

  return (
    <Form onSubmit={handleSubmit} className="m-3 p-5 form-outline border border-0 mb-5 w-75" style={{backgroundColor:'#F5F5F5' }}>
      <Form.Group className="mb-2 px-1 row" controlId="id">
        <Form.Label className="fw-bolder">Course Id: </Form.Label>
        <Form.Control type="text" placeholder="Id" name="id"  
         onChange={handleChange}
        />
        <Form.Text className="text-mute">
          Keeping the title short
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2 px-1 row" controlId="title">
        <Form.Label className="fw-bolder">Course Title: </Form.Label>
        <Form.Control type="text" placeholder="Title" name="title"  
         onChange={handleChange}
        />
        <Form.Text className="text-mute">
          Keeping the title short
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2 px-1 row" controlId="duration">
        <Form.Label className="fw-bolder">Duration: </Form.Label>
        <Form.Control type="text" placeholder="Duration" name="duration" 
         onChange={handleChange}
        />
        <Form.Text className="text-mute">
         Keeping the title short
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2 px-1 row" controlId="description">
        <Form.Label className="fw-bolder">Description:</Form.Label>
        <Form.Control type="text" placeholder="Description" name="description" 
                 onChange={handleChange}
                />
        <Form.Text className="text-mute">
         Keeping the description short
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-2 px-1 row" controlId="imagePath">
        <Form.Label className="fw-bolder">Image path:</Form.Label>
        <Form.Control type="text" placeholder="Please write a small description of your course" rows="3"  name="imagePath" 
                 onChange={handleChange}
                />
        <Form.Text className="text-mute">
        Keeping the description short
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2 px-1" controlId="online">
        <Form.Check type="checkbox" label="Online" onChange={() => setChecked(!checked)} defaultChecked={checked}/>
      </Form.Group>
      <hr/>
        <h3 className="mt-1">Dates</h3>
        <Form.Group className="mb-2 px-1" controlId="dates.start_date">
        <Form.Label className="fw-bolder">Start Date:</Form.Label>
        <Form.Control type="date" placeholder="Start Date" 
                 onChange={handleChange} 
                />
        </Form.Group>

        <Form.Group className="mb-2 px-1" controlId="dates.end_date">
        <Form.Label className="fw-bolder">End Date:</Form.Label>
        <Form.Control type="date" placeholder="End Date" 
                onChange={handleChange} 
                />
        </Form.Group>
        <hr/>
        <h3 className="mt-1">Prices</h3>
        <Form.Group className="mb-2 px-1" controlId="price.early_bird">
        <Form.Label className="fw-bolder">Early Bird:</Form.Label>
        <Form.Control type="text" pattern="[0-9]*"  placeholder='0'
                 onChange={handleChange} 
                />
        </Form.Group>

        <Form.Group className="mb-2 px-1" controlId="price.normal">
        <Form.Label className="fw-bolder">Normal price:</Form.Label>
        <Form.Control type="text" pattern="[0-9]*"
                 onChange={handleChange} 
                />
        </Form.Group>

      <hr></hr>
      <div className="d-flex justify-content-end">
      <Button variant="primary" type="submit">
        Add Course
      </Button>
      </div>
      
      
    </Form>
  );
}

export default BasicForm;
