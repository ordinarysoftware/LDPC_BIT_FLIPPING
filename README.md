# Binary Hard Decision-Decoding Algorithm with Bit Flipping

## Overview

This documentation details the implementation and visualization of a binary hard decision-decoding algorithm with bit flipping. The algorithm corrects errors in received bits through parity-check equations and is accompanied by a visualization software using vis.js.

## Algorithm

### Binary Hard Decision

The binary hard decision for each received bit is done by the detector and forwarded to another decoder.[14] In this algorithm, the messages are transmitted through the Tanner graph edges and a symbol node sends a message finalizing if it is one or a zero, and then each check node sends a message to each connected symbol node by finally declaring what value the symbol node is based on the information available to the check node. The check node in this step finds that if the modulo-two sum of the input symbol node values is zero, its parity-check equation is satisfied.[14]

However, the symbol node flips its current value, if most of the messages gotten by a symbol node are not the same as its received value. This process requires iteration where the algorithm is repeated until some maximum number of decoder iterations has

executed and decoder terminates, or until all the parity check equations are met. 
This process makes the flipping algorithm a hard decision-decoding algorithm.
In the bit flipping algorithm first function requires XOR the input messages bits at symbol nodes every time to check check nodes’s parity check equations. Another function is required to check whether to flip the bit or not to get the correct message. 


![image](https://github.com/ordinarysoftware/LDPC_BIT_FLIPPING/assets/71903387/e46a37a3-c28c-4b29-8482-a0e075e26303)


The Second step is to flip the bit that is incorrect which was detected in the second function in step one and iterating through them helps to flip incorrect bits in symbol nodes.

       
![image](https://github.com/ordinarysoftware/LDPC_BIT_FLIPPING/assets/71903387/b8b56196-b972-4342-b4df-35e575ce3ec1)


## Visualization Software

- Utilizes vis.js for dynamic graph representation.
- Real-time updates of Tanner graph during decoding process.

## Implementation Steps

1. **Initialization:**
   - Initialize Tanner graph with symbol and check nodes.

2. **Visualization Setup:**
   - Set up vis.js for dynamic graph visualization.

3. **Decoding Algorithm:**
   - Implement binary hard decision-decoding algorithm with bit flipping.

4. **Real-time Updates:**
   - Update visualization in real-time to reflect decoding process.

## Usage Instructions

1. **Requirements:**
   - Ensure vis.js is installed.
   - Have necessary dependencies in place.

2. **Running the Software:**
   - Execute provided script to run visualization software.

3. **Interacting with Visualization:**
   - Observe decoding process on visualized Tanner graph.

## Conclusion

This documentation provides insights into the binary hard decision-decoding algorithm with bit flipping and its visualization using vis.js. The implemented software offers a dynamic representation of the decoding process, aiding in understanding and analysis.
