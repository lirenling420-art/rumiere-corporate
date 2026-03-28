# 株式会社ルミエール 公式サイト

Next.jsで構築された株式会社ルミエールの公式コーポレートサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **レスポンシブ対応**: モバイル・タブレット・デスクトップ対応

## プロジェクト構成

```
rumiere-corporate/
├── app/
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # トップページ
│   ├── globals.css             # グローバルスタイル
│   ├── company/
│   │   └── page.tsx            # 会社概要ページ
│   ├── business/
│   │   ├── page.tsx            # 事業一覧ページ
│   │   ├── beauty/
│   │   │   └── page.tsx        # 美容・サロン関連
│   │   ├── lifestyle/
│   │   │   └── page.tsx        # 小売・ライフスタイル
│   │   ├── transport/
│   │   │   └── page.tsx        # 交通・物流関連
│   │   ├── hr/
│   │   │   └── page.tsx        # 人材・業務支援
│   │   ├── auto/
│   │   │   └── page.tsx        # 自動車関連
│   │   ├── construction/
│   │   │   └── page.tsx        # 環境・建設関連
│   │   └── culture/
│   │       └── page.tsx        # 文化・教育関連
│   └── contact/
│       └── page.tsx            # お問い合わせページ
├── components/
│   ├── Header.tsx              # ヘッダーコンポーネント
│   └── Footer.tsx              # フッターコンポーネント
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── .eslintrc.json
```

## セットアップ手順

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスしてください。

### 3. ビルド

```bash
npm run build
npm start
```

## ページ一覧

| ページ | パス | 説明 |
|--------|------|------|
| トップページ | `/` | 会社紹介と主要事業の紹介 |
| 会社概要 | `/company` | 会社情報と企業メッセージ |
| 事業一覧 | `/business` | 全事業カテゴリの一覧 |
| 美容・サロン | `/business/beauty` | ネイルサロン、エステ、リラクゼーション |
| 小売・ライフスタイル | `/business/lifestyle` | 飲食店、衣料品、食料品販売 |
| 交通・物流 | `/business/transport` | 旅行業、乗用旅客運送、貨物運送 |
| 人材・業務支援 | `/business/hr` | 派遣、職業紹介、清掃業務 |
| 自動車関連 | `/business/auto` | 中古車買取・販売、整備・修理 |
| 環境・建設 | `/business/construction` | 廃棄物処理、土木・建築工事 |
| 文化・教育 | `/business/culture` | 絵画教室、彫刻教室 |
| お問い合わせ | `/contact` | 問い合わせフォーム |

## デザイン

### カラーパレット

- **ベージュ**: `#F5F1ED` - 背景色
- **グレージュ**: `#D4C5B9` - 境界線・アクセント
- **チャコール**: `#3A3A3A` - テキスト・ダークセクション
- **ゴールド**: `#C9A961` - ボタン・ハイライト

### 特徴

- 高級感と信頼感を兼ね備えたデザイン
- 美容系事業を含むため、上品で柔らかい印象
- セクションごとに広い余白
- カード・ブロックを使った整理された見せ方
- レスポンシブ対応で全デバイスに対応

## 重要な定数

### Hot Pepper Beauty URL

`/app/business/beauty/page.tsx` で定義されています：

```typescript
const HOT_PEPPER_BEAUTY_URL = 'https://beauty.hotpepper.jp'
```

実際のURLに変更する際は、このファイルを編集してください。

## カスタマイズ

### 会社情報の更新

- `app/company/page.tsx` - 会社概要ページ
- `components/Footer.tsx` - フッター情報

### 連絡先情報の更新

- `app/contact/page.tsx` - メール、電話、住所

### カラーの変更

`tailwind.config.ts` の `theme.extend.colors` セクションで色を変更できます。

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

このプロジェクトは株式会社ルミエールの公式サイトです。

## サポート

ご質問やご相談は、サイトのお問い合わせフォームからお気軽にお問い合わせください。
