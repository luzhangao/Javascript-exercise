import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as marked from "https://cdn.skypack.dev/marked@2.1.1";

// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

var defaultValue = "## This is some markdown\n### Consider making your own\n#### List items\n- George\n- Paul\n- Ringo\n- John\n#### Make it **bold** or make it *italic*\n#### Create links [Github](https://github.com/andydlindsay)"

const mkdToHTML = function markdownToSanitizedHTML(markdown) {
const html = marked.parseInline(markdown);
 return { __html: html };
};

class MkdToHTML extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: defaultValue,
      markdown: mkdToHTML(defaultValue)
   };
   this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const markdownInput = document.getElementById("editor");
    this.setState({
       markdown: mkdToHTML(markdownInput.value),
    });
  }
  
  render() {
    return (
      <>
        <div id="markdown">
        <label id="markdown_label">Write makedown here:</label>
        <textarea id="editor" onChange={this.handleChange}  defaultValue={this.state.origin}/>
        <div id="preview" dangerouslySetInnerHTML={this.state.markdown}/> 
        </div>
      </>
    );
  }
};

const element = document.getElementById("markdown");
ReactDOM.render(<MkdToHTML/>, element);
