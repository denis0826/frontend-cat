import React from 'react';

const Form = ({
    username,
    password,
    validUser,
    setUsername,
    setPassword,
    handleSubmit
  }) => {

  const changeUser = (e) => {
    setUsername(e.target.value);
  }
  const changePassword = (e) => {
    setPassword(e.target.value);
  }
  return (
    <form className='clearfix' onSubmit={handleSubmit}>
      <div className='clearfix mt-10 mb-10'>
        <label htmlFor='username'>Username: </label>
        <input 
          className='input-form'
          value={username}
          onChange={changeUser}
        /> 
      </div>
      <div className='clearfix mt-10 mb-10'>
        <label htmlFor='password'>Password: </label>
        <input
          className='input-form'
          type='password'
          value={password}
          onChange={changePassword}
        />
      </div>
      { !validUser && <div className='clearfix mt-10 mb-10 err'>User or password not found</div> }
    </form>
  )
}
export default Form
