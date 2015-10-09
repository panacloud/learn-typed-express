// http://stackoverflow.com/questions/30270084/why-the-limitation-on-exporting-an-interface-by-default-in-typescript

interface IUser {
    email: string;
    password: string;
    displayName: string;
}

export default IUser;
