import React,{Component} from 'react'
import Central2List from './Central2List'
class ShowCentral2 extends Component
{
    showCentral2 = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <Central2List key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showCentral2()}
            </div>
        )
    }
}
export default ShowCentral2;