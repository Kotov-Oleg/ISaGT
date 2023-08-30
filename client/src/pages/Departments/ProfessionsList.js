import React, {useState, useEffect} from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';

const dProfessionsList = [
  {id: 1, name: 'Иван', surname: 'Иванов', patronymic: 'Иванович', photo: '/fdsfds/sdfsdf', post: 'Доцент'},
  {id: 2, name: 'Иван1', surname: 'Иванов1', patronymic: 'Иванович1', photo: '/fdsfds/sdfsdf', post: 'Ассистент'},
]

const dTeacherInfo = {
  id: 1, 
  name: 'Иван',
  surname: 'Иванов',
  patronymic: 'Иванович',
  photo: '/fdfew/wefw',
  description: `Профессор, доктор технических наук. Направления работы: применение ЭВМ и автоматизация управления силами флота;
  Государственное муниципальное управление Cras sit amet nibh libero, in gravida nulla. Nulla vel
  metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
  condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`,
  post: 'Доцент'
}


const ProfessionsList = () => {
  const [teacherCardData, setTeacherCardData] = useState([]);
  useEffect(() => {
    teacherCardCreate()
  }, [])

  function teacherCardCreate() {
    let data = []
    for (let i in dProfessionsList) {
      data.push(<ProfessionCard
        id = {dProfessionsList[i].id}
        name = {dProfessionsList[i].name}
        surname = {dProfessionsList[i].surname}
        patronymic = {dProfessionsList[i].patronymic}
        post = {dProfessionsList[i].post}
        photo = {dProfessionsList[i].photo}
      />)
    }
    setTeacherCardData(data)
  } 
  return (
    <div className="teacher-card-grid">
      {teacherCardData}
    </div>
  )
}

export default ProfessionsList;



const ProfessionCard = (props) => {
  console.log(props)

  return (
    <Card key={props.id} className="card1 bg-light card-height">
      <Card.Img 
        variant="top"
        alt="Photo" 
      />
      <Card.Body>
          <Card.Title>{`${props.surname} ${props.name} ${props.patronymic}`}</Card.Title>
          <Card.Text>{props.post}</Card.Text>
      </Card.Body>
    </Card>
  )
}