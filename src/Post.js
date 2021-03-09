export default class Post {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.date = new Date();
    }

    toString() {return `Post to string: ${JSON.stringify(this)}`}
}