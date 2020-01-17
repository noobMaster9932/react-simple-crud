import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DataLoader from './data-loader'
import { Card, CardBody, Row, Col } from 'reactstrap'
import { exploreActions } from '../../redux/actions'
import { LineChart, BarChart, PieChart, RadarChart } from './charts'

const { getDataAction } = exploreActions

const index = ({ isLoading, getData, dataGrid, style }) => {
  return (
    <Fragment>
      <DataLoader isLoading={isLoading} dataReceived={getData} />
      <Row className='mb-3'>
        <Col>
          <SubComponentChart isLoading={isLoading} style={style} >
            <LineChart data={dataGrid.lineChart} />
          </SubComponentChart>
        </Col>
        <Col>
          <SubComponentChart isLoading={isLoading} style={style} >
            <BarChart data={dataGrid.barChart} />
          </SubComponentChart>
        </Col>
      </Row>
      <Row>
        <Col>
          <SubComponentChart isLoading={isLoading} style={style} >
            <PieChart data={dataGrid.pieChart} />
          </SubComponentChart>
        </Col>
        <Col>
          <SubComponentChart isLoading={isLoading} style={style} >
            <RadarChart data={dataGrid.radarChart} />
          </SubComponentChart>
        </Col>
      </Row>
    </Fragment>
  )
}
const mapStateToProps = state => ({
  ...state.exploreReducer,
  style:state.styleReducer
})

const mapDispatchToProps = { getData: getDataAction }

index.propTypes = {
  getData: PropTypes.func,
  isLoading: PropTypes.bool,
  dataGrid: PropTypes.any,
  style:PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(index)

const SubComponentChart = (props) => {
  const width = props.style.fullWidth <=800 ? props.style.fullWidth - 100 : props.style.fullWidth/2 - 80
  return props.isLoading ? <div className='loader' />: (
    <Card style={{ height:400, width:width }}  >
      <CardBody style={{ height:400, width:width }} >
        { props.children }
        { props.style.fullWidth <=800 && <div className='mb-3' /> }
      </CardBody>
    </Card>
  )
}
SubComponentChart.propTypes = {
  style:PropTypes.object,
  isLoading:PropTypes.bool,
  children:PropTypes.any
}