import React, { Component } from "react";
import Switch from "react-switch";

// este codigo se saco de la pagina https://www.npmjs.com/package/react-switch
class Interruptor extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    if (this.props.my_socket.connected) {
      alert("Se cerró el Websocket");
      this.props.my_socket.close();
    } else {
      alert("Se abrió el Websocket");
      this.props.my_socket.open();
    }
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <span>Interruptor para abrir y cerrar Websocket</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}

export default Interruptor;