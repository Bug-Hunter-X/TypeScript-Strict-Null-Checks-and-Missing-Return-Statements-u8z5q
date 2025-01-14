function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

//Corrected function to handle undefined values in strict null checks
function greet2(name: string | undefined): string {
  if (name === undefined) {
    return "Hello, world!";
  } else {
    return `Hello, ${name}!`;
  }
}
console.log(greet2(undefined)); // Output: Hello, world!
console.log(greet2("Alice")); // Output: Hello, Alice!