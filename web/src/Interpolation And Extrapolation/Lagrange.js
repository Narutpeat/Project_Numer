import React, { Component } from 'react'
import { Input,Button, Result } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,det
} from 'mathjs'
import ShowLagrange from '../component/componentnumer/showLagrange'
var Algebrite = require('algebrite'); 
export default class Lagrange extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            X:null,
            FX:null,
            XN:null
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showLagrange").then(res=>{
            console.log(res.data);
            //console.log(res.data.data);
            this.setState({users: res.data.data});
        })
    }
    add(X,FX,XN){
        this.state ={
            X:X,
            FX:FX,
            XN:XN
        }
        this.evaluate()
    }
    evaluate= ()=>{
        var Parser = require('expr-eval').Parser;
        var Parser = new Parser();
        var X = this.state.X
        var FX = this.state.FX
        var xn = parseFloat(this.state.XN)
        var x =X.split(",")
        var fx =FX.split(",")
        var i=0
        var a= new Array(x.length)
        var result=0
        while(i<x.length){
            x[i]=parseFloat(x[i])
            fx[i]=parseFloat(fx[i])
            i++
        }
        for(i=0;i<x.length;i++){
            var num1=1
            var num2=1
            for(var j=0;j<x.length;j++){
                if(i!=j){
                    num1*=(x[j]-xn)
                    num2*=(x[j]-x[i])
                }
            }
            a[i]=num1/num2
            result+=a[i]*fx[i]
        }
        console.log(result)
        this.table(result)
    }

    table = (num) =>{
        var i=0,k=0
      var values = []
      var c=new Array()
      c[0]="answer"
      c[1]=num
      while(c.length) values.push(c.splice(0,1));
      var n = []
      var v = []
      v[0]='variable'
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

    sendDatatoDB = ()=>{
        axios.post('http://192.168.99.100:8080/api/users/addLagrange',{X:this.state.X,FX:this.state.FX,XN:this.state.XN})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:750}}>
                    <h3>Lagrange Polynomials</h3>
                    <div>
                    X : <Input placeholder="X" onChange={e=>this.setState({X:e.target.value})}/>
                    </div>
                    <div>
                    f(X) : <Input placeholder="FX" onChange={e=>this.setState({FX:e.target.value})}/>
                    </div>
                    <div>
                    Xn : <Input placeholder="XN" onChange={e=>this.setState({XN:e.target.value})}/>
                    </div>
                    <br/>
                    <Button type="danger" onClick={this.sendDatatoDB}>Evaluate</Button>
                    {<ShowLagrange users={this.state.users}/>}
                    <div id='myDiv'></div>
            </div>  
        )
    }
}