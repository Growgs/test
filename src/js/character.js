export default class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
        this.maxHealth = 100;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Cannot level up dead character');
        }
        this.level += 1;
        this.attack += Math.round(this.attack * 0.2);
        this.defence += Math.round(this.defence * 0.2);
        this.health = this.maxHealth;
    }

    damage(points) {
        if (this.health === 0) {
            return;
        }
        this.health -= points * (1 - this.defence / 100);
        
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
