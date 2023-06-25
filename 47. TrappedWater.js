let h = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const trappedWater = (height) => {
    // Create Segments
    let segments = [];
    let currentSegement = [];
    for (let i = 0; i <= height.length; i++) {
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
};

trappedWater(h);