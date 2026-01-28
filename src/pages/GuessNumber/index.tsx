import { useState } from "react";

export default function GuessNumberPage() {
 
  const [targetNumber] = useState<number>(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState<string>("");
  const [attemptsLeft, setAttemptsLeft] = useState<number>(10);
  const [message, setMessage] = useState<string>("");
  const [history, setHistory] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

 
  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();

    if (isGameOver) return;

    const value = Number(guess);
    if (!value || value < 1 || value > 100) {
      setMessage("⚠️ Vui lòng nhập số từ 1 đến 100");
      return;
    }

    setAttemptsLeft(prev => prev - 1);
    setHistory(prev => [...prev, value]);

    if (value === targetNumber) {
      setMessage("🎉 Chúc mừng! Bạn đã đoán đúng!");
      setIsGameOver(true);
      return;
    }

    if (attemptsLeft - 1 === 0) {
      setMessage(`❌ Bạn đã hết lượt! Số đúng là ${targetNumber}`);
      setIsGameOver(true);
      return;
    }

    setMessage(
      value < targetNumber
        ? "📉 Bạn đoán quá thấp!"
        : "📈 Bạn đoán quá cao!"
    );

    setGuess("");
  };

  
  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>🎯 Guess The Number</h2>
      <p>Hệ thống đã chọn một số từ <b>1 đến 100</b></p>
      <p>Lượt còn lại: <b>{attemptsLeft}</b></p>

      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          disabled={isGameOver}
          min={1}
          max={100}
          placeholder="Nhập số bạn đoán"
        />
        <button disabled={isGameOver}>Đoán</button>
      </form>

      {message && <p>{message}</p>}

      {history.length > 0 && (
        <p>Lịch sử đoán: {history.join(", ")}</p>
      )}
    </div>
  );
}
