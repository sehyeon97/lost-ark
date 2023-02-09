import myData from "../../api/ConnectTo";
import Formatter from "./formatter";

const Events = () => {

    let parsedData = JSON.parse(myData("/news/events"));

    const renderData = (data: any) => {
        return <Formatter Title={data.Title} Thumbnail={data.Thumbnail} Link={data.Link} StartDate={data.StartDate} EndDate={data.EndDate} RewardDate={data.RewardDate}/>
    }

    console.log(parsedData[0].Title)

    return (
        <div>
            {renderData(parsedData)}
        </div>
    )

}

export default Events;