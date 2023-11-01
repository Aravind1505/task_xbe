import Search from "./Search";
import Filters from "./Filters";

export default function Header() {
    return <div className="Header p-5 w-full flex flex-row justify-evenly" >
        <Search />
    </div>
}