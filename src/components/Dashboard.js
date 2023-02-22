import React from "react";
import Stats from "./Stats";
import Welcome from "./Welcome";
import CourseTable from "./CourseTable";

export default function Dashboard(props) {

    return(
        <div className="container mx-auto w-11/12 mt-10 rounded-md">
            <section>
            <Welcome text={"our Dashboard"}/>
            </section>
            
            <Stats title={"Important Statistics"}/>
            
            
            <div className="py-2 mt-4 mx-2 border-b border-gray-200">
            <h3 className="text-3xl font-semibold text-indigo-200 py-2 mx-4">All Courses</h3>
            <hr className="py-2"/>
                <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div>
                        <CourseTable />
                    </div>
                </div>
            </div>
            </div>
            
    )
}