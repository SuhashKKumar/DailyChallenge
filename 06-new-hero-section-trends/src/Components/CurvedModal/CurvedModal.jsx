import "./CurvedModal.css";
const CurvedModal = ({ children }) => {
  return (
    <div className="card">
    {children}
    <div className="invisible"></div>
    </div>
  );
};

export default CurvedModal;
