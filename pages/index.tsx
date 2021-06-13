import { useState, FormEvent, useCallback } from 'react';
import { SearchResult } from '../components/SearchResult';

type Results = {
  totalPrice: number;
  data: any[]
}

export default function Home() {

  const [search, setSearch] = useState("");
  const [results, setResults] = useState({
    totalPrice: 0,
    data: []
  } as Results);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim())
      return

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json();

    const totalPrice = data.reduce((total: number, p: any) => total + p.price, 0);

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
    })

    const products = data.map((p: any) => {
      return {
        id: p.id,
        title: p.title,
        price: p.price,
        priceFormatted: formatter.format(p.price)
      }
    })
    setResults({ totalPrice, data: products })

  }

  const addToWishlist = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>Busca</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="" id="" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResult
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishList={addToWishlist}
      />
    </div>
  )
}
