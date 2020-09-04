web-up:
	docker run -it -p 8080:8080 falabella-web

web-ini:
	make web-install
	make web-up

web-reset:
	make web-down
	make web-up

web-down:
	docker rm -f falabella-web

web-install:
	docker build -t falabella-web .