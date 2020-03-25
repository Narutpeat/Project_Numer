import React,{Component} from 'react'
import Central1List from './Central1List'
class ShowCentral1 extends Component
{
    showCentral1 = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <Central1List key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showCentral1()}
            </div>
        )
    }
}
export default ShowCentral1;