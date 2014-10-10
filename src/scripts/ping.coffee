# Description
#   A Hubot script that receive pings
#
# Configuration:
#   HUBOT_PING_PATH
#
# Commands:
#   None
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  PATH = process.env.HUBOT_PING_PATH ? '/hubot/ping'
  robot.router.get PATH, (req, res) ->
    robot.logger.info 'keep alive ping!'
    res.send 200
