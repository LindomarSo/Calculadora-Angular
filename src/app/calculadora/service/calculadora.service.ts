import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private readonly SOMA: string = '+';
  private readonly SUBTRAIR: string = '-';
  private readonly MULTIPLICAR: string = '*';
  private readonly DIVIDIR: string = '/';  

  constructor() { }

  calcular(numberOne: number, numberTow: number, operacao: string): number
  {
    var resultado = 0
    switch(operacao)
    {
      case this.SOMA:
        resultado = numberOne + numberTow;
        break;
        case this.SUBTRAIR:
          resultado = numberOne - numberTow;
          break;
        case this.MULTIPLICAR:
          resultado = numberOne * numberTow;
          break;
        case this.DIVIDIR:
          resultado = numberOne / numberTow;
          break;
        default:
          resultado = 0;
    }
    return resultado;
  }
}
