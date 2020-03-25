import React,{Component} from 'react'
import GaussSeidelList from './GaussSeidelList'
class ShowGaussSeidel extends Component
{
    showGaussSeidel = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <GaussSeidelList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showGaussSeidel()}

            </div>
        )
    }
}
export default ShowGaussSeidel;