import "../styles/HostScoreCard.css";
const HostScoreCard = () => {
  return (
    <div className="host-score-card">
      <h2 className="score">Review score</h2>
      <h2 className="rating">
        5.0<span className="rating-span">/5</span>
      </h2>
    </div>
  );
};

export default HostScoreCard;
