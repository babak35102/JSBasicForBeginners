// speed Limit = 70
// 5            => 1 point
//Math.floor()
// 12 point     => suspended


checkSpeed(129);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log("OK");
        return;
    }

    const point = Math.floor((speed - speedLimit) / kmPerPoint);
    if (point >= 12)
        console.log("license suspended");
    else
        console.log("Points: ", point);
}