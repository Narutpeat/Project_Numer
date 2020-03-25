import React,{Component} from 'react'
import axios from 'axios';
import ShowUser from './componentForHomeContent/ShowUser'

class HomeContent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { users: ""};
    }

    componentDidMount()
    {

        axios.get("http://192.168.99.100/:8080/api/users/showUser").then(res=>{
            console.log(res.data);
            //console.log(res.data.data);
            this.setState({users: res.data.data});
        })
    }

    render()
    {
        console.log("in state : ",this.state.users);
        return(
            <div>
                <h3>Home</h3>
                {<ShowUser users={this.state.users}/>}
            </div>
        )
    }
}
export default HomeContent;
