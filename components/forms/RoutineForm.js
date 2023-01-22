import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createRoutine, updateRoutine } from '../../utils/data/routineData';

const initialState = {
  id: 0,
  title: '',
  hairType: '',
  date: '',
  description: '',
};

const RoutineForm = ({ routineObj }) => {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const getAndSet = () => {
    if (routineObj?.id) {
      setFormInput(routineObj);
    }
  };

  useEffect(() => {
    getAndSet();
  }, [routineObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (routineObj.id) {
      updateRoutine(formInput, routineObj.id).then(() => router.push('/routines'));
    } else {
      createRoutine(formInput).then(() => router.push('/routines'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title of Routine</Form.Label>
          <Form.Control name="title" type="text" required value={formInput.title} onChange={handleChange} />
          <Form.Label>Hair Type</Form.Label>
          <Form.Control name="hairType" type="text" required value={formInput.hairType} onChange={handleChange} />
          <Form.Label>Date</Form.Label>
          <Form.Control name="date" type="date" required value={formInput.date} onChange={handleChange} />
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="text" required value={formInput.description} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

RoutineForm.propTypes = {
  routineObj: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

// RoutineForm.defaultProps = {
//   routineObj: initialState,
// };

export default RoutineForm;
