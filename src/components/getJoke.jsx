import React from 'react';
import facade from "../apiFacade";

function GetJoke(props) {

    const jokes = facade.fetchJoke().then()

    return (
        <div>
            {jokes}
        </div>
    )
}

export default GetJoke;