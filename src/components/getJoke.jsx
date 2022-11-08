import React from 'react';
import {useState, useEffect} from "react";

function GetJoke(props) {

    const [backendData, setBackendData] = useState([])

    useEffect(() => {
        return fetch("http://localhost:8080/ca2/joke/haha")
            .then(res => res.json())
            .then(data => setBackendData(data))
    }, [])

    console.log(backendData)
}

export default GetJoke;