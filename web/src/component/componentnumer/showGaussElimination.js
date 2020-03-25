import React,{Component} from 'react'
import GaussEliminationList from './GaussEliminationList'
class ShowGaussElimination extends Component
{
    showGaussElimination = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <GaussEliminationList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showGaussElimination()}
            </div>
        )
    }
}
export default ShowGaussElimination;