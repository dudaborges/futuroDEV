import React from 'react'

const PropsExample = (props) => {
  return (
    <div>PropsExample
        <h2>O nome dessa aluna é: {props.name}</h2>
        <h2>Ela tem: {props.idade} anos</h2>
        <h2>Mora em: {props.cidade}</h2>
    </div>
  )
}

export default PropsExample