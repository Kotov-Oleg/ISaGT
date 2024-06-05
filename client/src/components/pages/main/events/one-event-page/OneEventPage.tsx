import React from 'react';
import {useParams} from "react-router-dom";

const OneEventPage = () => {
  const {eventId} = useParams()
  return (
    <div>
      {eventId}
    </div>
  );
};

export default OneEventPage;