import React,{Component} from 'react'
import CompositesimpsonList from './CompositesimpsonList'
class ShowCompositesimpson extends Component
{
    showCompositesimpson = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <CompositesimpsonList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showCompositesimpson()}
            </div>
        )
    }
}
export default ShowCompositesimpson;