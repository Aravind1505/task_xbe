import Image from "next/image";

export default function Book(props) {
    return <div className="Book flex flex-row gap-x-5 p-4 bg-blue-300 w-96 rounded-md">
        <Image src="/hp.jpg" alt="image" className="Image rounded-md " width="96" height="96">{props.image}</Image>
        <div className="flex flex-col gap-y-1">
            <div className="Title">{props.title}</div>
            <div className="Author text-sm">{props.author}</div>
            <div className="Rating text-sm">{props.rating}</div>
        </div>
    </div>
}