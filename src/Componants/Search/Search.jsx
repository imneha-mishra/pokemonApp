import useDebounce from "../../Hooks/useDebounce";
import './Search.css'

function Search({ updateSearchterm }) {
    const debouncedcallback = useDebounce((e) => updateSearchterm(e.target.value))
    return (
        <>
            <input type="text" className="inputbox" placeholder="Pokemon name"
                onChange={debouncedcallback} />

        </>
    )
}
export default Search;