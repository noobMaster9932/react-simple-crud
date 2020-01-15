import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'

const index = ({ data, close }) => {
  return (
    <Modal isOpen>
      <ModalBody>
        {JSON.stringify(data)}
      </ModalBody>
      <ModalFooter>
        <Button color='danger' onClick={close} style={{ cursor:'pointer' }}>Close</Button>
      </ModalFooter>
    </Modal>
  )
}
export default index
index.propTypes = {
  data:PropTypes.any,
  close:PropTypes.func
}
