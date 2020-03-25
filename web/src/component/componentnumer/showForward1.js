import React,{Component} from 'react'
import Forward1List from './Forward1List'
class ShowForward1 extends Component
{
    showForward1 = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <Forward1List key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showForward1()}
            </div>
        )
    }
}
export default ShowForward1;