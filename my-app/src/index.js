import React from "react";
import ReactDom from "react-dom";

const users = ['Tom','Jerry','Micky'];
const element = React.createElement('h1',null,
    users.map((user,index) => React.createElement('li',{key : index},user))
);

ReactDom.render(element,document.getElementById('root'))