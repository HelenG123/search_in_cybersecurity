'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
        <div>
        <title> LilFuzz </title>
        <link rel="icon" href="monkey_logo.png" />
        <link href="https://fonts.googleapis.com/css?family=Arimo|Poppins" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n            * {\n                text-align: center;\n                color: #622300;\n                background-color:white;\n                font-family: 'Poppins', sans-serif;\n                box-sizing: border-box;\n                position: relative;\n            }\n\n            h1 {\n                padding-top: 50px;\n                vertical-align: middle;\n                font-size: 60px;\n                margin-bottom: -20px;\n            }\n\n            h2 {\n                margin-bottom: 0px;\n            }\n\n            input[type=text] {\n                    width: 360px;\n                    font-size: 20px;\n                    text-align: center;\n                    border-radius: 6px;\n                    color: #622300;\n                    font-family: 'Poppins', sans-serif;\n\n            }\n\n            input[type=submit] {\n                    margin-top: 10px;\n                    font-size: 25px;\n                    text-align: center;\n                    border-radius: 6px;\n                    color: #622300;\n                    font-family: 'Poppins', sans-serif;\n                    background-color: lightgray;\n\n            }\n\n            input[type=submit]:hover {\n                    transition: 0.5s;\n                    color: black;\n            }\n\n    \n        " }} />
        <h1>Sample Website</h1>
        <h2>Testing Randomized Inputs</h2>
        <form>
          <input className="text-input" id="inputField" type="text" defaultValue="Placeholder" /> <br />
          <input className="radio_button" type="radio" name="group" /> First Filter
          <input className="radio_button" type="radio" name="group" /> Second Filter <br />
          <input type="submit" defaultValue="Submit" />
        </form>
        <nav>
          {/* <a href="http://www.itsecgames.com/">Test Link 1&nbsp;</a> */}
          {/* <a href="demo.html">Test Link 2&nbsp;</a>
            <a href="try.html">Test Link 3</a> */}
        </nav> 
      </div>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);