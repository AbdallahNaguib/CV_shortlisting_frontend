const JobDetailsItem = ({filename,sim}) => {
    return (<tr>
            <td>
                {filename}
            </td>

            <td className="project_progress">
                <div className="progress progress-sm">
                    <div className="progress-bar bg-green" role="progressbar"
                         aria-valuenow="77" aria-valuemin="0"
                         aria-valuemax="100" style={{width: `${sim}%`}}>
                    </div>
                </div>
                <small>
                    {sim}%
                </small>
            </td>

            <td className="project-actions text-right">
                <a className="btn btn-primary btn-sm" href="/cv/view">
                    <i className="fas fa-folder">
                    </i>
                    View
                </a>

                <a className="btn btn-danger btn-sm" href="/cv/delete">
                    <i className="fas fa-trash">
                    </i>
                    Delete
                </a>
            </td>
        </tr>
    )
}
export default JobDetailsItem
