import {BrowserRouter as Router} from 'react-router-dom';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './App.css';
import './components/img.css';
import './components/button.css';
import './components/Footer.css';
import Footer from './components/Footer';
import './imgs/github_icon.png';
import imgs from './imgs/slack_icon.png';
import img from './imgs/github_icon.png';

function App() {

  const data = {
    name: 'Benedicta Onyebuchi',
    bio: "Web Developer and Technical Writer",
    link: [
      {
        name: "Follow me on Twitter",
        url: "https://www.twitter.com/Benny_dicta1"
      },
      {
        name: "Zuri Team",
        url: "https://training.zuri.team/"
      },
      {
        name: "Zuri Books",
        url: "http://books.zuri.team"
      },
      {
        name: "Python Books",
        url: "https://books.zuri.team/python-for-beginners?ref_id=Benedicta"
      },
      {
        name: "Background Check for Coders",
        url: "https://background.zuri.team"
      },
      {
        name: "Design Books",
        url: "https://books.zuri.team/design-rules",
        
      }
    ]
  }
  return (
    <div class="container">
      <div className="p-m-4">
        <div className="p-d-flex p-jc-center p-ai-center">
          <img id="profile__img" src="https://github.com/BenedictaUche.png" alt="A snapshot of Benedicta"></img>
        </div>
        <div className="p-d-flex p-jc-center p-ai-center">
          <p><b>{data.name}</b></p>
        </div>
        <div className="p-d-flex p-jc-center p-ai-center" id="btn">
          <Router>
            <div className="p-d-flex p-flex-column">
              <a href="https://www.twitter.com/Benny_dicta1" target="_blank" rel="noreferrer">
                <button id="twitter_name" className="p-m-2 p-px-3">Follow me on twitter</button>
              </a>
              <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">
                <button id="btn-zuri" className="p-m-2 p-px-3">Zuri Team</button>
              </a>
              <a href="http://books.zuri.team" target="_blank" rel="noreferrer">
                <button id="books" className="p-m-2 p-px-3">Zuri Books</button>
              </a>
              <a href="https://books.zuri.team/python-for-beginners?ref_id=Benedicta" target="_blank" rel="noreferrer">
                <button id="book__python" className="p-m-2 p-px-3">Python Books</button>
              </a>
              <a href="https://background.zuri.team" target="_blank" rel="noreferrer">
                <button id="pitch" className="p-m-2 p-px-3">Background Check for Coders</button>
              </a>
              <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">
                <button id="book_design" className="p-m-2 p-px-3">Design Books</button>
              </a>
            </div>
          </Router>
          <div className="p-d-flex p-jc-center p-ai-center" id="icons_app">
            <img src={imgs} alt="slack"/>
            <img src={img} alt="github"/>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
