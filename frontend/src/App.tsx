import React, { useState } from 'react'

interface CheckResponse {
  valid: boolean
  formatted?: string | null
  timezone?: string
  offset?: string
  message?: string
}

function App() {
  const [now, setNow] = useState(() => new Date())
  const [input, setInput] = useState('')
  const [result, setResult] = useState<CheckResponse | null>(null)
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCheck = async () => {
    if (!input) {
      setResult({ valid: false, message: 'Vui lòng nhập ngày giờ!' })
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
      const data: CheckResponse = await res.json()
      setResult(data)
    } catch (err) {
      setResult({ valid: false, message: 'Lỗi kết nối tới server!' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <span className="text-4xl">🕒</span> Date Time Checker
        </h1>

        {/* Current time */}
        <div className="text-center mb-8">
          <div className="text-lg text-gray-300 font-mono">
            {now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
          </div>
          <div className="text-sm text-gray-400">
            Múi giờ: UTC+7 (Việt Nam)
          </div>
        </div>

        {/* Input form */}
        <div className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Nhập ngày giờ (VD: 2024-06-01 14:30)"
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            onClick={handleCheck}
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Đang kiểm tra...</span>
              </>
            ) : 'Kiểm tra'}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className={`mt-6 p-4 rounded-xl ${result.valid
            ? 'bg-green-500/20 border border-green-500/30 text-green-400'
            : 'bg-red-500/20 border border-red-500/30 text-red-400'
            }`}>
            <div className="font-medium">
              {result.valid ? 'Ngày giờ hợp lệ!' : (result.message || 'Ngày giờ không hợp lệ!')}
            </div>
            {result.valid && result.formatted && (
              <div className="text-sm mt-1 text-gray-300">
                Định dạng: {result.formatted}
                <br />
                Múi giờ: {result.timezone} ({result.offset})
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
