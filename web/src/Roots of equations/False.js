import React, { Component } from 'react'
import { Input,Button } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs'
  import ShowFalse from '../component/componentnumer/showFalse'
var Algebrite = require('algebrite'); 

export default class False extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            equation:null,
            xl:null,
            xr:null,
            show : false
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showFalse").then(res=>{
            console.log(res.data);
            //console.log(res.data.data);
            this.setState({users: res.data.data});
        })
    }
    add(equation,xl,xr){
        this.state ={
            equation:equation,
            xl:xl,
            xr:xr
        }
        this.evaluate()
    }
    evaluate= ()=>{
        var Parser = require('expr-eval').Parser;
        var Parser = new Parser();
        var er = (xn,xo) => Math.abs((xn-xo)/xn)
        var f = (fx,x) => Parser.parse(Algebrite.run(fx)).evaluate({ x:x,e:e })
        var xl = new Array();
        xl[0] = Number(this.state.xl) 
        var xr = new Array();
        xr[0] = Number(this.state.xr)
        var xo = 0 
        var xn = 0
        var i = 0
        var fx = this.state.equation
        var err = new Array()
        var fxr = new Array()
        var fxl = new Array()
        while(i<1 || er(xn,xo)>0.000001){
            fxl[i] = f(fx,xl[i])
            fxr[i] = f(fx,xr[i])
            var x = ((xl[i]*fxr[i])-(xr[i]*fxl[i]))/(fxr[i]-fxl[i])
            var fxx = f(fx,x)
            if(fxl[i]>0&&fxx>0){
                xo=xl[i]
                xl[i+1]=x
                xr[i+1]=xr[i]
                xn=x
            }
            else {
                xo=xr[i]
                xr[i+1]=x
                xl[i+1]=xl[i]
                xn=x
            }
            i++
            if(i>1){
                err[i-1]=er(xn,xo)
            }
        }
        fxl[i] = f(fx,xl[i])
        fxr[i] = f(fx,xr[i])
        var m = new Array()
        m[0]=x
        var fm = new Array()
        fm[0]=fxx
        this.table(xl,xr,fxl,fxr,err)
        this.Graph(err)
        this.Graph2(m,fm)
    }

    table = (xl,xr,fxl,fxr,err) =>{
        var i=0,k=0
        var values = []
        var c=Array.from(Array(xl.length-1).keys())
        while(c.length) values.push(c.splice(0,xl.length-1));
        var n = []
        k=1
        while (i<xl.length-1){
            n[i]=xl[k++]
            i++
        }
        k=1
        while (k<xr.length){
            n[i++]=xr[k]
            k++
        }
        k=1
        while (k<fxl.length){
            n[i++]=fxl[k]
            k++
        }
        k=1
        while (k<fxr.length){
            n[i++]=fxr[k]
            k++
        }
        k=0
        while (k<err.length){
            n[i++]=err[k]
            k++
        }
        while(n.length) values.push(n.splice(0,xl.length-1));
        var v = []
        v[0]='Iteration'
        v[1]='xl'
        v[2]='xr'
        v[3]='fxl'
        v[4]='fxr'
        v[5]='Error'
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

    Graph2 = (xm,fxm ) =>{
          var trace1 = {
            x: Array.from(xm),
            y: Array.from(fxm),
            mode: 'markers',
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
        axios.post('http://192.168.99.100:8080/api/users/addFalse',{equation:this.state.equation,xl:this.state.xl,xr:this.state.xr})
        .then(res=>{
            console.log(res);
        })
        this.evaluate()
    }

    render()
    {
        return(
            <div style={{width:550}}>
                    <h3>False-Position Method</h3>
                    <div>
                    Equation : <Input placeholder="equation" onChange={e=>this.setState({equation:e.target.value})}/>
                    </div>
                    <div>
                    Xl : <Input placeholder="xl" onChange={e=>this.setState({xl:e.target.value})}/>
                    </div>
                    <div>
                    Xr : <Input placeholder="xr" onChange={e=>this.setState({xr:e.target.value})}/>
                    </div>
                    <br/>
                    <Button type="danger" onClick={this.sendDatatoDB}>Evaluate</Button>
                    {<ShowFalse users={this.state.users}/>}
                    { this.state.show && <Box />}
                    <div id='myDiv'></div>
                    { this.state.show && <Box2 />}
                    <div id='myDiv2'></div>
                    <br></br> 
                    <br></br>
                    <br></br>
                    { this.state.show && <Box3 />}
                    <div id='myDiv3'></div>
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
