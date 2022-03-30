import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import UserList from './components/user-list.component';
import ViewUser from './components/view-user.component';

function App() {
  return (
    <Router>
      <div className = 'container'>
        <Navbar />
        <br/>
        <Route path = '/' exact component = {ExerciseList} />
        <Route path = '/edit/:id' component = {EditExercise} />
        <Route path = '/createExercise' component = {CreateExercise} />
        <Route path = '/createUser' component = {CreateUser} />
        <Route path = '/userList' component = {UserList} />
        <Route path = '/user/:id' component = {ViewUser} />
      </div>
    </Router>
  );
}

export default App;
