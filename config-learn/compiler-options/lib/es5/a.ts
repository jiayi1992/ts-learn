// TypeScript only transpiles new JavaScript syntax like arrow functions and async functions,
// but it does not provide polyfills for JavaScript APIs, like Promise, array.find, Map, etc. (unlike Babel).

// Therefore, it is up to you to include polyfills for JavaScript APIs that your
// runtime environment might not support. So, if you want to use promises in an ES5
// environment, you would include a Promise polyfill.

// However, you will run into a problem. Even though you're importing a Promise polyfill,
// TypeScript does not know that, and shows the error we saw before.
// That's why the lib option was introduced. lib tells TypeScript which library APIs
// will be available in your runtime environment.
export const promise: Promise<void> = new Promise(() => {});

const window = null;
const test = window?.attribute;
