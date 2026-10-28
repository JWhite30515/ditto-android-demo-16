export function StoreHome({ onSave }) {
  return (
    <main>
      <h1>Welcome back! Pick up where you left off.</h1>
      <p>
        Your trial has ended. <strong>Upgrade</strong> your plan to keep editing.
      </p>
      <a href="/pricing">See our full price list</a>
      <p>Our shop hours have changed for the holidays.</p>
      <p>Open weekdays only</p>
      <button type="submit" onClick={onSave}>
        Save changes
      </button>
    </main>
  );
}
