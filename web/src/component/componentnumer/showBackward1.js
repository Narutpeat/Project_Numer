import React,{Component} from 'react'
import Backward1List from './Backward1List'
class ShowBackward1 extends Component
{
    showBackward1 = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <Backward1List key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showBackward1()}
            </div>
        )
    }
}
export default ShowBackward1;