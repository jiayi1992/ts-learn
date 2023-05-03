// Without downlevelIteration enabled, a for / of loop on any object is downleveled to a traditional for loop:
// This is often what people expect, but it’s not 100% compliant with ECMAScript iteration protocol.
// Certain strings, such as emoji (😜), have a .length of 2 (or even more!), but should iterate as 1 unit in a for-of loop.
// See this blog post by Jonathan New for a longer explanation.

const str = "Hello!";
for (const s of str) {
  console.log(s);
}
