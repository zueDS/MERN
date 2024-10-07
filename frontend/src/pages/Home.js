import { useEffect, useState } from "react";
import WorkoutDetails from '../components/WorkoutDetails'
import AddWorkout from '../components/AddWorkout'


const Home = () => {
    const [workouts, setWorkouts] = useState()

    useEffect(() =>{
        const fetchWorkout = async ()=> {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }

        fetchWorkout()
    },[])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <AddWorkout/>
        </div>
    )
}

export default Home;