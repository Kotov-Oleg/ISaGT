import React from 'react';
import {useParams} from "react-router-dom";

const Kafedra = () => {
  const {depId} = useParams()

  return (
    <div>
      Кафедра {depId}
    </div>
  );
};

export default Kafedra;