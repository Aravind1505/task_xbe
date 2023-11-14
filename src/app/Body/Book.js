import { IoMdHeartEmpty } from "react-icons/io";

export default function Book(props) {

    function test(event) {
        const __book = event.target.parentNode.parentNode;
        const __edition = __book.childNodes[0].childNodes[0].getAttribute("src").split("/")[5].split("-")[0];
        console.log(__edition);
    }

    const cover = "https://covers.openlibrary.org/b/olid/" + props.cover + "-M.jpg";
    return <div className="Book flex flex-row gap-x-5 p-4 bg-blue-300 rounded-md">
        <div className="h-44">
            <img src={cover} alt="image" className=" Image rounded-md max-h-44">{props.image}</img>
        </div>
        <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-1">
                <div className="Title">{props.title}</div>
                <div className="Author text-sm">{props.author}</div>
                <div className="Rating text-sm">{props.rating}</div>
            </div>
            <IoMdHeartEmpty className="text-3xl" onClick={test}/>
        </div>
    </div>
}