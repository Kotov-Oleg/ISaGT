// Проверка факультета на валидность
import {Navigate, useParams} from "react-router-dom";
import Main from "src/components/pages/main/main/Main";
import React, {FC} from "react";
import {FacultyI} from "src/store/facultyStore";

interface PropsI {
  faculties: FacultyI[]
}

const FacultyRoute: FC<PropsI> = ({faculties}) => {
  const { faculty } = useParams();
  console.log('main')

  if (faculties.findIndex(f => f.alias === faculty) !== -1) {
    return <Main />;
  } else {
    return <Navigate to={'/' + faculties[0].alias} replace/>;
  }
};

export default FacultyRoute;