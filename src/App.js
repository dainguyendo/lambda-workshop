import 'whatwg-fetch';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Result from './Result';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      latitude: '',
      longitude: '',
      geojson: {}
    };
  }

  handleTextField (evt) {
    const { id } = evt.currentTarget;
    const newState = {};
    newState[id] = evt.currentTarget.value;
    this.setState(newState);
  }

  getGeoJSON (evt) {
    const { name, latitude, longitude } = this.state;
    const headers = {};
    headers['Content-Type'] = 'application/json';
    const fetchConfiguration = {
      headers: headers,
      method: 'GET',
      mode: 'cors',
    };
    const apiResource = process.env.REACT_APP_SECRET_CODE;
    const getUrl = `${apiResource}?name=${name}&latitude=${latitude}&longitude=${longitude}`;
    fetch(getUrl, fetchConfiguration).then(response => {
      return response.json();
    }).then(response => {
      this.setState({ geojson: response });
    }).catch(err => {
      this.setState({ geojson: err });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Point Geojson Generator</h1>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <p className="App-intro">
          To get started, enter a <code>name</code> and the <code>location</code> (required) for your point.
        </p>
        <div className='field-container'>
          <TextField id='name' value={this.state.name} floatingLabelFixed={true} floatingLabelText='Name of point' onChange={this.handleTextField.bind(this)} />
          <TextField id='latitude' value={this.state.latitude} floatingLabelFixed={true} floatingLabelText='Latitude' onChange={this.handleTextField.bind(this)} />
          <TextField id='longitude' value={this.state.longitude} floatingLabelFixed={true} floatingLabelText='Longitude' onChange={this.handleTextField.bind(this)} />
        </div>
        <RaisedButton label='Generate' onClick={this.getGeoJSON.bind(this)} />
        <Result geojson={this.state.geojson} />
      </div>
    );
  }
}

export default App;
