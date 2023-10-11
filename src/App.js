import openModal from "./components/openModal";



function App() {
  function handleOpenModal(){
    openModal();
}
  return (
    <div >
      <h1>Hola</h1>
      <button onClick={handleOpenModal}>Abrir modal</button>
    </div>
  );
}

export default App;
