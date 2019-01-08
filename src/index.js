import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

class ContactCard extends React.Component {
  render() {
    const allPerson = this.props.person;
    const eachPerson = allPerson.map( obj =>

      <div class = "card" >
        <div class="container">
          <h4><b>{obj.name}</b></h4>
          <p>{obj.email}</p>
          <p>{obj.mobileNum}</p>
          <p>{obj.workNum}</p>
        </div>
      </div>

    );
    return(
      <div>{eachPerson}</div>
    );
  }
}


ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  mobileNum: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

const PERSON = [
  {
   id: 1,
   name: 'Rachel',
   email:'person1@email',
   mobileNum:'123-123-1234',
   //workNum: '123-123-1234'   // its optional
  },

  {
   id: 2,
   name: 'Jack',
   email:'person2@email',
   mobileNum:'123-123-1234',
   workNum: '347-555-1234'
  },

  {
   id: 3,
   name: 'Ana',
   email:'person3@email',
   mobileNum:'123-123-1234',
   workNum: '646-123-4321'
  }
];

ReactDOM.render(
  <ContactCard person={PERSON} />,

  document.getElementById('root')
);
