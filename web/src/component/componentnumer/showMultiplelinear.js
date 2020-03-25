import React,{Component} from 'react'
import MultiplelinearList from './MultiplelinearList'
class ShowMultiplelinear extends Component
{
    showMultiplelinear = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <MultiplelinearList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showMultiplelinear()}
            </div>
        )
    }
}
export default ShowMultiplelinear;