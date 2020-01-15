import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DataLoader from './data-loader'

const index = () => {

  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(!isLoading)
    }, 4000)
  }, [])

  return(
    <Fragment>
      <DataLoader isLoading={isLoading} />
      <h1 className='text-center'>profile module</h1>
    </Fragment>
  )
}
const mapStateToProps = state => ({
  ...state
})
index.propTypes = {
  prop: PropTypes.any
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)
