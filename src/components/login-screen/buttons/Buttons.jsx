import React from 'react'
import * as C from './style'

const buttons = ({ Text, onClick, Type = 'button'}) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  )
}

export default buttons