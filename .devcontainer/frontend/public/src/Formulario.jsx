import './Formulario.css'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'


function Formulario() {
    const [values, setValues] = useState();
    const [listarParceiros, setListarParceiros] = useState();

    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButton = () => {
        Axios.post("http://localhost:3000/parceiros", {
            this.nome = nome,
            this.urlLogo = urlLogo,
            this.descricao = descricao
        }).then((response) => {
            console.log(response)
        })
    };


    //criando uma função que estabelece que os campos vazios iniciam vazios.
    const [form, SetForm] = useState({
        nome: '',
        urlLogo: '',
        descricao: ''
    })


    /*função para verificar, ao preencher o formulário, se todos os campos
    foram preenchidos. só será possível enviar a mensagem no caso de nenhum
    campo estar em branco.*/
    function enviarMensagem() {
        if (
            form["nome"] != "",
            form["urlLogo"] != "",
            form["descricao"] != ""
        ) {

            alert("Parceiro criado com sucesso!")
        }

    }

    return (

        <div className="divPrincipal">
            <div className='title'>
                <h1 className='titulo-contato'>Criar novo Admin</h1></div>
            <form className="form-completo" id="form">
                <div className="form">
                    <label className="nome">Nome</label>
                    <input type="text" placeholder="Nome" name="nome" className='input' onChange={handleChangeValues} />
                    <label className="sobrenome">Sobrenome</label>
                    <input type="text" placeholder="Sobrenome" name="sobrenome" className='input' onChange={handleChangeValues} />
                    <label>Email</label>
                    <input type="text" placeholder="Email" name="email" className='input' onChange={handleChangeValues}></input>
                    <label className="senha">Senha</label>
                    <input type="text" placeholder="*********" name="senha" className='input' onChange={handleChangeValues}></input>
                    <button className="btn" onClick={() => handleClickButton()} >Enviar</button >
                    {enviarMensagem()}

                </div>
            </form>
        </div>
    );

}

export default Formulario
