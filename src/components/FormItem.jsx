
import React, { Component } from 'react';
export default class FormItem extends Component {
    render () {
        return (
            <React.Fragment>{this.props.children}</React.Fragment>
        );
    }
  }
  