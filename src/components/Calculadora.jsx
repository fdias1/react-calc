import React from 'react';
import Display from './Display'
import Botao from './Botao'

export default class Calculadora extends React.Component {

    state = {
        tela:'0',
        limparTela: false,
        operacao:null,
        registradores:[0, 0],
        ponteiro:0
    }

    render() {
        const limpar = () => {
            this.setState({
                tela:'0',
                limparTela: false,
                operacao:null,
                registradores:[0, 0],
                ponteiro:0
            })
        }
        const teclado = (tecla) => {
            let tela = this.state.tela
            let limparTela = this.state.limparTela 
            let registradores = this.state.registradores
            let ponteiro = this.state.ponteiro
            if ( tecla === ',' && tela.includes(',') ) {return}
            if ( tela.replace(',','').replace('-','').length >=14 ) {return}
            if (limparTela || (tela === '0' && tecla !== ',')) {tela = ''}
            tela = tela+tecla
            registradores[ponteiro] = parseFloat(tela)
            this.setState({ tela, registradores,limparTela:false })
        }
        const inverter = () => {
            let tela = this.state.tela
            let registradores = this.state.registradores
            let ponteiro = this.state.ponteiro
            registradores[ponteiro] = -registradores[ponteiro]
            tela = registradores[ponteiro].toString()
            this.setState({registradores,tela})
        }
        const operacao = async (tecla) => {
            const operacao = this.state.operacao
            if (operacao !== null) {
                igual()
            }
            const ponteiro = 1
            const limparTela = true
            this.setState({ponteiro, limparTela,operacao:tecla})
        }
        const igual = () => {
            const operacoes = {
                '+': ([a,b]) => a+b,
                '-': ([a,b]) => a-b,
                '×': ([a,b]) => a*b,
                '÷': ([a,b]) => a/b || 0
            }
            const ponteiro = this.state.ponteiro
            if(ponteiro === 1) {
                const registradores = this.state.registradores
                const oper = this.state.operacao
                const resultado = operacoes[oper](registradores)
                let tela = resultado.toString()
                if (tela.split('.')[0].length > 14) {
                    tela = 'Estouro'
                    limpar()
                } else {
                    const qtdAlgarismos = 14 + (tela.includes('-') ? 1 : 0) + (tela.includes('.') ? 1 : 0)
                    if (tela.length > 15) {
                        tela = tela.slice(0,qtdAlgarismos)
                    }
                }
                this.setState({registradores:[resultado, 0],tela,limparTela:true,ponteiro:0,operacao:null})
            } else {
                this.setState({limparTela:true,ponteiro:0,operacao:null})
            }
        }
        const percentual = () => {
            const ponteiro = this.state.ponteiro
            const operacao = this.state.operacao
            if(ponteiro === 1 && (operacao === '+' || operacao === '-')) {
                const registradores = this.state.registradores
                registradores[1] = (registradores[1] * registradores[0] / 100)
                this.setState(registradores)
                igual()
            } else {
                limpar()
            }
        }
        return (
            <div id="calculadora">
                <Display display={this.state.tela}/>
                <Botao rotulo='AC' classe='funcao' click={limpar}/>
                <Botao rotulo='+/-' classe='funcao' click={inverter} />
                <Botao rotulo='%' classe='funcao' click={percentual} />
                <Botao rotulo='÷' classe='operacao' click={operacao} />
                <Botao rotulo='7' classe='teclado' click={teclado} />
                <Botao rotulo='8' classe='teclado' click={teclado} />
                <Botao rotulo='9' classe='teclado' click={teclado} />
                <Botao rotulo='×' classe='operacao' click={operacao} />
                <Botao rotulo='4' classe='teclado' click={teclado} />
                <Botao rotulo='5' classe='teclado' click={teclado} />
                <Botao rotulo='6' classe='teclado' click={teclado} />
                <Botao rotulo='-' classe='operacao' click={operacao} />
                <Botao rotulo='1' classe='teclado' click={teclado} />
                <Botao rotulo='2' classe='teclado' click={teclado} />
                <Botao rotulo='3' classe='teclado' click={teclado} />
                <Botao rotulo='+' classe='operacao' click={operacao} />
                <Botao rotulo='0' classe='teclado' style={{width:'150px'}} click={teclado}/>
                <Botao rotulo=',' classe='teclado' click={teclado} />
                <Botao rotulo='=' classe='operacao' click={igual} />
            </div>
        )
    }
}