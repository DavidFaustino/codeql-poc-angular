// Synthetic CodeQL control only. Do not deploy this branch.
export function renderPocMessage(): void {
  const message = new URLSearchParams(window.location.search).get('message') ?? '';
  document.write(message);
}
