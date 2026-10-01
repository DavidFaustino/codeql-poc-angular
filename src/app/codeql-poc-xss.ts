// Synthetic CodeQL retest control only. Do not deploy this branch.
export function renderPocMessage(): void {
  const message = new URLSearchParams(window.location.search).get('message') ?? '';
  // Temporary High XSS control for the native Ruleset test; do not merge.
  document.write(message);
}
