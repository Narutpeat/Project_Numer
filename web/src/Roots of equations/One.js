import React, { Component } from 'react'
import { Input,Button } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'
import ShowOne from '../component/componentnumer/showOne.js'
var Algebrite = require('algebrite'); 

export default class One extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            equation:null,
            x:null,
            show : false
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showOne").then(res=>{
            console.log(res.data);
            //console.log(res.data.data);
            this.setState({users: res.data.data});
        })
    }
    add(equation,x){
      this.state ={
          equation:equation,
          x:x
      }
      this.evaluate()
  }
    evaluate= ()=>{
        var Parser = require('expr-eval').Parser;
        var Parser = new Parser();
        var er = (xn,xo) => Math.abs((xn-xo)/xn)
        var f = (fx,x) =>Parser.parse(fx).evaluate({ x:x,e:e })
        var x = new Array();
        x[0] = Number(this.state.x) 
        var xo = 0 
        var xn = 0
        var i = 0
        var fx = this.state.equation
        var err = new Array()
        while(i<1 || er(xn,xo)>0.000001){
            x[i+1] = f(fx,x[i])
            xo=x[i]
            xn=x[i+1]
            i++
            if(i>1){
                err[i-1]=er(xn,xo)
            }
        }
        this.table(x,err)
        this.Graph(err)
        //this.Graph2(xl,xr,fxl,fxr)
    }

    table = (x,err) =>{
      var i=0,k=0
      var values = []
      var c=Array.from(Array(x.length-1).keys())
      while(c.length) values.push(c.splice(0,x.length-1));
      var n = []
      k=1
      while (i<x.length-1){
          n[i]=x[k++]
          i++
      }
      k=0
      while (k<err.length){
        n[i++]=err[k]
        k++
    }
      while(n.length) values.push(n.splice(0,x.length-1));
      var v = []
      v[0]='Iteration'
      v[1]='x'
      v[2]='Error'
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
      height: 1000
      };
    Plotly2.newPlot('myDiv', data,layout);
    const { show } = this.state
    this.setState( { show : true } )
    }

    Graph = (err) =>{
        var trace1 = {
            x: Array.from(Array(err.length).keys()),
            y: Array.from(err),
            mode: 'lines+markers',
            type: 'scatter+ Lines'
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
          
          Plotly.newPlot('myDiv2', data , layout);
    }

    Graph2 = (xl,xr,fxl,fxr ) =>{
          var trace1 = {
            x: Array.from(xl),
            y: Array.from(fxl),
            mode: 'lines',
            type: 'scatter'
          };
        var trace2 = {
            x: Array.from(xr),
            y: Array.from(fxr),
            mode: 'lines',
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
          var data = [trace1,trace2];
          
          Plotly.newPlot('myDiv3', data , layout);
    }

    sendDatatoDB = ()=>{
        axios.post('http://192.168.99.100:8080/api/users/addOne',{equation:this.state.equation,x:this.state.x})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:550}}>
                    <h3>One-Point Iteration Method</h3>
                    <div>
                    Equation : <Input placeholder="equation" onChange={e=>this.setState({equation:e.target.value})}/>
                    </div>
                    <div>
                    X : <Input placeholder="x" onChange={e=>this.setState({x:e.target.value})}/>
                    </div>
                    <br/>
                    <Button type="danger" onClick={this.sendDatatoDB}>Evaluate</Button>
                    {<ShowOne users={this.state.users}/>}
                    { this.state.show && <Box />}
                    <div id='myDiv'></div>
                    { this.state.show && <Box2 />}
                    <div id='myDiv2'></div>
            </div>  
        )
    }
}
class Box extends Component{
    render(){
        return(
            <div style={{ textAlign: 'center', width: '400%'  ,fontSize: 30 ,fontWeight: 'bold'}}>Iteration</div>
        )
    }
}

class Box2 extends Component{
    render(){
        return(
            <div style={{ textAlign: 'center', width: '400%'  ,fontSize: 30 ,fontWeight: 'bold'}}>Error</div>
        )
    }
}

class Box3 extends Component{
    render(){
        return(
            <div style={{ textAlign: 'center', width: '400%'  ,fontSize: 30 ,fontWeight: 'bold'}}>Graph</div>
        )
    }
}