import { useState } from 'react'
import   InputBox from './components/Inputbox'

import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo)

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
   <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/global-digital-money-transfer-techno-concept-background-design_1017-52486.jpg?ga=GA1.1.774243761.1747851733&semt=ais_hybrid&w=740')`,
                // height: "1vh"    
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount) =>{
                                    setAmount(amount)
                                }}
                                currencyOptions = {option}
                                selectCurrency = {from}
                                onSelectedCurrenyChange = {(currency) =>{
                                    // console.log(currency)
                                     setFrom(currency)
                                }}
                                // selectCurrency={from}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                // label="From"
                                amount={convertedAmount}
                                currencyOptions = {option}
                                selectCurrency = {to}
                                onSelectedCurrenyChange = {(currency) => setTo(currency)}
                                amountDisabled = {true}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App


