import react, {useState, useEffect} from "react";

function demo(){
    const students = [
       {
        id : 1,
        name : "january",
        score : 200
       },
       {
        id : 2,
        name : "february",
        score : 170
       },
       {
        id : 3,
        name : "march",
        score : 210
       }
    ]
}

function Shared(){
    return (
        <>
        students.map((value) =>(
            <div>
                <ul>
                <li key = value.id>{value.name}> </li>
                </ul>
            </div>
            
        ))
    
        </>
    )
}