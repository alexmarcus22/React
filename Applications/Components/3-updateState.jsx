import React, { useState } from 'react';


const UpdateState = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className='update-state'>
        Update State
      </h2>
      <p>Searched keyword:{search}</p>
      <input className='input' type="text" value={search} placeholder="here" onChange={(e) => setSearch(e.target.value)} />
    </>
  )
}

export default UpdateState;