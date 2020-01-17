import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Loader from '@material-ui/core/LinearProgress'
import { dashboard } from '../../samples'

const DataLoader = ({ isLoading, dataReceived }) => {
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dataReceived({
          dataStates: {
            filter: 'test',
            sort: 'test'
          },
          dataGrid: dashboard
        })
      }, 1500)
    }
  })
  return isLoading && <Loader className='mb-3' />
}
export default DataLoader
DataLoader.propTypes = {
  isLoading: PropTypes.any,
  dataReceived: PropTypes.func
}

