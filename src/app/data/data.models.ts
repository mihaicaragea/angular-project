export class Patient {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthDay: Date,
    public sex: string,
    public CNP: number,
    public phoneNumber:String,
    public ordNumber: number
  ) {}
}
