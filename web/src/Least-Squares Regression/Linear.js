import React, { Component } from 'react'
import { Input,Button, Result } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,det
} from 'mathjs'
import ShowLinear from '../component/componentnumer/showLinear'
var Algebrite = require('algebrite'); 
export default class Linear extends Component {
    
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

        axios.get("http://192.168.99.100:8080/api/users/showLinear").then(res=>{
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
        var a=Array.from(Array(2), () => new Array(2))
        var b=Array.from(Array(2), () => new Array())
        while(i<x.length){
            x[i]=parseFloat(x[i])
            fx[i]=parseFloat(fx[i])
            i++
        }
        for(i=0;i<2;i++){
            for(var j=0;j<2;j++){
                if(i==0&&j==0){
                    a[0][0]=x.length
                }
                else {
                    var num=0
                    for(var k=0;k<x.length;k++){
                        num+=Math.pow(x[k],i+j)
                    }
                    a[i][j]=num
                }
            }
            var num=0
            for(var k=0;k<x.length;k++){
                num+=Math.pow(x[k],i)*fx[k]
            }
            b[i]=num
        }
        var an=Array.from(Array(2), () => new Array(2))
        var aa = new Array(2)
        for(i=0;i<a.length;i++){
            for(j=0;j<a.length;j++){
                an[i][j]=a[i][j]
            }
        }
        for(i=0;i<a.length;i++){
            for(j=0;j<a.length;j++){
                an[j][i]=b[j]
            }
            aa[i]=(det(an)/det(a))
            aa[i]=parseFloat(aa[i])
            for(j=0;j<a.length;j++){
                an[j][i]=a[j][i]
            }
        }
        var result=0
        for(i=0;i<aa.length;i++){
            result+=aa[i]*Math.pow(xn,i)
        }
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
        axios.post('http://192.168.99.100:8080/api/users/addLinear',{X:this.state.X,FX:this.state.FX,XN:this.state.XN})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:650}}>
                    <h3>Linear Regression</h3>
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
                    {<ShowLinear users={this.state.users}/>}
                    <div id='myDiv'></div>
            </div>  
        )
    }
}