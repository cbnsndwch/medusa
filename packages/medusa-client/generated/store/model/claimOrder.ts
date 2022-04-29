/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { ClaimOrderType } from "./claimOrderType"
import type { ClaimOrderPaymentStatus } from "./claimOrderPaymentStatus"
import type { ClaimOrderFulfillmentStatus } from "./claimOrderFulfillmentStatus"
import type { ClaimItem } from "./claimItem"
import type { LineItem } from "./lineItem"
import type { Return } from "./return"
import type { Address } from "./address"
import type { ShippingMethod } from "./shippingMethod"
import type { Fulfillment } from "./fulfillment"
import type { ClaimOrderMetadata } from "./claimOrderMetadata"

/**
 * Claim Orders represent a group of faulty or missing items. Each claim order consists of a subset of items associated with an original order, and can contain additional information about fulfillments and returns.
 */
export interface ClaimOrder {
  id?: string
  type?: ClaimOrderType
  payment_status?: ClaimOrderPaymentStatus
  fulfillment_status?: ClaimOrderFulfillmentStatus
  /** The items that have been claimed */
  claim_items?: ClaimItem[]
  /** Refers to the new items to be shipped when the claim order has the type `replace` */
  additional_items?: LineItem[]
  /** The id of the order that the claim comes from. */
  order_id?: string
  /** Holds information about the return if the claim is to be returned */
  return_order?: Return
  /** The id of the address that the new items should be shipped to */
  shipping_address_id?: string
  /** The address that the new items should be shipped to */
  shipping_address?: Address
  /** The shipping methods that the claim order will be shipped with. */
  shipping_methods?: ShippingMethod[]
  /** The fulfillments of the new items to be shipped */
  fulfillments?: Fulfillment[]
  /** The amount that will be refunded in conjunction with the claim */
  refund_amount?: number
  /** The date with timezone at which the Swap was canceled. */
  canceled_at?: string
  created_at?: string
  updated_at?: string
  deleted_at?: string
  /** Flag for describing whether or not notifications related to this should be send. */
  no_notification?: boolean
  metadata?: ClaimOrderMetadata
}