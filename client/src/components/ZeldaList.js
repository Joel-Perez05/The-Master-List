import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import io from "socket.io-client";
import { Button } from 'reactstrap';
import "./ZeldaList.css"


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
                        <div style={{border: "3px solid black"}} key={list._id}>
                            <p>{list.username}</p>
                            <p>{list.firstGame}</p>
                            <p>{list.secondGame}</p>
                            <p>{list.thirdGame}</p>
                            <p>{list.fourthGame}</p>
                            <p>{list.fifthGame}</p>
                            <Button color='danger' onClick={(e) => {deleteList(list._id)}}>Delete</Button>
                            <Button color='success'>
                                <Link to={`/zelda/list/edit/${list._id}`}>Edit</Link>
                            </Button>
                        </div>
                    )
                })
            }

        </div>
    );
};
export default ZeldaList;

