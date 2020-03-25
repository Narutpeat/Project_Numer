var express = require('express');
var router = express.Router();
let Bisection = require('../table/tablebisection');
let One = require('../table/tableone');
let False = require('../table/tablefalse');
let Newton = require('../table/tablenewton');
let Secant = require('../table/tablesecant');
let Cramer = require('../table/tablecramer');
let GaussElimination = require('../table/tablegausselimination');
let GaussJordan = require('../table/tablegaussjordan');
let LU = require('../table/tableLU');
let Jacobi = require('../table/tablejacobi');
let GaussSeidel = require('../table/tablegaussseidel');
let Conjugate = require('../table/tableconjugate');
let Newtondivided = require('../table/tablenewtondivided');
let Lagrange = require('../table/tablelagrange');
let Spline = require('../table/tablespline');
let Linear = require('../table/tablelinear');
let Polynomial = require('../table/tablepolynomial');
let Multiplelinear = require('../table/tablemultiplelinear');
let Trapezoidal = require('../table/tabletrapezoidal');
let Compositetrapezoidal = require('../table/tablecompositetrapezoidal');
let Simpson = require('../table/tablesimpson');
let Compositesimpson = require('../table/tablecompositesimpson');
let Forward1 = require('../table/tableForward1');
let Backward1 = require('../table/tableBackward1');
let Central1 = require('../table/tableCentral1');
let Forward2 = require('../table/tableForward2');
let Backward2 = require('../table/tableBackward2');
let Central2 = require('../table/tableCentral2');
/* GET users listing. */

router.get('/showBisection', function(req, res, next) {
 
  Bisection.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});
router.get('/showOne', function(req, res, next) {
 
  One.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});
router.get('/showFalse', function(req, res, next) {
 
  False.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});
router.get('/showNewton', function(req, res, next) {
 
  Newton.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});
router.get('/showSecant', function(req, res, next) {
 
  Secant.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});
router.get('/showCramer', function(req, res, next) {
 
  Cramer.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});
router.get('/showGaussElimination', function(req, res, next) {
 
  GaussElimination.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showGaussJordan', function(req, res, next) {
 
  GaussJordan.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showLU', function(req, res, next) {
 
  LU.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showJacobi', function(req, res, next) {
 
  Jacobi.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showGaussSeidel', function(req, res, next) {
 
  GaussSeidel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showConjugate', function(req, res, next) {
 
  Conjugate.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showNewtondivided', function(req, res, next) {
 
  Newtondivided.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showLagrange', function(req, res, next) {
 
  Lagrange.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showSpline', function(req, res, next) {
 
  Spline.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showLinear', function(req, res, next) {
 
  Linear.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showPolynomial', function(req, res, next) {
 
  Polynomial.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showMultiplelinear', function(req, res, next) {
 
  Multiplelinear.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showTrapezoidal', function(req, res, next) {
 
  Trapezoidal.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showCompositetrapezoidal', function(req, res, next) {
 
  Compositetrapezoidal.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showSimpson', function(req, res, next) {
 
  Simpson.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showCompositesimpson', function(req, res, next) {
 
  Compositesimpson.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showForward1', function(req, res, next) {
 
  Forward1.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showBackward1', function(req, res, next) {
 
  Backward1.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showCentral1', function(req, res, next) {
 
  Central1.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showForward2', function(req, res, next) {
 
  Forward2.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showBackward2', function(req, res, next) {
 
  Backward2.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})
router.get('/showCentral2', function(req, res, next) {
 
  Central2.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
})

router.post('/addBisection',(req,res)=>{
  console.log(req.body);
  let doc = new Bisection(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.post('/addOne',(req,res)=>{
  console.log(req.body);
  let doc = new One(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.post('/addFalse',(req,res)=>{
  console.log(req.body);
  let doc = new False(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addNewton',(req,res)=>{
  console.log(req.body);
  let doc = new Newton(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addSecant',(req,res)=>{
  console.log(req.body);
  let doc = new Secant(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addCramer',(req,res)=>{
  console.log(req.body);
  let doc = new Cramer(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addGaussElimination',(req,res)=>{
  console.log(req.body);
  let doc = new GaussElimination(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addGaussJordan',(req,res)=>{
  console.log(req.body);
  let doc = new GaussJordan(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addLU',(req,res)=>{
  console.log(req.body);
  let doc = new LU(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addJacobi',(req,res)=>{
  console.log(req.body);
  let doc = new Jacobi(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addGaussSeidel',(req,res)=>{
  console.log(req.body);
  let doc = new GaussSeidel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addConjugate',(req,res)=>{
  console.log(req.body);
  let doc = new Conjugate(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addNewtondivided',(req,res)=>{
  console.log(req.body);
  let doc = new Newtondivided(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addLagrange',(req,res)=>{
  console.log(req.body);
  let doc = new Lagrange(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addSpline',(req,res)=>{
  console.log(req.body);
  let doc = new Spline(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addLinear',(req,res)=>{
  console.log(req.body);
  let doc = new Linear(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addPolynomial',(req,res)=>{
  console.log(req.body);
  let doc = new Polynomial(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addMultiplelinear',(req,res)=>{
  console.log(req.body);
  let doc = new Multiplelinear(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addTrapezoidal',(req,res)=>{
  console.log(req.body);
  let doc = new Trapezoidal(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addCompositetrapezoidal',(req,res)=>{
  console.log(req.body);
  let doc = new Compositetrapezoidal(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addSimpson',(req,res)=>{
  console.log(req.body);
  let doc = new Simpson(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addCompositesimpson',(req,res)=>{
  console.log(req.body);
  let doc = new Compositesimpson(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addForward1',(req,res)=>{
  console.log(req.body);
  let doc = new Forward1(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addBackward1',(req,res)=>{
  console.log(req.body);
  let doc = new Backward1(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addCentral1',(req,res)=>{
  console.log(req.body);
  let doc = new Central1(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addForward2',(req,res)=>{
  console.log(req.body);
  let doc = new Forward2(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addBackward2',(req,res)=>{
  console.log(req.body);
  let doc = new Backward2(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
router.post('/addCentral2',(req,res)=>{
  console.log(req.body);
  let doc = new Central2(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
module.exports = router;
