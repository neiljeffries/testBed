export class Crewmember {

      constructor(
        public id:number,
        public first_name:string,
        public last_name:string,
        public email:string,
        public phone:string,
        public gemsid:number,
        public sliderequested:boolean
    )
    {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.gemsid = gemsid;
        this.sliderequested = sliderequested;
    }

}
