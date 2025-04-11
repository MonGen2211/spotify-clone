import { clerkClient } from "@clerk/express";

export const portectRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return res
      .status(401)
      .json({ messages: "Unauthorized - you must be logined in" });
  }
  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

    // nếu chỗ này primaryEmailAddress? là underfined thì sẽ ko gây lỗi nó sẽ trả isAdmin về underfined lun
    if (!isAdmin) {
      return res
        .status(403)
        .json({ message: "Unauthorized - you must be an admin" });
    }
    next();
  } catch (error) {
    console.log("Error in requireAdmin in authMidleWare", error);
    next(error);
  }
};
