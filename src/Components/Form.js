import React from "react";

const Form = () => {
  return (
    <Form>
      {/* <label for="range">Range</label> */}
      <input
        type="text"
        // value = {} required
        placeholder="Enter number(digits) greater than 1..."
        className="form--input"
      />
      <button type="submit" className="btn">
        Generate
      </button>
    </Form>
  );
};

export default Form;
