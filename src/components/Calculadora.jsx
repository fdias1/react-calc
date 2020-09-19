import React,{useState} from 'react';
import Display from './Display'
import Botao from './Botao'

export default () => {
    return (
    <div id="calculadora">
        <Display />
        <Botao rotulo='AC' classe='funcao' />
        <Botao rotulo='+/-' classe='funcao' />
        <Botao rotulo='%' classe='funcao' />
        <Botao rotulo='÷' classe='operacao' />
        <Botao rotulo='7' classe='teclado' />
        <Botao rotulo='8' classe='teclado' />
        <Botao rotulo='9' classe='teclado' />
        <Botao rotulo='×' classe='operacao' />
        <Botao rotulo='4' classe='teclado' />
        <Botao rotulo='5' classe='teclado' />
        <Botao rotulo='6' classe='teclado' />
        <Botao rotulo='-' classe='operacao' />
        <Botao rotulo='1' classe='teclado' />
        <Botao rotulo='2' classe='teclado' />
        <Botao rotulo='3' classe='teclado' />
        <Botao rotulo='+' classe='operacao' />
        <Botao rotulo='0' classe='teclado' style={{width:'150px',borderRadius:'0 0 0 8px'}} />
        <Botao rotulo=',' classe='teclado' />
        <Botao rotulo='=' classe='operacao' style={{borderRadius:'0 0 8px 0'}} />
    </div>)
}