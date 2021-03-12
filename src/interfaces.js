var SimpleHuman = /** @class */ (function () {
    function SimpleHuman(id, name) {
        this.id = id;
        this.name = name;
    }
    SimpleHuman.prototype.walk = function () {
        return 'Simple human is walking';
    };
    SimpleHuman.prototype.read = function () {
        console.log(this.name + " is reading");
    };
    return SimpleHuman;
}());
var human = new SimpleHuman(5, 'Sid');
console.log(human.age);
human.read();
