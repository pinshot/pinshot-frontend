# Pinshot-frontend

Pinshot 서비스 프론트엔드 모노레포입니다.

## 구성

### 어플리케이션

### 패키지

### 유틸리티

## 시작하기

### [https://pinshot.local](https://pinshot.local)에서 실행 결과 확인하기

> 빌드와 실행을 위해 Docker가 필요해요. 이 가이드는 v27.3.1을 기준으로 작성되었어요. Docker가 제대로 설치되었는지 확인하려면 터미널에서 `docker --version` 명령어를 실행해 보세요.

#### 로컬 도메인 추가하기

먼저 로컬 도메인을 설정해주세요. Linux나 macOS를 사용하고있다면 `/etc/hosts` 파일을 윈도우를 사용하고있다면 `C:\Windows\System32\drivers\etc\hosts` 파일을 열어 아래와 같이 추가해주세요.

```plaintext
127.0.0.1 pinshot.local
127.0.0.1 inbox.pinshot.local
127.0.0.1 auth.pinshot.local
```

> 만약 운영 체제의 DNS 캐시가 잘못된 정보를 유지하고있다면 다음 명령어를 실행해 캐시를 초기화 할 수 있어요.
>
> ```sh
> # macOS
> sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
> # Windows
> ipconfig /flushdns
> ```

#### 사용자 정의 인증서 설정

HTTPS를 사용하기 때문에 사용자 정의 인증서가 필요해요. 비밀 키 파일과 서버 인증서 파일을 각각 프로젝트의 `./cert/key.pem`, `./cert/cert.pem` 파일에 복사해주세요.

##### mkcert를 사용해 사용자 정의 인증서 생성하기

먼저 사용하고있는 운영체제에 맞는 방법으로 [mkcert](https://github.com/FiloSottile/mkcert)를 설치해주세요.

아래와 같이 실행하여 mkcert로 루트 인증서를 생성하고 설치해주세요.

```bash
# 공통
mkcert -install
# macOS:
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "$(mkcert -CAROOT)/rootCA.pem"

# Windows: 아래 명령어를 실행 해 확인된 경로에 있는 rootCA.pem 파일 더블클릭해서 설치
mkcert -CAROOT
```

이제 아래와 같이 사용자 설정 인증서를 로컬에 생성해주세요.

```sh
mkdir ./cert
mv ./cert
mkcert -key-file key.pem -cert-file cert.pem pinshot.local "*.pinshot.local"
```

#### 도커 서비스 시작

터미널에서 다음 명령어를 실행하여 Docker Compose를 통해 애플리케이션을 실행해주세요.:

```sh
docker compose up -d
```

모든 컨테이너가 정상적으로 실행되면 브라우저에서 아래 URL을 열어 확인하세요:

[https://pinshot.local](https://pinshot.local)

### 개발모드로 특정 어플리케이션 실행하기

> 빌드와 실행을 위해 Node.js(v22.11.00)와 Corepack이 필요해요. `corepack --version` 명령어를 실행하면 Corepack이 활성화 되어있는지 확인할 수 있어요.
>
> ```sh
> # 만약 활성화 되어있지 않다면, 이렇게 활성화 할 수 있어요.
> corepack enable
> ```

PNPM을 사용해 의존성을 설치해주세요.

```sh
pnpm install --frozen-lockfile
```

터미널에서 이렇게 실행하면 특정 패키지가 개발모드로 실행돼요:

```sh
pnpm run dev --filter={APP_PKG_NAME}
```
