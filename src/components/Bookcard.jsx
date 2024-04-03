import { Link } from "react-router-dom";

export default function Bookcard({ title, year, authors, rating, isbn}){
    return(
        <article>
            <h2>{title}</h2>
            <p>Year: {year}</p>
            <h3>Authors: </h3>
            <ul>
                {authors?.map(author => 
                <li key={author}>
                    <p>{author}</p>
                </li>)}
            </ul>
            <p>Average Rating: {!rating ? "No Rating" : Math.round(rating * 10)/10}</p>
            <Link to={"https://www.amazon.com/s?k="+(isbn?isbn[0]:"")}>Amazon</Link>
        </article>
    )
}