import ButEdit from "./buttonedit";
import ButDel from "./buttondelete";
export default function Buttons(props){
  
    return (
        <div className="flex flex-wrap items-center justify-start mt-5 mb-5">
            <div className="flex flex-col"><ButEdit data={props.data} idNumber={props.idNumber}/></div>
            <div className="flex flex-col"><ButDel idNumber={props.idNumber} /></div>
        </div>
    );
}