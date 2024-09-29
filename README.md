# welcome-junior
webpage for recruiting rebels

## technical details
- HTML
- SCSS
- ES6
- jQuery
- Bootstrap
- GitHub Pages

## deploy
```
$ npm run deploy
```

## local server
```
$ npm run server
```
以下のURLにアクセス\
http://127.0.0.1:8080/dist/

## caution
githubにアップロードする前に動画サイズを小さくするべき。\
ffmpegなどを使うことを推奨。 以下参考例。
```example
ffmpeg -i input.mp4 -vf "format=yuv420p" output.mp4
```

