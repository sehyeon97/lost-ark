

interface eventProps {
    Title: string;
    Thumbnail: string;
    Link: string;
    StartDate: string;
    EndDate: string;
    RewardDate: null;
}

const Formatter = ({Title, Thumbnail, Link, StartDate, EndDate, RewardDate}: eventProps) => {

    return (
        <div>
            <ul>
                <li>{Title}</li>
                <li>{Thumbnail}</li>
                <li>{Link}</li>
                <li>{StartDate}</li>
                <li>{EndDate}</li>
                <li>{RewardDate}</li>
            </ul>
        </div>
    )

}

export default Formatter;