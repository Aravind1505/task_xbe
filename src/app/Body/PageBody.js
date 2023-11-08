import Book from "./Book";

export default function PageBody(props) {

    return <div className="flex w-full h-full  text-black ">
        <ul className="flex gap-x-5 gap-y-5 p-3 justify-around flex-wrap ">
            {props.books.map((e) => {
                return (
                    <div key={e.key}>
                        <Book title={e.title} author={e.author_name} rating={e.ratings_average} />
                    </div>
                );
            })}
        </ul>
    </div>
}