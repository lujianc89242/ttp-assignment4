import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ContactCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      mobileNum: props.mobileNum,
      workNum: props.workNum,
      email: props.email
    }
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const PERSON = [
  {name: 'person1',
   email:'person1@email',
   mobileNum:'123-123-1234',
   workNum: '123-123-1234'
  },

  {name: 'person2',
   email:'person2@email',
   mobileNum:'123-123-1234',
   workNum: '123-123-1234'
  },

  {name: 'person3',
   email:'person3@email',
   mobileNum:'123-123-1234',
   workNum: '123-123-1234'
  }
];

ReactDOM.render(
  <ContactCard />,
  document.getElementById('root')
);
