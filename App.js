import NavigationBar from "./navigation";
import Homepage from "./homepage";
import AboutMe from "./about";
import Projects from "./Projects.js";
import Gallery from "./gallery.js";


function App() {
  return (
    <div className="App">  
      <NavigationBar/>
      <Homepage/>
      <AboutMe/>
      <Projects/>
      <Gallery/>
    </div>
  );
}

export default App;
