import './App.css'
import Card from './Card'
import CardDynamic from './CardDynamic'

function App() {

  return (
    <>
      <Card/>
      <CardDynamic nazev = "Název1" popis = "Popis1" odkaz = "Odkaz1"/>
      <CardDynamic nazev = "Název2" popis = "Popis2" odkaz = "Odkaz2"/>
      <CardDynamic nazev = "Název3" popis = "Popis3" odkaz = "Odkaz3"/>
      <CardDynamic nazev = "Název4" popis = "Popis4" odkaz = "Odkaz4"/>
    </>
  )
}

export default App
