import React,{Component} from 'react'
import LinearList from './LinearList'
class ShowLinear extends Component
{
    showLinear = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <LinearList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showLinear()}
            </div>
        )
    }
}
export default ShowLinear;