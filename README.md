# Rabbits-Growth-Population
Project Overview:
In this project, we simulate the growth of rabbit pairs in a controlled environment. The number of pairs grows according to the Fibonacci sequence, where each pair of rabbits reproduces once every month, and the number of new pairs follows the Fibonacci series. This simple mathematical model gives insight into exponential growth and the natural propagation of populations over time.

Mathematical Model:
The Fibonacci sequence is defined as:

F(0) = 1 (Initial pair of rabbits)
F(1) = 1 (First generation)
F(n) = F(n-1) + F(n-2) for n ≥ 2
This model assumes:

Each pair of rabbits reproduces exactly once.
The reproduction rate follows the Fibonacci sequence, where each pair of rabbits starts reproducing at the second month of their life.
How the Model Works:
We start with an initial population of 1 pair of rabbits.
In the first month, no new pairs are born.
Starting from the second month, the number of new pairs born is equal to the sum of the previous two months (just like the Fibonacci sequence).
This pattern continues for each month, and the total number of pairs grows exponentially over time.
