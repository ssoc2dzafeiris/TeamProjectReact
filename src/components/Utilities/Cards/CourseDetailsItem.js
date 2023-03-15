export default function CourseDetailsItem({IconTitle,heading,content}){
    // IconTitle is from FontAwesome etc <i class="fa-solid fa-hand-pointer"></i> => IconTitle = {"fa-solid fa-hand-pointer"}
    return(
        <>
        <li className="py-2 flex flex-col">
            <div className="flex items-center">
            <div>
                <span className="text-normal font-normal inline-block py-1 px-2 rounded-full text-gray-100 bg-indigo-600 mr-3 "><i className={IconTitle}></i></span></div>
            <div>
                <h4 className="text-gray-600 hover:text-indigo-500 font-normal text-normal hover:border-b-2 hover:border-indigo-400">{heading}: <span className="font-bold">&nbsp; {content}</span></h4>
            </div>
            </div>
        </li>
        </>
    )
}