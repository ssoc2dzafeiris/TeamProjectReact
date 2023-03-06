import React,{useState,useEffect} from 'react';
import TeamUserCard from '../Utilities/Cards/TeamUserCard';

export default function Team(){
    const UserApi = 'https://chain-legendary-strawflower.glitch.me/teamusers';
    const [teamusers,setTeamusers] = useState(null);
    const getTeamUser = () =>{
        fetch(UserApi)
        .then((res)=> res.json())
        .then((data) =>{
            setTeamusers(data);
        });
    }

    useEffect(()=>{
        getTeamUser()
    },[]);

    if (!teamusers) return <div>No one team user </div>
    return (
        <>
        <section className="bg-white dark:bg-gray-900 flex flex-col">
        <div className="container px-6 py-6 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-indigo-600 capitalize lg:text-3xl dark:text-white  py-2 border-t-4 border-indigo-500">Our Team</h1>
        <div className="grid grid-cols-1 gap-5 mt-1 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 mb-5">
            {teamusers.length && 
            teamusers.map((user) =>{ 
                return(<TeamUserCard key={user.fname} fname={user.fname} lname={user.lname} title={user.title} linkedin={user.linkedin} email={user.email} github={user.github} bio={user.bio}/>)
            })}
            </div>
        </div>
        </section>
        </>
    )
}