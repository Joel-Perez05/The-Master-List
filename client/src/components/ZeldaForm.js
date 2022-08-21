import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ZeldaForm = (props) => {
    const [username, setUsername] = useState(""); 
    const [firstGame, setFirstGame] = useState("");
    const [secondGame, setSecondGame] = useState("");
    const [thirdGame, setThirdGame] = useState("");
    const [fourthGame, setFourthGame] = useState("");
    const [fifthGame, setFifthGame] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/lists', {
            username,    
            firstGame,
            secondGame,
            thirdGame,
            fourthGame,
            fifthGame,   
        })
            .then(res=>{
                console.log(res.data); 
                navigate("/zelda/lists");
            })
            .catch((err) => {
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
            })
    }   


    
    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>User Name</label><br/>
                <input type="text" onChange = {(e)=>setUsername(e.target.value)}/>
                {errors.username && <p>{errors.username.message}</p> }
            </p>
            <p>
                <label>First Game</label><br/>
                <input type="text" onChange = {(e)=>setFirstGame(e.target.value)}/>
                {errors.firstGame && <p>{errors.firstGame.message}</p> }
            </p>
            <p>
                <label>Second Game</label><br/>
                <input type="text" onChange = {(e)=>setSecondGame(e.target.value)}/>
                {errors.secondGame && <p>{errors.secondGame.message}</p> }
            </p>
            <p>
                <label>Third Game</label><br/>
                <input type="text" onChange = {(e)=>setThirdGame(e.target.value)}/>
                {errors.thirdGame && <p>{errors.thirdGame.message}</p> }
            </p>
            <p>
                <label>Fourth Game</label><br/>
                <input type="text" onChange = {(e)=>setFourthGame(e.target.value)}/>
                {errors.fourthGame && <p>{errors.fourthGame.message}</p> }
            </p>
            <p>
                <label>Fifth Game</label><br/>
                <input type="text" onChange = {(e)=>setFifthGame(e.target.value)}/>
                {errors.fifthGame && <p>{errors.fifthGame.message}</p> }
            </p>
            <button>Submit</button>
        </form>
        </div>
    )
}
export default ZeldaForm;

