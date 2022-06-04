const natalia = {
    name : 'Natalia',
    age : 20,
    cursosAprobados : [
        'curso definito de html y css',
        'curso practico de html y css'
    ],
    aprovarCurso(nuevocurso){
        this.cursosAprobados.push(nuevocurso)
    }

}

class Student {
    constructor(name, age, cursosAceptados){
        this.name = name; 
        this.age = age;
        this.cursosAceptados = cursosAceptados;
    }
    aprovarCurso(nuevocurso){
        this.cursosAceptados.push(nuevocurso)
    }
    
}

const miguelito = new Student('Miguel', 18, 
[
'curso de ceincias de datos para BI',
'curso de tableu'
]
)


class Student2 {
    constructor ({name,age,email,facebook, twitter, instagram, cursosAprobados})
    {
        this.name = name;
        this.age = age ; 
        this.email= email;
        this.facebook = facebook;
        this.twitter = twitter;
        this.instagram = instagram;
        this.cursosAprobados = cursosAprobados;

    }
    aprobarCurso(nuevocurso){
        this.cursosAprobados.push(nuevocurso)
    }
    
}

const andres = new Student2({
    age: 18,
    name : 'Andres',
    email : 'andres@gmail.com',
    instagram : '@andresito.uwu',
    cursosAprobados : [
        'cusro de creacion de videojuegos',
        'curso de real Engine',
    ]
})