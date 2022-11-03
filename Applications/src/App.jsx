import React from 'react'
import SimpleComponent from '../Components/1-simpleComponent'
import LoadData from '../Components/2-LoadData'
import UpdateState from '../Components/3-updateState'
import FetchData from '../Components/4-FetchData'
import ContextCounter from '../Components/5-2-contextApp'

const App = () => {
  return (
    <>
      <SimpleComponent />
      <LoadData />
      <UpdateState />
      <FetchData />
      <ContextCounter />
    </>
  )
}

export default App;