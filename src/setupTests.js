// Some Web-API methods are yet not available to jsDOM.
// You can add mocks to polyfill these missing functionality here.
// See @patternslib/patternslib/src/setupTests.js for more examples.

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// need this for async/await in tests
import "core-js/stable";
import "regenerator-runtime/runtime";
