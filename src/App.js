import React from "react";
import marked from "marked";
import placeholder from "./placeholder";
import {
  Container,
  Segment,
  Menu,
  Form,
  TextArea,
  Icon
} from "semantic-ui-react";
import "./App.css";

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return (
    `<a target="_blank" rel="noopener noreferrer" href="${href}">${text}` +
    "</a>"
  );
};

class App extends React.Component {
  state = {
    markdown: placeholder,
    editorMaximized: false,
    previewMaximized: false
  };

  handleChange = e => {
    this.setState({
      markdown: e.target.value
    });
  };

  handleEditorMaximize = () => {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  };

  handlePreviewMaximize = () => {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  };

  render() {
    return (
      <Container>
        <div
          className={`editorWrapper ${this.state.editorMaximized &&
            "maximized"} ${this.state.previewMaximized && "hide"}`}
        >
          <Toolbar
            icon="edit"
            text="Markdown Editor"
            expanded={this.state.editorMaximized ? "compress" : "expand"}
            onClick={this.handleEditorMaximize}
          />
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>

        <div className="converter" />
        <div
          className={`previewWrapper ${this.state.previewMaximized &&
            "maximized"} ${this.state.editorMaximized && "hide"}`}
        >
          <Toolbar
            icon="eye"
            text="Markdown Previewer"
            expanded={this.state.previewMaximized ? "compress" : "expand"}
            onClick={this.handlePreviewMaximize}
          />
          <Preview markdown={this.state.markdown} />
        </div>
      </Container>
    );
  }
}

const Toolbar = props => (
  <Menu attached="top" className="toolbar">
    <Menu.Item>
      <Icon name={props.icon} />
    </Menu.Item>
    <Menu.Item header>{props.text}</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item onClick={props.onClick}>
        <Icon name={props.expanded} />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

const Editor = props => (
  <Segment attached="bottom" style={{ padding: 0 }}>
    <Form>
      <TextArea
        style={{ borderRadius: 0 }}
        id="editor"
        value={props.markdown}
        onChange={props.onChange}
      />
    </Form>
  </Segment>
);

const Preview = props => (
  <Segment attached="bottom">
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
    />
  </Segment>
);

export default App;
