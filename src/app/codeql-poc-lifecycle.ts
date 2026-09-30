// Synthetic CodeQL lifecycle control; not imported or deployed.
export function renderLifecycleMessage(): void {
  const message = new URLSearchParams(window.location.search).get('message') ?? '';
  document.write(message);
}
