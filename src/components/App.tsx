import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoContext from '../contexts/TodoContext';
import AddTodo from './AddTodo';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>
                        <Route path="/">
                            <h4>Minha lista de tarefas</h4>
                            <TodoList></TodoList>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </TodoContext>
    );
}

export default App;