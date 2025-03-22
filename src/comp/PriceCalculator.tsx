import React, { useEffect, useState } from 'react';

const PriceCalculator: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [weight, setWeight] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setCount(value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setWeight(value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setPrice(value);
  };

  function calculatePrice() {
    if (weight <= 0 || price <= 0) {
      setResult(0);
      return;
    }

    const pricePerGram = price / (weight * count);
    const priceFor500g = pricePerGram * 500;
    console.log(`price is `, price, `weight is `, weight);
    setResult(parseFloat(priceFor500g.toFixed(2))); // 保留两位小数
  }

  useEffect(() => {
    calculatePrice();
  }, [weight, price, count]);

  const handleReset = () => {
    setWeight(0);
    setPrice(0);
    setCount(1);
    setResult(0);
  };

  return (
    <div className="max-w-md mx-auto my-5 p-5 border border-gray-200 rounded-lg bg-white shadow-md sm:my-2.5 sm:px-4 sm:py-3.75 flex flex-col items-center">
      <h1 className="mb-5 text-center">500g商品价格计算器</h1>
      <div className="flex flex-col w-full mb-4">
        <label className="mb-1 font-bold">商品价格(元):</label>
        <input
          type="number"
          placeholder="请输入商品价格"
          value={price === 0 ? '' : price}
          onChange={handlePriceChange}
          className="p-2.5 border border-gray-300 rounded-md text-base"
        />
      </div>
      <div className="flex flex-col w-full mb-4">
        <label className="mb-1 font-bold">商品重量(克):</label>
        <input
          type="number"
          placeholder="请输入商品重量"
          value={weight === 0 ? '' : weight}
          onChange={handleWeightChange}
          className="p-2.5 border border-gray-300 rounded-md text-base"
        />
      </div>
      <div className="flex flex-col w-full mb-4">
        <label className="mb-1 font-bold">商品数量:</label>
        <input
          type="number"
          placeholder="请输入商品数量"
          value={count}
          onChange={handleCountChange}
          className="p-2.5 border border-gray-300 rounded-md text-base"
        />
      </div>
      {result !== 0 && (
        <p className="mt-4 text-lg font-bold text-center">
          500克价格: {result} 元
        </p>
      )}
      <button
        className="px-5 py-3 mt-2.5 text-base font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
        onClick={handleReset}
      >
        重置
      </button>
    </div>
  );
};

export default PriceCalculator;