import React,{Component} from 'react'
import PolynomialList from './PolynomialList'
class ShowPolynomial extends Component
{
    showPolynomial = ()=>{
        if(this.props.users)
        {
            console.log("props in ShowUser : ",this.props.users);
            return this.props.users.map(user=>(
                <PolynomialList key ={user._id} {...user}/>
            ))
        }
    }
    render()
    {
        return(
            <div>
                {this.showPolynomial()}
            </div>
        )
    }
}
export default ShowPolynomial;