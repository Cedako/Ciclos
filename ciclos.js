class Ciclos{
    constructor(){
        //El valor de la variable dicta el número de veces que se realizará el ciclo
        console.log(this.cicloS(1))
    }

    cicloS(limite){
        let n = 1
        let serieS = (4/n)
        //Si el valor es 0, no hay necesidad de un ciclo, pues el valor inicial es 4/1.
        if(limite > 0){
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
        }
        return serieS
    }

    cicloE(limite){
        
    }
}
new Ciclos;