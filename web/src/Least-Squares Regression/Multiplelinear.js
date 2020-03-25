import React, { Component } from 'react'
import { Input,Button, Result } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,det
} from 'mathjs'
import ShowMultiplelinear from '../component/componentnumer/showMultiplelinear'
var Algebrite = require('algebrite'); 
window.$X = []
window.$size = 0
window.$size2 = 0
window.$FX = []
window.$XN = []
export default class Multiplelinear extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            X:[[]],
            FX:null,
            XN:null,
            update: 0
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showMultiplelinear").then(res=>{
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
        var xn = this.state.XN
        var fx = this.state.FX
        var X = this.state.X
        var xn =xn.split(",")
        var fx =fx.split(",")
        var i=0
        var x=Array.from(Array(X.length), () => new Array(X[0].length))
        var a=Array.from(Array(X[0].length+1), () => new Array(X[0].length+1))
        var b=Array.from(Array(X[0].length+1), () => new Array())
        for(i=0;i<X.length;i++){
            for(var j=0;j<X[0].length;j++){
                x[i][j]=parseInt(X[i][j])
            }
        }
        i=0
        while(i<x.length){
            fx[i]=parseInt(fx[i])
            i++
        }
        i=0
        while(i<x[0].length){
            xn[i]=parseFloat(xn[i])
            i++
        }
        for(i=0;i<a.length;i++){
            for(var j=0;j<a.length;j++){
                if(i==0&&j==0){
                    a[0][0]=x.length
                }
                else {
                    var num=0
                    for(var k=0;k<x.length;k++){
                        if(i-1<0){
                            num+=x[k][j-1]
                        }
                        else if(j-1<0){
                            num+=x[k][i-1]
                        }
                        else {
                            num+=x[k][i-1]*x[k][j-1]
                        }
                    }
                    a[i][j]=num
                }
            }
            var num=0
            for(var k=0;k<x.length;k++){
                if(i-1<0){
                    num+=fx[k]
                }
                else {
                    num+=x[k][i-1]*fx[k]
                }
            }
            b[i]=num
        }
        var an=Array.from(Array(a.length), () => new Array(a.length))
        var aa = new Array(a.length)
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
            if(i==0){
                result+=aa[i]
            }
            else {
                result+=aa[i]*xn[i-1]
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
        this.state.X=window.$X
        this.state.FX=window.$FX
        this.state.XN=window.$XN
        axios.post('http://192.168.99.100:8080/api/users/addMultiplelinear',{X:this.state.X,FX:this.state.FX,XN:this.state.XN})
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
        if(window.$size2==[]){
            window.$size2 = 0
        }
        var size = parseInt(window.$size)
        var sizen = parseInt(window.$size2)
        var value = 0
        //console.log(size)
        window.$X = [...Array(sizen)].map(e => Array(size).fill(value))
        let input = []
        for(var i=0 ; i<sizen ; i++){
            for(var j=0;j<size;j++){
                input.push(<input onChange={this.handleChange.bind(this, i,j )}/>)
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
                    <h3>Multiple Linear Regression</h3>
                    <br/>
                    <h4>Input Size X and N</h4>
                    <div  >
                        <input onChange={(event) => {window.$size = event.target.value;this.setState({update: this.state.update++})}}/>
                        <input onChange={(event) => {window.$size2 = event.target.value;this.setState({update: this.state.update++})}}/>
                    </div>
                    <br/>
                    <div >
                        {this.createarray()}
                    </div>
                    <div>
                    f(X) : <Input placeholder="FX" onChange={(event) => {window.$FX = event.target.value}}/>
                    </div>
                    <div>
                    XN : <Input placeholder="XN" onChange={(event) => {window.$XN = event.target.value}}/>
                    </div>
                    <br/>
                    <Button type="danger" onClick={this.sendDatatoDB}>Evaluate</Button>
                    {<ShowMultiplelinear users={this.state.users}/>}
                    <div id='myDiv'></div>
            </div>  
        )
    }
}