// Synthetic CodeQL retest control only. Do not deploy this branch.
export function renderPocMessage(): void {
  const message = new URLSearchParams(window.location.search).get('message') ?? '';
  // Synthetic XSS control for the draft PR only; never merge or deploy.
  document.write(message);
}
