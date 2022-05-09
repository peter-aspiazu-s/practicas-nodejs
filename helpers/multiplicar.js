const {writeFileSync} = require('fs');

const crearArchivo = async(base = 5, listar = false, hasta = 5) => {
    try {
        if(listar){
            console.log('==============='.green);
            console.log(`Tabla del ${base}`)
            console.log('==============='.green);
        }
        
        let salida = '';
        
        for(let i = 0; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if(listar){
            console.log(salida);
        }
    
        return `tabla-${base}.txt`;
        
    } catch (error) {
        console.log(error)
    }

}    

module.exports = {
    crearArchivo
}