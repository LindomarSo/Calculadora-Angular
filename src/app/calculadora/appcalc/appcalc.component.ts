import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '..';

@Component({
  selector: 'app-appcalc',
  templateUrl: './appcalc.component.html',
  styleUrls: ['./appcalc.component.css']
})
export class AppcalcComponent implements OnInit {

  private numberOne: string;
  private numberTow: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar():void
  {
    this.numberOne = "0";
    this.numberTow = null;
    this.operacao = null;
    this.resultado = null;
  }

  adicionarNumero(numero: string): void
  {
    if(this.operacao === null)
    {
      this.numberOne = this.concatenarNumero(this.numberOne, numero);
    }
    else
    {
      this.numberTow = this.concatenarNumero(this.numberTow, numero);
    }
  }

  concatenarNumero(numeroAtual: string, numConcatena: string): string
  {
    if(numeroAtual === '0' || numeroAtual === null)
    {
      numeroAtual = '';
    }
    if(numConcatena === '.' || numeroAtual == '')
    {
      return '0.';
    }
    if(numeroAtual === '.' && numeroAtual.indexOf('.') > -1)
    {
      return numeroAtual;
    }
    return numeroAtual+numConcatena;
  }

  definirOperacao(operacao: string) : void
  {
    if(this.operacao === null)
    {
      this.operacao = operacao;
      return;
    }
    if(this.numberTow !== null)
    {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numberOne),
        parseFloat(this.numberTow),
        this.operacao
      );
      this.operacao = operacao;
      this.numberOne = this.resultado.toString();
      this.numberTow = null;
      this.resultado = null;
    }
  }
  
  get display(): string
  {
    if(this.numberTow !== null)
    {
      return this.numberTow;
    }
    return this.numberOne;
  }
}
