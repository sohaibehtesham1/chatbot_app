import logo from './logo.svg';
import './Components/Login.css';
import background from './Assets/Background_Image.png';
import botImage from './Assets/Bot.png';
import textBox from './Assets/Textbox.png';
import tail from './Assets/Tail.png';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
     <div className='OuterLayer'>
                <div className='InnerLayer'>
                    <div className='Background_Image'> 
                        <img src={background} alt="Background Image" />
                    </div>
                    <div className='Content'>
                    <div className='sideBox'>
                       <div className='TextBox'>
                          <img src={textBox} alt="Text Box" />                     
                        </div>

                        
                        <div className='BotImage'>
                            <img src={botImage} alt="Bot Image" />
                        </div>
                    </div>
                </div>
    
                </div>
            </div>
  );
}

export default App;
