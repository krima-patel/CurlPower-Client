import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';
// import { useAuth } from '../utils/context/authContext';

export default function RoutineCard({
  id, title, hairType, date,
}) {
  // const { user } = useAuth();
  return (
    <>
      <Card className="routine-cards" style={{ width: '18rem', margin: '15px' }}>
        <Card.Body style={{ textAlign: 'left' }}>
          <Card.Subtitle className="routine-hairType">
            <b>Hair Type: {hairType}</b>
          </Card.Subtitle>
          <Card.Title className="routine-title">
            <b>{title}</b>
          </Card.Title>
          <Card.Subtitle className="routine-date">Posted: {date}</Card.Subtitle>
          <>
            <Link href={`/routine/${id}`} passHref>
              <Button className="routine-btns">Learn More</Button>
            </Link>
            <Link href={`/routine/edit/${id}`} passHref>
              <Button className="routine-btns">Update</Button>
            </Link>
          </>
        </Card.Body>
      </Card>
    </>
  );
}

RoutineCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  hairType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // user: PropTypes.string.isRequired,
};
