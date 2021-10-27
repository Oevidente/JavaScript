export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

export function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
remainingMinutesInOven(30);

export function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}
preparationTimeInMinutes(4);

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven ) {
    return (numberOfLayers*PREPARATION_MINUTES_PER_LAYER) + actualMinutesInOven;
}
totalTimeInMinutes(3,20);
console.log(totalTimeInMinutes(3,20));
