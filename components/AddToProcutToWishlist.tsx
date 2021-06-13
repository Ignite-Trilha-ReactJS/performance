export interface IAddToProcutToWishlist {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddToProcutToWishlist({ onAddToWishlist, onRequestClose }: IAddToProcutToWishlist) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}