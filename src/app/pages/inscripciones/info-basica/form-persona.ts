
export let FORM_PERSONA = {
    titulo: 'Datos Basicos',
    tipo_formulario: 'basic',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Persona',
    campos: [{
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'PrimerNombre',
        label: 'Primer nombre*:',
        placeholder: 'Ej. Jose',
        requerido: true,
        tipo: 'text',
    }, {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'SegundoNombre',
        label: 'Segundo nombre:',
        placeholder: 'Ej. Steven',
        requerido: false,
        tipo: 'text',
    }, {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'PrimerApellido',
        label: 'Primer apellido*:',
        placeholder: 'Ej. Rodriguez',
        requerido: true,
        tipo: 'text',
    }, {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'SegundoApellido',
        label: 'Segundo apellido:',
        placeholder: 'Ej. Perez',
        requerido: false,
        tipo: 'text',
    }, {
        claseGrid: 'col-4',
        etiqueta: 'select',
        nombre: 'PaisNacimiento',
        label: 'País de nacimiento*:',
        requerido: true,
        entrelazado: true,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su país de nacimiento ...' },
            { Id: 1, valor: 'Perú' },
            { Id: 2, valor: 'Chile' },
            { Id: 3, valor: 'Colombia' },
            { Id: 4, valor: 'Rusia' },
        ],
    }, {
        claseGrid: 'col-4',
        etiqueta: 'select',
        nombre: 'CiudadNacimiento',
        label: 'Ciudad de nacimiento*:',
        requerido: true,
        relacion: false,
        valor: { Id: 0 },
        opciones: [
            { Id: 0, valor: 'Seleccione su ciudad de nacimiento ...' },
        ],
    }, {
        etiqueta: 'mat-date',
        claseGrid: 'col-4',
        valor: new Date('Tue Mar 13 2018 00:00:00 GMT-0500 (-05)'),
        nombre: 'FechaNacimiento',
        label: 'Fecha de nacimiento*:',
        placeholder: 'Ej. 01/01/2010',
        requerido: true,
        tipo: 'date',
    }],
}

