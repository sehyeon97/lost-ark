import { useState } from "react";
import RequestOptions from "./RequestOptions";

// /news/events

const ConnectTo = (endpoint: string) => {
    const [myData, setMyData] = useState("");

    fetch("https://developer-lostark.game.onstove.com" + endpoint, RequestOptions)
        .then((response) => response.text())
        .then((data) => {
            setMyData(data);
        })
        .catch((error) => {
            console.log(error);
        })

    return JSON.stringify(myData);
}

export default ConnectTo;