import React,{Component} from 'react'
import JacobiList from './JacobiList'
class ShowJacobi extends Component
{
    showJacobi = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <JacobiList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showJacobi()}

            </div>
        )
    }
}
export default ShowJacobi;