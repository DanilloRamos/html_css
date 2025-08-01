import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
    
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search?q=' + query)
    }

    return (
        <form>
            <input type="text" onChange={(e) => setQuery(e.target.value)}/>
            <input type="submit" value="Pesquisar" />
        </form>
    )
}

export default SearchForm