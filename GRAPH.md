# mangystau — Графический обзор

> **Статус:** Демо/Прототип | **Тип:** Статический фронтенд (ландинг) | **Приоритет:** ⭐⭐

---

## 📊 Метрики проекта

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#2a78d6', 'primaryTextColor': '#0b0b0b', 'primaryBorderColor': '#c3c2b7', 'lineColor': '#c3c2b7', 'secondaryColor': '#fcfcfb', 'tertiaryColor': '#f9f9f7'}}}%%
pie title Файлы проекта
    "HTML страницы (4)" : 40
    "CSS (1 файл)" : 20
    "JavaScript (1 файл)" : 20
    "README.md" : 10
    "Внешние ресурсы (Unsplash, Google Fonts)" : 10
```

---

## 🏗️ Архитектура (только клиентская)

```mermaid
flowchart LR
    subgraph Browser["🌐 Браузер пользователя"]
        HTML[HTML страницы]
        CSS[css/style.css]
        JS[js/main.js]
        Fonts[Google Fonts]
        Images[Unsplash Images]
    end
    
    subgraph External["☁️ Внешние CDN"]
        GF[fonts.googleapis.com<br/>Google Fonts]
        US[images.unsplash.com<br/>Фото]
        WA[api.whatsapp.com<br/>WhatsApp Web]
    end
    
    HTML --> CSS
    HTML --> JS
    HTML --> Fonts
    HTML --> Images
    Fonts --> GF
    Images --> US
    JS --> WA
    
    style Browser fill:#e3f2fd,stroke:#2a78d6
    style External fill:#fff3e0,stroke:#eb6834
```

> ⚠️ **Нет бэкенда, нет БД, нет серверного рендеринга** — чисто статический сайт.

---

## 📁 Структура проекта

```mermaid
graph TD
    Root[mangystau/]
    
    Root --> Index[index.html<br/>Главная]
    Root --> Places[places.html<br/>Көрікті жерлер + фильтр]
    Root --> Tours[tours.html<br/>Турлар мен ұсыныстар]
    Root --> Contact[contact.html<br/>Байланыс + WhatsApp форма]
    Root --> CSS[css/style.css]
    Root --> JS[js/main.js]
    Root --> Readme[README.md]
    
    JS --> MobileMenu[Мобильное меню]
    JS --> Filters[Фильтры по категориям]
    JS --> FormSubmit[WhatsApp форма]
    
    style Root fill:#fce4ec,stroke:#e87ba4
```

---

## 📱 Страницы и функционал

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#2a78d6', 'primaryTextColor': '#0b0b0b', 'primaryBorderColor': '#c3c2b7', 'lineColor': '#c3c2b7', 'secondaryColor': '#fcfcfb', 'tertiaryColor': '#f9f9f7'}}}%%
quadrantChart
    title Страницы: Готовность vs Сложность
    x-range 0 1
    y-range 0 1
    quadrant-1 "Сложные, готовые"
    quadrant-2 "Простые, готовые"
    quadrant-3 "Простые, не готовые"
    quadrant-4 "Сложные, не готовые"
    "index.html": [0.3, 0.9]
    "places.html": [0.5, 0.8]
    "tours.html": [0.4, 0.7]
    "contact.html": [0.6, 0.6]
```

| Страница | Описание | JS функционал | Статус |
|----------|----------|---------------|--------|
| **index.html** | Hero, особенности, отзывы, CTA | Мобильное меню | ✅ Готово |
| **places.html** | Каталог мест, фильтр по категориям | Категорийный фильтр | ✅ Готово |
| **tours.html** | Карточки туров, цены, кнопки | Мобильное меню | ⚠️ Цены — демо |
| **contact.html** | Форма, карта, контакты | WhatsApp генерация | ⚠️ Номер — демо |

---

## 🎨 UI компоненты

```mermaid
graph LR
    subgraph Components["🧩 UI Компоненты"]
        Header[Header + Навигация]
        Hero[Hero Section]
        Cards[Карточки мест/туров]
        Filter[Категорийный фильтр]
        Form[WhatsApp Форма]
        Footer[Footer]
        Mobile[Мобильное меню ☰]
    end
    
    subgraph Styles["🎨 css/style.css"]
        Reset[Reset/Normalize]
        Variables[CSS Variables<br/>Цвета, отступы]
        Layout[Grid/Flex Layout]
        Components[Component Styles]
        Responsive[Media Queries<br/>Mobile First]
    end
    
    Components --> Styles
    
    style Components fill:#e8f5e9,stroke:#1baf7a
    style Styles fill:#fff3e0,stroke:#eb6834
```

---

## 📋 JavaScript функционал (js/main.js)

```mermaid
flowchart TD
    Init[Инициализация DOMContentLoaded]
    
    Init --> Menu[Мобильное меню<br/>toggleClass .active]
    Init --> Filter[Фильтр places.html<br/>data-category атрибуты]
    Init --> Form[Contact Form<br/>WhatsApp URL генерация]
    
    Menu --> MenuLogic[click → toggle<br/>overlay закрытие]
    Filter --> FilterLogic[click → show/hide<br/>data-category match]
    Form --> FormLogic[submit → preventDefault<br/>encodeURI → window.open]
    
    style Init fill:#e3f2fd,stroke:#2a78d6
    style MenuLogic fill:#fff3e0,stroke:#eb6834
    style FilterLogic fill:#e8f5e9,stroke:#1baf7a
    style FormLogic fill:#fce4ec,stroke:#e87ba4
```

**WhatsApp ссылка формат:**
```javascript
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
window.open(url, '_blank');
```

---

## 🚀 Деплой варианты

```mermaid
flowchart TB
    subgraph Current["Текущий (Demo)"]
        Local[Открыть index.html<br/>в браузере]
        Static[Статический хостинг<br/>GitHub Pages / Netlify / Vercel]
    end
    
    subgraph Production["Для продакшена нужно"]
        Backend[Backend API<br/>Node.js / Python / Go]
        Database[База данных<br/>PostgreSQL / MongoDB]
        Admin[Админка<br/>Управление турами]
        RealData[Настоящие фото/цены/контакты]
        WhatsApp[Реальный WhatsApp Business API]
        SEO[SEO: sitemap, robots.txt,<br/>structured data]
    end
    
    Local -.->|Просто| Static
    Static -->|Добавить| Backend
    Backend --> Database
    Backend --> Admin
    Backend --> RealData
    Backend --> WhatsApp
    Backend --> SEO
    
    style Current fill:#e8f5e9,stroke:#1baf7a
    style Production fill:#ffebee,stroke:#e34948
```

---

## ⚠️ Что нужно заменить перед запуском

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#2a78d6', 'primaryTextColor': '#0b0b0b', 'primaryBorderColor': '#c3c2b7', 'lineColor': '#c3c2b7', 'secondaryColor': '#fcfcfb', 'tertiaryColor': '#f9f9f7'}}}%%
pie title Демо-данные к замене
    "Цены туров" : 30
    "Телефон/Email в контактах" : 25
    "WhatsApp номер в форме" : 20
    "Фото с Unsplash" : 15
    "Тексты описаний" : 10
```

| Элемент | Где находится | Что сделать |
|---------|---------------|-------------|
| Цены | tours.html | Заменить на реальные |
| Телефон | contact.html, footer | Настоящий номер |
| Email | contact.html | Рабочий email |
| WhatsApp | js/main.js + contact.html | Бизнес-номер WhatsApp |
| Фото | Все HTML (data-src) | Свои фото или платный сток |
| Описания | places.html, tours.html | Уникальные тексты |

---

## 🎯 Рекомендации по развитию

```mermaid
gantt
    title Mangystau: От демо к продакшену
    dateFormat  YYYY-MM-DD
    axisFormat  %m/%Y
    
    section Решение
    Оценка: нужен ли полноценный сайт  :dec1, 2026-11-22, 3d
    
    section Если ДА - MVP
    Backend API (Node/Express)         :mvp1, after dec1, 14d
    База данных (PostgreSQL)           :mvp2, after mvp1, 7d
    Админка (CRUD туров)               :mvp3, after mvp2, 14d
    Реальный контент                   :mvp4, after mvp3, 7d
    WhatsApp Business API              :mvp5, after mvp4, 7d
    SEO + Деплой                       :mvp6, after mvp5, 7d
    
    section Если НЕТ
    Архивировать репозиторий           :no1, after dec1, 1d
```

---

## ⚡ Быстрые команды для ИИ

```bash
# Просто открыть в браузере (нет сборки)
# Windows:
start index.html

# Mac/Linux:
open index.html
# или
xdg-open index.html

# Деплой на GitHub Pages (если решите оставить статику):
# 1. Push в GitHub
# 2. Settings → Pages → Deploy from branch → main
# 3. Сайт будет на https://username.github.io/mangystau/

# Деплой на Netlify (drag & drop папку mangystau)
# Деплой на Vercel: npx vercel --prod
```

---

## 📊 Сравнение с другими проектами

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#2a78d6', 'primaryTextColor': '#0b0b0b', 'primaryBorderColor': '#c3c2b7', 'lineColor': '#c3c2b7', 'secondaryColor': '#fcfcfb', 'tertiaryColor': '#f9f9f7'}}}%%
quadrantChart
    title Mangystau vs Другие проекты
    x-range 0 1
    y-range 0 1
    quadrant-1 "Сложные, продакшн"
    quadrant-2 "Простые, продакшн"
    quadrant-3 "Простые, демо"
    quadrant-4 "Сложные, демо"
    "Шешен сөз": [0.9, 0.95]
    "BilimAI": [0.8, 0.8]
    "desktop-tutorial": [0.1, 0.1]
    "Mangystau": [0.2, 0.3]
```

---

## 🎯 Приоритеты (если развиваем)

| # | Задача | Сложность | Время | Блокеры |
|---|--------|-----------|-------|---------|
| 1 | **Принять решение: развивать/архивировать** | 🟢 Низкая | 1 день | Бизнес-решение |
| 2 | Backend API + БД | 🔴 Высокая | 2-3 недели | Нужен стек |
| 3 | Админка управления контентом | 🔴 Высокая | 2 недели | Backend готов |
| 4 | Настоящий контент (фото, цены, тексты) | 🟡 Средняя | 1 неделя | Контент-менеджер |
| 5 | WhatsApp Business API | 🟡 Средняя | 3-5 дней | Номер, верификация |
| 6 | SEO + Аналитика | 🟢 Низкая | 2 дня | Деплой готов |

---

*Создано: 2026-11-22 | Для быстрого контекста ИИ при работе с проектом*