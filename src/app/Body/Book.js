export default function Book(props) {
    const cover = "https://covers.openlibrary.org/b/olid/" + props.cover + "-M.jpg";
    return <div className="Book flex flex-row gap-x-5 p-4 bg-blue-300 w-96 rounded-md">
        <div className="h-44">
            <img src={cover} alt="image" className=" Image rounded-md max-h-44" >{props.image}</img>
        </div>
        <div className="flex flex-col gap-y-1">
            <div className="Title">{props.title}</div>
            <div className="Author text-sm">{props.author}</div>
            <div className="Rating text-sm">{props.rating}</div>
        </div>
    </div>
}