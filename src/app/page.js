import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

function Home() {
	return (
		<div>
			<Suspense fallback={<p>Loading the todos...</p>}>
				<h1 className="text-3xl font-bold underline">Loading Todos</h1>
				<div className="flex space-2">
					<TodosList />
				</div>
			</Suspense>

			<Suspense fallback={<p>Loading the shopping trolly...</p>}>
				<h1 className="text-3xl font-bold underline">
					Loading Shopping Trolly
				</h1>
				<div className="flex space-2">
					<TodosList />
				</div>
			</Suspense>
		</div>
	);
}

export default Home;
