export class Pessoa {
  constructor(id?: number, peso?: number, altura?: number) {
    this.id = id || 0;
    this.peso = peso || .0;
    this.altura = altura || .0;
  }

  public id: number;
  public peso: number;
  public altura: number;
}