import { createRouter, createWebHistory } from 'vue-router'
import Exercise from '../components/Exercise.vue'
import Workouts from '../views/Workouts.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-workout',
    name: 'createWorkout',
    component: Exercise
  },
  {
    path: '/workouts',
    name: 'viewWorkouts',
    component: Workouts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
