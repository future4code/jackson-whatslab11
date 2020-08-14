import React from 'react';
import './App.css';
import styled from "styled-components"

const InputPersonalizado = styled.input`
    background-color: #F1F1F3;
    -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    border: none;
    width: 300px;
    height: 35px;
    margin-top: 30px;
    outline: none;
`
const ButtonPersonalizado = styled.button`
background-color: #DB7093;
    margin: 20px 0;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
`

  
class App extends React.Component {
   state ={
     mensagem: [
       {
        nomeUsuario:"",
        mensagem:""
      }
     ],
     valorNomeUsuario:"",
     valorMensagem:""
   }
 
 adicionaMensagem = () =>{
   const novaMensagem = {
     nomeUsuario: this.state.valorNomeUsuario,
     mensagem: this.state.valorMensagem
   };
   const novasMensagens = [novaMensagem, ...this.state.mensagem];
   
   this.setState({
    mensagem: novasMensagens,
    valorNomeUsuario: "",
    valorMensagem: ""
    
  });
 };
 onChangeNomeUsuario = (event) => {
  this.setState({ valorNomeUsuario: event.target.value });
};
onChangeMensagem = (event) => {
  this.setState({ valorMensagem: event.target.value });
};

  render () {

    return (
     <div>
       <InputPersonalizado
          value={this.state.valorNomeUsuario}
          onChange={this.onChangeNomeUsuario}
          placeholder={"Usuario"}
        />
        <InputPersonalizado
          value={this.state.valorMensagem}
          onChange={this.onChangeMensagem}
          placeholder={"Mensagem"}
          />
          <ButtonPersonalizado onClick={this.adicionaMensagem}>Enviar</ButtonPersonalizado>
          </div>
  )
  }     
}

export default App;
