import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ZeldaHome = (props) => {
    const [allGames, setAllGames] = useState([]);

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

    return (
        <div>
            <h1>home</h1>
        </div>
    );
};

export default ZeldaHome;