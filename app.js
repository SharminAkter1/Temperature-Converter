//Fahrenhit to Celsius
document.write('Fahrenhit to Celsius ' + "<br/> ");
var fahrenheit = parseFloat(prompt('Enter Fahrenheit Number = '));

var celsius = (32-fahrenheit) * (5/9);
document.write("Celsius = " + celsius + '<br/><br/><br/> ');


//// Celsius to Fahrenhit 
document.write('Celsius to Fahrenhit ' + "<br/> ");
var celsius = parseFloat(prompt('Enter Fahrenheit Number = '));

var fahrenheit = (32 - celsius) * (5/9);
document.write(" Fahrenheit= " +  fahrenheit);
