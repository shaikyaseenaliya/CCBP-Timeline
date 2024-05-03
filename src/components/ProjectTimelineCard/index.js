// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {projectUrl, duration, imageUrl, description, projectTitle} =
    projectDetails

  return (
    <div>
      <img className="img" src={imageUrl} alt="project" />
      <div className="head">
        <h1>{projectTitle}</h1>
        <AiFillCalendar color="#171f46" />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
