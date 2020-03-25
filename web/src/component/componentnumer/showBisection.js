import React,{Component} from 'react'
import BisectionList from './BisectionList'
class ShowBisection extends Component
{
    showBisection = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <BisectionList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showBisection()}
            </div>
        )
    }
}
export default ShowBisection;