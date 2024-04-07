import React from 'react'

import DepartmensList from './DepartmenstList';
import DepartmentInfo from './DepartmentInfo';

const DepartmentPage = () => {

  return (
    <div className='department-page-grid mx-5 mt-5'>
      <DepartmensList/>
      <DepartmentInfo/>
    </div>
  )
}

export default DepartmentPage;