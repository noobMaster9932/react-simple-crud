import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DataLoader from './data-loader'
export class index extends Component {
    state = { isLoading: true }
    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false })
      }, 4000)
    }
    render() {
      const { isLoading } = this.state
      return (
        <Fragment>
          <DataLoader isLoading={isLoading} />
          <h1 className='text-center'>order module</h1>
        </Fragment>
      )
    }
}

const mapStateToProps = state => ({
  ...state
})
index.propTypes = {
  prop: PropTypes.any
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)
