import {AchievementSet, define as $} from '@cruncheevos/core';
const set = new AchievementSet({gameId: 3327, title: 'Otogirisou: Hypericum Perforatum'});

const text_address = 0x1972;

const mansion_pairs = [
    [0x11e165, 0x11e162],
    [0x138267, 0x138274]
];

const trigger_pairs = (pairs) => {
    return Object.fromEntries(
        pairs.map(([mem, delta], index) => [
            `alt${index + 1}`,
            [
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