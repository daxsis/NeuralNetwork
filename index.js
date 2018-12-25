// Forward Propagation - prediction
// Back Propagation - measure
// Back Propagation second step = learn
const net = new brain.NeuralNetwork({ hiddenLayers: [3, 3] });

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];


net.train(trainingData, {
	log: (error) => console.log(error),
	logPeriod: 100,
});

console.log(net.run([0, 0]));
console.log(net.run([0, 1]));
console.log(net.run([1, 0]));
console.log(net.run([1, 1]));


// input & output
(inputs) => outputs;

// random values ( how network initiates, the knowledge is very
// random at first. not 1 & 0, somewhere in between. Overtime we
// shape that data )
Math.random() // each neuron is at first ( math starts at ranom data )

// activaition function "relu"
function relu(value) {
	return value < 0 ? 0 : value;
}
// bonus material
// https://en.wikipedia.org/wiki/Activation_function
/*
https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L227
https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L527
*/

// bonus material

// Neural Net; Neurons -> Math; The hidden layers where ideas are
// and the majority of starage; You even may run into a scenario where
// your neural net isn't learning.
// Stacked neurons are input layers
// -> hidden layer
// -> hidden layers
// -> output leayer
// Caution: more neurons you add, the longer it takes to learn;
// Treat hidden layers like a funnel;

// The feed for neuron math can be represented like this:
// activate((inputWeights + input) + biases)

// bonus https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L233
// https://github.com/BrainJS/brain.js#options
