import React, {Component} from 'react';

function getProximaDezena(value){
    let contDiv = 0;
    let negativo = false;
    if(value < 0){
        negativo = true;
        value *= -1;
    }

    while(value > 10){
        contDiv++;
        value /= 10.0;
    }

    if(contDiv === 0 && value >= 0 && value < 10){
        if(negativo){
            return -10;
        }else{
            return 0;
        }
    }
    
    return Math.ceil(value)*(Math.pow(10,contDiv))*(negativo?-1:1);
}

class Tabela extends Component{
    constructor(props){
        super(props);

        this.state = {
            escala: 1
        };

        this.montarGrafico = this.montarGrafico.bind(this);
        this.getEscalaTemperatura = this.getEscalaTemperatura.bind(this);
    }

    getEscalaTemperatura(){
        let vet = [12, 15, 1, 8, 32, 41];
        let min = Math.min.apply(Math, vet);
        let max = Math.min.apply(Math, vet);
        min = getProximaDezena(min);
        max = getProximaDezena(max);
        let distancia = max - min;
        return {dist: distancia, max: max, min: min};
    }

    montarGrafico(){
        let dados = this.getEscalaTemperatura();
        let escala = dados.dist;
        let arr = [];
        for(let i = 0; i < ){

        }
        return (
            <g>
                {
                <text x="100" y="100" color="black"> 50°C</text>
                <text x="100" y="400" color="black"> 0°C</text>
                }
            </g>
        );
    }

    render(){

        return (
            <div className="grafico">
                <svg viewBox="0 0 1000 500">
                    <path d="M150 75 L150 425 L700 425" fill="transparent" stroke="black"></path>
                    {this.montarGrafico()}
                </svg>
            </div>
        );
    }
}

export default Tabela;