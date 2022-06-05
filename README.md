# Next.js

Vue.jsと比べて自分で機能の拡張と追加が必要なため、汎用性の高いテンプレートを作成する

## 導入ツール



| 対象                 | ツール・ライブラリ     |
| -------------------- | ---------------------- |
| 静的構文解析         | TypeScript             |
| Appフレームワーク    | Next.js                |
| リンター             | ESLint                 |
| フォーマッター       | Prettier               |
| モックサーバ         | Restify                |
|                      | Mock Service Worker    |
| テストフレームワーク | Jest                   |
|                      | React Testing Library  |
| タスクランナー       | husky                  |
|                      | lint-staged            |
| UIライブラリ         | MUI（旧：Material UI） |
|                      | Tailwind CSS + daisyUI |
| UIカタログ           | Storybook              |
|                      | scaffdog               |
| E2Eテスト            | Cypress                |
|                      | Playwright             |



## 作業環境

| 対象 | version               |
| ---- | --------------------- |
| OS   | macOS Monterey 12.3.1 |
| Node | 16.15.1 (16.x LTS)    |
| yarn | 1.22.17               |
| npx  | 8.11.0                |



## 新規アプリ作成

1. CLIで作成

   ```zsh
   % yarn create next-app next-ts-template --ts
   ```

2. パッケージ構成（セットアップ直後）

   ```json
   {
     "name": "next-ts-template",
     "version": "0.1.0",
     "private": true,
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint"
     },
     "dependencies": {
       "next": "12.1.6",
       "react": "18.1.0",
       "react-dom": "18.1.0"
     },
     "devDependencies": {
       "@types/node": "17.0.39",
       "@types/react": "18.0.10",
       "@types/react-dom": "18.0.5",
       "eslint": "8.17.0",
       "eslint-config-next": "12.1.6",
       "typescript": "4.7.3"
     }
   }
   ```

3. ディレクトリ構成（セットアップ直後）

   ```zsh
   .
   ├── README.md
   ├── next-env.d.ts
   ├── next.config.js
   ├── package.json
   ├── pages
   │   ├── _app.tsx
   │   └── index.tsx
   ├── public
   │   ├── favicon.ico
   │   └── vercel.svg
   ├── styles
   │   ├── Home.module.css
   │   └── globals.css
   ├── tsconfig.json
   └── yarn.lock
   ```



うーーん、何も入っていない。。

ココから頑張ってカスタマイズしていきます。。



## MEMO

- `ts-node`
- `tsconfig-paths`



## バージョン構成

- React18は周辺ツールの対応が追いついてなさそう。。
  - [React v18サポート関連記事](https://zenn.dev/arayaryoma/scraps/3845eb077129b6)

- React17.xにダウングレード
  - [公式](https://reactjs.org/blog/2016/11/16/react-v15.4.0.html)によるとreact/react-domはバージョンを揃える必要はなさそう
  - 今回は一旦揃える（`v17.0.2`）



## ディレクトリ構成

- `src`ディレクトリにまとめる
  - [公式](https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/src-directory)によると`src/pages`に配置してもよさそう。。

- コンポーネントはAtomic Designに則る

  ```zsh
  .
  ├── README.md
  ├── next-env.d.ts
  ├── next.config.js
  ├── package.json
  ├── public
  ├── src
  │   ├── components
  │   │   ├── atoms
  │   │   ├── molecures
  │   │   ├── organisms
  │   │   ├── pages
  │   │   └── templates
  │   └── pages
  │       ├── _app.tsx
  │       └── index.tsx
  ├── styles
  ├── tsconfig.json
  └── yarn.lock
  ```

  

## パス構成

- 絶対パス参照するために`tsconfig.json`に`paths`を設定する

  ```json
  {
    "compilerOptions": {
    	// 追加 
      "baseUrl": ".",
      "paths": {
        "~/*": ["./*"],
        "@/*": ["src/*"]
      }
    },
  }
  ```

  

## eslint/prettier

### eslint

- CLIで初期設定

  ```zsh
  $ yarn eslint --init
  ✔ How would you like to use ESLint? · problems
  ✔ What type of modules does your project use? · esm
  ✔ Which framework does your project use? · react
  ✔ Does your project use TypeScript? · Yes
  ✔ Where does your code run? · browser
  ✔ What format do you want your config file to be in? · JavaScript
  ✔ Would you like to install them now with npm? · No
  ```

- 手動インストール

  ```zsh
  % yarn add --dev eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
  ```

### prettier

ESLintのルールに追加する方針で設定する

- インストール

  ```zsh
  % yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier
  ```



## husky/lint-staged

コミット/プッシュ時にリンター/フォーマッター/型チェックを走らせる

- インストール

  ```zsh
  % yarn add --dev husky lint-staged
  ```

- `package.json`に追加

  ```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged --allow-empty",
      "pre-push": "yarn run type-check"
    }
  },
  "lint-staged": {
    "*.@(ts|tsx)": [
      "yarn lintfix"
    ]
  },
  ```

  

## jest/react-testing-libarary

- Jestは安定版をチョイス（`v27.5.0`）

  ```zsh
  % yarn add --dev jest @types/jest
  ```

- React Testing Library@13.xは>=React17なのでダウングレード（`v12.1.2`）
- `userEvent`は`v13.x` or `v14.x`

  ```zsh
  % yarn add --dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
  ```

  - `@testing-library/react` | React コンポーネントをテストするためのユーティリティ
  - `@testing-library/jest-dom` | DOM に関するカスタムマッチャーを提供する
  - `@testing-library/user-event` | 組み込みの`fireEvent`より高度なブラウザ操作のシミュレーションを提供する

- [公式](https://nextjs.org/blog/next-12-1#zero-configuration-jest-plugin)によるとNext12.x以降はJestの構成が組み込まれているのでそれに則る

  ```js
  const nextJest = require('next/jest');
  
  const createJestConfig = nextJest({ dir: './src' });
  const customConfig = {
    testEnvironment: "jest-environment-jsdom",
    testPathIgnorePatterns: [
      '<rootDir>/.next',
      '<rootDir>/node_modules',
      "<rootDir>/e2e/"
    ],
    testMatch: ["<rootDir>/**/*.spec.ts"],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: {
      "~/(.*)$": "<rootDir>/$1",
      "@/(.*)$": "<rootDir>/src/$1"
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    collectCoverageFrom: [
      "<rootDir>/services/**/*.ts",
      "!<rootDir>/services/{api,openapi}/**/*.ts"
    ],
    clearMocks: true,
    restoreMocks: true,  
  }
  
  module.exports = createJestConfig(customConfig)
  ```

  