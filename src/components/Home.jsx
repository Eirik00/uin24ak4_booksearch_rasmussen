import { useEffect } from "react";
import Bookcard from "./Bookcard";

export default function Home({content}){
    return(
        <section>
            <h2>Home</h2>
            {content?.map(book =><Bookcard key={book.key} title={book.title} year={book.first_publish_year} authors={book.author_name} rating={book.ratings_average} isbn={book.isbn}/>)}
        </section>
    )
}