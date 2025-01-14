function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

//This code will not compile in strict null checks mode because it is missing a return statement 
function greet2(name: string | undefined): string {
  if (name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}
console.log(greet2(undefined)); // Output: Hello, world!
console.log(greet2("Alice")); // Output: Hello, Alice!