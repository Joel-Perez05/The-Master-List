import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const ZeldaHome = (props) => {
    const [allGames, setAllGames] = useState([]);
    const [ocarinaOfTime, setOcarinaOfTime] = useState([]);

    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games?limit=100")
            .then((res) => {
                console.log(res.data.data);
                setAllGames(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    
    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2ba")
            .then((res) => {
                console.log(res.data.data);
                setOcarinaOfTime(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className='mx-auto'>
            <div className='d-flex flex-wrap mt-5'>
                <div className='mx-auto'>
                    <Card style={{
                        width: '18rem'
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
            </div>
            <div>
                {
                    allGames.map((game) => {
                        return (
                            <div key={game.id}>
                                <p className='mx-auto'>
                                    <Link to={"/game/details/" + game.id}>{game.name}</Link>
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