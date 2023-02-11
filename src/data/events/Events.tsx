import ConnectTo from "../../api/ConnectTo";

const Events = () => {
    

    return (
        <div>
            {ConnectTo("/news/events", "event")}
            {/* {ConnectTo("/guilds/rankings?serverName=%EB%A3%A8%ED%8E%98%EC%98%A8", "guild")} */}
        </div>
    )
}

export default Events;