declare module Express {
  export interface Session {
    user : { name : string, email : string };
  }
}