import React, {useEffect, useState} from 'react';
import facade from "../apiFacade";

function GetJoke(props) {

    const [jokeFromServer, setJokeFromServer] = useState("Loading...")

    useEffect(() => { facade.fetchJoke().then(data=> setJokeFromServer(data.joke));
    }, [])



    return (
        <div>
           <h2>This is a dad joke:</h2>
            <h5>{jokeFromServer[0]}</h5> <br/><br/>
            <h2>This is a Chuck Norris joke:</h2>
            <h5>{jokeFromServer[1]}</h5>
        </div>
    )
}

export default GetJoke;