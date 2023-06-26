let h = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const trappedWater = (height) => {
    let segments = [];
    let currentSegement = [];
    for (let i = 0; i < height.length; i++) {
        if (currentSegement.length) {
            if (height[i] < currentSegement[0]) {
                currentSegement.push(height[i]);
            } else {
                currentSegement.push(height[i])
                segments.push(currentSegement);
                currentSegement = [];
                i--;
            }
        } else {
            currentSegement.push(height[i])
        }
    }
    let totalWater = 0;
    for (let i = 0; i < segments.length; i++) {
        let segment = segments[i];
        let min = Math.min(segment[0], segment[segment.length - 1]);
        for (let j = 1; j < segment.length - 1; j++) {
            if (segment[j] === undefined) continue;
            totalWater += min - segment[j];
        }
    }
    return totalWater;
};

console.log(trappedWater(h))