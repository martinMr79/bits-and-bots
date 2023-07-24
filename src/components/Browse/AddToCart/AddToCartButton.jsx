import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartButton } from '../cardLayout';
import { useCartStore } from '../../../hooks/useCart'; // update the import

const AddToCartButton = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCartStore();

  const isInCart = cart.some((item) => item.id === product.id);

  const handleToggleCart = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <CartButton onClick={handleToggleCart}>
      <ShoppingCartIcon style={{ fontSize: '14px', marginRight: '8px' }} />
      {isInCart ? 'In Cart' : 'Add to Cart'}
    </CartButton>
  );
};

export default AddToCartButton;
