import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [homeContent, setHomeContent] = useState()
  const [query, setQuery] = useState("james+bond")

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setHomeContent(data.docs)
      console.log(data.docs)
    }catch{
      console.error("Cant reach API")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <header>
        <h1>Eiriks Bibliotek</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {homeContent?.map(book => 
          <article key={book.key}>
          <h2>{book.title}</h2>
          <p>Year: {book.first_publish_year}</p>
          <h3>Authors: </h3>
          <ul>
            {book.author_name?.map(author => 
              <li key={author+book.key}>
                <p>{author}</p>
              </li>)}
          </ul>
          <p>Average Rating: {!book.ratings_average ? "No Rating" : Math.round(book.ratings_average * 10)/10}</p>
          <a href={"https://www.amazon.com/s?k="+(book.isbn?book.isbn[0]:"")}>Amazon</a>
          </article>)}
        </section>
      </main>
      <footer>
        <p>Eirik Side</p>
      </footer>
    </>
  )
}

export default App
