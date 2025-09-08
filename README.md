# welcome-junior

Webpage for recruiting rebels

## Technical Details

- Vue.js 3 (Composition API)
- Vite
- Tailwind CSS v4
- TypeScript
- pnpm

## Setup

Node.js v22 を推奨（`.nvmrc` あり）

```bash
nvm use
```

pnpm をグローバルにインストール（pnpmがない場合）:

```bash
npm install -g pnpm
```

依存をインストール:

```bash
pnpm install
```

## Development (local server)

```
$ pnpm dev
```

以下のURLにアクセス\
http://127.0.0.1:3000/

## Build

```
$ pnpm build
```

## caution

- githubにアップロードする前に動画サイズを小さくすること。
  - ffmpegなどを使うことを推奨。 以下参考例。

  ```
  $ ffmpeg -i input.mp4 -vf "format=yuv420p" output.mp4
  ```

- 過去の動画像は`past_images/`に移動する
  - ただしクレストや研究室のホームページに動画を引用しているので、`past_images/`に移動する際は注意すること。
  - http://crest.ailab.ics.keio.ac.jp/context/
  - https://www.ailab.ics.keio.ac.jp/research
