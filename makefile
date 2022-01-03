.PHONY: clean build

clean:
	yarn clean && \
	rm -rf ./lib

build:
	NODE_ENV=production yarn build && \
	yarn generate