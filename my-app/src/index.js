import React from "react"
import ReactDom from "react-dom"
import Main from './Components/Main'



// const element = React.createElement('h1',null,
//     users.map((user,index) => React.createElement('li',{key : index},user))
// );



ReactDom.render(<Main/>,document.getElementById('root'))