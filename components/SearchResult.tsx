import { useMemo } from 'react';
import { List, ListRowRenderer, ListRowProps } from 'react-virtualized';

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

  const rowRenderer = ({ index, key, style }: ListRowProps) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }

  return (
    <div>
      <div>{totalPrice}</div>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      >
      </List>
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