import { StrategyResolverService } from "../../../../services"
import { Request, Response } from "express"

/**
 * @oas [post] /auth
 * operationId: "PostAuth"
 * summary: "Authenticate a User"
 * x-authenticated: false
 * description: "Logs a User in and authorizes them to manage Store settings."
 * parameters:
 *   - (body) email=* {string} The User's email.
 *   - (body) password=* {string} The User's password.
 * tags:
 *   - Auth
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          properties:
 *            user:
 *              $ref: "#/components/schemas/user"
 */
export default async (req: Request, res: Response) => {
  const strategyResolver = req.scope.resolve(
    "strategyResolverService"
  ) as StrategyResolverService

  const authStrategyType = (req.headers["X-medusa-auth-strategy"] ??
    "core-admin-default-auth") as string

  const authStrategy = strategyResolver.resolveAuthByType(authStrategyType)
  await authStrategy.authenticate(req, res)
}

