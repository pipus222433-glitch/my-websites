<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="プライバシー・セキュリティ教育ゲーム - パスワードの重要性を学ぼう">
    <title>Privacy Guardian Game - セキュリティ教育ゲーム</title>
    
    <!-- React -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- Babel for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
            overflow-x: hidden;
        }
        
        /* スクロールバーのスタイル */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #4b5563;
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <!-- ゲームスクリプト -->
    <script type="text/babel" src="game.js"></script>
</body>
</html>
// ページ最下部に以下を追加
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(PrivacyGuardianGame));
```

**「Commit new file」をクリック**

---

### 🎯 ステップ4: GitHub Pagesを有効化

1. **リポジトリページで「Settings」タブをクリック**

2. **左サイドバーの「Pages」をクリック**

3. **「Source」セクションで設定：**
   - **Branch**: `main` を選択
   - **Folder**: `/ (root)` を選択
   - **「Save」ボタンをクリック**

4. **数分待つ** - ページ上部に青いバーが表示され、その後緑色に変わります

5. **URLが表示されます：**
```
   ✅ Your site is live at https://[あなたのユーザー名].github.io/privacy-guardian-game/
