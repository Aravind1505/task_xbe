import Book from "./Book";

export default function PageBody(props) {

    return <div className="flex w-full h-full text-black  ">
        <ul className="grid gap-x-8 gap-y-5 p-5 grid-cols-4">
            {props.books.map((e) => {
                return (
                    <div key={e.key}>
                        <Book title={e.title} author={e.author_name} rating={e.ratings_average} isbn={e.isbn} cover={e.cover_edition_key}/>
                    </div>
                );
            })}
        </ul>
    </div>
}