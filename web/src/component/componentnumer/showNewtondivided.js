import React,{Component} from 'react'
import NewtondividedList from './NewtondividedList'
class ShowNewtondivided extends Component
{
    showNewtondivided = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <NewtondividedList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showNewtondivided()}
            </div>
        )
    }
}
export default ShowNewtondivided;