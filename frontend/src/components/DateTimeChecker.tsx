import React, { useState } from 'react'
import { formatDateTime } from '../utils/dateTime'

interface DateTimeCheckerProps {
  currentTime: Date
}

export const DateTimeChecker: React.FC<DateTimeCheckerProps> = ({ currentTime }) => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleCheck = async () => {
    if (!input) {
      setResult('Vui lòng nhập ngày giờ!')
      return
    }
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch('http://localhost:3001/api/check-datetime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ datetime: input })
      })
      const data = await res.json()
      if (data.valid) {
        setResult('Ngày giờ hợp lệ!')
      } else {
        setResult('Ngày giờ không hợp lệ!')
      }
    } catch {
      setResult('Lỗi kết nối tới server!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-16 bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-10 text-center">
      <h1 className="text-4xl font-semibold text-gray-800 mb-2 tracking-wide font-system">
        🕒 Date Time Checker
      </h1>
      <div className="text-xl text-gray-600 mb-6 font-mono">
        {formatDateTime(currentTime)}
      </div>
      <div className="flex gap-2 justify-center mb-5">
        <input
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-base transition-all duration-200 outline-none focus:border-blue-500 focus:border-2 disabled:opacity-50"
          type="text"
          placeholder="Nhập ngày giờ (VD: 2024-06-01 14:30)"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <button 
          className="px-5 py-3 rounded-xl border-none bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-base cursor-pointer shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-green-600 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleCheck} 
          disabled={loading}
        >
          {loading ? 'Đang kiểm tra...' : 'Kiểm tra'}
        </button>
      </div>
      {result && (
        <div className="mt-4 text-lg text-blue-500 font-medium min-h-[1.5rem]">
          {result}
        </div>
      )}
    </div>
  )
}
