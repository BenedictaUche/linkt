import {BrowserRouter as Router} from 'react-router-dom';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './App.css';
import './components/img.css';
import './components/button.css';
import './components/Footer.css';
import './imgs/github_icon.png';
import imgs from './imgs/slack_icon.png';
import img from './imgs/github_icon.png';
import image from './imgs/share_btn.png';

function Buttons() {

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
        <div class="contain">
          <div class="profile">
            <div className="p-d-flex p-jc-center p-ai-center">
              <img id="profile__img" src="https://github.com/BenedictaUche.png" alt="A snapshot of Benedicta"></img>
            </div>
            <div className="p-d-flex p-jc-center p-ai-center">
              <p><b>{data.name}</b></p>
            </div>
            <div class="arrow">
              <img src={image} alt="share"></img>
            </div>
            <div class="dot">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAECAYAAACHtL/sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBnY/BCcJgDIVftFW8dQQ30BF0Ez1YvJmjCtK/oPbo31v1oiM5giP0IgWLjYnSBXwQ+EjCSx5BFXOWECQiUF74zcN6zC6q0EuMB3il3rvSeMnZUNAkoO79fFrnwYIPM6Bxgq/GWlODJ0KnpivjCiGZp7FArro7gbz18JE6ejXCn+pAyuDitz7mPdRopJW2wxq16yPEL0Lt2r7uzPUP1hhl4Xe3D9ZbNY7hCTIUAAAAAElFTkSuQmCC" alt="" />
            </div>
          </div>
          <div className="p-d-flex p-jc-center p-ai-center" id="btn">
            {/* <div id="slack">benedicta160</div> */}
          
            <Router>
              <div className="p-d-flex p-flex-column">
                <a href="https://www.twitter.com/Benny_dicta1" target="_blank" rel="noreferrer" id="twitter">
                  <button className="p-m-2 p-px-3">Follow me on twitter</button>
                </a>
                <a href="https://training.zuri.team/" target="_blank" rel="noreferrer" id="btn-zuri">
                  <button className="p-m-2 p-px-3">Zuri Team</button>
                </a>
                <a href="http://books.zuri.team" target="_blank" rel="noreferrer" id="books">
                  <button className="p-m-2 p-px-3">Zuri Books</button>
                </a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=benedicta160" target="_blank" rel="noreferrer" id="book__python"  title="A well compiled Python book for everyone">
                  <button className="p-m-2 p-px-3">Python Books</button>
                </a>
                <a href="https://background.zuri.team" target="_blank" rel="noreferrer" id="pitch">
                  <button className="p-m-2 p-px-3">Background Check for Coders</button>
                </a>
                <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" id="book_design">
                  <button className="p-m-2 p-px-3">Design Books</button>
                </a>
                <a href="/contact" target="_blank" rel="noreferrer" id="contact">
                  <button className="p-m-2 p-px-3">Contact Me</button>
                </a>
              </div>
            </Router>
            <div className="p-d-flex p-jc-center p-ai-center" id="icons_app">
              <img src={imgs} alt="slack"/>
              <img src={img} alt="github"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
