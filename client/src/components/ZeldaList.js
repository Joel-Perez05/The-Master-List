import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ZeldaList = (props) => {
    const [userLists, setUserLists] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/lists")
        .then((res)=>{
            console.log(res.data);
            setUserLists(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    const deleteList = (listId) => {
        axios.delete('http://localhost:8000/api/lists/' + listId)
            .then((res) => {
                console.log(res.data);
                const remainingLists = userLists.filter((list) => {
                    return list._id !== listId
                });
                setUserLists(remainingLists);
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
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
                            <button onClick={(e) => {deleteList(list._id)}}>delete</button>
                            <button>
                                <Link to={`/zelda/list/edit/${list._id}`}>Edit</Link>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default ZeldaList;

