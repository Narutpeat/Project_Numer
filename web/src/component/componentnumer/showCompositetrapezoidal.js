import React,{Component} from 'react'
import CompositetrapezoidalList from './CompositetrapezoidalList'
class ShowCompositetrapezoidal extends Component
{
    showCompositetrapezoidal = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <CompositetrapezoidalList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showCompositetrapezoidal()}
            </div>
        )
    }
}
export default ShowCompositetrapezoidal;