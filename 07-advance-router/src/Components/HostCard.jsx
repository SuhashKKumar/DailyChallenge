const HostCard = (prop) => {
  const {children, dynamicStyle,para}=prop
  return (
    <div className={`host-primary-container ${dynamicStyle}`}>
    {children}
      <p className="para">{para}</p>
    </div>
  );
};

export default HostCard;
