import React from 'react'

const Cabecera = (props) => (
  <div>
    <h2 className="ui icon center aligned header">
      <div className="content">{props.name}</div>
    </h2>
  </div>
)
export default Cabecera