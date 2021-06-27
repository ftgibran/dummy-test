## Getting Started

First, install the dependencies

```bash
yarn
```

Then, start the application in dev mode

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run with Docker

First, bundle the application

```bash
yarn build
```

Second, build the images

```bash
docker build . -t dummy-test
```

Then, run the container

```bash
docker run -d -p 8080:80 dummy-test
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.
