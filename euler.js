/* Differential Equations Programming Assignment
 By: Saleh Hamadeh
 Class: Math 3310
 Professor: Dr. Yuliya Babenko

 This file contains Euler's method. What my function does is that it evaluates points on the graph
 using Euler's method and stores them in an array of dictionaries (or hashtables or maps). That
 array, along with some options that change the style of the chart, are passed to another function
 that renders the chart. That function can be found in index.html. I am using a wonderful javascript
 library called D3.js to bind the data to the graph. I highly recommend this library for doing analysis
 on realtime data because of the speed, simplicity, and interactivity of its functions.
*/

/*These definitions allow you to directly reference functions in the Javascript Math Object. For example,
  you can type abs(-4) instead of Math.abs(-4) in the equation textbox. */
var abs = function(x) {return Math.abs(x)};
var sin = function(x) {return Math.sin(x)};
var cos = function(x) {return Math.cos(x)};
var tan = function(x) {return Math.tan(x)};
var asin = function(x) {return Math.asin(x)};
var acos = function(x) {return Math.acos(x)};
var atan = function(x) {return Math.atan(x)};
var exp = function(x) {return Math.exp(x)};
var ln = function(x) {return Math.log(x)};
var log = function(x) {return Math.log(x)};
var pow = function(x, y) {return Math.pow(x, y)};
var sqrt = function(x) {return Math.sqrt(x)};

/* This function takes in the floats of the values passed in the form. */
function getGraphFromDiffEq(equation, x0, y0, steps, to) {
  //This array stores the points of the graph as dictionaries. For example, [{x: 0, y:0}, {x:1, y:2}].
  var values = [];
  var x = x0; //Set x to x0
  var y = y0; //Set y to y0
  var step_size = (to-x0)/steps;  //Calculate the step size
  values.push({x: x, y: y});  //Add the first point to our array
  for(var i = 0; i < steps; i++) {
    var slope = eval(equation); //Javascript eval() function takes a string and places it as if the string was actual code.
    x += step_size; //Increase x by the step_size, or h.
    y = y + step_size*slope;  //Find the next y using dy/dx at the previous point
    values.push({x: x, y: y}) //Push the new point to our array
  }

  //Return the points and other chart options to the chart's D3 datafield.
  return [
    {
      values: values,
      key: "Solution to " + equation,
      color: "#ff7f0e"
    }
  ];
}