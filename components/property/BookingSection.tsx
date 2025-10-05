import React, { useMemo, useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = Math.ceil((outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full">
      <h3 className="text-xl font-semibold">${price.toLocaleString()} <span className="text-sm text-gray-600">/ night</span></h3>

      <div className="mt-4 grid grid-cols-1 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
      </div>

      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Price</span>
          <span>${price.toLocaleString()} x {nights} nights</span>
        </div>
        <div className="flex justify-between font-semibold text-lg mt-2">
          <span>Total</span>
          <span>${total.toLocaleString()}</span>
        </div>
      </div>

      <button
        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
        disabled={nights === 0}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
