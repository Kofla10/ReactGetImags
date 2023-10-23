import React, {useState}from 'react'

const FormInput = ({handleAddMovie}) => {
  
  //new values is a string because, we insert one name in de array
  const [newName, setNewName] = useState('')

  const handleNewElement = ({target})=> {
    setNewName(target.value); //we update value
  }

  const handleSendValue = (event) => {
    event.preventDefault();
    if(newName.trim().length <= 3) return;
    handleAddMovie(newName);
  }

  return (
    <form onSubmit={handleSendValue}>
      <input
        type='text'
        placeholder='Name of the Movie'
        value={newName} //do not clean the value
        onChange={handleNewElement}
      />
    </form>
  )
}

export default FormInput;
