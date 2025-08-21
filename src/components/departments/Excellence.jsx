import React, { useState, useEffect } from 'react';

const cards = [
  {
    title: 'Drone Technologies',
    imageUrl: 'https://imgs.search.brave.com/FVgaOTp3izysJHmmg4hKcypN6Wvp-rJyy_eM5egem6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUx/NjI3NzA5NC9waG90/by95b3VuZy1mZW1h/bGUtdGVhY2hlci1n/aXZpbmctYS1kYXRh/LXNjaWVuY2UtcHJl/c2VudGF0aW9uLWlu/LWEtZGFyay1hdWRp/dG9yaXVtLXdpdGgt/cHJvamVjdGluZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Tmd5VzIzVk9hcFNM/eWxsSUp3Sm5vcnla/RXlNMUpNZnoxbWdU/S0JKb0NwWT0',
  },
  {
    title: 'REAM',
    imageUrl: 'https://imgs.search.brave.com/Sv1nDl9IuVEACie0cYLNatsV_c7vTv8zxhOtwKe7dbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/MjUxNzI5NS9waG90/by9jeWJlci1zZWN1/cml0eS1pdC1lbmdp/bmVlci13b3JraW5n/LW9uLXByb3RlY3Rp/bmctbmV0d29yay1h/Z2FpbnN0LWN5YmVy/YXR0YWNrLWZyb20t/aGFja2Vycy1vbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/aHRSMGIxS08yVUZT/X1IxRldpSk9zUGZJ/d2YzeEJ0S1hkN0ZY/YjRLUzBMcz0',
  },
  {
    title: 'AI',
    imageUrl: 'https://imgs.search.brave.com/znmo4eUzHewmfYleazN02uZp3CdBKl35HhanxUzexO4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/ODAxNjE1OC9waG90/by9idXNpbmVzc3Bl/cnNvbi1zaGFraW5n/LWhhbmQtd2l0aC1k/aWdpdGFsLXBhcnRu/ZXItb3Zlci1mdXR1/cmlzdGljLWJhY2tn/cm91bmQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW5KVTRZ/UnM4RTBubVhhSUJi/M1VYLWFhdW9lR0dV/MWlzbklKVGcxaFpG/UUE9',
  },
];

const CenterOfExcellence = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset) => {
    return (centerIndex + offset + cards.length) % cards.length;
  };

 return (
  <div className="relative h-[500px] overflow-hidden bg-white text-center flex flex-col items-center justify-start pt-5">
    <h2 className="text-3xl font-semibold mb-4">Center of Excellence</h2>

    <div className="relative w-full flex justify-center items-center">
      <div className="relative w-full max-w-5xl h-[300px]">
        {[-1, 0, 1].map((offset) => {
          const index = getIndex(offset);
          const card = cards[index];

          const offsetX = offset === 0 ? offset * 240 + 20 : offset * 240;
          const scale = offset === 0 ? 'scale-125' : 'scale-100';
          const blur = offset === 0 ? 'blur-none' : 'blur-sm';
          const zIndex = offset === 0 ? 'z-30' : offset === -1 ? 'z-20' : 'z-10';
          const opacity = offset === 0 ? 'opacity-100' : 'opacity-60';

          return (
            <div
              key={index}
              className={`absolute top-[70%] left-1/2 transition-all duration-1000 ease-in-out ${scale} ${blur} ${zIndex} ${opacity}`}
              style={{
                transform: `translate(-50%, -50%) translateX(${offsetX}px)`,
                width: '200px',
              }}
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="rounded-xl shadow-xl object-cover h-64 w-full"
              />
              <p className="mt-1 text-md font-semibold text-black text-center">
                {card.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
}

export default CenterOfExcellence;