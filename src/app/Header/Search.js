"use client";

import Filters from "./Filters";

export default function Search() {

    return (
        <form className="search-form flex w-full" onSubmit={handleSubmit}>
            <div className="relative flex w-full">
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none" placeholder="Search books" required></input>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            <Filters />
        </form>
    );
}

async function handleSubmit(event) {
    event.preventDefault();

    const props = {
        query : event.target[0].value,
        author : event.target.elements[2].checked,
        category : event.target.elements[3].checked,
        ratings : event.target.elements[4].checked
    };

    const booksData = await fetchData(props);
    const books = await Promise.all([booksData]);
    console.log(books[0].docs);
    console.log(books[0].docs[0]);
    console.log(books[0].docs[0].title);
    console.log(books[0].docs[0].author_name[0]);
    console.log(books[0].docs[0].ratings_average);
}

async function fetchData(props) {
    const url = "https://openlibrary.org/search.json?q=";
    const response = await fetch(url + props.query);
    return response.json();
}
