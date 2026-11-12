import {AchievementSet, define as $} from '@cruncheevos/core';
const set = new AchievementSet({gameId: 3327, title: 'Otogirisou: Hypericum Perforatum'});

const text_address = 0x1972;
const in_game_flag = 0x1baf;

const in_game = () => {
    return [['', 'Mem', '8bit', in_game_flag, '=', 'Value', '', 0xff]];
}

const mansion_pairs = [
    [0x0aea25, 0x0aea23], // rattlesnake, window
    [0x098aa3, 0x098aa0], // rattlesnake, door
    [0x11e165, 0x11e162], // wasps, door
    [0x138267, 0x138274] // wasps, window
];

const trigger_pairs = (pairs) => {
    return Object.fromEntries(
        pairs.map(([mem, delta], index) => [
            `alt${index + 1}`,
            [
                ...in_game(),
                ['', 'Mem', '24bit', text_address, '=', 'Value', '', mem],
                ['', 'Delta', '24bit', text_address, '=', 'Value', '', delta],
            ],
        ])
    );
};

set.addAchievement({
    title: 'Mansion Enterer',
    description: 'Enter the mansion',
    points: 5,
    conditions: {
        core: [],
        ...trigger_pairs(mansion_pairs),
    },
});

export default set;