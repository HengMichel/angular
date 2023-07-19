export class Movie {
  constructor(
    public id:number,
    public titre: string,
    public description: string,
    public img: string,
    public likes: number,
    public liked: boolean,
    public price: number
  ) {}
}
