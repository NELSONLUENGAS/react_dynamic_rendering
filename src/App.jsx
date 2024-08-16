import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './views/Products';
import { productos } from './productos';
import { useState } from 'react';
import Cart from './views/Cart';

function App() {
	const [products, setProducts] = useState(productos);

	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		if (cart.some((productCart) => productCart.id == product.id)) {
			const update = cart.map((productCart) =>
				productCart.id == product.id
					? { ...productCart, cantidad: productCart.cantidad + 1 }
					: productCart
			);

			setCart(update);
		} else {
			setCart([
				...cart,
				{
					...product,
					cantidad: 1,
				},
			]);
		}
	};

	const handleRemoveToCart = (product) => {
		if (cart.some((productCart) => productCart.id == product.id)) {
			const update = cart.map((productCart) => {
				if (productCart.cantidad > 0) {
					return productCart.id == product.id
						? { ...productCart, cantidad: productCart.cantidad - 1 }
						: productCart;
				}
			});

			const productsFiltered = update.filter(
				(productCart) => productCart.cantidad > 0
			);

			setCart(productsFiltered);
		}
	};

	return (
		<>
			<Header />
			<Cart
				addToCart={handleAddToCart}
				removeTocart={handleRemoveToCart}
				cart={cart}
			/>
			<Products
				products={products}
				addToCart={handleAddToCart}
				removeTocart={handleRemoveToCart}
				cart={cart}
			/>
			<Footer />
		</>
	);
}

export default App;
