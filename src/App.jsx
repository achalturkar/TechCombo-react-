import { Routes, Route} from "react-router-dom";

import Home  from "./components/home";
import Services from "./components/services";
import About from "./components/aboutUs";
import Contact from "./components/contact";
import Jobs from "./components/jobs"
import Payroll from "./components/payroll"
import Executive from "./components/executive"
import ITDevelopment from "./components/itDevelopment"
 import Staffing from "./components/staffing"
 import Manpower from "./components/manpower"
 import NotFound from "./components/notFound"


const App = () => (



  <Routes>

    <Route path="/" element= {<Home/>}></Route>
    <Route path="/about" element= {<About/>}></Route>
    <Route path="/services" element= {<Services/>}></Route>
    <Route path="/contact" element= {<Contact/>}></Route>
    <Route path="/jobs" element= {<Jobs/>}></Route>
    <Route path="/manpower" element= {<Manpower/>}></Route>
    <Route path="/executive" element= {<Executive/>}></Route>
    <Route path="/payroll" element= {<Payroll/>}></Route>
    <Route path="/staffing" element= {<Staffing/>}></Route>
    <Route path="/itDevelopment" element= {<ITDevelopment/>}></Route>
    <Route path="/*" element= {<NotFound/>}></Route>  

  </Routes>


)


export default App;