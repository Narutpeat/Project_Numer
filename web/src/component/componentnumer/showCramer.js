import React,{Component} from 'react'
import CramerList from './CramerList'
class ShowCramer extends Component
{
    showCramer = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <CramerList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showCramer()}
            </div>
        )
    }
}
export default ShowCramer;