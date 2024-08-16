import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import renderStockColor from '../helpers/helpers';

const CardProduct = ({
	id,
	nombre,
	precio,
	sku,
	stock,
	disponibilidad,
	addToCart,
	removeTocart,
}) => {
	return (
		<>
			<Card>
				<Card.Img
					variant="top"
					src={''}
				/>
				<Card.Body>
					<Card.Title>{nombre}</Card.Title>
					<Card.Text>serie: {sku}</Card.Text>
					<Card.Text>${precio}</Card.Text>
					<Button variant={renderStockColor(stock)}>
						{stock} - {disponibilidad}
					</Button>
					<hr />
					<Button
						onClick={() =>
							addToCart({
								id,
								nombre,
								precio,
								sku,
								stock,
								disponibilidad,
								addToCart,
							})
						}
						variant="primary"
					>
						Add To Cart
					</Button>
					<hr />
					<Button
						onClick={() =>
							removeTocart({
								id,
								nombre,
								precio,
								sku,
								stock,
								disponibilidad,
								addToCart,
							})
						}
						variant="primary"
					>
						Remove From Cart
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};

CardProduct.propTypes = {
	id: PropTypes.string.isRequired,
	nombre: PropTypes.string.isRequired,
	precio: PropTypes.number.isRequired,
	sku: PropTypes.string.isRequired,
	stock: PropTypes.number.isRequired,
	disponibilidad: PropTypes.string.isRequired,
	addToCart: PropTypes.func.isRequired,
	removeTocart: PropTypes.func.isRequired,
};

export default CardProduct;
