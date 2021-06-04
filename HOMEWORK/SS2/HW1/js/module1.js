export class Meme {
    id;
    name;
    image;
    dateModified;

    constructor(id, name, image, dateModified){
        this.id=id;
        this.name=name;
        this.image=image;
        this.dateModified=dateModified;
    }
    show(){
        let main = document.getElementById('main');
        let name = document.createElement('h1');
        let image = document.createElement('img');
        let dateModified = document.createElement('h2');
        name.innerHTML = 'Name: ' + this.name;
        image.src = this.image;
        dateModified.innerHTML = 'Created: ' + this.dateModified;
        main.appendChild(name);
        main.appendChild(image);
        main.appendChild(dateModified);
    }
    update(data){
        this.name= data.name;
        this.image= data.image;
    }
}
let sike = new Meme ('no1', 'sike', 'https://steamuserimages-a.akamaihd.net/ugc/923669269319294313/BD33B13BD8F548ACA6C2EBD9D944F157015640BA/' , '03/06' )
sike.show()