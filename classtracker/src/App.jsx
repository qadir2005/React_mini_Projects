import React from 'react'
import NewStudent from './components/modal/NewStudent'
import Header from './components/Header'
import StudentTable from "./components/Table.jsx"
const App = () => {
  return (
    <div>
        <Header />
        <NewStudent />
        <StudentTable />
    </div>
  )
}

export default App
