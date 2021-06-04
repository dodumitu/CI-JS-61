import {Meme} from './module1.js'
class MemeCollection {
    id;
    name;
    owner;
    memes;
    constructor(id, name, owner, memes) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    };
    add(meme) {
        if (meme instanceof Meme) {
            this.memes.push(meme);
        } else {
            console.log('sike, wrong number...');
        }
    };
    update(id, data) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes[i].name = data.name;
                this.memes[i].image = data.image;
            } else {
                console.log('data not found');
            };
        };
    };
    delete(id) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes.splice(i, 1);
            };
        };
    }
    show() {
        console.log(this);
    }
};

