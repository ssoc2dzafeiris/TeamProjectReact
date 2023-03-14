import React from "react";
import Stats from "../components/Others/Stats";
import Welcome from "../components/Others/Welcome";
import CourseTable from "../components/CourseTable";

export default function Dashboard() {

    return(
        <>
        <div className="container justify-center items-center mx-auto w-11/12">
            <section id="welcome">
            <Welcome text={"our Dashboard"}/>
            </section>
            <section id="stats">
            <Stats title={"Important Statistics"}/>
            </section>
            <section id="CourseTable">
            <div className="flex flex-col mt-3 mx-auto px-2">
                <h3 className="text-3xl font-semibold text-indigo-100 py-1 px-5 mx-auto border-b-2 border-gray-100">Last 5 courses</h3>
                <div className="mb-10 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="flex flex-col items-center justify-center">
                        <CourseTable />
                    </div>
                </div>
            </div>
            </section>
            </div>
            </>
    )
}