import React from 'react'
import PropTypes from "prop-types";
import "../../styles/index.css"

export const Counter = (props) => {
  return (
        <div className="container" id="number">
            <div className="card-body">
                <h4>{props.unit}</h4>
            </div>
        </div>
  )
}

Cardnumber.propTypes = {
	seconds: PropTypes.number,
}