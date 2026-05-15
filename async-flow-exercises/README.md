# Async Flow Exercises (Sync → Macrotask → Microtask → Async/Await)

## How to run
Use Node.js.

```bash
node step1-sync-basic.js
node step2-macrotask-settimeout.js
node step3-microtask-promise.js
node step4-combo-promise-settimeout.js
node step5-async-await-flow.js
node step6-advanced-predict-output.js
```

## What to observe
Each step demonstrates ordering rules in JavaScript:
- **Synchronous execution** runs in order.
- **Macrotasks** (like `setTimeout`) run after the current call stack.
- **Microtasks** (like Promises) run before the next macrotask.
- **Async/Await** wraps Promises and resumes after awaited microtasks complete.

Open each file and compare the printed order with your expectations.
