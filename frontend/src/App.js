import React from "react";
import axios from "axios";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {

  function login(username, password) {
    axios.get(`http://localhost:8080/login/${username}.${password}`).then((err, res) => {
      if(err){
        alert('Akun Tidak Ditemukan')
      }else{
        if(username === res.data.response.username){
          alert('Login Berhasil')
        }
      }
    })
  }

  return (
    <div className="App">
      <Login login={login} />
      <Footer sx={{position: 'absolute', bottom: 0, mx:'auto', width: '100%'}} />
    </div>
  );
}

export default App;
