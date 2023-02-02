import React from 'react'
import PropTypes from 'prop-types'

const PropsTipo = (props) => {
  return (
    <div>Olá, {props.name}</div>
  )
}

PropsTipo.propTypes = {
  name: PropsTipo.string
}


export default PropsTipo