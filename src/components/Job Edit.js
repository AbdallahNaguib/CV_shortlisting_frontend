import {useParams} from "react-router-dom";

const JobEdit = () =>{
    const {id} = useParams();
    return (
        <div className="wrapper">

            <div className="wrapper">

                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Job Edit</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Job Name</label>
                                            <input type="text" id="inputName" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputDescription">Job Description</label>
                                            <textarea id="inputDescription" className="form-control" rows="4"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="Save" className="btn btn-success float-left"
                                   style={{"margin-left": "10px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default JobEdit
