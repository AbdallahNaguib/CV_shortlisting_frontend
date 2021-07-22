import JobDetailsItem from "./JobDetailsItem";
import {useParams} from "react-router-dom";
const JobDetails = () => {
    const {id} = useParams();
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
                                        <JobDetailsItem sim={77} filename={"abdo naguib.pdf"}/>
                                        <JobDetailsItem sim={20} filename={"abdo naguib.pdf"}/>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                                <h3 className="text-primary">Job name</h3>
                                <p className="text-muted">Job Description : Raw denim you probably haven't heard of them
                                    jean shorts Austin.
                                    Nesciunt tofu
                                    stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh
                                    mi, qui irure
                                    terr.</p>
                                <br/>
                                <div className="text-center mt-5 mb-3">
                                    <a className="btn btn-info btn-sm" href="/edit">
                                        <i className="fas fa-pencil-alt">
                                        </i>
                                        Edit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default JobDetails
