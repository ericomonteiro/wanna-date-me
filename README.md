
# To nerds in love
![application running - wanna-date-me](/static/demo.png)


Run from docker image.

```sh
docker run -d -p 80:80 ericoh/wanna-date-me
```

To build a local docker image

```sh
docker build -t image-name:version .

Example: docker build -t ericoh/wanna-date-me:latest .
```

To push the image
```sh
docker push user-docker-hub/image-name
```