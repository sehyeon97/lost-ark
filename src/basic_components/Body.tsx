import { MyBody, MyDarkMode, PictureInfo } from "../css/Styles"
import Anniversary from '../images/anniversary.jpg';
import PVP from '../images/pvpMode.jpg';
import HotSprings from '../images/hotsprings.jpg';
import Mokoko from '../images/mokoko.jpg';
import { useState, useEffect } from "react";
import Events from "../data/events/Events";

const Body = () => {
    const [isDark, setIsDark] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    
    useEffect(() => {
        setIsDark(!isDark);
    }, [isClicked])

    return (
        <MyDarkMode color={isDark ? "black" : "white"} property={isDark ? "white" : "black"}>
            <button type="button" onClick={() => setIsClicked(!isClicked)}>Dark Mode On/Off</button>
            <MyBody>
                <PictureInfo>
                    <img src={Anniversary} alt="Anniversary" width="300px" height="200px"></img>
                    <p>
                        February 8 marks the first year anniversary of Lost Ark!<br/>
                        Be sure to log on for limited time rewards and events that will last one month.
                    </p>
                </PictureInfo>
                <PictureInfo>
                    <img src={PVP} alt='PVP' width="300px" height="200px"></img>
                    <p>
                        In the anniversary patch, a new PvP content will be released.<br/>
                        Teaser: The PvP will be a 48 vs 48.<br/>
                        For more info, check out the in-game details!
                    </p>
                </PictureInfo>
                <PictureInfo>
                    <img src={HotSprings} alt='Hot Springs' width="300px" height="200px"></img>
                    <p>
                        For the duration of the event, a new Island will surface the world of Arkesia.<br/>
                        Click on World Events in game and sail away to the new adventure island!
                    </p>
                </PictureInfo>
                <PictureInfo>
                    <img src={Mokoko} alt='Mokoko' width="300px" height="200px"></img>
                    <p>
                        The event will also include new pets and twitch rewards,<br/>
                        so make sure to grab these limited time exclusive items!
                    </p>
                </PictureInfo>
            </MyBody>
            <Events/>
        </MyDarkMode>
    );
}

export default Body;