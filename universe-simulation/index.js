const math = require('mathjs');

function simulateUniverseExpansion(steps, initialSize, expansionRate) {
    let currentSize = initialSize;

    console.log(`Starting simulation of the universe's expansion.`);
    console.log(`Initial size of the universe: ${currentSize} arbitrary units.`);

    for (let step = 0; step < steps; step++) {
        // Model the expansion as exponential growth
        currentSize = math.multiply(currentSize, math.exp(expansionRate));
        console.log(`After step ${step + 1}, the size of the universe is ${currentSize.toFixed(2)} arbitrary units.`);
    }

    console.log(`Simulation complete. Final size of the universe: ${currentSize.toFixed(2)} arbitrary units after ${steps} steps.`);
}

// Parameters for the simulation: number of steps, initial size, and expansion rate
simulateUniverseExpansion(10, 1, 0.05);
