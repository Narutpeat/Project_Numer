import React,{Component} from 'react'
import LUList from './LUList'
class ShowLU extends Component
{
    showLU = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <LUList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showLU()}
            </div>
        )
    }
}
export default ShowLU;