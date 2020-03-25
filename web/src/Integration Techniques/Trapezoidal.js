import React, { Component } from 'react'
import { Input,Button } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'
import ShowTrapezoidal from '../component/componentnumer/showTrapezoidal'
var Algebrite = require('algebrite'); 

export default class Trapezoidal extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            equation:null,
            a:null,
            b:null,
            show : false,
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showTrapezoidal").then(res=>{
            console.log(res.data);
            //console.log(res.data.data);
            this.setState({users: res.data.data});
        })
    }
    add(equation,a,b){
        this.state ={
            equation:equation,
            a:a,
            b:b
        }
        this.evaluate()
    }
    evaluate (){
        var Parser = require('expr-eval').Parser;
        var Parser = new Parser();
        var er = (xn,xo) => Math.abs((xn-xo)/xn)
        var f = (fx,x) => Parser.parse(Algebrite.run(fx)).evaluate({ x:x,e:e  })
        var f2 = (fx,x) => Parser.parse(Algebrite.run('integral('+fx+')')).evaluate({ x:x,e:e  })
        var a = Number(this.state.a) 
        var b = Number(this.state.b)
        var fx = this.state.equation
        var result=((b-a)/2)*(f(fx,a)+f(fx,b))
        var A =new Array()
        A[0]=a
        A[1]=b
        var B = new Array()
        B[0]=f(fx,a)
        B[1]=f(fx,b)
        var TRUE=f2(fx,b)-f2(fx,a)
        var err=er(TRUE,result)
        this.table(result,err)
        this.Graph2(A,B)
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
      v[1]='Trapezoidal'
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
        axios.post('http://192.168.99.100:8080/api/users/addTrapezoidal',{equation:this.state.equation,a:this.state.a,b:this.state.b})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:550}}>
                    <h3>Trapezoidal Rule</h3>
                    <div>
                    Equation : <Input placeholder="equation" onChange={e=>this.setState({equation:e.target.value})}/>
                    </div>
                    <div>
                    a : <Input placeholder="a" onChange={e=>this.setState({a:e.target.value})}/>
                    </div>
                    <div>
                    b : <Input placeholder="b" onChange={e=>this.setState({b:e.target.value})}/>
                    </div>
                    <br/>
                    <Button type="danger" onClick={this.sendDatatoDB}>Evaluate</Button>
                    {<ShowTrapezoidal users={this.state.users}/>}
                    <div id='myDiv'></div>
                    <br></br>
                    <div id='myDiv3'></div>
            </div>  
        )
    }
}
