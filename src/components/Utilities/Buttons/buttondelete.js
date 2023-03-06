
import axios from 'axios';  
import { useNavigate } from "react-router-dom";    

export default function ButtonDelete(props){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/courses`; 
        navigate(path);
      }
    function deleteUser(id){
        var answer = window.confirm("Delete data?");
        if (answer) {
            let link = 'https://chain-legendary-strawflower.glitch.me/courses'+id;
            //console.log("Try delete",answer, link);
            //console.log(typeof link);
            axios.delete(link)
                .then(response => {
                    console.log( 'Delete successful')
                    routeChange();
                    
                }
                    )
                .catch(error => {
                    console.error('There was an error!', error);
            });
            
        }
        else {
            console.log("User did not deleted");
        }
    }
  
    return (
        <button onClick = {() => deleteUser(props.idNumber)} className="border-4 border-indigo-200 hover:border-b-gray-500 bg-blue-500 hover:bg-cyan-600">
        <span className="m-8">Delete</span>
        </button>
    );
}