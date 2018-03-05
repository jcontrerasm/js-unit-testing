### Tasks
test:
	yarn test

test-watch:
	yarn test:watch

test-report: test-view
	yarn test:report

test-view:
	xdg-open ./coverage/lcov-report/index.html