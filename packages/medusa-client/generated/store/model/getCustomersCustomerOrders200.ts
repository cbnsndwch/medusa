/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { Order } from "./order"

export type GetCustomersCustomerOrders200 = {
  /** The total number of Orders. */
  count?: number
  /** The offset for pagination. */
  offset?: number
  /** The maxmimum number of Orders to return, */
  limit?: number
  orders?: Order[]
}