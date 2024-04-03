import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Bookcard from "./Bookcard"

export default function Booksearch({content, setQuery, setBookid}){
    const [searchQuery, setSearchQuery] = useState("")
    const handleSearch = (e) =>{
        setSearchQuery(e.target.value)
        console.log(e.target.value)
        if(e.target.value.length>3){
            handleSubmit(e)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setQuery(searchQuery)
    }
    return(
        <>
            <h2>Search for Book</h2>
            <form>
                <label htmlFor="search">Book:</label>
                <input type="text" id="search" placeholder="James Bond..." onChange={handleSearch}></input>
            </form>
            <ul className="booklist">
                <section>
                    {content?.map(
                        book =>
                        <Bookcard key={book.key} 
                                title={book.title} 
                                year={book.first_publish_year} 
                                authors={book.author_name} 
                                rating={book.ratings_average} 
                                isbn={book.isbn}
                        />)}
                </section>
            </ul>
        </>
    )
}