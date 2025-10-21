import { Component } from "react";
import "../../style/imageSlider.css";

import img1 from "../../assets/3.jpg";
import img2 from "../../assets/4.jpg";
import img3 from "../../assets/5.jpg";

class imageSlider extends Component {
  constructor() {
    super();
    console.log("constructor run");
    this.state = {
      images: [img1, img2, img3],
      current: 0,
      intervalId: null,
    };
  }

  //   next = () => {
  //     if (!this.state.intervalId) {
  //       this.setState({ intervalId: null });
  //     }
  //   };

  render() {
    let start = () => {
      console.log("hello");
      const id = setInterval(() => {
        this.setState({ current: (this.state.current + 1) % 3 });
      }, 500);
      this.setState({ intervalId: id });
    };

    let stop = () => {
      if (this.state.intervalId) {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
      }
    };

    let next = () => {
      const id = this.setState({ current: (this.state.current + 1) % 3 });
      this.setState({ intervalId: id });
    };

    let prev = () => {
      const id = this.setState({ current: (this.state.current - 1) % 3 });
      this.setState({ intervalId: id });
    };

    console.log("render run");

    return (
      <>
        <div className="slider-container">
          <img src={this.state.images[this.state.current]} alt="" />

          <div className="btn-group">
            <button onClick={start}>Start</button>
            <button onClick={next}>Next</button>
            <button onClick={prev}>Prev</button>
            <button onClick={stop}>Stop</button>
          </div>
        </div>
      </>
    );
  }
}

export default imageSlider;
