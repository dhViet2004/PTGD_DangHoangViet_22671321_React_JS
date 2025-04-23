import React, { useState, useEffect } from 'react';
import { FaCheck, FaTrash, FaExclamationCircle } from 'react-icons/fa';

const Notification = ({ type, message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Tự động ẩn thông báo sau 3 giây
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onClose(), 300); // Đợi hiệu ứng kết thúc rồi gọi onClose
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  let icon;
  let bgColor;
  
  switch (type) {
    case 'success':
      icon = <FaCheck />;
      bgColor = 'bg-green-500';
      break;
    case 'error':
      icon = <FaExclamationCircle />;
      bgColor = 'bg-red-500';
      break;
    case 'delete':
      icon = <FaTrash />;
      bgColor = 'bg-amber-500';
      break;
    default:
      icon = <FaCheck />;
      bgColor = 'bg-blue-500';
  }

  return (
    <div 
      className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-all duration-300 ${
        show ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{message}</span>
    </div>
  );
};

export default Notification;