import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Navigate, useParams, Link} from "react-router-dom";

const Detail = (props) => {
    const [userLists, setUserList] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/lists/" + id)
            .then( res => {
                console.log(res.data);
                setPerson(res.data);
    })
            .catch( err => console.log(err) )

 }, [])
    return (
        <div>
            <p>Username: {list.username}</p>
            <p>First Game: {list.firstGame}</p>
            <p>Second Game: {list.secondGame}</p>
            <p>Third Game: {list.thirdGame}</p>
            <p>Fourth Game: {list.fourthGame}</p>
            <p>Fifth Game: {list.fifthGame}</p>
            <Link to= {"/"}><button>Home</button></Link>
        </div>
    )
}
export default Detail;

