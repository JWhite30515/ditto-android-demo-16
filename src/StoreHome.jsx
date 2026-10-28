export function StoreHome({ onSave }) {
  return (
    <main>
      <h1>Welcome back! Pick up where you left off.</h1>{/* edited */}
      <p>
        Your trial has ended. <strong>Upgrade</strong> your plan to keep editing.
      </p>
      <a href="/pricing">See 100% of our prices24</a>
      <p>Our store hours have changed for the holidays.</p>
      <p>Open daily</p>
      <button type="submit" onClick={onSave}>
        Save edits4567
      </button>
    </main>
  );
}
