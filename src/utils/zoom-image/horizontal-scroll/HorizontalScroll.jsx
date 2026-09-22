import { useRef, useState } from "react";


const HorizontalScroll = ({children ,dir = 'rtl',gap = null}) => {
  const containerRef = useRef(null); // برای نگهداری مرجع والد
  const [isDragging, setIsDragging] = useState(false); // وضعیت درگ
  const [startX, setStartX] = useState(0); // موقعیت شروع درگ
  const [scrollLeft, setScrollLeft] = useState(0); // موقعیت اسکرول

  // برای شروع کشیدن موس
  const startDrag = (e) => {
    setIsDragging(true);
    const clientX =
      e.type === "mousedown"
        ? e.clientX
        : e.touches[0].clientX;
    setStartX(clientX);
    setScrollLeft(containerRef.current?.scrollLeft || 0); // ذخیره اسکرول اولیه
  };

  // در زمان کشیدن موس (move)
  const drag = (e) => {
    if (!isDragging) return;

    const clientX =
      e.type === "mousemove"
        ? e.clientX
        : e.touches[0].clientX;
    const distance = clientX - startX;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  // برای پایان کشیدن موس
  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="overflow-x-scroll no-scrollbar  select-none py-8 flex justify-between" // اضافه کردن overflow-x-auto برای اسکرول مخفی
      onMouseDown={startDrag}
      onMouseMove={drag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag} // اگر موس از محدوده خارج شود
      onTouchStart={startDrag} // پشتیبانی از تاچ موبایل
      onTouchMove={drag}
      onTouchEnd={stopDrag}
      style={{ direction : dir,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {children ?  children?.map((child,index) => (
            <div style={gap ? { margin : `0 ${gap}`} : {margin : '0 .5rem'}} key={index}>{child}</div>
        )) : ""}
    </div>
  );
};

export default HorizontalScroll;
