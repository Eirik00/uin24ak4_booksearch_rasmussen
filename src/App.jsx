import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Books from './components/Books'
import Booksearch from './components/Booksearch'

function App() {
  const [content, setContent] = useState()
  const [jamesContent, setJamesContent] = useState()
  const [query, setQuery] = useState("")
  const [bookid, setBookid] = useState(null)

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data.docs)
    }catch{
      console.error("Cant reach API")
    }
  }
  const getJamesData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=James+Bond`)
      const data = await response.json()
      setJamesContent(data.docs)
    }catch{
      console.error("Cant reach API")
    }
  }
  useEffect(()=>{
    getJamesData()
  },[])
  
  useEffect(()=>{
    getData()
  },[query])

  return (
    <Layout>
      <Routes>
        <Route index element={<Home content={jamesContent}/>}/>
        <Route path="search/*" element={<Books />}>
          <Route index element={<Booksearch content={content} setQuery={setQuery} setBookid={setBookid}/>}/>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
