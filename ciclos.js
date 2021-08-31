class Ciclos{
    constructor(){
        //El valor de la variable dicta el número de veces que se realizará el ciclo
        console.log(this.cicloS(10));
        //Misma regla, aunque al ser con aumentos de 1 en 1, se puede tomar como que la variable dicta hasta que número factorial
        //se resolverá la serie.
        console.log(this.cicloE(3));
    }

    cicloS(limite){
        let n = 1
        let serieS = (4/n)
        for (let i = 0; i <= limite; i++){
            if(i < limite){
                n+=2
            serieS-=(4/n)
            //console.log(n)
            //console.log(serieS)
            }
            i++
            if(i < limite){
                n+=2
                serieS+=(4/n)
                //console.log(n)
                //console.log(serieS)
            }
        }
        return serieS
    }

    cicloE(limite){
        let factorial = 1;
        let serieE = 1;
        for(let i = 0; i < limite; i++){
            serieE+=(1/(this.factorizar(factorial)))
            if(factorial < limite){
                factorial++
            }
        }
        return serieE;
    }

    //Para mantener organizados los ciclos, hice que los numeros factoriales se resolvieran por separado.
    factorizar(numero){
        let total = 1
        for (let i = 1; i <= numero; i++){
            total = total * i
        }
        return total;
    }
}
new Ciclos;