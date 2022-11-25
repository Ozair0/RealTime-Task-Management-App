# RealTime Task Management App

## Intro
`Simpe task management app built in NextJs and GRPC-Node.`
<br>
`Used GRPC for API calls and Prisma ORM for database to store tasks.`

## Technalogies used
<code>1: Node(GRPC) : Backend</code>
<br>
<code>2: NextJS : Frontend</code>
<br>
<code>3: Envoy : Proxy for GRPC</code>

## 1: Run in Dev Mode
<code>1: Install grpc-tools globally using bellow command or else grpc_tools_node_protoc will not work</code>
<br>
<br>
&emsp;&ensp;<code>npm i -g grpc-tools</code>
<br>
<br>
<code>2: Install npm dependencies in these 3 directories</code>
<br>
<br>
&emsp;&ensp;<code>npm i</code>
&emsp;&ensp;<code>cd backend && npm i backend</code>
&emsp;&ensp;<code>cd frontend && npm i frontend</code>
<br>
<br>
<code>3: Generate protos (optional)</code>
<br>
<br>
<code>npm run gen-proto</code>
<br>
<br>
<code>4: Run both backend and frondend</code>
<br>
<br>
<code>npm run dev</code>
<br>
<br>
<code>5: Run docker command for backend GRPC in DEV mode</code>
<br>
<br>
<code>
docker run -ti -p 8080:8080 -p 9901:9901 -v /$(pwd)/envoy.yaml:/etc/envoy/envoy.yaml --rm envoyproxy/envoy-dev:04dd76b051c99f82abda081e1d04cac38667ef88
</code>
<br>

#### Note: For git-bash i have used<code>/$(pwd)</code>and for bash in linux or mac use<code>$(pwd)</code>and for win use<code>"%cd%"</code>.