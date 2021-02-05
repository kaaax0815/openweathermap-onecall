/**
 * Base class for creating an HTTP related exception.
 *
 * ```typescript
 * throw new HttpException(500, 'Server Error')
 * ```
 *
 * @internal
 */
export class HttpException extends Error {
  /**
   * Create a new instance.
   *
   * @param code Http error code, ie 200, 400-500.
   * @param reason Error message.
   * @param data Extra data to add to the error.
   */
  constructor(readonly code: number, reason: string, readonly data?: any) {
    super(`${reason}${data ? `\n${data}` : ""}`)
  }
}

/**
 * Helper function for creating a 400 - Bad Request `HttpException`
 *
 * @internal
 * @param data Extra data to add to the error.
 */
export function badRequest(data?: any) {
  return new HttpException(400, "Bad Request", data)
}

/**
 * Helper function for creating a 404 - Not Found `HttpException`
 *
 * @internal
 * @param data Extra data to add to the error.
 */
export function notFound(data?: any) {
  return new HttpException(404, "Not Found", data)
}
