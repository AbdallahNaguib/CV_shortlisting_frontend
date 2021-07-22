import {Link} from "react-router-dom";

const JobListItem = ({job, onDelete}) => {
   // const navigate = useNavigate();

    return (
        <tr>
            <td>
                {job.jobTitle}
            </td>
            <td className="project_progress">
                {job.cvs} CV
            </td>
            <td className="project-actions text-right">
                <Link className="btn btn-primary btn-sm" to={`/view/${job.id}`}>
                    <i className="fas fa-folder">
                    </i>
                    View
                </Link>
                <Link className="btn btn-info btn-sm" to={`/edit/${job.id}`}>
                    <i className="fas fa-pencil-alt">
                    </i>
                    Edit
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(job.id)}>
                    <i className="fas fa-trash">
                    </i>
                    Delete
                </button>
            </td>
        </tr>

    )
}
export default JobListItem
