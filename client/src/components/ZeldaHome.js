import React, {useState, useEffect, useContext} from 'react';
import { ThemeContext } from '../ThemeContext';
import axios from 'axios';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const ZeldaHome = (props) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [allGames, setAllGames] = useState([]);
    const [ocarinaOfTime, setOcarinaOfTime] = useState([]);
    const [majorasMask, setMajorasMask] = useState([]);
    const [breathOfTheWild, setBreathOfTheWild] = useState([]);

    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games?limit=100")
            .then((res) => {
                // console.log(res.data.data);
                setAllGames(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    
    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2ba")
            .then((res) => {
                // console.log(res.data.data);
                setOcarinaOfTime(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2bc")
            .then((res) => {
                // console.log(res.data.data);
                setMajorasMask(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9")
            .then((res) => {
                // console.log(res.data.data);
                setBreathOfTheWild(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className='mx-auto'>
            <div className='d-flex flex-wrap mt-5'>
                <div className='mx-auto'>
                    <Card className='border-dark' style={{
                        width: '25rem',
                        boxShadow: "7px 7px 7px gray"
                        }}>
                        <img
                            alt="Sample"
                            src="/ocarina.jpg"
                        />
                        <CardBody>
                            <CardTitle tag="h5">{ocarinaOfTime.name}</CardTitle>
                            <CardText>{ocarinaOfTime.description}</CardText>
                            <Button color='dark'>
                                <Link style={{
                                    color: "white",
                                    textDecoration: "none"
                                }} to={"/game/details/" + ocarinaOfTime.id}>Details</Link>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
                <div className='mx-auto'>
                    <Card className='border-dark' style={{
                        width: '25rem',
                        boxShadow: "7px 7px 7px gray"
                        }}>
                        <img
                            alt="Sample"
                            src="/majoras.webp"
                        />
                        <CardBody>
                            <CardTitle tag="h5">{majorasMask.name}</CardTitle>
                            <CardText>{majorasMask.description}</CardText>
                            <Button color='dark'>
                                <Link style={{
                                    color: "white",
                                    textDecoration: "none"
                                }} to={"/game/details/" + majorasMask.id}>Details</Link>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
                <div className='mx-auto'>
                    <Card className='border-dark' style={{
                        width: '25rem',
                        boxShadow: "7px 7px 7px gray"
                        }}>
                        <img
                            alt="Sample"
                            src="/Breath.jpg"
                        />
                        <CardBody>
                            <CardTitle tag="h5">{breathOfTheWild.name}</CardTitle>
                            <CardText>{breathOfTheWild.description}</CardText>
                            <Button color='dark'>
                                <Link style={{
                                    color: "white",
                                    textDecoration: "none"
                                }} to={"/game/details/" + breathOfTheWild.id}>Details</Link>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='d-flex flex-wrap p-2 mt-5'>
                {
                    allGames.map((game) => {
                        return (
                            <div className='mx-auto' style={{
                                width: "15rem"
                                }} key={game.id}>
                                <p className='mx-auto'>
                                    <Link className={`text ${darkMode ? "text-light" : "text-dark"}`} style={{
                                        textDecoration: "none"
                                        }} to={"/game/details/" + game.id}>{game.name}</Link>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ZeldaHome;