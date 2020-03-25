import React,{Component} from 'react'
import SecantList from './SecantList'
class ShowSecant extends Component
{
    showSecant = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <SecantList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showSecant()}
            </div>
        )
    }
}
export default ShowSecant;