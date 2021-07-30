export {};

class Mahotsukai {}
class Souryo {}

//classの場合は単一継承（1つしか継承できない）
// class Taro extends Mahotsukai, Souryo {} ←NG

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

interface Tateshi {
  bougyo(): void;
}

//implementsの横に実装したいinterfaceを書きます(複数可)
class Jiro implements Kenja, Senshi, Tateshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
  bougyo(): void {
    console.log('bougyo');
  }
}

const jiro = new Jiro();

jiro.ionazun();

jiro.kougeki();

jiro.bougyo();
