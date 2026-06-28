# welcome-junior

Webpage for recruiting rebels

## Technical Details

- Vue.js 3 (Composition API)
- Vite
- Tailwind CSS v4
- TypeScript
- pnpm

## Setup

バージョン管理ツールに mise を使用しています。Node.js および pnpm のバージョンは `mise.toml` で管理されています。

### 1. mise のインストール（未導入の場合）

macOS (Homebrew) の場合:

```bash
brew install mise
```

※ その他の環境は [mise公式ドキュメント](https://mise.jdx.dev/getting-started.html#installing-mise-cli) を参照してください。また、シェルへのアクティベート設定（`echo 'eval "$(mise activate zsh)"' >> ~/.zshrc` など）を行っておくと、ディレクトリ移動時に自動でバージョンが切り替わるため便利です。

### 2. ツールのインストールと依存関係の解決

```bash
# Node.js と pnpm をインストール
mise install

# 依存パッケージをインストール
pnpm install

# 初回のみ実行してください
pnpm prepare
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
