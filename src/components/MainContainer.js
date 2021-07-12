import ScriptTag from 'react-script-tag';


const MainContainer = () => {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Jobs</title>

            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"/>
            <link rel="stylesheet" href="assets/plugins/fontawesome-free/css/all.min.css"/>
            <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
            <link rel="stylesheet" href="assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"/>
            <link rel="stylesheet" href="assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css"/>
            <link rel="stylesheet" href="assets/plugins/jqvmap/jqvmap.min.css"/>
            <link rel="stylesheet" href="assets/dist/css/adminlte.min.css"/>
            <link rel="stylesheet" href="assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"/>
            <link rel="stylesheet" href="assets/plugins/daterangepicker/daterangepicker.css"/>
            <link rel="stylesheet" href="assets/plugins/summernote/summernote-bs4.min.css"/>
        </head>
        <body className="hold-transition sidebar-mini layout-fixed">
        <div className="wrapper">
            <aside className="main-sidebar sidebar-dark-primary elevation-4">


                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>



                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a href="projects.html" className="nav-link">
                                    <p>Projects</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="project-add.html" className="nav-link">
                                    <p>Project Add</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="project-edit.html" className="nav-link">
                                    <p>Project Edit</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="project-detail.html" className="nav-link">
                                    <p>Project Detail</p>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>

            </aside>


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
                                    <th style="width: 20%">
                                        Job title
                                    </th>
                                    <th>
                                        Number of uploaded CVs
                                    </th>
                                    <th style="width: 20%">
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Web Developer
                                    </td>
                                    <td className="project_progress">
                                        50 CV
                                    </td>
                                    <td className="project-actions text-right">
                                        <a className="btn btn-primary btn-sm" href="#">
                                            <i className="fas fa-folder">
                                            </i>
                                            View
                                        </a>
                                        <a className="btn btn-info btn-sm" href="#">
                                            <i className="fas fa-pencil-alt">
                                            </i>
                                            Edit
                                        </a>
                                        <a className="btn btn-danger btn-sm" href="#">
                                            <i className="fas fa-trash">
                                            </i>
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Web Developer
                                    </td>
                                    <td className="project_progress">
                                        50 CV
                                    </td>
                                    <td className="project-actions text-right">
                                        <a className="btn btn-primary btn-sm" href="#">
                                            <i className="fas fa-folder">
                                            </i>
                                            View
                                        </a>
                                        <a className="btn btn-info btn-sm" href="#">
                                            <i className="fas fa-pencil-alt">
                                            </i>
                                            Edit
                                        </a>
                                        <a className="btn btn-danger btn-sm" href="#">
                                            <i className="fas fa-trash">
                                            </i>
                                            Delete
                                        </a>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>


                </section>

            </div>



            <aside className="control-sidebar control-sidebar-dark">

            </aside>

        </div>



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

        <ScriptTag type="text/javascript" src="assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"/>

        <ScriptTag type="text/javascript" src="assets/plugins/summernote/summernote-bs4.min.js"/>

        <ScriptTag type="text/javascript" src="assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"/>

        <ScriptTag type="text/javascript" src="assets/dist/js/adminlte.js"/>

        <ScriptTag type="text/javascript" src="assets/dist/js/demo.js"/>

        <ScriptTag type="text/javascript" src="assets/dist/js/pages/dashboard.js"/>

        </body>
        </html>

)
}
export default MainContainer
