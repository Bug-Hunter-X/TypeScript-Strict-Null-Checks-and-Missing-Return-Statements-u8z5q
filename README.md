# TypeScript Strict Null Checks and Missing Return Statements

This repository demonstrates a common error in TypeScript related to handling null or undefined values and return types when using strict null checks.  The `bug.ts` file contains a function with a missing return statement that leads to a compilation error.  The `bugSolution.ts` file provides a corrected version.

## Bug Description
The function `greet2` does not explicitly handle all possible return scenarios when `name` is undefined, even though it appears to.  The compiler, under strict null checks, correctly identifies this as a potential problem because it doesn't guarantee a string return in every scenario. 

## Solution
The solution involves adding a default return statement to ensure that a string is always returned, even if `name` is undefined.