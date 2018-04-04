export class Profile{
  constructor(
        public username:string,
        public bio:string,
        public following:boolean,
        public image:string,
        public role:string,
        public gemsid:number
    )
    {
        this.username = username;
        this.bio = bio;
        this.following = following;
        this.image = image;
        this.role = role;
        this.gemsid = gemsid;
    }

}