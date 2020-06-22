const type = (prop) => {
  return Object.prototype.toString.call(prop).slice(8, -1).toLowerCase();
};

export default type;
