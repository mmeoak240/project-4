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

	const onReviewSubmit = (newReview) => {
		const updatedExercisesArray = exercises.map((exercise) => {
			if (exercise.id === newReview.exercise_id) {
				exercise.reviews.unshift(newReview);
				return exercise;
			} else {
				return exercise;
			}
		});
		setExercises(updatedExercisesArray);
	};

	const onExerciseSubmit = (exercise) => {
		setExercises([...exercises, exercise]);
	};

	const handleDeleteReview = (deletedReview) => {
		console.log(deletedReview);
		const updatedExercisesArray = exercises.map((exercise) => {
			if (exercise.id == deletedReview.exercise_id) {
				const updatedReviewsArray = exercise.reviews.filter(
					(review) => review.id != deletedReview.id
				);
				exercise.reviews = updatedReviewsArray;
				return exercise;
			} else {
				return exercise;
			}
		});

		setExercises(updatedExercisesArray);
	};

	const handleUpdateReview = (updatedReview) => {
		const updatedExercisesArray = exercises.map((exercise) => {
			if (exercise.id === updatedReview.exercise_id) {
				const updatedReviewsArray = exercise.reviews.map((review) => {
					if (review.id === updatedReview.id)
						review.content = updatedReview.content;

					return review;
				});
				exercise.reviews = updatedReviewsArray;
				return exercise;
			} else {
				return exercise;
			}
		});
		setExercises(updatedExercisesArray);
	};

	const handleDeleteExercise = (id) => {
		const updatedExerciseArray = exercises.filter(
			(exercise) => exercise.id !== id
		);
		console.log(updatedExerciseArray);
		setExercises(updatedExerciseArray);
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
								onReviewSubmit={onReviewSubmit}
								onDeleteReview={handleDeleteReview}
								handleUpdateReview={handleUpdateReview}
							/>
						</Route>
						{/* <Route path="/exercises/:name">
							<MoreInfo
								exercises={exercises}
								client={user}
								setUser={setUser}
								onReviewSubmit={onReviewSubmit}
								onDeleteReview={handleDeleteReview}
								handleUpdateReview={handleUpdateReview}
							/>
						</Route> */}
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
