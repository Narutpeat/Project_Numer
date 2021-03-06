import React, { Component } from 'react'
import { Input,Button } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'
import ShowCompositesimpson from '../component/componentnumer/showCompositesimpson'
var Algebrite = require('algebrite'); 

export default class Compositesimpson extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            equation:null,
            a:null,
            b:null,
            n:null,
            show : false,
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showCompositesimpson").then(res=>{
            console.log(res.data);
            //console.log(res.data.data);
            this.setState({users: res.data.data});
        })
    }
    add(equation,a,b,n){
        this.state ={
            equation:equation,
            a:a,
            b:b,
            n:n
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
        var n = this.state.n
        var h = (b-a)/n
        var x = new Array(n-1)
        for(var i=0;i<n-1;i++){
            x[i]=a+h*(i+1)
        }
        var A =new Array()
        var B = new Array()
        A[0]=a
        B[0]=f(fx,a)
        var num=0
        var num2=0
        for(var i=1;i<n;i++){
            A[i]=a+h*i
            B[i]=f(fx,a+h*i)
            if(i%2!=0){
                num2+=B[i]
            }
            else {
                num+=B[i]
            }
        }
        A[i]=b
        B[i]=f(fx,b)
        var result=(h/3)*(B[0]+B[B.length-1]+(4*num2)+(2*num))
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
      v[1]='Simpson'
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
        axios.post('http://192.168.99.100:8080/api/users/addCompositesimpson',{equation:this.state.equation,a:this.state.a,b:this.state.b,n:this.state.n})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:550}}>
                    <h3>Composite Simpson Rule</h3>
                    <div>
                    Equation : <Input placeholder="equation" onChange={e=>this.setState({equation:e.target.value})}/>
                    </div>
                    <div>
                    a : <Input placeholder="a" onChange={e=>this.setState({a:e.target.value})}/>
                    </div>
                    <div>
                    b : <Input placeholder="b" onChange={e=>this.setState({b:e.target.value})}/>
                    </div>
                    <div>
                    N : <Input placeholder="N" onChange={e=>this.setState({n:e.target.value})}/>
                    </div>
                    <br/>
                    <Button type="danger" onClick={this.sendDatatoDB}>Evaluate</Button>
                    {<ShowCompositesimpson users={this.state.users}/>}
                    <div id='myDiv'></div>
                    <br></br>
                    <div id='myDiv3'></div>
            </div>  
        )
    }
}
