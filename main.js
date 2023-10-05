let BAN=1;
let BAN2=0;
let BAN3=0;
let cantidadAlumnos=3;
const alumno1 = new agregarAlumno("victor", "123456789");
const alumno2 = new agregarAlumno("fabiola", "123456789");
const alumno3 = new agregarAlumno("eduardo", "123456789");
const alumnado= {alumno1,alumno2,alumno3};
const victorMat = new agregarMateria("Matematica", 20,18,17);
const victorGeo = new agregarMateria("Geografia", 5,8,18);
const victorBio = new agregarMateria("Biologia", 20,16,13);
const victorCursos= {victorMat,victorGeo,victorBio};
const fabiolaMat = new agregarMateria("Matematica", 15,7,11);
const fabiolaGeo = new agregarMateria("Geografia", 19,20,20);
const fabiolaBio = new agregarMateria("Biologia", 17,18,19);
const fabiolaCursos= {fabiolaMat,fabiolaGeo,fabiolaBio};
const eduardoMat = new agregarMateria("Matematica", 15,7,11);
const eduardoGeo = new agregarMateria("Geografia", 19,20,20);
const eduardoBio = new agregarMateria("Biologia", 17,18,19);
const eduardoCursos= {eduardoMat,eduardoGeo,eduardoBio};

for(const clave in alumnado){
  console.log(clave);
  console.log("", alumnado[clave]);
}
function agregarAlumno(nombre, contrasena){
    this.nombre= nombre;
    this.contrasena= contrasena;
}
function agregarMateria(curso, nota1, nota2, nota3){
    this.curso= curso;
    this.nota1= nota1;
    this.nota2= nota2;
    this.nota3= nota3;
}
function registrar(){
    let userRegister=prompt("Escriba su usuario para registrarlo en el sistema").toLowerCase();
    let contrasenaRegister=prompt("Escriba su contrasena para registrarlo en el sistema").toLowerCase();
    let cantidadAlumnos=parseInt(Object.keys(alumnado).length) + 1;
    eval('alumnado' + '["' + 'alumno' + cantidadAlumnos + '"]' + '=' + 'new agregarAlumno(userRegister, contrasenaRegister)' + ';');
    eval(userRegister + 'Mat' + '=' + 'new agregarMateria("Matematica", 20,20,20)' + ';');
    eval(userRegister + 'Geo' + '=' + 'new agregarMateria("Geografia", 20,20,20)' + ';');
    eval(userRegister + 'Bio' + '=' + 'new agregarMateria("Biologia", 20,20,20)' + ';');
    eval(userRegister + 'Cursos' + '=' + '{' + userRegister + 'Mat' +  ',' + userRegister + 'Geo'+ ',' + userRegister + 'Bio' + '}' + ';');
    alert("Su usuario ha sido registrado en el sistema");
    alert("En breve volvera a la pantalla de inicio");
}
function accesoNotas(alumno){
    while(BAN3===0){
    alert("Las materias disponibles son Matematica, Geografia y Biologia");
    let respuesta3=parseInt(prompt("Escriba 1 para acceder a sus notas de Matematica, 2 para acceder a sus notas de Geografia, 3 para acceder a sus notas de Biologia, 4 para salir del sistema"));
    eval('notasMat'+'='+alumno+'Mat'+';');
    eval('notasGeo'+'='+alumno+'Geo'+';');
    eval('notasBio'+'='+alumno+'Bio'+';');
    switch(respuesta3){
        case 1:
            nota1=Object.values(notasMat)[1];
            nota2=Object.values(notasMat)[2];
            nota3=Object.values(notasMat)[3];
            prom=(nota1+nota2+nota3)/3;
            alert(`Su primer parcial es ${nota1}`);
            alert(`Su segundo parcial es ${nota2}`);
            alert(`Su tercer parcial es ${nota3}`);
            alert(`Su promedio es de ${prom}`);
            break
        case 2:
            nota1=parseInt(Object.values(notasGeo)[1]);
            nota2=parseInt(Object.values(notasGeo)[2]);
            nota3=parseInt(Object.values(notasGeo)[3]);
            prom=(nota1+nota2+nota3)/3;
            alert(`Su primer parcial es ${nota1}`);
            alert(`Su segundo parcial es ${nota2}`);
            alert(`Su tercer parcial es ${nota3}`);
            alert(`Su promedio es de ${prom}`);
            break            
            case 3:
                nota1=parseInt(Object.values(notasBio)[1]);
                nota2=parseInt(Object.values(notasBio)[2]);
                nota3=parseInt(Object.values(notasBio)[3]);
                prom=(nota1+nota2+nota3)/3;
                alert(`Su primer parcial es ${nota1}`);
                alert(`Su segundo parcial es ${nota2}`);
                alert(`Su tercer parcial es ${nota3}`);
                alert(`Su promedio es de ${prom}`);
                break  
            case 4:
                BAN3=1;
                alert("Hasta luego");
                break
            default:
                alert("Numero ingresado incorrecto, el sistema regresara al inicio");
                break 
    }
    

    if((prom>=10) && (BAN3!=1)){
        alert(`¡Felicitaciones ${alumno} has pasado la materia! El sistema regresara al inicio`);
    }
    }
}
do{
BAN3=0;
BAN2=0;
alert("Bienvenido al Sistema Academico de la Universidad de Milan, esta es una operadora automatica.");
alert("En el siguiente proceso usted sera capaz de consultar sus notas academicas en el sistema.");
let respuesta=prompt("Escriba 1 para acceder al sistema con sus credenciales, 2 para si desea salir del sistema");
if (respuesta==="1"){
    let userAnswer=prompt("Escriba su usuario").toLowerCase();
    let passwordAnswer=prompt("Escriba su contrasena").toLowerCase();
    for(let i=0; i<Object.keys(alumnado).length; i++){
        if ((userAnswer===Object.values(alumnado)[i]["nombre"]) && (passwordAnswer===Object.values(alumnado)[i]["contrasena"])){
            alert(`Bienvenido ${Object.values(alumnado)[i]["nombre"]}`); 
            BAN2=1;
            let alumno = Object.values(alumnado)[i]["nombre"];
            accesoNotas(alumno);
        }
    }
        if(BAN2===0){
            alert(`El usuario ${userAnswer} no esta registrado en el sistema`); 
            let respuesta2=prompt("¿Desea registrarse en el sistema? Escriba 1 para registrarse, 2 si desea salir del sistema");
            if (respuesta2==="1"){
                registrar();
            }else if(respuesta2==="2"){
                alert("Hasta luego."); 
                BAN=2;
                break;
            }else{
                alert("Error al ingresar la respuesta"); 
            }
        }
}else if(respuesta==="2"){
    alert("Hasta luego."); 
    BAN=2;
    break;
}else{
    alert("Error al ingresar la respuesta"); 
}
}while(BAN===1)

