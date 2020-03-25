import React,{Component} from 'react'
import Forward2List from './Forward2List'
class ShowForward2 extends Component
{
    showForward2 = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <Forward2List key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showForward2()}
            </div>
        )
    }
}
export default ShowForward2;