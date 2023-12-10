# Binary Hard Decision-Decoding Algorithm with Bit Flipping

## Overview

This documentation details the implementation and visualization of a binary hard decision-decoding algorithm with bit flipping. The algorithm corrects errors in received bits through parity-check equations and is accompanied by a visualization software using vis.js.

## Algorithm

### Binary Hard Decision

The binary hard decision for each received bit is done by the detector and forwarded to another decoder.[1] In this algorithm, the messages are transmitted through the Tanner graph edges and a symbol node sends a message finalizing if it is one or a zero, and then each check node sends a message to each connected symbol node by finally declaring what value the symbol node is based on the information available to the check node. The check node in this step finds that if the modulo-two sum of the input symbol node values is zero, its parity-check equation is satisfied.[1]

However, the symbol node flips its current value, if most of the messages gotten by a symbol node are not the same as its received value. This process requires iteration where the algorithm is repeated until some maximum number of decoder iterations has executed and the decoder terminates, or until all the parity check equations are met. 
This process makes the flipping algorithm a hard decision-decoding algorithm.
In the bit flipping algorithm first function requires XOR the input messages bits at symbol nodes every time to check check nodes’s parity check equations. Another function is required to check whether to flip the bit or not to get the correct message. 


![image](https://github.com/ordinarysoftware/LDPC_BIT_FLIPPING/assets/71903387/e46a37a3-c28c-4b29-8482-a0e075e26303)


The Second step is to flip the bit that is incorrect which was detected in the second function in step one and iterating through them helps to flip incorrect bits in symbol nodes.

       
![image](https://github.com/ordinarysoftware/LDPC_BIT_FLIPPING/assets/71903387/b8b56196-b972-4342-b4df-35e575ce3ec1)


## Visualization Software

- Utilizes vis.js for dynamic graph representation.
- Real-time updates of Tanner graph during decoding process.

## Implementation Steps






## Conclusion

This documentation provides insights into the binary hard decision-decoding algorithm with bit flipping and its visualization using vis.js. The implemented software offers a dynamic representation of the decoding process, aiding in understanding and analysis.

## References
[1]https://www.researchgate.net/publication/338527931_HARD_DECISION_AND_SOFT_DECISION_DECODING_ALGORITHMS_OF_LDPC_AND_COMPARISION_OF_LDPC_WITH_TURBO_CODES_RS_CODES_AND_BCH_CODES
[2https://github.com/uzum/ldpc-peg
