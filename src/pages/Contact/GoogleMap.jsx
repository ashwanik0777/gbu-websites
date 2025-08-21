
const GoogleMap = () => {
  const mapSrc = " https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.693218345403!2d77.51628073856202!3d28.421570997104872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0fc10308cb1%3A0xaf97960629653e2c!2sAdministrative%20Block!5e0!3m2!1sen!2sin!4v1749722351609!5m2!1sen!2sin";
 
  return (
    <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title="Gautam Buddha University Location"
      ></iframe>
      
      {/* Overlay for better integration */}
      <div className="absolute inset-0 pointer-events-none border border-white/30 rounded-lg"></div>
    </div>
  );
};

export default GoogleMap;