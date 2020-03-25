import React,{Component} from 'react'
import ConjugateList from './ConjugateList'
class ShowConjugate extends Component
{
    showConjugate = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <ConjugateList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showConjugate()}

            </div>
        )
    }
}
export default ShowConjugate;