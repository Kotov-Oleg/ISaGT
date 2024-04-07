import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import ProfessionsList from './ProfessionsList';

const dDepInfo = {
  id: 1,
  name: 'Кафедра прикладной информатики',
  description: `Кафедра прикладной информатики создана с целью подготовки обучающихся lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas minus odio pariatur,
  deleniti quam eveniet architecto nisi quo a quod soluta provident dolorem eius ab eos ad error minima corrupti esse aliquam
  modi voluptatum. Molestias, fugit eum modi, doloremque cumque architecto delectus, nemo sapiente aliquid totam voluptatem laborum
  inventore veniam itaque enim consequuntur non repudiandae. Eaque quia nemo, nihil praesentium amet aperiam ab, debitis magni exercitationem quos
  saepe ullam explicabo eveniet sed sapiente facilis vero corrupti suscipit optio dolore sit animi, odio quod! Explicabo nobis perferendis tempore temporibus repudiandae,
  suscipit aut sit illo, adipisci, perspiciatis molestiae saepe reiciendis cum quo.`,
  head: 'Истомин Е.П.',
  headDescription: `Профессор, доктор технических наук. Направления работы: применение ЭВМ и автоматизация управления силами флота;
  Государственное муниципальное управление Cras sit amet nibh libero, in gravida nulla. Nulla vel
  metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
  condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus`,
  logo: '',
}

const DepartmentInfo = (props) => {

  return (
    <div>
      <div>
        <h4>{dDepInfo.name}</h4>
        <hr/>
        <p className='text-post1'>{dDepInfo.description}</p>
        <hr/>
      </div>

      <Container style={{ padding: "0px" }}> 
        <Card className="card3" style={{ margin: "10px 0px", padding: "0px" }}>
          <Col className="col-md-5 mb-md-0 p-md-4 logo_for_media_pr">
            {/* <img src={dDepInfo.logo} alt='Photos' style={{ width: "80%" }} />  */}
          </Col>
          <Col className="text-post1 col-md-7 p-4 ps-md-0" id="text_pr_inf">
            <Card.Body className="dir">
              <h5>Заведующий кафедрой - {dDepInfo.head}</h5>
              <p className="text-post1">{dDepInfo.headDescription} </p>
            </Card.Body>
          </Col>
        </Card>
        <hr />
      </Container>
      <ProfessionsList />
      <hr/>
      <Container>
        <h5>Направления подготовки</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item list"> <a href="/napr" className="links_for_panel">09.03.03	Прикладная информатика	Прикладные информационные системы и технологии</a></li>
          <li class="list-group-item list">38.03.05	Бизнес-информатика	Бизнес-аналитика</li>
        </ul>
      </Container>
      <hr />
    </div>
  )
}

export default DepartmentInfo;