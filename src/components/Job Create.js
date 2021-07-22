import {useRef, useState} from "react";

const JobCreate = () => {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const inputFile = useRef(null)

    return (
        <div className="wrapper">
            <div className="wrapper">

                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Job Create</h1>
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
                            <div className="file-upload">
                                <button className="file-upload-btn" type="button"
                                        onClick={() => {
                                            inputFile.current.click();
                                        }}>Add CV
                                </button>

                                <div className="image-upload-wrap">
                                    <input className="file-upload-input" type="file" name="filefield"
                                           ref={inputFile}
                                           multiple="multiple"
                                           accept=".pdf , .docx , .doc"
                                           value={selectedFiles}
                                           onChange={(e) => setSelectedFiles(e.target.files)}/>
                                    <div className="drag-text">
                                        <h3>Drag and drop or select cv(s)</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="Create new Porject" className="btn btn-success float-right"
                                   style={{"margin-right": "115px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobCreate
