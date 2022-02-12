const statisticsModel = require("../models/statistics");

class StatisticSerivce {
  constructor(statisticsModel) {
    this.statisticsModel = statisticsModel;
  }

  async updateTotalRequest() {
    await this.statisticsModel.updateOne(
      {},
      {
        $inc: {
          totalRequest: 1,
          dailyRequest: 1,
        },
      }
    );
  }

  async resetDailyRequest() {
    const { dailyRequest } = await this.statisticsModel.findOne({});

    await this.statisticsModel.updateOne(
      {},
      {
        dailyRequest: 0,
        $push: {
          dailyRequests: {
            date: Date.now(),
            request: dailyRequest,
          },
        },
      }
    );
  }
}

module.exports = new StatisticSerivce(statisticsModel);
