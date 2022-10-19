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