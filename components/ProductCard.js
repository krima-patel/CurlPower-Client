import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';

export default function ProductCard({
  id, imageUrl, productType, name, purpose, date,
}) {
  return (
    <Card className="product-cards" style={{ width: '18rem', margin: '15px' }}>
      <Card.Img variant="top" src={imageUrl} alt={productType} style={{ height: '400px' }} className="card-img-top" />
      <Card.Body>
        <Card.Title className="product-name">{name}</Card.Title>
        <Card.Text className="product-purpose">{purpose}</Card.Text>
        <Card.Subtitle className="product-date">Posted: {date}</Card.Subtitle>
        <>
          <Link href={`/product/${id}`} passHref>
            <Button className="product-btns">
              More Info
            </Button>
          </Link>
          <Link href={`/product/edit/${id}`} passHref>
            <Button className="product-btns">Update</Button>
          </Link>
        </>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // uid: PropTypes.string.isRequired,
};
