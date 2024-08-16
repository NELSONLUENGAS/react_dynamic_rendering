import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../components/CardProduct';

const Products = ({ products, addToCart, cart, removeTocart }) => {
	const handleCount = (items) => {
		const counter = items.reduce((acumulador, producto) => {
			return (acumulador += producto.cantidad);
		}, 0);

		return counter;
	};

	const handleTotalPrice = (items) => {
		return items.reduce((acumulador, producto) => {
			return (acumulador += producto.precio * producto.cantidad);
		}, 0);
	};

	return (
		<>
			<div className="container">
				{/* <div>
					<h1 className="text-white">Cantidad: {handleCount(cart)}</h1>
				</div>
				<div>
					<h1 className="text-white">
						Precio Total: ${handleTotalPrice(cart)}
					</h1>
				</div> */}

				<div className="grid-products">
					{products?.length &&
						products.map((product, key) => (
							<CardProduct
								key={key}
								{...product}
								addToCart={addToCart}
								removeTocart={removeTocart}
							/>
						))}
				</div>
			</div>
		</>
	);
};

Products.propTypes = {
	products: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired,
	removeTocart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
};

export default Products;
