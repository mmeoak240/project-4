import { useParams } from "react-router-dom";

function MoreInfo({ exercises }) {
	const exercise = exercises.filter((exercise) => exercise.id === params.id);
}

export default MoreInfo;
