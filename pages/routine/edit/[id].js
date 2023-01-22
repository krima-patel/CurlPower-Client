import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import RoutineForm from '../../../components/forms/RoutineForm';
import { getSingleRoutine } from '../../../utils/data/routineData';

export default function EditRoutine() {
  const [editRoutine, setEditRoutine] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleRoutine(id).then(setEditRoutine);
  }, [id]);
  return (<RoutineForm routineObj={editRoutine} />);
}
