import React,{Component} from 'react'
import SimpsonList from './SimpsonList'
class ShowSimpson extends Component
{
    showSimpson = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <SimpsonList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showSimpson()}
            </div>
        )
    }
}
export default ShowSimpson;