const cron = require("node-cron");

// Service
const StatisticsService = require("./services/StatisticsService");

// Logger
const logger = require("./helpers/logger");

/**
 * Cron job to reset the daily request amount.
 */
cron.schedule("0 0 * * *", async () => {
  logger.info("Cron Job Started", { service: "Cron Job" });

  StatisticsService.resetDailyRequest();

  logger.info("Cron Job Finished", { service: "Cron Job" });
});
