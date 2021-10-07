import './App.css';
import Profile from './profile/Profile.js'
import photo from './photo.jpg'
import Image from'./profile/Image'

const alertMyInput  = () => {
    alert(`this is the User`)
    }

function App() { 

var fullName = "Manel GUEDDARI";
var bio = "I am a self-taught developer, a very fast learner when it comes to interacting with technologies, software and coding ";
var profession = "Web Developer"

 return (
        <div className="App">
            <header className="App-header">
                <Profile fullName ={fullName} bio ={bio} profession={profession}  alertMyInput={alertMyInput} />
                <Image> 
                    <img src={photo} alt='' />
                </Image>

            </header>
        </div>
    );}
    
export default App;
