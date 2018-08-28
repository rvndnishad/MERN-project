import React, { Component } from 'react'

const AppContext = React.createContext();

export default class AppProvider extends Component {

    state = {

    month:'',
    year: '',
    zone: '',
    city: '',
    product: '',
    adPosition: '',
    duration: '',
  }

  render() {
    return <AppContext.Provider value={ {state: this.state}}>
      {this.props.children}
    </AppContext.Provider>
  }
}
