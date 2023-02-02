import React from 'react'
import PropsFilho from './PropsFilho'
import PropsTipo from './PropsTipo'

const PropsPai = () => {

  const yellow = '#ffff00'
  const name = 'Maria'

  return (
    <>
    <PropsFilho yellow={yellow} />
    <PropsTipo name={name} />
    </>
  )
}

export default PropsPai