function ZoomButton({ toggle, scaled }) {
  return (
    <button className="zoom-button" onClick={() => toggle()}>
      {scaled ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.92" cy="5.92" r="5.42"></circle><path d="M13.5 13.5L9.75 9.75M6 3.5v5M3.5 6h5"></path></g></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.92" cy="5.92" r="5.42"></circle><path d="M13.5 13.5L9.75 9.75M3.5 6h5"></path></g></svg>
      )}
    </button>
  );
}

export default ZoomButton;
