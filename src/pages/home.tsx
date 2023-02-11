import Events from "../data/events/Events";
import Anniversary from '../images/anniversary.jpg';
import PVP from '../images/pvpMode.jpg';
import HotSprings from '../images/hotsprings.jpg';
import Mokoko from '../images/mokoko.jpg';

import Header from "../basic_components/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <p>This website contains Lost Ark information on the first three months of 2023</p>
            <div>
                <div>
                    <img src={Anniversary} alt="Anniversary" width="300px" height="200px"></img>
                    <p></p>
                </div>
                <div>
                    <img src={PVP} alt='PVP' width="300px" height="200px"></img>
                    <p></p>
                </div>
                <div>
                    <img src={HotSprings} alt='Hot Springs' width="300px" height="200px"></img>
                    <p></p>
                </div>
                <div>
                    <img src={Mokoko} alt='Mokoko' width="300px" height="200px"></img>
                    <p></p>
                </div>
            </div>
            <Events/>
            <footer>
                <p>This website gets data from:<br/>
                <a href='https://developer-lostark.game.onstove.com/'>https://developer-lostark.game.onstove.com/</a></p>
            </footer>
        </div>
    );
;}

export default Home;