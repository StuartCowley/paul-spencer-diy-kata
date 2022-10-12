const reachDestination = (distance, speed) => {
  let time = 0;
  let timeRounded = 0.0;
  let responseText1 = "I should be there in ";
  let responseText2 = " hours.";

  time = distance / speed;
  timeRounded = Math.round(time * 2) / 2;

  return responseText1.concat(timeRounded, responseText2);
};

module.exports = reachDestination;
