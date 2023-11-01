import Image from "next/image";

export default function Book(props) {
    return <div className="Book flex flex-row">
        <Image src="/hp.jpg" alt="image" className="Image rounded-md " width="64" height="64">{props.image}</Image>
        <div className="flex flex-col">
            <div className="Title">{props.title}</div>
            <div className="Author">{props.author}</div>
            <div className="Rating">{props.rating}</div>
        </div>
    </div>
}