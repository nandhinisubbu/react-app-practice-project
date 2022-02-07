import React, {Component} from "react";
import ReactDom from "react-dom";

const users = ['Tom','Jerry','Micky'];
// const element = React.createElement('h1',null,
//     users.map((user,index) => React.createElement('li',{key : index},user))
// );




class List extends Component{
    render(){
        return (<ol>
                {users.map((user,index) => <li key = {index}> {user} </li>)}
             </ol>)
    }

}

class Title extends Component{
    render(){
        return (<div>
        <h1>Users</h1>
    </div>)
    }
}

class Main extends Component{
    render(){
        return <div>
                <Title/>
                <List/>
            </div>
    }
}

ReactDom.render(<Main/>,document.getElementById('root'))