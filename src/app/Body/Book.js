import { IoMdHeartEmpty } from "react-icons/io";

export default function Book(props) {

    function test(event) {
        const __book = event.target.parentNode.parentNode;
        const __book_cover = __book.querySelector("img");
        const __book_cover_src = __book_cover.getAttribute("src");
        const __edition = __book_cover_src.split('/')[5].split('-')[0];
        console.log(__edition);
    }

    const cover = "https://covers.openlibrary.org/b/olid/" + props.cover + "-M.jpg";
    return <div className="Book grid grid-cols-3 p-4 gap-x-2 bg-creme rounded-md">
        <div className="flex flex-row justify-center items-center">
            <img src={cover} alt="image" className=" Image rounded-md max-h-40">{props.image}</img>
        </div>
        <div className="flex flex-col justify-between col-span-2 bg-light-creme p-3 rounded-md">
            <div className="flex flex-col gap-y-1">
                <div className="Title font-bold">{props.title}</div>
                <div className="Author text-sm">{props.author}</div>
                <div className="Rating text-sm">{props.rating}</div>
            </div>
            <div className="flex flex-row gap-x-2 p-2 border-none bg-yellow-500 rounded-md items-center" onClick={test}>
                <IoMdHeartEmpty className="text-3xl"/> Add to Favourites
            </div>
        </div>
    </div>
}