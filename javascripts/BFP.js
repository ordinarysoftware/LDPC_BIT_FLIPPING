var BFP = (function () {
  // simple array creation function
  // arrayOf(5, 1) returns [1, 1, 1, 1, 1]
  var arrayOf = function (size, value) {
    if (!value) value = 0;
    var array = [];
    while (size--) array.push(value);
    return array;
  };
  
  var checkNodeNumber = 0;
  var symbolNodeNumber = 0;
  // var calculatedValue = 0;
  var symbolNodeDegrees = [];
  var tannerGraph;
  var hook;
  // var edges_connected = {};
  var intter = [];
  // this is the most critical part of the progressive edge growth algorithm
  var calculateEdges = function () {
    // create an initial parity check matrix whose all elements are 0
    var parityCheckMatrix = arrayOf(checkNodeNumber).map((_) =>
      arrayOf(symbolNodeNumber)
    );

    // use this parity check matrix to create the initial tanner-graph
    // which is only symbol and check nodes, without any edge
    tannerGraph = new TannerGraph(parityCheckMatrix);
    
    
    symbolNodeDegrees.forEach((degree, index) => {
      var symbolNode = tannerGraph.getNode(index);

      for (i = 0; i < degree; i++) {
        // if this is the first edge coming out from that symbol-node
        if (i === 0) {
          // find the check node with the lowest check node degree
          // in current graph configuration
          var lowest = tannerGraph.getCheckNodeWithLowestDegree();
          tannerGraph.createEdge(symbolNode.id, lowest.id);
          hook && hook(tannerGraph);
          tannerGraph.refreshCheckNodeLabels();
checkNodeValues = checkNodecalculate(edges_connected, symbolNodeValues);
          
          if (!edges_connected[lowest.id]) {
            edges_connected[lowest.id] = []; // Initialize an array for this check node if it doesn't exist
          }
          edges_connected[lowest.id].push(symbolNode.id); // Add the symbol node to the array
          // Refresh the labels of check nodes
          symbolNodeInputs = reverseDictionary(edges_connected);
          intter = calculateModularSums(edges_connected, symbolNodeValues);
          
          for (var n = 0; n < intter.length; n++) {
            // Perform some update operation, for example, multiplying each element by 2
            calculatedValue[n] = intter[n];
          }
          tannerGraph.refreshCheckNodeLabels();
          // we need to look at the subgraph from this symbol node to decide edge
        } else {
          // we will gradually deepen the subgraph expanding from this symbol node
          // two conditions to end this process:
          //   1. the subgraph stopped expanding while there are still unreached check nodes
          //   2. all the check nodes are reached. In this case, we need the subgraph from the previous iteration
          var depth = 0;
          var currentSubGraph = tannerGraph.getSubGraph(symbolNode.id, depth);
          
          while (true) {
            // this means second condition is satisfied
            if (currentSubGraph.allCheckNodesCovered()) {
              intter = calculateModularSums(edges_connected, symbolNodeValues);
              for (var n = 0; n < intter.length; n++) {
                // Perform some update operation, for example, multiplying each element by 2
                calculatedValue[n] = intter[n];
              }
             

              

              var previousSubGraph = tannerGraph.getSubGraph(
                symbolNode.id,
                depth - 1
              );
              // select the check node with the lowest degree
              // which is uncovered in the previous subgraph, but covered in this one
              var lowest = previousSubGraph.getUCCheckNodeWithLowestDegree();
              tannerGraph.createEdge(symbolNode.id, lowest.id);
              hook && hook(tannerGraph);

              console.log("haha" + intter);

              if (!edges_connected[lowest.id]) {
                edges_connected[lowest.id] = []; // Initialize an array for this check node if it doesn't exist
              }
              edges_connected[lowest.id].push(symbolNode.id); // Add the symbol node to the array
              symbolNodeInputs = reverseDictionary(edges_connected);

              // Refresh the labels of symbol nodes
              intter = calculateModularSums(edges_connected, symbolNodeValues);
              for (var n = 0; n < intter.length; n++) {
                // Perform some update operation, for example, multiplying each element by 2
                calculatedValue[n] = intter[n];
              }
              
              tannerGraph.refreshSymbolNodeLabels();
              checkNodeValues=checkNodecalculate(edges_connected, symbolNodeValues);

              // Refresh the labels of check nodes
              
              

              
              console.log("fifth 5 " + checkNodeValues);
              
              console.log(symbolNodeValues);
              console.log(edges_connected);
              console.log(symbolNodeInputs);

              
              break;
            }

            // increase the depth one more and create a new subgraph
            depth++;
            var nextSubGraph = tannerGraph.getSubGraph(symbolNode.id, depth);

            // this means level stopped increasing: first condition is satisfied
            if (nextSubGraph.level === currentSubGraph.level) {
              // select the check node with the lowest degree among the nodes not covered by this subgraph
              
              calculatedValue = calculateModularSums(edges_connected, symbolNodeValues);
              

              tannerGraph.refreshCheckNodeLabels();
              console.log("forth 4 " + intter);
              var lowest = currentSubGraph.getUCCheckNodeWithLowestDegree();
              tannerGraph.createEdge(symbolNode.id, lowest.id);
              hook && hook(tannerGraph);
              if (!edges_connected[lowest.id]) {
                edges_connected[lowest.id] = []; // Initialize an array for this check node if it doesn't exist
              }

              edges_connected[lowest.id].push(symbolNode.id); // Add the symbol node to the array
              symbolNodeInputs = reverseDictionary(edges_connected);
              
              console.log("fifth 5 " +edges_connected);

              // Refresh the labels of symbol nodes
              tannerGraph.refreshSymbolNodeLabels();
              

              
              

              console.log("fifth 5 " + checkNodeValues);
              

              console.log(intter);
              break;
            }
            currentSubGraph = nextSubGraph;
            
          }
        }
      }
    });
  };

  return {
    // creates the tanner-graph for the given parameters

    create: function (options) {
      checkNodeNumber = options.checkNodeNumber;
      symbolNodeNumber = options.symbolNodeNumber;
      symbolNodeDegrees = options.symbolNodeDegrees;
      symbolNodeValues = options.symbolNodeValues;
      checkNodeValues = options.checkNodeValues;
      edges_connected = options.edges_connected;
      symbolNodeInputs = options.symbolNodeInputs;
      calculatedValue = options.calculatedValue;

      calculateEdges();
      tannerGraph.refreshCheckNodeLabels();
      checkNodeValues = checkNodecalculate(edges_connected, symbolNodeValues);
      return tannerGraph;
    },
    // Access the Tanner graph and its nodes

    // this function registers a callback to be called
    // each time a new edge is being added to the tanner-graph
    // it will be useful to store intermediate steps to see how the algorithm works step by step
    hook: function (callback) {
      hook = callback;
    },
  };
})();



function calculateModularSums(inputDict, newNameOriginal) {
  // Initialize an empty array to store modular sums.
  var newName = Array.from(newNameOriginal);
  let modularSums = [];

  // Iterate through the keys in the dictionary.
  for (let key in inputDict) {
    if (inputDict.hasOwnProperty(key)) {
      // Get the array associated with the current key.
      let currentArray = inputDict[key];

      // Calculate the modular sum for the current array using XOR.
      let sum = 0;
      for (let i = 0; i < currentArray.length; i++) {
        // Get the value for the current index from newName.
        let indexValue = newName[currentArray[i]];

        // Calculate the modular sum using XOR (^) operation.
        sum ^= indexValue;
      }

      // Add the modular sum to the result array.
      modularSums.push(sum);
      console.log(modularSums);
    }
  }
console.log("length"+modularSums.length);
  // Update newName to make every modular sum 0.
  // for (let i = 0; i < modularSums.length; i++) {
  //   // Iterate through the array indices associated with the current key.
  //   let currentArray = inputDict[Object.keys(inputDict)[i]];
  //   console.log("keys"+inputDict[Object.keys(inputDict)[i]]);
  //   for (let j = 0; j < currentArray.length; j++) {
  //     // Update the newName for the current index to make the modular sum 0.
  //     console.log("variable"+newName[currentArray[j]]);
  //     console.log("index"+currentArray[j]);
  //     newName[currentArray[j]] ^= modularSums[i];
  //   }
  // }
  for (let i = 0; i < modularSums.length; i++) {
    let currentArray = inputDict[Object.keys(inputDict)[i]];
    let updateValue
    if (i === 0) {
      updateValue = 0;
   } else if (i % 2 !== 0) {
      updateValue = 1;
   } else {
      updateValue = 0;
   }
   
    
    // Check if the modular sum is not 0
    if (modularSums[i] !== 0) {
      for (let j = 0; j < currentArray.length; j++) {
        // Check if the index is even or odd
        newName[currentArray[j]] = updateValue;

      // Toggle the updateValue between 0 and 1
      updateValue = 1 - updateValue;
      }
    }
  }
  
  // Verify if the final XOR is 0 for all modular sums.
  let finalXOR = 0;
  for (let i = 0; i < modularSums.length; i++) {
    finalXOR ^= modularSums[i];
  }

  // If the final XOR is not 0, there might be an issue.
  if (finalXOR !== 0) {
    console.error("Error: The final XOR is not 0. Check your input.");
  }
  
  // Return the updated newName.
  return newName;
}


function checkNodecalculate(inputDict, newNameOriginal){
// Initialize an empty array to store modular sums.
var newName = Array.from(newNameOriginal);
let modularSums = [];

// Iterate through the keys in the dictionary.
for (let key in inputDict) {
  if (inputDict.hasOwnProperty(key)) {
    // Get the array associated with the current key.
    let currentArray = inputDict[key];

    // Calculate the modular sum for the current array using XOR.
    let sum = 0;
    for (let i = 0; i < currentArray.length; i++) {
      // Get the value for the current index from newName.
      let indexValue = newName[currentArray[i]];

      // Calculate the modular sum using XOR (^) operation.
      sum ^= indexValue;
    }

    // Add the modular sum to the result array.
    modularSums.push(sum);
    console.log(modularSums);
  }
}
return modularSums;
}


function reverseDictionary(originalDict) {
  const reversedDict = {};
  var x = symbolNodeValues.length;
  for (const nodeA in originalDict) {
    const symbolsA = originalDict[nodeA];
    for (const symbolA of symbolsA) {
      if (reversedDict.hasOwnProperty(symbolA)) {
        reversedDict[symbolA].push(nodeA - x);
      } else {
        reversedDict[symbolA] = [nodeA - x];
      }
    }
  }

  return reversedDict;
}
