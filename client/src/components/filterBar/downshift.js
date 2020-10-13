import  React, { useState } from 'react';

class FieldEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
  }

  render() {
    return (
      <div className="field-editor">
        <input onChange={this.handleChange} value={this.props.value} />
      </div>
    );
  }
}

class FormEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const fields = this.props.fields.map(field => (
      <FieldEditor
        key={field}
        id={field}
        onChange={this.handleFieldChange}
        value={this.state[field]}
      />
    ));

    return (
      <div>
        {fields}
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}