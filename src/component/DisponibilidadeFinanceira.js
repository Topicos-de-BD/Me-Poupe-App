import React, { useState } from 'react';
import '../stylesheet/component/ObjetivoInvestimento.css';

import logo from '../image/porco-mepoupe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useUserPointsContext } from '../contexts/UserPointsContext';
import {VerificaCampo} from '../utils/validacao';


function DisponibilidadeFinanceira() {
    const {user, setUser, error, setError} = useUserPointsContext()
    const [details, setDetails] = useState({objetivoPatrimonio:"", tempoInvestimento:"", periodicidadeAportes:""});

    const submitHandler = e => {
        e.preventDefault();
        if (VerificaCampo(details.objetivo)){
            setUser({
                ...user,
                objetivo: user.objetivo,
                renda: user.renda, 
                aluguel: user.aluguel,
                alimentacao: user.alimentacao,
                contasDiversas: user.contasDiversas,
                objetivoPatrimonio: details.objetivoPatrimonio, 
                tempoInvestimento: details.tempoInvestimento,
                periodicidadeAportes: details.periodicidadeAportes,
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
            <p className='pergunta'>Quanto de patrimônio você pretende acumular? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            <input name='objetivoPatrimonio' id='objetivoPatrimonio' onChange={e => setDetails({...details, objetivoPatrimonio: e.target.value})} value={details.objetivoPatrimonio} />

            <p className='pergunta'>Em quanto tempo você pretende acumular este valor? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            <input name='tempoInvestimento' id='tempoInvestimento' onChange={e => setDetails({...details, tempoInvestimento: e.target.value})} value={details.tempoInvestimento} />

            <p className='pergunta'>Com qual periodicidade você pretende aportar dinheiro nos seus investimentos? {(error != "")?(<p className='pergunta erro'>{error}</p>): ("")}</p>
            <input name='periodicidadeAportes' id='periodicidadeAportes' onChange={e => setDetails({...details, periodicidadeAportes: e.target.value})} value={details.periodicidadeAportes} />

            <div className='botao'>
                <input type="submit" value="PRÓXIMO" id='botao' className='botaoEstilo'/>
            </div>

        </form>
  
    );
  }
  
  export default DisponibilidadeFinanceira;