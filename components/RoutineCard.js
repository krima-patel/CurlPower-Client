import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function RoutineCard({ title, hairType, date }) {
  return (
    <>
      <Card className="routine-cards" style={{ width: '18rem', margin: '15px' }}>
        <Card.Body style={{ textAlign: 'left' }}>
          <Card.Subtitle className="routine-hairType">
            <b>Hair Type {hairType}</b>
          </Card.Subtitle>
          <Card.Title className="routine-title">
            <b>{title}</b>
          </Card.Title>
          <Card.Subtitle className="routine-date">Posted: {date}</Card.Subtitle>
          {/* <h5 style={{ color: '#DC6434' }}>{user}</h5> */}
          {/* {user.uid === routineObj.uid ? (
            <>
              <Link href={`/routine/${routineObj.firebaseKey}`} passHref>
                <Button className="routine-btns">Learn More</Button>
              </Link>
              <Link href={`/routine/edit/${routineObj.firebaseKey}`} passHref>
                <Button className="routine-btns">Update</Button>
              </Link>
              <Button onClick={deleteThisRoutine} className="routine-btns" id="delete-btn">
                Delete
              </Button>
            </>
          ) : (
            <Link href={`/routine/${routineObj.firebaseKey}`} passHref>
              <Button className="routine-btns">Learn More</Button>
            </Link>
          )} */}
        </Card.Body>
      </Card>
    </>
  );
}

RoutineCard.propTypes = {
  title: PropTypes.string.isRequired,
  hairType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // user: PropTypes.string.isRequired,
};
