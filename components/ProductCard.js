import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function ProductCard({
  imageUrl, productType, name, purpose, date,
}) {
  return (
    <Card className="product-cards" style={{ width: '18rem', margin: '15px' }}>
      <Card.Img variant="top" src={imageUrl} alt={productType} style={{ height: '400px' }} className="card-img-top" />
      <Card.Body>
        <Card.Title className="product-name">{name}</Card.Title>
        <Card.Text className="product-purpose">{purpose}</Card.Text>
        <Card.Subtitle className="product-date">Posted: {date}</Card.Subtitle>
        {/* <h5 style={{ color: '#DC6434' }}>{userDetails.userName}</h5> */}
        {/* <img className="user-image" src={userDetails.userImage} alt={userDetails.userName} /> */}
        {/* {productObj.uid === user.uid ? (
          <>
            <Link href={`/product/${productObj.firebaseKey}`} passHref>
              <Button className="product-btns">
                More Info
              </Button>
            </Link>
            <Link href={`/product/edit/${productObj.firebaseKey}`} passHref>
              <Button className="product-btns">Update</Button>
            </Link>
            <Button onClick={deleteThisProduct} className="product-btns" id="delete-product-btn">
              Delete
            </Button>
          </>
        ) : (
          <Link href={`/product/${productObj.firebaseKey}`} passHref>
            <Button className="product-btns">
              More Info
            </Button>
          </Link>
        )} */}
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  productType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
