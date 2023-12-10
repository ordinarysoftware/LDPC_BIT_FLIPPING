# Binary Hard Decision-Decoding Algorithm with Bit Flipping

## Overview

This documentation details the implementation and visualization of a binary hard decision-decoding algorithm with bit flipping. The algorithm corrects errors in received bits through parity-check equations and is accompanied by a visualization software using vis.js.

## Representation using Tanner graph 


Tanner graphs are one of the ways to represent LDPC, which were introduced by Micheal Tanner [3] who considered Robert Gallager’s LDPC codes, and his structured codes using a bipartite graph called a Tanner graph. A simple undirected graph G: = (V, E) is called a bipartite graph if there exists a partition of vertex set so that both V1 and V2 are independent sets. We often write G: = (V1 + V2, E) to denote a bipartite graph with partitions V1 and V2. A Tanner Graph for an LDPC code is a bipartite graph in which the nodes can be partitioned into two classes and no edge can connect from the same class. The two classes of Tanner graph are “variable nodes” corresponding to n bits in a codeword, and “check nodes” corresponding to m parity check equations.

The parity-check matrix H of an LDPC code is a key element in Tanner graph visualization of LDPC codes. Given the parity-check matrix in equation 1, the corresponding Tanner graph is shown in figure 2 

1 0 1 0 1 0 1
1 0 0 1 0 1 1
0 1 1 0 0 1 0
0 1 0 1 1 0 0
Figure 1


![image](https://github.com/ordinarysoftware/LDPC_BIT_FLIPPING/assets/71903387/0545d270-6d95-4187-9891-d12335433209)
Figure 2



## Definitions


## Algorithm

### Binary Hard Decision

The binary hard decision for each received bit is done by the detector and forwarded to another decoder.[1] In this algorithm, the messages are transmitted through the Tanner graph edges and a symbol node sends a message finalizing if it is one or a zero, and then each check node sends a message to each connected symbol node by finally declaring what value the symbol node is based on the information available to the check node. The check node in this step finds that if the modulo-two sum of the input symbol node values is zero, its parity-check equation is satisfied.[1]

However, the symbol node flips its current value, if most of the messages gotten by a symbol node are not the same as its received value. This process requires iteration where the algorithm is repeated until some maximum number of decoder iterations has executed and the decoder terminates, or until all the parity check equations are met. 
This process makes the flipping algorithm a hard decision-decoding algorithm.
In the bit flipping algorithm first function requires XOR the input messages bits at symbol nodes every time to check check nodes’s parity check equations. Another function is required to check whether to flip the bit or not to get the correct message. 


![image](https://github.com/ordinarysoftware/LDPC_BIT_FLIPPING/assets/71903387/e46a37a3-c28c-4b29-8482-a0e075e26303)
Figure 3


The Second step is to flip the bit that is incorrect which was detected in the second function in step one and iterating through them helps to flip incorrect bits in symbol nodes.

       
![image](https://github.com/ordinarysoftware/LDPC_BIT_FLIPPING/assets/71903387/b8b56196-b972-4342-b4df-35e575ce3ec1)
Figure 4


## Visualization Software

- Utilizes vis.js for dynamic graph representation.
- Real-time updates of Tanner graph during decoding process.

## Implementation Steps






## Conclusion

This documentation provides insights into the binary hard decision-decoding algorithm with bit flipping and its visualization using vis.js. The implemented software offers a dynamic representation of the decoding process, aiding in understanding and analysis.

## References
[1]https://www.researchgate.net/publication/338527931_HARD_DECISION_AND_SOFT_DECISION_DECODING_ALGORITHMS_OF_LDPC_AND_COMPARISION_OF_LDPC_WITH_TURBO_CODES_RS_CODES_AND_BCH_CODES


[2]https://github.com/uzum/ldpc-peg


[3]A. Sridharan, D. J. Costello and R. M. Tanner, "A construction for low density parity check convolutional codes based on quasi-cyclic block codes," Proceedings IEEE International Symposium on Information Theory,, Lausanne, Switzerland, 2002, pp. 481-, doi: 10.1109/ISIT.2002.1023753.
