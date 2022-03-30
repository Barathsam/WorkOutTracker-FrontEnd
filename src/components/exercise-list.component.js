import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Exercise(props) {
  return (
    <tr>
      <td>{props.exercise.userName}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to = {`/edit/${props.exercise._id}`}>
          Edit
        </Link>
        |
        <button
          className = 'btn-link'
          href = '#'
          onClick = {() => props.deleteExercise(props.exercise._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:9009/exercises')
      .then(response => {
        this.setState({
          exercises: response.data
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  deleteExercise(id) {
    axios.delete(`http://localhost:9009/exercises/${id}`)
      .then(response => console.log(response.data));

    this.setState({
      exercises: this.state.exercises.filter(ex => ex._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentExercise => {
      return (
        <Exercise 
          exercise = {currentExercise}
          deleteExercise = {this.deleteExercise}
          key = {currentExercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className = 'table'>
          <thead className = 'thread-light'>
            <tr>
              <th>User name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    );
  }
}