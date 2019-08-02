import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './CardComponent.css';
import Card from 'react-bootstrap/Card';


class CardComponent extends Component{


render(){

        return <div >
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </div>
    }

}

export default CardComponent;
