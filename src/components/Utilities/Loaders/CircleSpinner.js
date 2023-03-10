export default function CircleSpinner(){
    return(
        <div className="flex flex-row justify-center h-screen mt-5">
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin duration-150 object-center"></div>
        </div>
        
    )
}