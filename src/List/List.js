import React, { useState, useEffect } from 'react';
import './List.css';
import ReactDOM from 'react-dom';
const listArray = [
    {
        id: '_e265563a',
        firstname: 'Robin',
        lastname: 'Wieruch',
        phone: "9837465221",
        year: 1988,
    },
    {
        id: '_r432678u',
        firstname: 'Dave',
        lastname: 'Davidds',
        phone: "8776123452",
        year: 1990,
    },
    {
        id: '_q903847o',
        firstname: 'John',
        lastname: 'Smith',
        phone: "7568906543",
        year: 1957,
    },
    {
        id: '_s722908p',
        firstname: 'Steeve',
        lastname: 'Jobs',
        phone: "886512345",
        year: 1965,
    },
];
function List() {
    const [loader, setLoader] = useState(true)
    const [list, setList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [todosPerPage, setTodosPerPage] = useState(4)
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = list?list.slice(indexOfFirstTodo, indexOfLastTodo):null;
    function handleClick(event) {
        // this.setState({
        //     currentPage: Number(event.target.id)
        // });
        setCurrentPage(Number(event.target.id))
    }
    useEffect(() => {
        fetchData();
    }, []);
    function fetchData() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                console.log("data", data)
                setList(data)
                setLoader(false)
            })
            .catch((err) => {
                console.log("err", err)
            })
    }
    const renderTodos = currentTodos.map((res, index) => {
        return (
            <div class="row">
                <div class="col-20">
                    {res.id}
                </div>
                <div class="col-20">
                    {res.name}
                </div>
                <div class="col-20">
                    {res.email}
                </div>
                <div class="col-20">
                    {res.phone}
                </div>
                <div class="col-20">
                    {res.company.name}
                </div>
            </div>
        );
    });
    const pageNumbers = [];
    if(list){
        for (let i = 1; i <= Math.ceil(list.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }
    }
   

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <div class="page-numbers">
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                >
                    {number}
                </li>
            </div>
        );
    });
    if (loader) {
        return(
            <div class="heading">
                loading.....
            </div>
        )
    } else {
        return (
            <div>
                <h1 class="heading">List</h1>
                <div class="row-header">
                    <div class="col-20">
                        user-id
                    </div>
                    <div class="col-20">
                        name
                    </div>
                    <div class="col-20">
                    email
                    </div>
                    <div class="col-20">
                        phone
                    </div>
                    <div class="col-20">
                    company name
                    </div>
                </div>
                {renderTodos}
                <div class="pages">
                    <ul id="page-numbers" >
                        {renderPageNumbers}
                    </ul>
                </div>
                {/* {
        list.map((res, key) => {
            return (
                <div class="row">
                    <div class="col-20">
                        {res.id}
                    </div>
                    <div class="col-20">
                        {res.firstname}
                    </div>
                    <div class="col-20">
                        {res.lastname}
                    </div>
                    <div class="col-20">
                        {res.phone}
                    </div>
                    <div class="col-20">
                        {res.year}
                    </div>
                </div>
            )

        })
    } */}
            </div >
        )
    }
}
export default List;
ReactDOM.render(<List />, document.getElementById('root'));