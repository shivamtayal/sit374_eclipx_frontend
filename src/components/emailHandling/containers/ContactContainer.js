import React, { Component } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import {connect} from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import {bindActionCreators} from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';

import * as contactActions from '../actions/contactActions';
import ContactMe from '../modules/contact/Contact';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ContactMe contact={this.props.contact} action={this.props.actions}/>
    )
  }
}

ContactMeContainer.propTypes = {
  contact: PropTypes.object,
  actions: PropTypes.object
};

const mapStateToProps = state => {
  return {
    contact: state.contact
  }
};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Object.assign(contactActions), dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);