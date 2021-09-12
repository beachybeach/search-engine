import React from "react";

const About = () => {
  return (
    <div class="main">
      <form>
        <div id="main-form" class="form-group">
          <label for="input">Search here</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="What do you want to know?" />
          <button type="submit" value="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default About;
