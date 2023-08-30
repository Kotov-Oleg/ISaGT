import React, {useEffect, useState} from 'react';

import './departments.css'

const defaultDepartmentList = [
  {id: 1, name: 'Прикладной информатики'},
  {id: 2, name: 'Высшей математики и теоретической механики'},
  {id: 3, name: 'Информационных технологий и систем безопасности'},
  {id: 4, name: 'Морских информационных систем'},
  {id: 5, name: 'Физики'},
]

const DepartmensList = () => {
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    LineCreate()
  }, [])

  
  // формирование строк
  function LineCreate() {
    let data = []
    for (let i in defaultDepartmentList) {
      data.push(<Line 
        id={defaultDepartmentList[i].id} 
        name={defaultDepartmentList[i].name}
      />)
    }
    setLineData(data)
  }

  return (
    <div 
      className='pb-5'
    >
      <h4 className='pt-5 mb-3'>Кафедры</h4>
      <div
        className='left-pannel'
      >
        <ul className='list-group list-group-flush'>
          {lineData}
        </ul>
      </div>
    </div>
  )
};

export default DepartmensList;

const Line = (props) => {
  console.log(props)
  return (
    <li
      key={props.id} 
      className='list-group-item list'
    >
      <a 
        href={'/'}
        className='links_for_panel'  
      >
        {props.name}
      </a>
    </li>
  )
}