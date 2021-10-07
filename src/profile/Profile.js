import React from 'react'
import  PropTypes  from 'prop-types'

const Profile = (props) => {
    return (
        <div>
          <h1 style ={{color: "#000080" ,padding:"40" }}  > {props.fullName} </h1>  
          <p style = {{color: "#075c78" ,padding:"40" }} >  {props.bio} </p>
          <h2 style = {{color: "#2c257a" ,padding:"40" }}>{props.profession}</h2>
          <button onClick={() => props.alertMyInput(`My name is Manel GUEDDARI `)}>
        ClickMe
      </button>
            
        </div>
    )
}
Profile.defaultProps = {
  fullName: "Undefined",
  bio: "Undefined",
  profession: "Undefined"   
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio:  PropTypes.string,
  profession: PropTypes.string,
}
export default Profile
