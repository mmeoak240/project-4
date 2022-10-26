import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";
import HomePage from "./HomePage";
import ExerciseContainer from "./ExerciseContainer";
import MoreInfo from "./MoreInfo";
import ExerciseForm from "./ExerciseForm";

function App() {
	const [user, setUser] = useState("");
	const [exercises, setExercises] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [exerciseReviews, setExerciseReviews] = useState([]);

	useEffect(() => {
		fetch("/me").then((r) => {
			if (r.ok) {
				r.json().then((client) => setUser(client));
			}
		});
	}, []);

	useEffect(() => {
		fetch("/exercises")
			.then((r) => r.json())
			.then((data) => setExercises(data));
	}, []);

	useEffect(() => {
		fetch("/reviews")
			.then((r) => r.json())
			.then((data) => setReviews(data));
	}, []);

	const onLogin = (client) => {
		setUser(client);
	};

	const onReviewSubmit = (review) => {
		setReviews([review, ...reviews]);
	};

	const onExerciseSubmit = (exercise) => {
		setExercises([...exercises, exercise]);
	};

	const handleDeleteReview = (id) => {
		const updatedReviewsArray = reviews.filter((review) => review.id !== id);
		setReviews(updatedReviewsArray);
	};

	const handleUpdateReview = (review) => {
		const updatedReviewsArray = reviews.map((hash) => {
			if (hash.id === review.id) {
				return { ...hash, content: review.content };
			}
			return hash;
		});
		console.log(updatedReviewsArray);
		setReviews(updatedReviewsArray);
	};

	const handleDeleteExercise = (id) => {
		const updatedExerciseArray = exercises.filter(
			(exercise) => exercise.id !== id
		);
		setExercises(...exercises, updatedExerciseArray);
	};

	return (
		<>
			<main>
				{user ? (
					<Switch>
						<Route exact path="/">
							<HomePage user={user} setUser={setUser} />
						</Route>
						<Route exact path="/exercises">
							<ExerciseContainer
								user={user}
								setUser={setUser}
								exercises={exercises}
								handleDeleteExercise={handleDeleteExercise}
							/>
						</Route>
						<Route path="/exercises/:name">
							<MoreInfo
								exercises={exercises}
								client={user}
								setUser={setUser}
								reviews={reviews}
								onReviewSubmit={onReviewSubmit}
								onDeleteReview={handleDeleteReview}
								handleUpdateReview={handleUpdateReview}
							/>
						</Route>
						<Route path="/exerciseForm">
							<ExerciseForm
								onExerciseSubmit={onExerciseSubmit}
								user={user}
								setUser={setUser}
							/>
						</Route>
					</Switch>
				) : (
					<Switch>
						<Route exact path="/signup">
							<SignUp onLogin={onLogin} />
						</Route>
						<Route exact path="/">
							<Login onLogin={onLogin} />
						</Route>
					</Switch>
				)}
			</main>
		</>
	);

	// 	<>
	// 		<NavBar />
	// 		<div>{user ? <HomePage /> : null}</div>
	// 		<Switch>
	// 			<Route path="/signup">
	// 				<Signup onLogin={onLogin} />
	// 			</Route>

	// 			<Route path="/login">
	// 				<Login onLogin={onLogin} />
	// 			</Route>
	// 		</Switch>
	// 	</>
	// );
}

export default App;
