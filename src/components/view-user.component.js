import React, { Component } from 'react';
import axios from 'axios';

function JoinedSince(props) {
  const date = new Date(props.user.createdAt);
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.toLocaleString('default', { year: 'numeric' });

  return (
    <div>
      <b>Joined since </b>
      {month}, {year}
    </div>
  );
}

function MaxDuration(exercises) {
  let maxDur = 0;
  let maxDes = '';

  for( var i = 0; i < exercises.length; i++ ) {
    if( exercises[i].duration >= maxDur ) {
      maxDur = exercises[i].duration;
      maxDes = exercises[i].description;
    }
  }

  const maxEx = {
    duration: maxDur,
    description: maxDes
  }

  return maxEx;
}

function Achievement(props) {
  const maxEx = MaxDuration(props.exercises);
  const maxDur = maxEx.duration;
  const maxDes = maxEx.description;

  return (
    <div class = 'card'>
      <img src = 'https://media.istockphoto.com/vectors/vector-flat-golden-trophy-vector-id1176397624?k=6&m=1176397624&s=612x612&w=0&h=JKDxyos4Sp8YHE3IOqxww_q0QitlSE--qd3RIxpBt3E=' 
        alt = '...'
        width = '150'
        height = '150'
      />
      <div class = 'card-body'>
        <h5 class = 'card-title'>
          Achievements
        </h5>
        <p class = 'card-text'>
          {maxDes + ' --- '} 
          <b>{maxDur + ' '}</b>
          minutes
        </p>
      </div>
    </div>
  );
}

export default class ViewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      exercises: []
    }
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    axios.get(`http://localhost:9009/users/${userId}`)
      .then(response => {
        this.setState({
          user: response.data
        });

        axios.post('http://localhost:9009/exercises/findExerciseByUserName', {
          userName: this.state.user.userName
        })
          .then(response => {
            this.setState({
              exercises: response.data
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div>
        <h3>{this.state.user.userName}</h3>
        <br></br>
        <JoinedSince user = {this.state.user} />
        <br></br>
        <br></br>
        <Achievement exercises = {this.state.exercises} />
      </div>
    );
  }
}
