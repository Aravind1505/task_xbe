import { IoMdHeartEmpty } from "react-icons/io";

export default function Book(props) {

    function test(event) {
        const __book = event.target.parentNode.parentNode;
        const __edition = __book.childNodes[0].childNodes[0].getAttribute("src").split("/")[5].split("-")[0];
        console.log(__edition);
    }

    const cover = "https://covers.openlibrary.org/b/olid/" + props.cover + "-M.jpg";
    return <div className="Book grid grid-cols-3 p-4 gap-x-2 bg-creme rounded-md">
        <div className="flex flex-row justify-center items-center">
            <img src={cover} alt="image" className=" Image rounded-md max-h-40">{props.image}</img>
        </div>
        <div className="flex flex-col justify-between col-span-2 bg-light-creme p-3 rounded-md">
            <div className="flex flex-col gap-y-1">
                <div className="Title">{props.title}</div>
                <div className="Author text-sm">{props.author}</div>
                <div className="Rating text-sm">{props.rating}</div>
            </div>
            <div className="bg-red-200 flex flex-row gap-x-2 p-2 border-none bg-yellow-500 rounded-md items-center">
                <IoMdHeartEmpty className="text-3xl" onClick={test} /> Add to Favourites
            </div>
        </div>
    </div>
}