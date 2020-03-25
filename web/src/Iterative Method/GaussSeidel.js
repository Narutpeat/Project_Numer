import React, { Component } from 'react'
import { Input,Button, Result } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,det
} from 'mathjs'
import ShowGaussSeidel from '../component/componentnumer/showGaussSeidel'
var Algebrite = require('algebrite'); 
window.$X = []
window.$size = 0
export default class GaussSeidel extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            equation:[[]],
            update: 0,
            show : false
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showGaussSeidel").then(res=>{
            console.log(res.data);
            //console.log(res.data.data);
            this.setState({users: res.data.data});
        })
    }
    add(equation){
        this.state ={
            equation:equation
        }
        this.evaluate()
    }
    evaluate= ()=>{
        var Parser = require('expr-eval').Parser;
        var Parser = new Parser();
        var e = (xn,xo) => Math.abs((xn-xo)/xn)*100
        var eq = this.state.equation
        var n =eq.length
        var A = Array.from(Array(n), () => new Array(n))
        var An =Array.from(Array(n), () => new Array(n))
        var X = new Array(n)
        var B = new Array(n)
        var i=0
        var j=0
        var b = new Array(n)
        var a = new Array(n)
        i=0
        for(i=0;i<n;i++){
            B[i]=eq[i][n]
        }
        for(i=0;i<n;i++){
            for(j=0;j<n;j++){
                    A[i][j]=parseInt(eq[i][j])
            }
        }
        var k=0
        var x = Array.from(Array(50), () => new Array(n.length))
        var err = Array.from(Array(50), () => new Array(n.length))
        for(i=0;i<n;i++){
            x[0][i]=0
        }
        j=0
        while(j<n){
            for(i=0;i<n;i++){
                x[k+1][i]=B[i]
                for(j=0;j<n;j++){
                    if(i!=j){
                        if(i>j){
                            x[k+1][i]-=(A[i][j]*x[k+1][j])
                        }
                        else{
                            x[k+1][i]-=(A[i][j]*x[k][j])
                        }
                    }
                }
                x[k+1][i]/=A[i][i]
            }
            for(i=0;i<n;i++){
                err[k][i]=e(x[k+1][i],x[k][i])
                if(err[k][i]<0.001){
                    j++
                }
                else {
                    j=0
                }
            }
            k++  
        }
        console.log(x,err)
        this.table(x,err,k)
        this.Graph(err,k)
    }

    table = (x,err,k) =>{
        var i=0,z=0
        var values = []
        var c=Array.from(Array(k-1).keys())
        while(c.length) values.push(c.splice(0,k-1));
        var n = []
          for(i=0;i<x[0].length;i++){  
              for(var j=1;j<k;j++){
                  n[z++]=x[j][i]
              }
          }
          for(i=0;i<x[0].length;i++){  
              for(var j=1;j<k;j++){
                  n[z++]=err[j][i]
              }
          }
        while(n.length) values.push(n.splice(0,k-1));
        var v = []
        v[0]='Iteration'
        z=1
        for(i=0;i<x[0].length;i++){
            v[z++]="x"+(i+1)
        }
        for(i=0;i<x[0].length;i++){
          v[z++]="error-"+"x"+(i+1)
      }
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

    Graph = (err,k) =>{
        var e1 = new Array(err.length)
        var e2 = new Array(err.length)
        var e3 = new Array(err.length)
        var e4 = new Array(err.length)
        for(var i=0;i<k;i++){
            e1[i]=err[i][0]
            e2[i]=err[i][1]
            e3[i]=err[i][2]
            e4[i]=err[i][3]
        }
        var trace1 = {
            x: Array.from(Array(err.length).keys()),
            y: Array.from(e1),
            mode: 'lines',
            type: 'scatter'
          };
          var trace2 = {
            x: Array.from(Array(err.length).keys()),
            y: Array.from(e2),
            mode: 'lines',
            type: 'scatter'
          };
          var trace3 = {
            x: Array.from(Array(err.length).keys()),
            y: Array.from(e3),
            mode: 'lines',
            type: 'scatter'
          };
          var trace4 = {
            x: Array.from(Array(err.length).keys()),
            y: Array.from(e4),
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
          var data = [trace1,trace2,trace3,trace4];
          
          Plotly.newPlot('myDiv2', data , layout);
    }

    sendDatatoDB = ()=>{
        this.state.equation=window.$X
        axios.post('http://192.168.99.100:8080/api/users/addGaussSeidel',{equation:this.state.equation})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    handleChange(i,j,e) {
        window.$X[i][j] = e.target.value
        //console.log("Y : "+window.$X)
      }

    createarray = ()=>{
        if(window.$size==[]) {
            window.$size = 0
        }
        var size = parseInt(window.$size)
        var value = 0
        //console.log(size)
        window.$X = [...Array(size)].map(e => Array(size+1).fill(value))
        let input = []
        for(var i=0 ; i<size ; i++){
            for(var j=0 ; j<size+1 ; j++){
                if(j!=size){
                    input.push(<input onChange={this.handleChange.bind(this, i ,j)}/>)
                }
                else {
                    input.push('\xa0\xa0\xa0\xa0\xa0')
                    input.push(<input onChange={this.handleChange.bind(this, i ,j)}/>)
                }
            }
            input.push(<br/>)
        }
        //console.log("X : "+window.$X)
        return input
    }

    render()
    {
        return(
            <div >
                    <h3>Gauss-Seidel Iteration Method</h3>
                    <br/>
                    <h4>Input Size</h4>
                    <div style={{width:50}} >
                        <Input onChange={(event) => {window.$size = event.target.value;this.setState({update: this.state.update++})}}/>
                    </div>
                    <br/>
                    <div >
                        {this.createarray()}
                    </div>
                    <br/>
                    <Button type="danger" onClick={this.sendDatatoDB}>Evaluate</Button>
                    <br/>
                    {<ShowGaussSeidel users={this.state.users}/>}
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
            <div style={{ textAlign: 'center', width: '350%'  ,fontSize: 30 ,fontWeight: 'bold'}}>Iteration</div>
        )
    }
}

class Box2 extends Component{
    render(){
        return(
            <div style={{ textAlign: 'center', width: '350%'  ,fontSize: 30 ,fontWeight: 'bold'}}>Error</div>
        )
    }
}
