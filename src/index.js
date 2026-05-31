import { marked, render, validate } from './markdown.js';

export default {
  engine: {
    marked,
    render,
    validate,
  },
  style: {
    build: () => {}, // placeholder function
  },
};
