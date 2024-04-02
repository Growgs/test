import Character from '../character.js';

describe('Character', () => {
    let characters;

    beforeEach(() => {
        characters = new Character('Test', 'Swordsman');
    });

    test('Level up', () => {
        characters.levelUp();
        expect(characters.level).toBe(2);
        expect(characters.attack).toBe(48); // 40 + 20% = 48
        expect(characters.defence).toBe(12); // 10 + 20% = 12
        expect(characters.health).toBe(100);
    });

    test('Damage taken', () => {
        characters.damage(20);
        expect(characters.health).toBe(88); // 100 - 20*(1-0) = 80
    });

    test('Character cannot level up when health is 0', () => {
        characters.damage(100); // Health becomes 0
        expect(() => characters.levelUp()).toThrow('Cannot level up dead characters');
    });

    test('Damage taken when health is 0 does not affect health', () => {
        characters.damage(100);
        characters.damage(20);
        expect(characters.health).toBe(0);
    });
});

