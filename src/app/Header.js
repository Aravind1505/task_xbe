'use client';

export default function Header(props) {

    async function books_data(e) {
        const x = await handleSubmit(e);
        props.getBooks(Object.values(x));
    };

    return (<div className="Header p-5 w-full flex flex-row justify-evenly" >
            <form className="search-form flex w-full" onSubmit={books_data}>
                <div className="relative flex w-full">
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none" placeholder="Search books" required></input>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
                <Filters />
            </form>
        </div>
    );
}

function Filters() {

    const filters = [{type: "author"}, {type: "category"}, {type:"ratings"}]

    return (
        <div className="Filters flex items-center ">
            <ul className="flex items-center">
                {filters.map((filter, index) => (
                    <li key={index} className="flex items-center">
                        <input type="checkbox" className="filter-checkbox ml-2 text-sm font-medium rounded"></input>
                        <label key={index} className="ml-2 text-lg font-medium text-gray-900">{filter.type}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

async function handleSubmit(event) {
    event.preventDefault();

    const props_filter = {
        query: event.target[0].value,
        author: event.target.elements[2].checked,
        category: event.target.elements[3].checked,
        ratings: event.target.elements[4].checked
    };

    const booksData = await fetchData(props_filter);
    const books = await Promise.all([booksData]);
    console.log(books[0].docs);
    // console.log(books[0].docs[0]);
    // console.log(books[0].docs[0].title);
    // console.log(books[0].docs[0].author_name[0]);
    // console.log(books[0].docs[0].ratings_average);
    return books[0].docs;
}

async function fetchData(props) {
    const url = "https://openlibrary.org/search.json?q=";
    const response = await fetch(url + props.query);
    return response.json();
}