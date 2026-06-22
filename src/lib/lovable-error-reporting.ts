/**
 * Error reporting utility — lightweight no-op replacement.
 * Previously delegated to Lovable's captureException; now simply
 * logs to the console so error boundaries still work correctly.
 */
export function reportLovableError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  console.error("[ErrorBoundary]", error, context);
}
