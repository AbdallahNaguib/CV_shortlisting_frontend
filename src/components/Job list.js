import ScriptTag from "react-script-tag";
import navBar from "./NavBar";
import JobDetailsItem from "./JobDetailsItem";
import JobListItem from "./JobListItem";
import {useEffect, useState} from "react";

const JobList = () => {
    const [jobs, setJobs] = useState([])

    const fetchJobs = async () => {
        // todo fetch from backend
        const jobs = [{id: 1, jobTitle: "web developer", cvs: 20}, {id: 2, jobTitle: "android developer", cvs: 40},
            {id: 3, jobTitle: "react developer", cvs: 10}, {id: 4, jobTitle: "react developer", cvs: 10}
            , {id: 5, jobTitle: "react developer", cvs: 10}, {id: 6, jobTitle: "react developer", cvs: 10}]
        return jobs
    }
    const deleteJob = async (id) => {
        // todo
        // await fetch(`http://localhost:3000/jobs/${id}`, {
        //     method: 'DELETE'
        // });
        setJobs(jobs.filter((job) => job.id !== id));
    }
    // this will happen once the page is loaded
    useEffect(() => {
        const getJobs = async () => {
            const jobsFromServer = await fetchJobs()
            setJobs(jobsFromServer)
        }
        getJobs()
    }, [])

    return (
        <div className="wrapper">
            <navBar/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Jobs</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Jobs</h3>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                <tr>
                                    <th style={{width: "20%"}}>
                                        Job title
                                    </th>
                                    <th>
                                        Number of uploaded CVs
                                    </th>
                                    <th style={{width: "20%"}}>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    jobs.map(job => (
                                            <JobListItem job={job} ondelete={deleteJob}/>
                                        )
                                    )
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>


                </section>

            </div>
            <aside className="control-sidebar control-sidebar-dark">

            </aside>

            <ScriptTag type="text/javascript" src="assets/plugins/jquery/jquery.min.js"/>

            <ScriptTag type="text/javascript" src="assets/plugins/jquery-ui/jquery-ui.min.js"/>

            <ScriptTag type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"/>

            <ScriptTag type="text/javascript" src="assets/plugins/chart.js/Chart.min.js"/>

            <ScriptTag type="text/javascript" src="assets/plugins/sparklines/sparkline.js"/>
            <ScriptTag type="text/javascript" src="assets/plugins/jqvmap/jquery.vmap.min.js"/>

            <ScriptTag type="text/javascript" src="assets/plugins/jqvmap/maps/jquery.vmap.usa.js"/>

            <ScriptTag type="text/javascript" src="assets/plugins/jquery-knob/jquery.knob.min.js"/>

            <script src="assets/plugins/moment/moment.min.js"/>
            <ScriptTag type="text/javascript" src="assets/plugins/moment/moment.min.js"/>

            <ScriptTag type="text/javascript" src="assets/plugins/daterangepicker/daterangepicker.js"/>

            <ScriptTag type="text/javascript"
                       src="assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"/>

            <ScriptTag type="text/javascript" src="assets/plugins/summernote/summernote-bs4.min.js"/>

            <ScriptTag type="text/javascript"
                       src="assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"/>

            <ScriptTag type="text/javascript" src="assets/dist/js/adminlte.js"/>

            <ScriptTag type="text/javascript" src="assets/dist/js/demo.js"/>

            <ScriptTag type="text/javascript" src="assets/dist/js/pages/dashboard.js"/>
        </div>

    )
}
export default JobList