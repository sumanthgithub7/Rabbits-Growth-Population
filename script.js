// JavaScript to calculate the nth Fibonacci number
function fibo(n) {
    if (n <= 1) return 1;
    return fibo(n - 1) + fibo(n - 2);
}

function calculateRabbitPopulation() {
    const term = document.getElementById("term").value;
    const resultDiv = document.getElementById("result");

    if (term === "" || term < 0) {
        resultDiv.textContent = "Please enter a valid positive number.";
        return;
    }

    const totalPairsOfRabbits = fibo(parseInt(term));
    resultDiv.textContent = `Number of pairs of rabbits: ${totalPairsOfRabbits}`;
    resultDiv.style.opacity = 1;  // Show the result with fade-in effect
}
