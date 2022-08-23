import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Label, Button } from 'reactstrap';
import "./ZeldaForm.css"

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
        <div className='FormGroup'>
        <form onSubmit={onSubmitHandler}>
            <p>
                <Label for="username">User Name</Label><br/>
                <Input type="text" onChange = {(e)=>setUsername(e.target.value)}/>
                {errors.username && <p>{errors.username.message}</p> }
            </p>
            <p>
            <Label for="first_game">First Game</Label><br/>
                <Input type="text" onChange = {(e)=>setFirstGame(e.target.value)}/>
                {errors.firstGame && <p>{errors.firstGame.message}</p> }
            </p>
            <p>
                <Label for="second_game">Second Game</Label><br/>
                <Input type="text" onChange = {(e)=>setSecondGame(e.target.value)}/>
                {errors.secondGame && <p>{errors.secondGame.message}</p> }
            </p>
            <p>
                <Label for="third_game">Third Game</Label><br/>
                <Input type="text" onChange = {(e)=>setThirdGame(e.target.value)}/>
                {errors.thirdGame && <p>{errors.thirdGame.message}</p> }
            </p>
            <p>
                <Label for="fourth_game">Fourth Game</Label><br/>
                <Input type="text" onChange = {(e)=>setFourthGame(e.target.value)}/>
                {errors.fourthGame && <p>{errors.fourthGame.message}</p> }
            </p>
            <p>
                <Label for="fifth_game">Fifth Game</Label><br/>
                <Input type="text" onChange = {(e)=>setFifthGame(e.target.value)}/>
                {errors.fifthGame && <p>{errors.fifthGame.message}</p> }
            </p>
            <Button color='success'>Submit</Button>
        </form>
        </div>
    )
}
export default ZeldaForm;

