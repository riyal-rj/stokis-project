export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Platform logo */}
      <img
        src="/logo.jpeg" // Replace this with your actual logo path inside /public
        alt="Platform Logo"
        style={{ width: '120px', marginBottom: '1rem' }}
      />

      {/* Project Title */}
      <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
        STOKIS – Stock Trends Outlook using Key Indicators and Sentiment
      </h1>

      {/* Subtitle */}
      <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
        You can view or download the project report below:
      </p>

      {/* Embedded PDF */}
      <iframe
        src="/CSE1_GROUP_NO_2 (1).pdf"
        width="100%"
        height="600px"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      />

      {/* Download Button */}
      <br />
      <a href="/CSE1_GROUP_NO_2 (1).pdf" download>
        <button style={{
          marginTop: '1rem',
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Download PDF
        </button>
      </a>
    </div>
  );
}
