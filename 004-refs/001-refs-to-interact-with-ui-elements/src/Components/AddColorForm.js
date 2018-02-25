import React, { Component } from 'react'

export default class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    const { _title, _color } = this.refs
    e.preventDefault();
    this.props.onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }
  render() {
    return (
      <form onSubmit={this.submit}>
          <input ref="_title" type="text" placeholder="color title..." required/>
          <input ref="_color" type="color" required/>
          <button>ADD</button>
      </form>
    );
  }
}



// usage of ref in stateless functional component
const AddColorForm1 = ({onNewColor = f=>f}) => {
  let _title, _color;
  const submit = e => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = ''
    _color.value = '#000000'
    _title.focus()
  }
  return (
    <form onSubmit={submit}>
           <input ref={input => _title = input}
                  type="text"
                  placeholder="color title..." required/>
           <input ref={input => _color = input}
                  type="color" required/>
           <button>ADD</button>
       </form>
  );
};
