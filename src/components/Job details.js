import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import JobDetailsItem from "./JobDetailsItem";

function JobDetails() {
    const {id} = useParams();
    const [job, setJob] = useState({resumes:[],title:'',description:''})

    const fetchJob = async () => {
        const res = await fetch(`http://localhost:3000/jobs/${id}`, {
            method: "get",
        });
        const job = await res.json();
        console.log(job);
        return job;
    }
    const deleteCV = async (cvId) => {
        const response = await fetch(`http://localhost:3000/jobs/${id}/resumes/${cvId}`, {
            method: 'delete'
        });
        const json = await response.json()
        console.log(json)
        setJob({resumes:job.resumes.filter((resume) => resume._id !== cvId) , title:job.title , description:job.description});
    }
    useEffect(() => {
        const getJob = async () => {
            const job = await fetchJob();
            setJob(job);
        };
        getJob();
    },[]);

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="file-upload">
                    <button className="file-upload-btn" type="button"
                            onClick="$('.file-upload-input').trigger( 'click' )">Add more CV(s)
                    </button>

                    <div className="image-upload-wrap">
                        <input className="file-upload-input" type="file" name="filefield" multiple="multiple"
                               onChange="readURL(this);"
                               accept=".pdf , .docx"/>
                        <div className="drag-text">
                            <h3>Drag and drop or select cv(s)</h3>
                        </div>
                    </div>

                </div>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Job Detail</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="card-body p-0">
                                <table className="table table-striped projects">
                                    <thead>
                                    <tr>
                                        <th style={{width: "20%"}}>
                                            CV Name
                                        </th>
                                        <th>
                                            Similarity degree
                                        </th>
                                        <th style={{width: "20%"}}>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        job.resumes.length>0 ? job.resumes.map(resume => (
                                            <JobDetailsItem resume = {resume} ondelete = {deleteCV}/>
                                        )) : ""
                                    }

                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                                <h3 className="text-primary">{job.title}</h3>
                                <p className="text-muted">{job.description}</p>
                                <br/>
                                <div className="text-center mt-5 mb-3">
                                    <Link className="btn btn-info btn-sm" to={`/edit/${id}`}>
                                        <i className="fas fa-pencil-alt">
                                        </i>
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default JobDetails
