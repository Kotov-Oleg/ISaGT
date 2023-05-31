import React from "react";
import { Container, Card, Col } from 'react-bootstrap';

const NewsCard = (props) => {

  return (
    <Card className="col-3 card1 card-height">
      <Card.Img variant="top"
          src={props.img} />
      <Card.Body className="for_table_btn_bottom">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <div className="btn_bottom"><button type="button" className="btn btn-info mt-2 tags_but">Спорт</button>
              <button type="button" className="btn btn-primary mt-2 tags_but">Поступающим</button></div>
      </Card.Body>
    </Card>
  )
}
export default NewsCard;