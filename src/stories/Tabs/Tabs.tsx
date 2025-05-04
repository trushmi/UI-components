const tabConfig = {
  "tab-1": { label: "Tab 1", content: <div>My tab 1 content</div> },
  "tab-2": {
    label: "Tab 2",
    content: (
      <div>
        My tab 2 content.
        <img
          src="https://picsum.photos/id/15/1440/900"
          style={{ width: "100px", height: "100px", display: "block" }}
        />
      </div>
    ),
  },
  "tab-3": {
    label: "Tab 3",
    content: <div>My tab 3 content.</div>,
  },
};

export default function App() {
  return (
    <div className="main-container">
      <Tabs tabConfig={tabConfig} />
    </div>
  );
}
