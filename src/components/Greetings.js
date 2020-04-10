import React, { Component } from 'react';

class Greetings extends Component {
  helloLanguage = (lang) => {
    let output = '';
    switch (lang) {
      case "de":
        output = "Hallo";
        break;
      case "en":
        output = "Hello";
        break;
      case "es":
        output = "Hola";
        break;
      case "fr":
        output = "Bonjour";
        break;
      default:
        output = "Default";
        break;
    }
    return output;
  }

  render() {
    const { lang, children } = this.props;
    return (
      <div className=''>
        <p>{this.helloLanguage(lang)} {children}</p>
      </div>
    );
  }
}

export default Greetings;