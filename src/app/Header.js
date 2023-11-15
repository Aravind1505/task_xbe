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
                    <button type="submit" className="text-black text-lg absolute right-2.5 bottom-2.5 bg-yellow-500 hover:bg-yellow-600  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
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
    const books_unfiltered = books[0].docs;
    const books_filtered = books_unfiltered.filter((book) => book.cover_edition_key !==undefined);
    // console.log(books_filtered);
    
    let edition_keys = [];
    for(let i = 0; i < books_filtered.length; i++) {
        edition_keys.push(books_filtered[i].cover_edition_key);
    }
    // const book_edition = await fetchBookData(edition_keys);
    // const book_edition_promise = await Promise.all([book_edition]);
    // console.log(book_edition_promise[0]);
    return books_filtered;
}

async function fetchData(props) {
    const url = "https://openlibrary.org/search.json?q=";
    const search_query = encodeURIComponent(props.query.trim());
    const fields = "&fields=title,cover_edition_key,author_name,ratings_average";
    const api_call = url + search_query + fields;
    const response = await fetch(api_call);
    return response.json();
}

async function fetchBookData(cover_edition_keys) {
    let editions = "";
    for(let i = 0; i < cover_edition_keys.length; i++) {
        if( i == (cover_edition_keys.length - 1)) {
            editions += "OLID:" + cover_edition_keys[i];
        } else {
            editions += "OLID:" + cover_edition_keys[i] + ",";
        }
    }
    const url = "https://openlibrary.org/api/books?bibkeys=";
    const format = "&format=json";
    const response = await fetch(url + editions + format);
    return response.json();
}