import React, { Component } from 'react'
import { Input,Button, Result } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,det
} from 'mathjs'
import ShowSpline from '../component/componentnumer/showSpline'
var Algebrite = require('algebrite'); 
export default class Spline extends Component {
    
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

        axios.get("http://192.168.99.100:8080/api/users/showSpline").then(res=>{
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
        var a= Array.from(Array(3*x.length-3), () => new Array(3*x.length-3))
        var an= Array.from(Array(3*x.length-3), () => new Array(3*x.length-3))
        var b = new Array(3*x.length-3)
        for(i=0;i<a.length;i++){
            for(var k=0;k<a.length;k++){
                a[i][k]=0
            }
        }
        i=0
        var result=0
        while(i<x.length){
            x[i]=parseFloat(x[i])
            fx[i]=parseFloat(fx[i])
            i++
        }
        var j=0
        var xx=0
        for(i=0;i<2*x.length-2;i++){
            b[i]=fx[xx]
            if(i%2==0){
                a[i][j]=x[xx]*x[xx]
                a[i][j+1]=x[xx]
                a[i][j+2]=1
                xx++
            }
            else {
                a[i][j]=x[xx]*x[xx]
                a[i][j+1]=x[xx]
                a[i][j+2]=1
                j=j+3
            }
        }
        j=0
        xx=1
        for(i=i;i<a.length-1;i++){
            a[i][j]=2*x[xx]
            a[i][j+1]=1
            a[i][j+3]=-2*x[xx]
            a[i][j+4]=-1
            j=j+3
            b[i]=0
            xx++
        }
        a[i][0]=1
        b[i]=0
        var aa = new Array(3*x.length-3)
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
        for(i=0;i<x.length-1;i++){
            if(x[i]<xn&&xn<x[i+1]){
                result=aa[i*3]*xn*xn
                result+=aa[i*3+1]*xn
                result+=aa[i*3+2]
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
        axios.post('http://192.168.99.100:8080/api/users/addSpline',{X:this.state.X,FX:this.state.FX,XN:this.state.XN})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:650}}>
                    <h3>Spline Interpolation</h3>
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
                    {<ShowSpline users={this.state.users}/>}
                    <div id='myDiv'></div>
            </div>  
        )
    }
}