import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'

export class index extends Component {
    static propTypes = {
      data:PropTypes.any,
      close:PropTypes.func
    }

    render() {
      const { data, close } = this.props
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
}

export default index
