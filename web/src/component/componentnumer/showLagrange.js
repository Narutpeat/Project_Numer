import React,{Component} from 'react'
import LagrangeList from './LagrangeList'
class ShowLagrange extends Component
{
    showLagrange = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <LagrangeList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showLagrange()}
            </div>
        )
    }
}
export default ShowLagrange;