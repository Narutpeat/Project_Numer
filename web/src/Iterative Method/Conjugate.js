import React, { Component } from 'react'
import { Input,Button, Result } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,det
} from 'mathjs'
import ShowConjugate from '../component/componentnumer/showConjugate'
var Algebrite = require('algebrite'); 
window.$X = []
window.$size = 0
export default class Conjugate extends Component {
    
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

        axios.get("http://192.168.99.100:8080/api/users/showConjugate").then(res=>{
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
        const e = ()=>{
            var t=0
            for(i=0;i<A.length;i++){
                t+=Math.pow(R[i],2)
            }
            return Math.sqrt(t)*100
        } 
        const r = ()=>{
            var t= new Array(n)
            for(var i=0;i<n;i++){
                t[i]=0
            }
            for(i=0;i<A.length;i++){
                for(var j=0;j<A.length;j++){
                    t[i]+=A[i][j]*xn[j]
                }
                R[i]=t[i]-B[i]
            } 
        }
        const d= ()=>{
            if(va==0){
                for(i=0;i<A.length;i++){
                    D[i]=-R[i]
                }
            }
            else{
                for(i=0;i<A.length;i++){
                    Dn[i]=-R[i]+(va*D[i])
                }
            }
        }
        const l = ()=>{
            var u=0
            var t= new Array(n)
            for(var i=0;i<n;i++){
                t[i]=0
            }
            var lo=0
            for(i=0;i<A.length;i++){
                for(j=0;j<A.length;j++){
                    if(i==0){
                        u+=D[j]*R[j]
                    }
                    t[i]+=A[i][j]*D[j]    
                }
                lo+=D[i]*t[i]
            }
            return -(u/lo)
        }
        const fn=()=>{
            for(i=0;i<A.length;i++){
                xn[i]=x[i]+lam*D[i]
            }
        }
        const aa=()=>{
            var u=0
            var t= new Array(n)
            for(var i=0;i<n;i++){
                t[i]=0
            }
            var lo=0
            for(i=0;i<A.length;i++){
                for(j=0;j<A.length;j++){
                    t[i]+=A[i][j]*D[j]    
                }
                u+=R[i]*t[i]
                lo+=D[i]*t[i]
            }
            return (u/lo)
        }
        var x= new Array(n)
        var xn= new Array(n)
        var Result = Array.from(Array(10), () => new Array(n))
        Result[0]=x.slice()
        var k=0
        var R= new Array(n)
        var va=0
        var D= new Array(n)
        var Dn= new Array(n)
        var err= new Array(n)
        for(i=0;i<n;i++){
            x[i]=0
            xn[i]=0
            R[i]=0
            D[i]=0
            Dn[i]=0
        }
        r()
        d()
        while(e()>0.001){
            if(k>0){
                x=xn.slice()
                Result[k]=xn.slice()
                D=Dn.slice()
            }
            var lam=l()
            fn()
            r()
            va=aa()
            d()
            k++
            err[k]=e()   
        }
        x=xn.slice()
        Result[k]=xn.slice()
        D=Dn.slice()
        console.log(Result,err,k)
        this.table(Result,err,k)
        this.Graph(err,k)
    }

    table = (x,err,k) =>{
      var i=0,z=0
      var values = []
      var c=Array.from(Array(k).keys())
      while(c.length) values.push(c.splice(0,c.length));
      var n = []
        for(i=0;i<x[0].length;i++){  
            for(var j=1;j<=k;j++){
                n[z++]=x[j][i]
            }
        } 
        for(var j=1;j<=k;j++){
            n[z++]=err[j]
        }
      while(n.length) values.push(n.splice(0,k));
      var v = []
      v[0]='Iteration'
      z=1
      for(i=0;i<x[0].length;i++){
          v[z++]="x"+(i+1)
      }
    v[z++]="error"
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
          var data = [trace1];
          
          Plotly.newPlot('myDiv2', data , layout);
    }

    sendDatatoDB = ()=>{
        this.state.equation=window.$X
        axios.post('http://192.168.99.100:8080/api/users/addConjugate',{equation:this.state.equation})
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
                    <h3>Conjugate Gradient Method</h3>
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
                    {<ShowConjugate users={this.state.users}/>}
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