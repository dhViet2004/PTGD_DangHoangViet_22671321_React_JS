import { useState } from "react";
function Calculator() {
    const currentYear = new Date().getFullYear();
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [results, setResult] = useState([]);
    console.log(principal);
    const calcInterest = () => {
        const p = parseFloat(principal);
        const r = parseFloat(interestRate) / 100;
        const target = parseFloat(targetAmount);

        if (isNaN(p) || isNaN(r) || isNaN(target) || p <= 0 || r <= 0 || target <= p) {
            alert('Vui lòng nhập số hợp lệ. Số tiền mục tiêu phải lớn hơn số tiền gốc');
            return;
        }

        let currentAmount = p;
        let year = 0;
        const resultArray = [];

        while (currentAmount < target) {
            year++;
            const interest = currentAmount * r;
            currentAmount += interest;

            resultArray.push({
                year: currentYear + year,
                initialAmount: parseFloat(currentAmount - interest).toFixed(0),
                interest: parseFloat(interest).toFixed(0),
                total: parseFloat(currentAmount).toFixed(0)
            });
        }

        setResult(resultArray);
        
        

    };
    console.log(results);
    return (
        <div id="Calculator">
            <div>
                <label>Số tiền ban đầu</label>
                <input
                    type="text"
                    value={principal}
                    onChange={(e) => { setPrincipal(e.target.value) }}
                    placeholder="Nhập số tiền"
                />
            </div>
            <div>
                <label>Lãi suất (%): </label>
                <input
                    type="text"
                    value={interestRate}
                    onChange={(e) => { setInterestRate(e.target.value) }}
                    placeholder="Nhập % lãi suất"
                />
            </div>
            <div>
                <label>Số tiền mục tiêu: </label>
                <input 
                    type="text" 
                    value={targetAmount}
                    onChange={(e)=>setTargetAmount(e.target.value)}
                    placeholder="Nhập số tiền mong muốn"
                />
            </div>
            <button onClick={calcInterest}>Tính toán</button>

            {results.length > 0 && (
                <table style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Năm</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Số tiền đầu năm</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Tiền lãi</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Tổng tiền cuối năm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result)=>(
                            <tr key={result.year}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{result.year}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{result.initialAmount}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{result.interest}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{result.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
        
    );
}

export default Calculator;