.PHONY: clean build

clean:
	rm -rf ./*.tgz && \
	rm -rf ./lib

build:
	NODE_ENV=production yarn build

scan:
	npm run scan

release-dry-run:
	make clean && \
	npm run build && \
	npm pack

release:
	make clean && \
	make build && \
	npm run release && \
	make clean