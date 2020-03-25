import React, { Component } from 'react'
import { Input,Button } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,parse
} from 'mathjs'
import ShowForward2 from '../component/componentnumer/showForward2'
var Algebrite = require('algebrite'); 

export default class Forward2 extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            equation:null,
            x:null,
            h:null,
            d:null,
            show : false,
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showForward2").then(res=>{
            console.log(res.data);
            //console.log(res.data.data);
            this.setState({users: res.data.data});
        })
    }
    add(equation,x,h,d){
        this.state ={
            equation:equation,
            x:x,
            h:h,
            d:d
        }
        this.evaluate()
    }
    evaluate (){
        var Parser = require('expr-eval').Parser;
        var Parser = new Parser();
        var er = (xn,xo) => Math.abs((xn-xo)/xn)
        var f = (fx,x) => Parser.parse(Algebrite.run(fx)).evaluate({ x:x,e:e  })
        var f1 = (fx,x) => derivative(parse(fx),'x').evaluate({ x:x  })
        var f2 = (fx,x) => derivative(derivative(parse(fx),'x'),'x').evaluate({ x:x  })
        var f3 = (fx,x) => derivative(derivative(derivative(parse(fx),'x'),'x'),'x').evaluate({ x:x  })
        var f4 = (fx,x) => derivative(derivative(derivative(derivative(parse(fx),'x'),'x'),'x'),'x').evaluate({ x:x  })
        var x = Number(this.state.x) 
        var h = Number(this.state.h)
        var fx = this.state.equation
        var d = this.state.d
        var result=0
        if(d==1){
            result=(-f(fx,x+h+h)+4*f(fx,x+h)-3*f(fx,x))/(2*h)
        }
        else if(d==2){
            result=(-f(fx,x+h+h+h)+4*f(fx,x+h+h)-5*f(fx,x+h)+2*f(fx,x))/Math.pow(h,2)
        }
        else if(d==3){
            result=(-3*f(fx,x+h+h+h+h)+14*f(fx,x+h+h+h)-24*f(fx,x+h+h)+18*f(fx,x+h)-5*f(fx,x))/(2*Math.pow(h,3))
        }
        else if(d==4){
            result=(-2*f(fx,x+h+h+h+h+h)+11*f(fx,x+h+h+h+h)-24*f(fx,x+h+h+h)+26*f(fx,x+h+h)-14*f(fx,x+h)+3*f(fx,x))/Math.pow(h,4)
        }
        var TRUE=0
        if(d==1){
            TRUE=f1(fx,x)
        }
        else if(d==2){
            TRUE=f2(fx,x)
        }
        else if(d==3){
            TRUE=f3(fx,x)
        }
        else if(d==4){
            TRUE=f4(fx,x)
        }
        var err=er(TRUE,result)
        this.table(result,err)
        //this.Graph2(A,B)
    }

    table = (num,err) =>{
        var i=0,k=0
      var values = []
      var c=new Array()
      c[0]="answer"
      c[1]=num
      c[2]=err
      while(c.length) values.push(c.splice(0,1));
      var n = []
      var v = []
      v[0]='variable'
      v[1]='Forward'
      v[2]='ERROR'
    var data = [{
      type: 'table',
      header: {
        values: Array.from(v),
        align: ["left", "center"],
        line: {width: 1, color: '#506784'},
        fill: {color: '#119DFF'},
        font: {family: "Arial", size: 12, color: "white"},
        height: 50 
      },
      cells: {
        values: values,
        align: ["left", "center"],
        line: {color: "#506784", width: 1},
         fill: {color: ['#25FEFD', 'white']},
        font: {family: "Arial", size: 11, color: ["#506784"]},
        height: 50

      }
    }]
    var layout = {
      autosize: false,
      width: 1500,
      height: 300
      };
    Plotly2.newPlot('myDiv', data,layout);
    const { show } = this.state
    this.setState( { show : true } )
    }

    Graph2 = (A,B ) =>{
          var trace1 = {
            x: Array.from(A),
            y: Array.from(B),
            fill: 'tozeroy',
            type: 'scatter'
          };
          var layout = {
            autosize: false,
            width: 1500,
            height: 500,
            margin: {
              l: 50,
              r: 50,
              b: 100,
              t: 100,
              pad: 4
            },
            paper_bgcolor: '#7f7f7f',
            plot_bgcolor: '#c7c7c7'
          };
          var data = [trace1];
          
          Plotly.newPlot('myDiv3', data , layout);
    }

    sendDatatoDB = ()=>{
        axios.post('http://192.168.99.100:8080/api/users/addForward2',{equation:this.state.equation,x:this.state.x,h:this.state.h,d:this.state.d})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:750}}>
                    <h3>Forward Divided Difference O(h^2)</h3>
                    <div>
                    Equation : <Input placeholder="equation" onChange={e=>this.setState({equation:e.target.value})}/>
                    </div>
                    <div>
                    x : <Input placeholder="x" onChange={e=>this.setState({x:e.target.value})}/>
                    </div>
                    <div>
                    h : <Input placeholder="h" onChange={e=>this.setState({h:e.target.value})}/>
                    </div>
                    <div>
                    derivative : <Input placeholder="derivative" onChange={e=>this.setState({d:e.target.value})}/>
                    </div>
                    <br/>
                    <Button type="danger" onClick={this.sendDatatoDB}>Evaluate</Button>
                    {<ShowForward2 users={this.state.users}/>}
                    <div id='myDiv'></div>
                    <br></br>
                    <div id='myDiv3'></div>
            </div>  
        )
    }
}
