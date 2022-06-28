import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';
import {VerificaCampo} from '../utils/validacao';


function RendaECustos() {
    const {user, setUser, error, setError} = useUserPointsContext()
    const [details, setDetails] = useState({renda:"", aluguel:"", alimentacao:"", contasDiversas:""});

    const submitHandler = e => {
        e.preventDefault();
        if (VerificaCampo(details.objetivo)){
            setUser({
                ...user,
                objetivo: user.objetivo,
                renda: details.renda, 
                aluguel: details.aluguel,
                alimentacao: details.alimentacao,
                contasDiversas: details.contasDiversas,
                pergunta01:"", 
                pergunta02:"", 
                pergunta03:"",
                pergunta04:""
            });
            console.log("Esse é o user", user);
        }else{
            console.log("Preencha com todos os dados!");
            setError("Preencha com todos os dados!");
        }
    }

    return (   
        <form onSubmit={submitHandler}>
            <p className='pergunta'>Qual sua renda mensal? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            <input name='renda' id='renda' onChange={e => setDetails({...details, renda: e.target.value})} value={details.renda} />

            <p className='pergunta'>Quanto você gasta mensalmente com aluguel? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            <input name='aluguel' id='aluguel' onChange={e => setDetails({...details, aluguel: e.target.value})} value={details.aluguel} />

            <p className='pergunta'>Quanto você gasta mensalmente com alimentação? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            <input name='alimentacao' id='alimentacao' onChange={e => setDetails({...details, alimentacao: e.target.value})} value={details.alimentacao} />

            <p className='pergunta'>Quanto você gasta mensalmente com outras contas (luz, gas, telefone, internet? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            <input name='contasDiversas' id='contasDiversas' onChange={e => setDetails({...details, contasDiversas: e.target.value})} value={details.contasDiversas} />

            <div className='botao'>
                <input type="submit" value="PRÓXIMO" id='botao' className='botaoEstilo'/>
            </div>

        </form>
  
    );
  }
  
  export default RendaECustos;