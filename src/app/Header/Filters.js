

export default function Filters() {

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