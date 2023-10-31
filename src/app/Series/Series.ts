export class Series {
  Numero : Number;
  Name: String;
  Channel: String;
  Seasons: Number;

  public constructor(Numero:Number, Name:String, Channel:String, Seasons: Number) {
    this.Numero = Numero;
    this.Name = Name;
    this.Channel = Channel;
    this.Seasons = Seasons;
  }
}
