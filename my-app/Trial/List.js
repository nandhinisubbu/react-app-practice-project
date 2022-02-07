import React,{Component} from 'react'

// const element = React.createElement('h1',null,
//     users.map((user,index) => React.createElement('li',{key : index},user))
// );

const users = ['Tom','Jerry','Micky'];
class List extends Component{
    render(){
        return (<ol>
                {users.map((user,index) => <li key = {index}> {user} </li>)}
             </ol>)
    }

}

export default List