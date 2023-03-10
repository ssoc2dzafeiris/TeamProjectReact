import React,{useState,useEffect} from 'react';
import TeamUserCard from '../Utilities/Cards/TeamUserCard';
import CircleSpinner from '../Utilities/Loaders/CircleSpinner'

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

    if (!teamusers) return <CircleSpinner />
    return (
        <>
        <section className="bg-white flex flex-col rounded-md mt-4 mb-4">
        <div className="px-6 mx-auto ">
        <h1 className="text-3xl font-extrabold text-indigo-600 lg:text-3xl">| Our Team</h1>
        <div className="grid grid-cols-1 gap-5 mt-1 xl:mt-10 md:grid-cols-2 xl:grid-cols-4 ">
            {teamusers.length && 
            teamusers.map((user) =>{ 
                return(<TeamUserCard key={user.lname} fname={user.fname} lname={user.lname} title={user.title} linkedin={user.linkedin} email={user.email} github={user.github} bio={user.bio}/>)
            })}
            </div>
        </div>
        </section>
        </>
    )
}