import { useMemo } from 'react'
import { ProductItem } from "./ProductItem";

interface SearchResultProps {
  results: Array<{
    id: number,
    price: number,
    priceFormatted: string,
    title: string
  }>,
  onAddToWishList(id: number): void;
  totalPrice: number;
}

export function SearchResult({ results, onAddToWishList, totalPrice }: SearchResultProps) {
  // const totalPrice = useMemo(() => results.reduce((total, p) => total + p.price, 0), [results]);

  return (
    <div>
      <div>{totalPrice}</div>
      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
        )
      })}

    </div>
  )
}


/**
 * 
 * Ciclo de atualização de dados do component
 * 
 * 1. Criar uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Atualizar o que alterou
 * 
 * 
 * 
 * 
 */