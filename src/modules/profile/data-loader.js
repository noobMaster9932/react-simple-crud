import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '@material-ui/core/LinearProgress'

export class DataLoader extends Component {
    static propTypes = {
      isLoading: PropTypes.any
    }

    render() {
      const { isLoading } = this.props
      return isLoading && <Loader />
    }
}

export default DataLoader
