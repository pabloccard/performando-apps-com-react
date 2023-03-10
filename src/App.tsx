import { FormEvent, useState } from "react"
import { SearchResults } from "./components/SearchResults";

function App() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if(!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data =  await response.json()

    setResults(data)
  }

  return (
   <div>
     <h1>Search</h1>
     <form onSubmit={handleSearch}>
      <input 
        type="text" 
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
      />

      <button type="submit">Buscar</button>
     </form>

     <SearchResults results={results}/>
   </div>
  )
}

export default App
