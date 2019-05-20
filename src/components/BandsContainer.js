import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput />
        <br />
        {this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBand: id => dispatch({ type: 'DELETE_BAND', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
