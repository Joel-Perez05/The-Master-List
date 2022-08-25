import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import io from "socket.io-client";
import { Button } from 'reactstrap';
import "./ZeldaForm.css"
import background from "../images/triforce.jpg";


const ZeldaList = (props) => {
    const [userLists, setUserLists] = useState([]);
    const [socket] = useState(() => io(":8000"));

    useEffect(()=>{
        socket.on("connection", () => {
            console.log("connected");
        })
        axios.get("http://localhost:8000/api/lists")
        .then((res)=>{
            console.log(res.data);
            setUserLists(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        return () => socket.disconnect(true);
    }, [socket]);

    const deleteList = (listId) => {
        // axios.delete('http://localhost:8000/api/lists/' + listId)
        //     .then((res) => {
        //         console.log(res.data);
        //         const remainingLists = userLists.filter((list) => {
        //             return list._id !== listId
        //         });
        //         setUserLists(remainingLists);
        //     })
        //     .catch(err => console.log(err))
        socket.emit("deleteList", listId);
    };

    socket.on("listDeleted", (deletedId) => {
        setUserLists(userLists.filter((list) => list._id !== deletedId));
    })

    return (
        <div className='FormGroup'>

            {
                userLists.map((list) => {
                    return (
                        <div className='listContent'>
                        <div style={{border: "3px solid black", backgroundImage: `url(${background})`}} key={list._id}>
                            <p>Username: {list.username}</p>
                            <p>First Game: {list.firstGame}</p>
                            <p>Second Game: {list.secondGame}</p>
                            <p>Third Game: {list.thirdGame}</p>
                            <p>Fourth Game: {list.fourthGame}</p>
                            <p>Fifth Game: {list.fifthGame}</p>
                            <Button color='danger' onClick={(e) => {deleteList(list._id)}}>Delete</Button>
                            <Button color='success'>
                                <Link to={`/zelda/list/edit/${list._id}`}>Edit</Link>
                            </Button>
                        </div>
                        </div>
                    )
                })
            }

        </div>
    );
};
export default ZeldaList;

