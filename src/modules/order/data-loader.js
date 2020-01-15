import React from 'react'
import PropTypes from 'prop-types'
import Loader from '@material-ui/core/LinearProgress'

const DataLoader = ({ isLoading }) => {
      
  return isLoading && <Loader />
}

DataLoader.propTypes = {
  isLoading: PropTypes.any
}
export default DataLoader
