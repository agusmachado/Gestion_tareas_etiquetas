import FiltroTareas from "./componentas/FiltroTareas"
import FormularioTareas from "./componentas/FormularioTareas"
import ListadoTareas from "./componentas/ListadoTareas"

function App() {

  return (
    <>
      <div className=" bg-yellow-200 mx-auto p-4 max-w-2xl text-3xl font-bold mb-4 text-center">
        Gestor de Tareas
      </div>

      <div className=" bg-slate-300 mx-auto p-4 max-w-2xl">
        <FormularioTareas />
        <FiltroTareas />
        <ListadoTareas />
      </div>
    </>
  )
}

export default App
