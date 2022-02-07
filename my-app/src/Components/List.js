import React,{Component} from 'react'

const users = ['Tom','Jerry','Micky'];
class List extends Component{
    render(){
        return (<ol>
                {users.map((user,index) => <li key = {index}> {user} </li>)}
             </ol>)
    }

}

export default List