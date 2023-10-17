import {openModal,  openModalAccount } from "./components/openModal";



function App() {
  function handleOpenAccount(){
    openModalAccount();
  }
  function handleOpenSetting(){
    openModal();
  }
  return (
    < >
      <button onClick={handleOpenAccount}>Modal Account</button>
      <button onClick={handleOpenSetting}>Modal Setting</button>
    </>
  );
}

export default App;
