# QA Engineer Assessment by Sophia Ann Simbahan
# Testing

Automation Testing (Playwright) - Part 1
Test Scenario

End-to-end checkout flow:

-Login to SauceDemo
-Add product to cart
-Proceed to checkout
-Complete purchase
-Validate success message

Test Execution Result:
✔ 1 test passed
✔ Execution time: 7.2 seconds
✔ Cross-browser testing executed:
Chromium ✔
Firefox ✔
WebKit ✔

Test Report Evidence

Generated Playwright HTML report:

npx playwright show-report

Result:

Successful checkout flow confirmed
All assertions passed
No test failures detected

API Testing - Part 2

Endpoints Tested:
-GET /users
-GET /users/1
-POST /posts
-PUT /posts/1

Coverage:
-Request and response validation
-Positive test cases
-Negative/edge cases
-Response analysis
