import JobList from "./Job list";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import JobCreate from "./Job Create";
import JobEdit from "./Job Edit";
import JobDetails from "./Job details";

const MainContainer = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<JobList/>}/>
                    <Route path='/create' element={<JobCreate/>}/>
                    <Route path='/view/:id' element={<JobDetails/>}/>
                    <Route path='/edit/:id' element={<JobEdit/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default MainContainer
