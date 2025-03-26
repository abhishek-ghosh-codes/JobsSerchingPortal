import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage,{jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import SignUpPage from './pages/SignUpPage';

const addCandidate = async(newCandidate)=>{
  const res = await fetch('/candidate/details',{
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body: JSON.stringify(newCandidate),
  })

  return;
}

const addJob = async (newJob)=>{
  console.log("Abhsiehk")
  console.log("Livisha")
  const res = await fetch('/api/jobs',{
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body: JSON.stringify(newJob),
  })

  return;

}
const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  });
  return;
};

const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
};

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path='/sign-up' element={<SignUpPage addCandidateDetail={addCandidate}/>}/>
  <Route path='/jobs' element={<JobsPage/>}/>
  <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
  <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
  <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
  <Route path='*' element={<NotFoundPage/>}/>
  </Route>)
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App