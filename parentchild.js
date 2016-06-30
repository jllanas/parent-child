var util = require('util'),
  graphviz = require('graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Hello)
var n1 = g.addNode( "KINGDOM : Animalia ", {"color" : "steelblue"} );
n1.set( "style", "filled" );

// Add node (ID: World)
var n2 = g.addNode( "PHYLUM: Chordata", {"color" : "lightskyblue"} );
n2.set("style", "filled");

var n3 = g.addNode( "CLASS: Mammalia", {"color": "lightblue"});
n3.set("style", "filled");

var n4 = g.addNode("ORDER: Carnivora", {"color": "slategray3"});
n4.set("style", "filled");

var n5 = g.addNode("FAMILY: Felidae", {"color": "mediumpurple"});
n5.set("style", "filled");

var n6 = g.addNode("GENUS: Felis", {"color": "mediumorchid3"})
n6.set("style", "filled");

var n7 = g.addNode("GENUS: Panthera", {"color": "mediumorchid3"})
n7.set("style", "filled");

var n8 = g.addNode("SPECIFIC EPITHET: catus", {"color": "plum3"})
n8.set("style", "filled");

var n9 = g.addNode("SPECIFIC EPITHET: pardalis", {"color": "plum3"})
n9.set("style", "filled");

var n10 = g.addNode("SPECIFIC EPITHET: pardus", {"color": "plum3"})
n10.set("style", "filled");

// Add edge between the two nodes
var e = g.addEdge( n1, "PHYLUM: Chordata");
e.set( "color", "black" );

var e = g.addEdge(n2, "CLASS: Mammalia");
e.set("color", "black");

var e = g.addEdge(n3, "ORDER: Carnivora");
e.set("color", "black");

var e = g.addEdge(n4, "FAMILY: Felidae");
e.set("color", "black");

var e = g.addEdge(n5, "GENUS: Felis");
e.set("color", "black");

var e = g.addEdge(n5, "GENUS: Panthera");
e.set("color", "black");

var e = g.addEdge(n6, "SPECIFIC EPITHET: catus");
e.set("color", "black");

var e = g.addEdge(n6, "SPECIFIC EPITHET: pardalis");
e.set("color", "black");

var e = g.addEdge(n7, "SPECIFIC EPITHET: pardus");
e.set("color", "black");

// Print the dot script
console.log( g.to_dot() );

// Set GraphViz path (if not in your path)
g.setGraphVizPath( "/usr/local/bin" );
// Generate a PNG output
g.output( "png", "test01.png" );
