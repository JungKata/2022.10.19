import { type } from "os";

interface Multimedia{
    cim : string;

   // kiírja a konzolra a multimedia termek leirasat
    kiir() : void;
    toString() : string;
}

class Zene implements Multimedia{
    cim: string;
    hossz : number;

    constructor(cim: string, hossz: number ){
        this.cim = cim;
        this.hossz = hossz;
    }
    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.cim + " (" + this.hossz + " s) ";
    }
    
}

class Konyv implements Multimedia{
    #cim: string;

    constructor(cim : string){
        this.#cim = cim;
    }

    get cim(){
      return this.#cim;
    }
    set cim(cim : string){
        this.#cim = cim;
    }

    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.#cim;
    }

}

class Film{
    cim : string;
    hossz: number;

    constructor(cim: string, hossz: number ){
        this.cim = cim;
        this.hossz = hossz;
    }
    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.cim + " (" + this.hossz + " s) ";
    }
}

let f : Multimedia = new Film('DieHard', 1865);

let termekek : Multimedia[] = [
 new Zene('let it go', 183),
 new Konyv('The Lord of the Rings'),
 new Film('Die Hard', 1865),
];

for(let termek of termekek){
    termek.kiir();
}




/*interface Stremelheto {
    cim : string;
    hossz : number;
}*/

type Stremelheto = {
    cim : string;
    hossz : number;
}

type Alaptipus = number | boolean | string;

let StreamelhetoTermekek: Stremelheto[] = [
 new Film('Harry Potter', 2000),
 new Zene('Sweet child of mine',200),
 {cim: 'Thunderstruck', hossz:198},
];