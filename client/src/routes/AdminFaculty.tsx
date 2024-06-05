import {FacultyI} from "src/store/facultyStore";
import React, {FC} from "react";
import {Navigate, useParams} from "react-router-dom";
import Admin from "src/components/pages/admin/Admin";
import {adminRoute} from "src/routes/authorizedRoutes";

interface PropsI {
  faculties: FacultyI[]
}

const AdminFaculty: FC<PropsI> = ({faculties}) => {
  const { faculty } = useParams();

  if (faculties.findIndex(f => f.alias === faculty) !== -1) {
    return <Admin />;
  } else {
    return <Navigate to={`/${adminRoute}/${faculties[0].alias}`} replace/>;
  }
};

export default AdminFaculty;