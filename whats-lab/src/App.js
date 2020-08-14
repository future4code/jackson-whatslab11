import React from 'react';
import './App.css';
import styled from "styled-components"

const TelaToda = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  
`

const Formulario = styled.div`
  display: flex;
  width: 100%;
`
const ConteudoMensagem = styled.div`
  margin: 5px 3px 5px 5px;
`

const ListaDeMensagens = styled.div`
  background-color: #F5DEB3;
  height: 800px;
  width: 98vw;
  display:flex;
  justify-content: flex-end;
  flex-direction: column;
  border: solid 2px black;
  
`
const InputPersonalizado = styled.input`
    background-color: #F1F1F3;
    -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    border: none;
    width: ${props => props.width};
    height: 35px;
    outline: none;
    margin: 30px 2px 10px 3px;
    
`
const ButtonPersonalizado = styled.button`
  background-color: #DB7093;
    margin: 30px 3px 10px 2px;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
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
  state = {
    mensagem: [],
    valorNomeUsuario:"",
    valorMensagem:""
  }
 
  adicionaMensagem = () =>{
    const novaMensagem = {
      nomeUsuario: this.state.valorNomeUsuario,
      mensagemUsuario: this.state.valorMensagem
    };
    const novasMensagens = [...this.state.mensagem, novaMensagem];
   
    this.setState({
      mensagem: novasMensagens,
      valorNomeUsuario: "",
      valorMensagem: ""    
    });
  };
  
  apertouEnter = (event) => {
    if (event.key === 'Enter'){
      this.adicionaMensagem()
    }
  }
  
  onChangeNomeUsuario = (event) => {
    this.setState({ valorNomeUsuario: event.target.value });
  };

  onChangeMensagem = (event) => {
    this.setState({ valorMensagem: event.target.value });
  };

  render () {
    const listaDeMensagens = this.state.mensagem.map((mensagem) => {
      return (
        <p>
          {mensagem.nomeUsuario}: {mensagem.mensagemUsuario}
        </p>
      );
    });

    return (
      <TelaToda>        
        <ListaDeMensagens>
          <ConteudoMensagem>{listaDeMensagens}</ConteudoMensagem>
          <Formulario>
            <InputPersonalizado width={"25%"}
              value={this.state.valorNomeUsuario}
              onChange={this.onChangeNomeUsuario}
              placeholder={"Usuario:"}
            />
            <InputPersonalizado width={"65%"} 
              onKeyDown={this.apertouEnter}              
              value={this.state.valorMensagem}
              onChange={this.onChangeMensagem}
              placeholder={"Mensagem:"}
            />
            <ButtonPersonalizado onClick={this.adicionaMensagem}>Enviar</ButtonPersonalizado>
          </Formulario>
        </ListaDeMensagens>
      </TelaToda>
    )
  };
}; 


export default App;
