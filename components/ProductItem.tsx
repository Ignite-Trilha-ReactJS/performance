import { memo, useState } from "react";
import { IAddToProcutToWishlist } from "./AddToProcutToWishlist";
import dynamic from "next/dynamic";

const AddToProcutToWishlist = dynamic<IAddToProcutToWishlist>(() => {
  return import('./AddToProcutToWishlist').then(mod => mod.AddToProcutToWishlist)
}, {
    loading: () => <span>Carregando ...</span>
  })

interface ProductItemProps {
  product: {
    id: number,
    price: number,
    priceFormatted: string,
    title: string
  },
  onAddToWishList(id: number): void;
}


function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>

      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      {isAddingToWishlist &&
        <AddToProcutToWishlist
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        ></AddToProcutToWishlist>
      }
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
})