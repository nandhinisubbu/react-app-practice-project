import React from "react";
import ReactDom from "react-dom";

const users = ['Tom','Jerry','Micky'];
// const element = React.createElement('h1',null,
//     users.map((user,index) => React.createElement('li',{key : index},user))
// );

const element =
    <div>
        <h1>Users</h1>
        <ol>
    {users.map((user,index) => <li key = {index}> {user} </li>)}
    </ol>
    </div>

ReactDom.render(element,document.getElementById('root'))