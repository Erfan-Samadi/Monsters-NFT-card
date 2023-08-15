import "../../styles/search-box.css"

const SearchBox = ({ placeholder, handleChange }) => {

    return (
        <div className="search">
            <input type="text" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}

export default SearchBox