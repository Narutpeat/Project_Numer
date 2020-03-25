import React,{Component} from 'react'
import GaussJordanList from './GaussJordanList'
class ShowGaussJordan extends Component
{
    showGaussJordan = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <GaussJordanList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showGaussJordan()}
            </div>
        )
    }
}
export default ShowGaussJordan;