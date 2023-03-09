
import ButEdit from "./buttonedit";
import ButDel from "./buttondelete";



export default function Buttons(props){
  
    return (
        <div className="grid grid-cols-5 gap-4 text-lg m-8">
            <div className="col-span-3"></div>
            <div><ButEdit  data={props.data} idNumber={props.idNumber}/></div>
            <div><ButDel idNumber={props.idNumber} /></div>
            <>
       </>
        
        </div>
    );
}