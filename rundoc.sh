docker run -ti -p 8080:8080 -p 9901:9901 -v /$(pwd)/envoy.yaml:/etc/envoy/envoy.yaml --rm envoyproxy/envoy-alpine:v1.21-latest