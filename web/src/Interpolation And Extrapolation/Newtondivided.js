import React, { Component } from 'react'
import { Input,Button, Result } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,det
} from 'mathjs'
import ShowNewtondivided from '../component/componentnumer/showNewtondivided'
var Algebrite = require('algebrite'); 
export default class Newtondivided extends Component {
    
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

        axios.get("http://192.168.99.100:8080/api/users/showNewtondivided").then(res=>{
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
        var a=Array.from(Array(x.length), () => new Array(x.length))
        while(i<x.length){
            x[i]=parseFloat(x[i])
            fx[i]=parseFloat(fx[i])
            a[0][i]=fx[i]
            i++
        }
        for(i=1;i<x.length;i++){
            for(var j=0;j<x.length-i;j++){
                a[i][j]=((a[i-1][j+1]-a[i-1][j])/(x[j+i]-x[j]))
            }
        }
        var result=0
        for(i=0;i<x.length;i++){
            var num=1
            for(var j=0;j<i;j++){
                num*=(xn-x[j])
            }
            if(i==0){
                result=a[i][0]
            }
            else{
                result+=a[i][0]*num
            }
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
        axios.post('http://192.168.99.100:8080/api/users/addNewtondivided',{X:this.state.X,FX:this.state.FX,XN:this.state.XN})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:750}}>
                    <h3>Newton's-divided-differences</h3>
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
                    {<ShowNewtondivided users={this.state.users}/>}
                    <div id='myDiv'></div>
            </div>  
        )
    }
}