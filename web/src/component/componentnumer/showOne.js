import React,{Component} from 'react'
import OneList from './OneList'
class ShowOne extends Component
{
    showOne = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <OneList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showOne()}
            </div>
        )
    }
}
export default ShowOne;