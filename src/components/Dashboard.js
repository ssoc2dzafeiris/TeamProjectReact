import React from "react";
import Stats from "./Stats";
import Welcome from "./Welcome";
import CourseTable from "./CourseTable";

export default function Dashboard(props) {

    return(
        <div className="container justify-center items-center mx-auto w-11/12 mt-1 rounded-md">
            <section>
            <Welcome text={"our Dashboard"}/>
            </section>
            
            <Stats title={"Important Statistics"}/>
            
            
            <div className="flex flex-col py-2 mt-3 mx-auto px-2">
                <h3 className="text-3xl font-semibold text-indigo-100 py-2 px-5 mx-auto border-b-2 border-gray-100">Last 4 courses</h3>
                <div className="py-2 my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="flex flex-col items-center justify-center mb-5">
                        <CourseTable />
                    </div>
                </div>
            </div>
            </div>
            
    )
}