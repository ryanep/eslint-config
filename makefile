.PHONY: clean build

clean:
	rm -rf ./*.tgz && \
	npm run clean

build:
	NODE_ENV=production yarn build && \
	npm run generate

release-dry-run:
	make clean && \
	npm run build && \
	npm pack

release:
	make clean && \
	make build && \
	npm publish --access public && \
	make clean