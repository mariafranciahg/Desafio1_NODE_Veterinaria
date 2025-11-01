const fs = require ('fs');

const registrar = (nombre, edad, animal, color, enfermedad)=> {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    citas.push(nuevaCita);
    
    fs.writeFileSync('citas.json',JSON.stringify(citas));

    console.log('Cita registrada con éxito');
}

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
   
    citas.forEach((cita) => {
        console.log(
            `
            Nombre: ${cita.nombre}
            Edad: ${cita.edad}
            Tipo: ${cita.animal}
            Color: ${cita.color}
            Enfermedad: ${cita.enfermedad}
            ------------------------------
            `
        )
    })


}

module.exports = {registrar, leer}