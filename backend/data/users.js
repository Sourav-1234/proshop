import bcrypt from 'bcryptjs';

const users=[
    {
    name:'Admin User',
    email:'admin@gmail.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
},
{
    name:'Subhra Saha',
    email:'subhrasaha@gmail.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false,
},
{
    name:'Sourav Saha',
    email:'sourav024saha@gmail.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false,
}
];


export default users;