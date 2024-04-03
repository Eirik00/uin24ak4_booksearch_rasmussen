import Bookcard from "./Bookcard";

export default function(content){
    return(
        <section>
            <h2>Home</h2>
            {content?.map(book =>
                <Bookcard key={book.key} title={book.title} year={book.} authors={} rating={} isbn={}/>)}
        </section>
    )
}