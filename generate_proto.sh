# for backend
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./backend --grpc_out=grpc_js:./backend ./protos/*.proto
grpc_tools_node_protoc --ts_out=grpc_js:./backend ./protos/*.proto

# for frontend
grpc_tools_node_protoc -I=. ./protos/*.proto --js_out=import_style=commonjs:./frontend --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./frontend