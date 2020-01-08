import React from "react"
import "./Pagination.css"
import ReactDOM from 'react-dom';
class Pagination extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n','o','p'],
            currentPage: 1,
            todosPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        console.log("indexOfLastTodo",indexOfLastTodo)
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        console.log("indexOfFirstTodo",indexOfFirstTodo)
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log("currentTodos",currentTodos)
        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <ul>
                    {renderTodos}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }


}

export default Pagination
// ReactDOM.render(
//     <Pagination />,
//     document.getElementById('app')
// );