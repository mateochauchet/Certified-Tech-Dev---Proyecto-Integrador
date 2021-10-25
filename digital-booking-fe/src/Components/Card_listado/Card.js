import React , {Component} from 'react';
import CardsImg from './CardsImg';
import CardsInfo from './CardsInfo';

class Card extends Component {
	

  render() {
      
    return <div className="card">
      <CardsImg house={this.props.house}/>
      <CardsInfo house={this.props.house}/>
    </div>;
  }
}

export default Card;