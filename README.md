# Binary Hard Decision-Decoding Algorithm with Bit Flipping

## Overview

This documentation details the implementation and visualization of a binary hard decision-decoding algorithm with bit flipping. The algorithm corrects errors in received bits through parity-check equations and is accompanied by a visualization software using vis.js.

## Algorithm

### Binary Hard Decision

- Detector makes binary hard decisions for received bits.
- Messages transmitted through Tanner graph edges.
- Symbol nodes finalize messages as one or zero.
- Check nodes declare values for connected symbol nodes.

### Parity-Check Equations

- Check nodes verify equations.
- Equation satisfied if modulo-two sum of symbol node values is zero.

### Iteration and Bit Flipping

- Symbol nodes flip values if most received messages differ.
- Iteration until max decoder iterations or all equations satisfied.

### Bit Flipping Algorithm

1. **Check Operation:**
   - XOR operation at symbol nodes to check parity-check equations.
   - 
![image](https://github.com/ordinarysoftware/LDPC_BIT_FLIPPING/assets/71903387/e46a37a3-c28c-4b29-8482-a0e075e26303)

2. **Bit Flipping:**
   - Function flips bits based on message correctness.
   - Iterative updates for correct decoding.
   - 
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
