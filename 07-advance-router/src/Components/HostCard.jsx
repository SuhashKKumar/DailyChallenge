const HostCard = (prop) => {
  return (
    <div className={`host-primary-container ${prop.dynamicStyle}`}>
    {prop.children}
      <p className="para">Details</p>
    </div>
  );
};

export default HostCard;
