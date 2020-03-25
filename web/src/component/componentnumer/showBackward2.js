import React,{Component} from 'react'
import Backward2List from './Backward2List'
class ShowBackward2 extends Component
{
    showBackward2 = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <Backward2List key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showBackward2()}
            </div>
        )
    }
}
export default ShowBackward2;