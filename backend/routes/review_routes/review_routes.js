import { Router } from "express";
import ReviewController from "../../controllers/reviewController.js";

function ReviewRouterFun(
  ReviewModel,
  CustomePasetoMiddleWare,
  CheckPermission,
  TokenController,
  userModel,
  adminModel,
  tokenRepos
) {
  const router = Router();
  const reviewController = new ReviewController(ReviewModel);
  //public
  router.get("/", async (req, res, next) => {
    try {
      await reviewController.getAllReviews(req, res);
    } catch (error) {
      next(error); //implement your error custom
    }
  });
  router.post("/", async (req, res, next) => {
    try {
      await reviewController.postReview(req, res);
    } catch (error) {
      next(error); //implement your error custom
    }
  });
  router.use(async (req, res, next) => {
    CustomePasetoMiddleWare(
      req,
      res,
      next,
      TokenController,
      userModel,
      adminModel,
      tokenRepos
    );
  });
  router.use(async (req, res, next) => {
    CheckPermission(req, res, next);
  });

  //user

  return router;
}
export default ReviewRouterFun;
