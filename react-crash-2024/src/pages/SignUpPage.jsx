import React from 'react'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = ({addCandidateDetail}) => {
  return (
    <>
    <SignUpForm addCandidate={addCandidateDetail}/>
    </>
  )
}

export default SignUpPage