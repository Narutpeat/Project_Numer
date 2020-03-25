import React,{Component} from 'react'
import FalseList from './FalseList'
class ShowFalse extends Component
{
    showFalse = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <FalseList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showFalse()}
            </div>
        )
    }
}
export default ShowFalse;