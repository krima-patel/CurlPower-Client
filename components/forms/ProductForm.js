import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { createProduct, getProductRoutines, updateProduct } from '../../utils/data/productData';

const initialState = {
  name: '',
  type: '',
  imageUrl: '',
  purpose: '',
  priceRange: '$',
  routineId: {
    id: 0,
    title: '',
  },
};

const ProductForm = ({ productObj }) => {
  const [routines, setRoutines] = useState([]);
  const [productFormInput, setProductFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getProductRoutines().then(setRoutines);
    if (productObj?.id) {
      setProductFormInput(productObj);
    }
  }, [productObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productObj?.id) {
      updateProduct(productFormInput, productObj.id).then(() => router.push('/products'));
    } else {
      createProduct(productFormInput).then(() => router.push('/products'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>What&#39;s the Product Name?</Form.Label>
          <Form.Control name="name" required value={productFormInput.name} onChange={handleChange} />
          <Form.Label>What&#39;sthe Product Type?</Form.Label>
          <Form.Control name="type" required value={productFormInput.type} onChange={handleChange} />
          <Form.Label>What&#39;s the Product Purpose?</Form.Label>
          <Form.Control name="purpose" required value={productFormInput.purpose} onChange={handleChange} />
          <FloatingLabel controlId="floatingSelect" label="Select the Routine this Product goes with">
            <Form.Select aria-label="Routine" name="routineId" value={productFormInput.routineId?.id} onChange={handleChange} className="mb-3" required>
              <option value="">Select Routine</option>
              {routines?.map((routine) => (
                <option
                  key={routine.id}
                  value={routine.id}
                  // instead of selected, can also add defaultValue
                  selected={productObj?.routine_id === routine.id}
                >
                  {routine.title}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="Is this product budget friendly or does it break the bank?">
            <Form.Select aria-label="Product Price Range" type="text" name="priceRange" value={productFormInput?.priceRange} onChange={handleChange} className="mb-3" required>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
            </Form.Select>
          </FloatingLabel>
          <Form.Label>Image</Form.Label>
          <Form.Control name="imageUrl" required value={productFormInput.imageUrl} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

ProductForm.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    imageUrl: PropTypes.string,
    purpose: PropTypes.string,
    priceRange: PropTypes.string,
    routine_id: PropTypes.string,
    routineId: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  }).isRequired,
};

// ProductForm.defaultProps = {
//   productObj: initialState,
// };

export default ProductForm;
