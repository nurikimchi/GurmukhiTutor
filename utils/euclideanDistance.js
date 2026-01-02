// Returns distance between two cartesian points.
const { sqrt, pow } = Math;

function euclideanDistance(p1, p2) {
    return sqrt(pow(p1.x - p2.x, 2) + pow(p1.y - p2.y, 2));
}