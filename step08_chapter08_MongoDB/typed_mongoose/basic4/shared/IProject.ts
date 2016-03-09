import {IUser} from './IUser'
export interface IProject {
	name: string;
	createdBy : IUser[];
};