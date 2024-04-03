import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'

function App() {
  const [content, setContent] = useState()
  const [query, setQuery] = useState("james+bond")

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data.docs)
    }catch{
      console.error("Cant reach API")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Layout>
      <Routes>
        <Route index
      </Routes>
    </Layout>
  )
}

export default App
