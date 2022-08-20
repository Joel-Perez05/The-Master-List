import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
const Update = (props) => {
    const { id } = useParams; 
    const [userName, setUserName] = useState();
    const [firstGame, setFirstGame] = useState();
    const [secondGame, setSecondGame] = useState();
    const [thirdGame, setThirdGame] = useState();
    const [fourthGame, setFourthGame] = useState();
    const [fifthGame, setFifthGame] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setUserName(res.data.userName);
                setFirstGame(res.data.firstGame);
                setSecondGame(res.data.secondGame);
                setThirdGame(res.data.thirdGame);
                setFourthGame(res.data.fourthGame);
                setFifthGame(res.data.fifthGame);
            })
            .catch(err => console.log(err))
    }, [])
    const updateGames = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, {
            userName,    
            firstGame,
            secondGame,
            thirdGame,
            fourthGame,
            fifthGame      
        })
            .then(res => {
                console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a List</h1>
            <form onSubmit={updateGames}>
                <p>
                    <label>User Name</label><br />
                    <input type="text" 
                    name="userName" 
                    value={userName}
                    {...userName} 
                    onChange={(e) => { setUserName(e.target.value) }} />
                </p>
                <p>
                    <label>First Game</label><br />
                    <input type="text" 
                    name="firstGame"
                    value={firstGame} 
                    onChange={(e) => { setFirstGame(e.target.value) }} />
                </p>
                <p>
                    <label>Second Game</label><br />
                    <input type="text" 
                    name="secondGame"
                    value={secondGame} 
                    onChange={(e) => { setSecondGame(e.target.value) }} />
                </p>
                <p>
                    <label>Third Game</label><br />
                    <input type="text" 
                    name="thirdGame"
                    value={thirdGame} 
                    onChange={(e) => { setThirdGame(e.target.value) }} />
                </p>
                <p>
                    <label>Fourth Game</label><br />
                    <input type="text" 
                    name="fourthGame"
                    value={fourthGame} 
                    onChange={(e) => { setFourthGame(e.target.value) }} />
                </p>
                <p>
                    <label>Fifth Game</label><br />
                    <input type="text" 
                    name="fifthGame"
                    value={fifthGame} 
                    onChange={(e) => { setFifthGame(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;

