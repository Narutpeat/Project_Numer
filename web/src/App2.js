import React,{Component} from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import HomeContent from './component/HomeContent';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Bisection from './Roots of equations/Bisection';
import Falseposition from './Roots of equations/False';
import Onepoint from './Roots of equations/One';
import Newton from './Roots of equations/Newton';
import Secant from './Roots of equations/Secant';

import Cramer from './System Of Linear Equations/Cramer';
import GaussElimination from './System Of Linear Equations/GaussElimination';
import GaussJordan from './System Of Linear Equations/GaussJordan';
import LU from './System Of Linear Equations/LU';

import Jacobi from './Iterative Method/Jacobi';
import GaussSeidel from './Iterative Method/GaussSeidel'
import Conjugate from './Iterative Method/Conjugate'


import Newtondivided from './Interpolation And Extrapolation/Newtondivided'
import Lagrange from './Interpolation And Extrapolation/Lagrange'
import Spline from './Interpolation And Extrapolation/Spline'

import Linear from './Least-Squares Regression/Linear'
import Polynomial from './Least-Squares Regression/Polynomial'
import Multiplelinear from './Least-Squares Regression/Multiplelinear'

import Trapezoidal from './Integration Techniques/Trapezoidal'
import Compositetrapezoidal from './Integration Techniques/Compositetrapezoidal'
import Simpson from './Integration Techniques/Simpson'
import Compositesimpson from './Integration Techniques/Compositesimpson'

import Forward1 from './Numerical Differentiation/Forward1'
import Backward1 from './Numerical Differentiation/Backward1'
import Central1 from './Numerical Differentiation/Central1'
import Forward2 from './Numerical Differentiation/Forward2'
import Backward2 from './Numerical Differentiation/Backward2'
import Central2 from './Numerical Differentiation/Central2'
//import axios from 'axios';
//import {Link} from 'react-router-dom'

  
class App2 extends Component
{
  
  constructor(props)
  {
    super(props);
    this.state = {
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    };
  }

  openHomePage = ()=>{
    this.setState({
      HomePage : true,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
}

  openBisectionPage = ()=>{
      this.setState({
        HomePage : false,
        BisectionPage : true,
        FalsepositionPage : false,
        OnepointPage : false,
        NewtonPage : false,
        SecantPage : false,
        CramerPage : false,
        GaussEliminationPage : false,
        GaussJordanPage : false,
        LUPage : false,
        JacobiPage : false,
        GaussSeidelPage : false,
        ConjugatePage : false,
        NewtondividedPage : false,
        LagrangePage : false,
        SplinePage : false,
        LinearPage : false,
        PolynomialPage : false,
        MultiplelinearPage : false,
        TrapezoidalPage : false,
        CompositetrapezoidalPage : false,
        SimpsonPage : false,
        CompositesimpsonPage : false,
        Forward1Page : false,
        Backward1Page : false ,
        Central1Page : false,
        Forward2Page : false,
        Backward2Page : false ,
        Central2Page : false
      })
  }

  openFalsepositionPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : true,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openOnepointPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : true,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openNewtonPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : true,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openSecantPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : true,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openCramerPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : true,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openGaussEliminationPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : true,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openGaussJordanPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : true,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openLUPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : true,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }
  
  openJacobiPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : true,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openGaussSeidelPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : true,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openConjugatePage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : true,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openNewtondividedPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : true,
      LagrangePage : false,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openLagrangePage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : true,
      SplinePage : false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openSplinePage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage : true,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openLinearPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : true,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openPolynomialPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : true,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openMultiplelinearPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : true,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openTrapezoidalPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : true,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openCompositetrapezoidalPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : true,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }
  openSimpsonPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : true,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }
  openCompositesimpsonPage = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : true,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openForward1Page = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : true,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openBackward1Page = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : true,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openCentral1Page = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false,
      Central1Page : true,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openForward2Page = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false ,
      Central1Page : false,
      Forward2Page : true,
      Backward2Page : false ,
      Central2Page : false
    })
  }

  openBackward2Page = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : true ,
      Central2Page : false
    })
  }

  openCentral2Page = ()=>{
    this.setState({
      HomePage : false,
      BisectionPage : false,
      FalsepositionPage : false,
      OnepointPage : false,
      NewtonPage : false,
      SecantPage : false,
      CramerPage : false,
      GaussEliminationPage : false,
      GaussJordanPage : false,
      LUPage : false,
      JacobiPage : false,
      GaussSeidelPage : false,
      ConjugatePage : false,
      NewtondividedPage : false,
      LagrangePage : false,
      SplinePage :  false,
      LinearPage : false,
      PolynomialPage : false,
      MultiplelinearPage : false,
      TrapezoidalPage : false,
      CompositetrapezoidalPage : false,
      SimpsonPage : false,
      CompositesimpsonPage : false,
      Forward1Page : false,
      Backward1Page : false,
      Central1Page : false,
      Forward2Page : false,
      Backward2Page : false ,
      Central2Page : true
    })
  }

  render()
  {
    let renderComponent = <HomeContent/>;

    if(this.state.HomePage)
    {
      renderComponent = <HomeContent/>;
    }
    if(this.state.BisectionPage)
    {
      renderComponent = <Bisection/>;
    }
    if(this.state.FalsepositionPage)
    {
      renderComponent = <Falseposition/>;
    }
    if(this.state.OnepointPage)
    {
      renderComponent = <Onepoint/>;
    }
    if(this.state.NewtonPage)
    {
      renderComponent = <Newton/>;
    }
    if(this.state.SecantPage)
    {
      renderComponent = <Secant/>;
    }
    if(this.state.CramerPage)
    {
      renderComponent = <Cramer/>;
    }
    if(this.state.GaussEliminationPage)
    {
      renderComponent = <GaussElimination/>;
    }
    if(this.state.GaussJordanPage)
    {
      renderComponent = <GaussJordan/>;
    }
    if(this.state.LUPage)
    {
      renderComponent = <LU/>;
    }
    if(this.state.JacobiPage)
    {
      renderComponent = <Jacobi/>;
    }
    if(this.state.GaussSeidelPage)
    {
      renderComponent = <GaussSeidel/>;
    }
    if(this.state.ConjugatePage)
    {
      renderComponent = <Conjugate/>;
    }
    if(this.state.NewtondividedPage)
    {
      renderComponent = <Newtondivided/>;
    }
    if(this.state.LagrangePage)
    {
      renderComponent = <Lagrange/>;
    }
    if(this.state.SplinePage)
    {
      renderComponent = <Spline/>;
    }
    if(this.state.LinearPage)
    {
      renderComponent = <Linear/>;
    }
    if(this.state.PolynomialPage)
    {
      renderComponent = <Polynomial/>;
    }
    if(this.state.MultiplelinearPage)
    {
      renderComponent = <Multiplelinear/>;
    }
    if(this.state.TrapezoidalPage)
    {
      renderComponent = <Trapezoidal/>;
    }
    if(this.state.CompositetrapezoidalPage)
    {
      renderComponent = <Compositetrapezoidal/>;
    }
    if(this.state.SimpsonPage)
    {
      renderComponent = <Simpson/>;
    }
    if(this.state.CompositesimpsonPage)
    {
      renderComponent = <Compositesimpson/>;
    }
    if(this.state.Forward1Page)
    {
      renderComponent = <Forward1/>;
    }
    if(this.state.Backward1Page)
    {
      renderComponent = <Backward1/>;
    }
    if(this.state.Central1Page)
    {
      renderComponent = <Central1/>;
    }
    if(this.state.Forward2Page)
    {
      renderComponent = <Forward2/>;
    }
    if(this.state.Backward2Page)
    {
      renderComponent = <Backward2/>;
    }
    if(this.state.Central2Page)
    {
      renderComponent = <Central2/>;
    }
    const { Header, Content, Footer } = Layout;
    return(
      <div>
        <Layout>
            <Header style={{ textAlign: 'center', width: '100%' ,backgroundColor: "lightblue" ,fontSize: 50 ,fontWeight: 'bold'}}>NUMERICAL METHODS</Header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#"onClick={this.openHomePage}>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavDropdown title="Roots of equations" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={this.openBisectionPage}>Bisection Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openFalsepositionPage}>False-Position Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openOnepointPage}>One-Point Iteration Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openNewtonPage}>Newton-Rophson Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openSecantPage}>Secant Method</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="System Of Linear Equations" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={this.openCramerPage}>Cramer's Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openGaussEliminationPage}>Gauss Elimination Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openGaussJordanPage}>Gauss-Jordan Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openLUPage}>LU Decomposition Method</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Iterative Method" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={this.openJacobiPage}>Jacobi Iteration Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openGaussSeidelPage}>Gauss-Seidel Iteration Method</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openConjugatePage}>Conjugate Gradient Method</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Interpolation And Extrapolation" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={this.openNewtondividedPage}>Newton's divided-differences</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openLagrangePage}>Lagrange Interpolation</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openSplinePage}>Spline Interpolation</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Least-Squares Regression" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={this.openLinearPage}>Linear Regression</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openPolynomialPage}>Polynomial Regression</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openMultiplelinearPage}>Multiple Linear Regression</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Integration Techniques" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={this.openTrapezoidalPage}>Trapezoidal Rule</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openCompositetrapezoidalPage}>Composite Trapezoidal Rule</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openSimpsonPage}>Simpson's Rule</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openCompositesimpsonPage}>Composite Simpson's Rule</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Numerical Differentiation" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={this.openForward1Page}>Forward Divided Difference O(h)</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openBackward1Page}>Backward Divided Difference O(h)</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openCentral1Page}>Central Divided Difference O(h)</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openForward2Page}>Forward Divided Difference O(h^2)</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openBackward2Page}>Backward Divided Difference O(h^2)</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={this.openCentral2Page}>Central Divided Difference O(h^2)</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
            </Navbar>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 800}}>
              {renderComponent}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>PG Memory Design ©2019 Created by PG Company</Footer>
        </Layout>
      </div>
    )
  }
}

export default App2;