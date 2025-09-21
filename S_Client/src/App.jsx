import MainLook from './components/MainLook.jsx'
import ImageSlider from './components/ImageSlider.jsx'
import Accordion from './components/Accordion.jsx'

function App() {
  const slides = [
    { url: "https://cdn2.vectorstock.com/i/1000x1000/59/56/missing-deadline-bad-time-management-work-vector-38025956.jpg", title: "uno", content: `Keep missing deadlines?` },
    { url: "https://tse2.mm.bing.net/th/id/OIP.y_U1Z4vzYzKfVMPSMPtn1gAAAA?pid=ImgDet&w=320&h=450&rs=1&o=7&rm=3", title: "dos", content: `Need a personal timer?` },
    { url: "https://tse3.mm.bing.net/th/id/OIP.ywkfvgA630uvDuYBdE08KwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", title: "tres", content: `Planning a trip?` },
    { url: "https://tse4.mm.bing.net/th/id/OIP.kJPq42yEE4cok_LG141ErAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3  ", title: "quatro", content: `Got a new workout routine?` }
  ];
  // Styling for the container where the ImageSlider will be rendred
  const containerStyles = {
    width: "250px",
    height: "280px",
    margin: "0 auto"
  }

  return (
    <MainLook>
      <div className='hero'>
        <div className='hero_one'>
          <p>Assurance of excellence with quality of delivery <br /><strong>Better Today, Greater Tomorrow!</strong></p>
        </div>
        <div className='hero_two'>
          <div className='hero_img'>
            ♠
          </div>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="description">
          <h2 className='fading'>What Is Scriptor?</h2>
          <p className='fading'><strong>Scriptor</strong>, for all intents and purposes, is a task-manager.
            It is devised for alerts and notifications per user-determined mechanisms and goals.
          </p>
        </div>
        <div className="instructions">
          <h2 className='fading'>How Does It Work?</h2>
          <ul className='fading'>
            <li>Visit the 'start' tab above.</li>
            <li>Create a user account.</li>
            <li>Await your notification</li>
            <li>The rest is quite straightfoward.</li>
            <li>Enjoy, comment, complain, query, and/or support.</li>
          </ul>
        </div>
        <Accordion />
        <div className="action_call blurring">
          <h2>What Are You Waiting For?</h2>
          <p>Go ahead and give it a try. If this were free food, you would be all over it. Start planning and say goodbye to forgotten opportunities!</p>
        </div>
      </div>
    </MainLook>
  )
}

export default App;