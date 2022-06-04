class Student {
    constructor({
        name,
        username,
        age,
        email,
        facebook = undefined,
        twitter = undefined,
        instagram = undefined,
        aprobedCourses = [],
        learnigPaths = [],

    })
    {
        this.name = name;
        this.username = username;
        this.age = age;
        this.socialMedia = {
        facebook,
        twitter,
        instagram,
        }
        this.email = email;
        this. aprobedCourses = aprobedCourses;
        this.learnigPaths = learnigPaths;   
    }   
}

const juanito = new Student({
    name : 'Juan',
    username : 'junadc',
    twitter: 'juanitodc',
    email: 'juandc@gmial.com',

}) 

const miguelito = new Student({
    name : 'Miguel',
    username : 'migueldc',
    twitter: '@migueldc',
    email: 'miguel@gmail.com',
})