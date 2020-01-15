import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DataLoader from './data-loader'
import { Card, CardBody, Row, Col } from 'reactstrap'
import { exploreActions } from '../../redux/actions'
import moment from 'moment'
import ManAvatar from '../../assets/img/avatar-man.png'
import WomanAvatar from '../../assets/img/avatar-woman.png'
import ModalDetail from './details'
const { getDataAction } = exploreActions

const index = ({ isLoading, getData, dataGrid }) => {
  const [modal, setModal] = useState({ status:false, data:{} })
  const _toggleModal = (status, data = {}) => setModal({ modal:{ status, data } })
  return (
    <Fragment>
      { modal.status && <ModalDetail data={modal.data} close={() => _toggleModal(false)} /> }
      <Row>
        <Col className='col-sm-7'>
          <DataLoader isLoading={isLoading} dataReceived={getData} />
          {dataGrid.map((item, i) => (
            <Card key={Math.random()} className='mb-2'>
              <CardBody>
                <div className='text-left mb-3'>
                  <img
                    src={
                      i % 2 === 0
                        ? ManAvatar
                        : WomanAvatar
                    }
                    style={{
                      borderRadius: '50%',
                      width: 30,
                      cursor: 'pointer'
                    }}
                  />
                  <small
                    className='ml-2'
                    style={{ cursor: 'pointer' }}
                  >
                    {item.name}
                  </small>
                </div>
                {item.attachment !== null && (
                  <div className='text-center mb-2'>
                    <img
                      src={item.attachment}
                      style={{ width: '100%', cursor:'pointer' }}
                      onClick={() => _toggleModal(true,item)}
                    />
                  </div>
                )}
                <div className='mb-2' 
                  style={{ cursor: 'pointer' }}
                  onClick={() => _toggleModal(true,item)} 
                >
                  {item.post}
                </div>
                <div className='text-left'>
                  <img
                    style={{ width: 30, cursor: 'pointer' }}
                    className='mr-2'
                    src={require('../../assets/icons/icon-like.png')}
                  />
                  <img
                    style={{ width: 30, cursor: 'pointer' }}
                    className='mr-2'
                    src={require('../../assets/icons/icon-comment.png')}
                  />
                </div>
                <small
                  style={{ color: 'gray' }}
                  className='text-left mb-2'
                >
                  {moment().format('HH:mm')}
                </small>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Fragment>
  )
}
const mapStateToProps = state => ({
  ...state.exploreReducer
})

const mapDispatchToProps = { getData: getDataAction }

index.propTypes = {
  getData: PropTypes.func,
  isLoading: PropTypes.bool,
  dataGrid: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
