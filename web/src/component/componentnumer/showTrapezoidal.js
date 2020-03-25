import React,{Component} from 'react'
import TrapezoidalList from './TrapezoidalList'
class ShowTrapezoidal extends Component
{
    showTrapezoidal = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <TrapezoidalList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showTrapezoidal()}
            </div>
        )
    }
}
export default ShowTrapezoidal;