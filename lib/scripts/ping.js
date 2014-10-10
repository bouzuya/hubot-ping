// Description
//   A Hubot script that receive pings
//
// Configuration:
//   HUBOT_PING_PATH
//
// Commands:
//   None
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var PATH, _ref;
  PATH = (_ref = process.env.HUBOT_PING_PATH) != null ? _ref : '/hubot/ping';
  return robot.router.get(PATH, function(req, res) {
    robot.logger.info('keep alive ping!');
    return res.send(200);
  });
};
