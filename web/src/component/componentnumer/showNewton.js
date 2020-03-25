import React,{Component} from 'react'
import NewtonList from './NewtonList'
class ShowNewton extends Component
{
    showNewton = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <NewtonList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showNewton()}
            </div>
        )
    }
}
export default ShowNewton;