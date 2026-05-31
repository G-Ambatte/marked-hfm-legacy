import M from './markdown';
const { marked, render, validate } = M;

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
