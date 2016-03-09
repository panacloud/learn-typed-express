import {IProject} from './IProject'
export interface IUser {
    email: string;
    password: string;
    displayName: string;
    projects : IProject[];
};