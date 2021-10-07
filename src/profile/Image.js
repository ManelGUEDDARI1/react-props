import React from 'react'
import  PropTypes  from 'prop-types'
import inconnu from '../inconnu.jpg'

const Image = (props) => {
    return (
        <div>
            <p style={{weigth : "400" , height : "200"}}> {props.children} </p>
        </div>
    )
}
Image.defaultProps = {
    children: <img src={inconnu} alt=''/>
  }
  Image.propTypes = {
    children: PropTypes.string
  }

export default Image
