export class Movie {
  constructor(
    public titre: string,
    public description: string,
    public img: string,
    public likes: number,
    public liked: boolean
  ) {}
}
