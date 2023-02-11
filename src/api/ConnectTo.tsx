import { useEffect, useState } from "react";
import RequestOptions from "./RequestOptions";

// /news/events

const ConnectTo = (endpoint: string, action: string) => {
    const [myData, setMyData] = useState([])

    useEffect(() => {
        fetch("https://developer-lostark.game.onstove.com" + endpoint, RequestOptions)
        .then((response) => response.json())
        .then((data) => {
            setMyData(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    switch (action) {
        case "event":
            return (
                <div>
                    {myData.map((key: any, index: number) =>
                    <ul key={index}>
                        <li>{key.Title}</li>
                        <li>{key.Thumbnail}</li>
                        <li>{key.Link}</li>
                        <li>{key.StartDate}</li>
                        <li>{key.EndDate}</li>
                    </ul>
                    )}
                </div>
            )
        case "character":
            return (
                <div>
                    {myData.map((key: any, index: number) =>
                    <ul key={index}>
                        <li>{key.ServerName}</li>
                        <li>{key.CharacterName}</li>
                        <li>{key.CharacterLevel}</li>
                        <li>{key.CharacterClassName}</li>
                        <li>{key.ItemAvgLevel}</li>
                        <li>{key.ItemMaxLevel}</li>
                    </ul>
                    )}
                </div>
            )
        case "guild":
            return (
                <div>
                    {myData.map((key: any, index: number) =>
                    <ul key={index}>
                        <li>{key.Rank}</li>
                        <li>{key.GuildName}</li>
                        <li>{key.GuildMessage}</li>
                        <li>{key.MasterName}</li>
                        <li>{key.Rating}</li>
                        <li>{key.MemberCount}</li>
                        <li>{key.MaxMemberCount}</li>
                        <li>{key.UpdatedDate}</li>
                    </ul>
                    )}
                </div>
            )
    }
}

export default ConnectTo;