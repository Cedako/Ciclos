class Ciclos{
    constructor(){
        this.limite = 100;
        console.log(this.cicloS(2))
    }

    cicloS(limite){
        let n = 1
        let serieS = (4/n)
        if(limite > n){
            for (let i = 3; i <= limite; i+=2){
                serieS-=(4/i)
                i+=2
                if(i < limite){
                    serieS+=(4/i)
                }
            }
        }
        return serieS
        
    }
}
new Ciclos;