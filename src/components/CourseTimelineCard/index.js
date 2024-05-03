// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {tagsList, duration, courseTitle, description} = courseDetails
  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <AiFillClockCircle color="#171f46" />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(tag => (
          <p>{tag.name}</p>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
