import "./Experiment.css";

export default function Experiment() {
  return (
    <div className="background-video w-full h-full">
      <video autoPlay loop muted>
          <source src="https://firebasestorage.googleapis.com/v0/b/andreas-web-cloud-5c228.appspot.com/o/Andreas%20Web%20Cloud%20%E2%80%93%20Storage%20%E2%80%93%20Firebase%20console%20-%20Google%20Chrome%202024-05-26%2003-28-49.mp4?alt=media&token=b5563dab-bab6-477e-9d2b-fa76263913cd" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="content">
        {/* Konten Anda di sini */}
        <h1>Welcome to My Website</h1>
        <p>This is some content placed on top of the background video.</p>
      </div>
    </div>
  )
}
