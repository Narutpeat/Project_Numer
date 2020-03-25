import React,{Component} from 'react'
import SplineList from './SplineList'
class ShowSpline extends Component
{
    showSpline = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <SplineList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showSpline()}
            </div>
        )
    }
}
export default ShowSpline;