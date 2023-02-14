import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label for="range">From 2 - </label>
        <input
          type="text"
          // value = {} required
          placeholder="Enter end point....."
          className="form--input"
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </div>
  );
};

export default Form;
