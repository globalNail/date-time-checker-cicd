const http = require('http');

// Simple test for the datetime API endpoint
async function testDateTimeAPI() {
  const testCases = [
    { input: '2024-01-01 12:00:00', expected: true },
    { input: '2024-13-01 12:00:00', expected: false },
    { input: 'invalid-date', expected: false },
    { input: '2024-02-29 10:30:00', expected: true } // Valid leap year date
  ];

  console.log('🧪 Running API tests...\n');
  
  let passed = 0;
  let failed = 0;

  for (const testCase of testCases) {
    try {
      const result = await makeRequest(testCase.input);
      const success = result.valid === testCase.expected;
      
      if (success) {
        console.log(`✅ PASS: "${testCase.input}" -> ${result.valid}`);
        passed++;
      } else {
        console.log(`❌ FAIL: "${testCase.input}" -> expected ${testCase.expected}, got ${result.valid}`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ ERROR: "${testCase.input}" -> ${error.message}`);
      failed++;
    }
  }

  console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    process.exit(1);
  } else {
    console.log('🎉 All tests passed!');
    process.exit(0);
  }
}

function makeRequest(datetime) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ datetime });
    
    const options = {
      hostname: 'localhost',
      port: 3001,
      path: '/api/check-datetime',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      
      res.on('data', (chunk) => {
        body += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve(result);
        } catch (error) {
          reject(new Error('Invalid JSON response'));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

// Wait for server to start, then run tests
setTimeout(() => {
  testDateTimeAPI();
}, 2000);
