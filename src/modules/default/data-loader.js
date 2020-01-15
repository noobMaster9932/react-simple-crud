import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Loader from '@material-ui/core/LinearProgress'
import Example from '../../assets/img/example-image-post.png'

const DataLoader = ({ isLoading, dataReceived }) => {
  useEffect(() => {
    if (isLoading) {
      dataReceived({
        dataStates: {
          filter: 'test',
          sort: 'test'
        },
        dataGrid: dataDummy
      })
    }
  })
  return isLoading && <Loader />
}
export default DataLoader
DataLoader.propTypes = {
  isLoading: PropTypes.any,
  dataReceived: PropTypes.func
}
const dataDummy = [
  {
    time: '2 minutes ago',
    post: 'Belajar yuk jangan malas, rajin pangkal pandai',
    attachment: null,
    name: 'User 1'
  },
  {
    time: 'Just now',
    post: 'Wow aplikasi ini keren banget, gua bisa upload foto nih',
    attachment: Example,
    name: 'User 2'
  },
  {
    time: 'Just now',
    post: 'Hey guys mau nyari rumus GLBB gimana ya?',
    attachment: null,
    name: 'User 3'
  },
  {
    time: '2 minutes ago',
    post: 'Belajar yuk jangan malas, rajin pangkal pandai',
    attachment: null,
    name: 'User 4'
  },
  {
    time: 'Just now',
    post: 'Wow aplikasi ini keren banget, gua bisa upload foto nih',
    attachment: Example,
    name: 'User 5'
  },
  {
    time: 'Just now',
    post: 'Hey guys mau nyari rumus GLBB gimana ya?',
    attachment: null,
    name: 'User 6'
  },
  {
    time: '2 minutes ago',
    post: 'Belajar yuk jangan malas, rajin pangkal pandai',
    attachment: null,
    name: 'User 4'
  },
  {
    time: 'Just now',
    post: 'Wow aplikasi ini keren banget, gua bisa upload foto nih',
    attachment: Example,
    name: 'User 5'
  },
  {
    time: 'Just now',
    post: 'Hey guys mau nyari rumus GLBB gimana ya?',
    attachment: null,
    name: 'User 6'
  },
  {
    time: '2 minutes ago',
    post: 'Belajar yuk jangan malas, rajin pangkal pandai',
    attachment: null,
    name: 'User 4'
  },
  {
    time: 'Just now',
    post: 'Wow aplikasi ini keren banget, gua bisa upload foto nih',
    attachment: Example,
    name: 'User 5'
  },
  {
    time: 'Just now',
    post: 'Hey guys mau nyari rumus GLBB gimana ya?',
    attachment: null,
    name: 'User 6'
  },
  {
    time: '2 minutes ago',
    post: 'Belajar yuk jangan malas, rajin pangkal pandai',
    attachment: null,
    name: 'User 4'
  },
  {
    time: 'Just now',
    post: 'Wow aplikasi ini keren banget, gua bisa upload foto nih',
    attachment: Example,
    name: 'User 5'
  },
  {
    time: 'Just now',
    post: 'Hey guys mau nyari rumus GLBB gimana ya?',
    attachment: null,
    name: 'User 6'
  },
  {
    time: '2 minutes ago',
    post: 'Belajar yuk jangan malas, rajin pangkal pandai',
    attachment: null,
    name: 'User 4'
  },
  {
    time: 'Just now',
    post: 'Wow aplikasi ini keren banget, gua bisa upload foto nih',
    attachment: Example,
    name: 'User 5'
  },
  {
    time: 'Just now',
    post: 'Hey guys mau nyari rumus GLBB gimana ya?',
    attachment: null,
    name: 'User 6'
  },
  {
    time: '2 minutes ago',
    post: 'Belajar yuk jangan malas, rajin pangkal pandai',
    attachment: null,
    name: 'User 4'
  },
  {
    time: 'Just now',
    post: 'Wow aplikasi ini keren banget, gua bisa upload foto nih',
    attachment: Example,
    name: 'User 5'
  },
  {
    time: 'Just now',
    post: 'Hey guys mau nyari rumus GLBB gimana ya?',
    attachment: null,
    name: 'User 6'
  }
]
