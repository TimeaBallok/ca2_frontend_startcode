import React, {useEffect, useState} from 'react';
import facade from "../apiFacade";

function GetJoke(props) {

    const [jokeFromServer, setJokeFromServer] = useState("Loading...")

    useEffect(() => { facade.fetchJoke().then(data=> setJokeFromServer(data.joke));
    }, [])



    return (
        <div>
            {jokeFromServer}
        </div>
    )
}

export default GetJoke;