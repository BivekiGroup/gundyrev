import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    
    // Определяем какой файл показать
    let fileName = '';
    switch (slug) {
      case 'full':
        fileName = 'SECURE-T_Documentation.md';
        break;
      case 'quickstart':
        fileName = 'SECURE-T_Quick_Start.md';
        break;
      case 'config':
        fileName = 'SECURE-T_Configuration_Examples.md';
        break;
      case 'readme':
        fileName = 'README.md';
        break;
      default:
        return NextResponse.json({ error: 'Документ не найден' }, { status: 404 });
    }

    // Читаем файл
    const filePath = join(process.cwd(), 'docs', fileName);
    const content = readFileSync(filePath, 'utf-8');

    // Простое преобразование Markdown в HTML
    const htmlContent = convertMarkdownToHtml(content);

    // Возвращаем HTML страницу
    const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SECURE-T Документация</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #e2e8f0;
            background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(26, 32, 44, 0.8);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        h1, h2, h3, h4, h5, h6 {
            color: #f7fafc;
            margin-top: 2em;
            margin-bottom: 1em;
        }
        h1 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 2.5em;
            text-align: center;
            margin-bottom: 2em;
        }
        h2 {
            color: #63b3ed;
            border-bottom: 2px solid #2b6cb0;
            padding-bottom: 0.5em;
        }
        h3 {
            color: #68d391;
        }
        pre {
            background: #1a202c;
            border: 1px solid #4a5568;
            border-radius: 8px;
            padding: 20px;
            overflow-x: auto;
            margin: 1em 0;
        }
        code {
            background: #2d3748;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        }
        pre code {
            background: none;
            padding: 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1em 0;
        }
        th, td {
            border: 1px solid #4a5568;
            padding: 12px;
            text-align: left;
        }
        th {
            background: #2d3748;
            color: #f7fafc;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background: rgba(45, 55, 72, 0.3);
        }
        a {
            color: #63b3ed;
            text-decoration: none;
        }
        a:hover {
            color: #90cdf4;
            text-decoration: underline;
        }
        .back-button {
            position: fixed;
            top: 20px;
            left: 20px;
            background: #667eea;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        .back-button:hover {
            background: #5a67d8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
    </style>
</head>
<body>
    <a href="/secure-t/documentation" class="back-button">← Назад к документации</a>
    <div class="container">
        ${htmlContent}
    </div>
</body>
</html>`;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });

  } catch (error) {
    console.error('Ошибка чтения файла:', error);
    return NextResponse.json({ error: 'Ошибка загрузки документации' }, { status: 500 });
  }
}

// Простая функция для конвертации Markdown в HTML
function convertMarkdownToHtml(markdown: string): string {
  let html = markdown;

  // Заголовки
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Код блоки
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Жирный и курсив
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Ссылки
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Абзацы
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Убираем пустые абзацы
  html = html.replace(/<p><\/p>/g, '');

  return html;
} 