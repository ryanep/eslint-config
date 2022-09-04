.PHONY: clean build

clean:
	rm -rf ./*.tgz && \
	npm run clean

build:
	NODE_ENV=production yarn build && \
	npm run generate

release:
	make clean && \
	make build && \
	npm publish --access public && \
	make clean