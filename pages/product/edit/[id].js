import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProductForm from '../../../components/forms/ProductForm';
import { getSingleProduct } from '../../../utils/data/productData';

export default function EditProduct() {
  const [editProductItem, setEditProductItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setEditProductItem);
  }, [id]);

  return (<ProductForm productObj={editProductItem} />);
}
