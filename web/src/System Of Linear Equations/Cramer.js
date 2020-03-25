import React, { Component } from 'react'
import { Input,Button, Result } from 'antd';
import axios from 'axios';
import Plotly from 'plotly.js/lib/index-basic';
import Plotly2 from 'plotly.js-dist';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt,det
} from 'mathjs'
import ShowCramer from '../component/componentnumer/showCramer'
var Algebrite = require('algebrite'); 
window.$X = []
window.$size = 0
export default class Cramer extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            equation:[[]],
            update: 0
        }
        this.state = { users: ""};
    }
    componentDidMount()
    {

        axios.get("http://192.168.99.100:8080/api/users/showCramer").then(res=>{
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
                    An[i][j]=parseInt(eq[i][j])
            }
        }
        var Result= new Array()
        for(i=0;i<n;i++){
            for(j=0;j<n;j++){
                An[j][i]=parseInt(B[j])
            }
            Result[i]=(det(An)/det(A)).toFixed(6)
            for(j=0;j<n;j++){
                An[j][i]=A[j][i]
            }
        }
        this.table(Result)
    }

    table = (num) =>{
        var i=0,k=0
      var values = []
      var c=new Array()
      c[0]="answer"
      while(c.length) values.push(c.splice(0,1));
      var n = []
      while (i<num.length){
          n[i]=num[i]
          i++
      }
      while(n.length) values.push(n.splice(0,1));
      var v = []
      v[0]='variable'
      for(i=0;i<num.length;i++){
          v[i+1]="x"+(i+1)
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

    sendDatatoDB = ()=>{
        this.state.equation=window.$X
        axios.post('http://192.168.99.100:8080/api/users/addCramer',{equation:this.state.equation})
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
        console.log("X : "+input)
        return input
    }

    render()
    {
        return(
            <div >
                    <h3>Cramer's Method</h3>
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
                    {<ShowCramer users={this.state.users}/>}
                    <div id='myDiv'></div>
            </div>  
        )
    }
}

