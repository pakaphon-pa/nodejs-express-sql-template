import testModel from "../models/test";
import Logger from "../configs/logger";
import { successResponse, errorResponse } from "../utils/responseFormat";

export const testController = (req, res) => {
  try {
    return res.status(200).json(successResponse({ test: "test" }));
  } catch (error) {
    Logger.error(errorResponse(error));
    res.status(500).json(errorResponse(error));
  }
};
