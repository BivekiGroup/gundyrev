# SECURE-T - Руководство по быстрому старту

## 🚀 Быстрый старт

Это руководство поможет вам быстро развернуть и настроить систему SECURE-T для начала работы.

---

## Предварительные требования

### Системные требования
- **ОС:** Ubuntu 20.04+ или Windows Server 2019+
- **RAM:** минимум 16 GB
- **Диск:** минимум 500 GB SSD
- **Сеть:** доступ в интернет для загрузки компонентов

### Необходимые права
- Права администратора (root/Administrator)
- Доступ к портам 8443, 5432, 443

---

## Шаг 1: Подготовка системы

### Ubuntu/Linux
```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Docker
sudo apt install -y docker.io docker-compose

# Запуск Docker
sudo systemctl start docker
sudo systemctl enable docker

# Добавление пользователя в группу docker
sudo usermod -aG docker $USER
```

### Windows Server
```powershell
# Включение Hyper-V (требует перезагрузки)
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All

# Установка Docker Desktop for Windows Server
# Скачайте с официального сайта Docker
```

---

## Шаг 2: Загрузка и установка SECURE-T

```bash
# Создание рабочей директории
mkdir -p /opt/secure-t
cd /opt/secure-t

# Загрузка установочного пакета
wget https://releases.secure-t.com/latest/secure-t-installer.tar.gz

# Распаковка
tar -xzf secure-t-installer.tar.gz

# Запуск установки
sudo ./install.sh --quick-start
```

---

## Шаг 3: Первоначальная настройка

### Автоматическая настройка
```bash
# Запуск мастера настройки
sudo secure-t-admin setup --wizard

# Следуйте инструкциям мастера:
# 1. Выберите тип развертывания (Standalone/Cluster)
# 2. Настройте базу данных
# 3. Создайте администратора
# 4. Настройте SSL-сертификаты
```

### Ручная настройка
```bash
# Инициализация базы данных
secure-t-admin init-db

# Создание администратора
secure-t-admin create-admin \
  --username admin \
  --password SecurePassword123! \
  --email admin@company.com

# Генерация SSL-сертификатов
secure-t-admin ssl generate-cert \
  --domain your-domain.com \
  --organization "Your Company"

# Запуск сервисов
systemctl start secure-t
systemctl enable secure-t
```

---

## Шаг 4: Проверка установки

### Проверка статуса сервисов
```bash
# Проверка статуса
systemctl status secure-t

# Проверка логов
journalctl -u secure-t -f

# Проверка портов
netstat -tlnp | grep :8443
```

### Веб-интерфейс
1. Откройте браузер
2. Перейдите по адресу: `https://your-server:8443`
3. Войдите с учетными данными администратора
4. Проверьте дашборд

---

## Шаг 5: Базовая конфигурация

### Настройка первой политики безопасности
1. Войдите в веб-интерфейс
2. Перейдите в **Политики** → **Создать новую**
3. Выберите **Шифрование файлов**
4. Настройте параметры:
   - Алгоритм: AES-256
   - Область применения: `/home/users`
   - Расписание: Немедленно
5. Сохраните и активируйте политику

### Добавление пользователей
1. Перейдите в **Пользователи** → **Добавить**
2. Заполните данные:
   - Имя пользователя
   - Email
   - Роль (Operator/Admin)
3. Настройте двухфакторную аутентификацию
4. Отправьте приглашение

### Настройка мониторинга
1. Перейдите в **Мониторинг** → **Настройки**
2. Включите сбор событий:
   - Системные события
   - События безопасности
   - Сетевые события
3. Настройте уведомления:
   - Email-уведомления
   - Telegram/Slack интеграция

---

## Шаг 6: Тестирование

### Тест шифрования
```bash
# Создание тестового файла
echo "Тестовые данные" > /tmp/test.txt

# Шифрование через CLI
secure-t-cli encrypt \
  --file /tmp/test.txt \
  --output /tmp/test.enc \
  --algorithm AES-256

# Проверка результата
ls -la /tmp/test.*
```

### Тест мониторинга
1. Выполните несколько действий в системе
2. Перейдите в **События** в веб-интерфейсе
3. Убедитесь, что события регистрируются
4. Проверьте фильтрацию и поиск

### Тест API
```bash
# Получение токена
TOKEN=$(curl -s -X POST \
  https://your-server:8443/api/v1/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"username":"admin","password":"SecurePassword123!"}' \
  -k | jq -r '.token')

# Тест API
curl -X GET \
  https://your-server:8443/api/v1/status \
  -H "Authorization: Bearer $TOKEN" \
  -k
```

---

## Troubleshooting

### Часто встречающиеся проблемы

#### Сервис не запускается
```bash
# Проверка логов
journalctl -u secure-t --no-pager -l

# Проверка конфигурации
secure-t-admin config validate

# Перезапуск сервиса
sudo systemctl restart secure-t
```

#### Не работает веб-интерфейс
```bash
# Проверка портов
sudo netstat -tlnp | grep :8443

# Проверка SSL-сертификатов
openssl s_client -connect localhost:8443 -servername localhost

# Проверка firewall
sudo ufw status
sudo firewall-cmd --list-all
```

#### Проблемы с базой данных
```bash
# Проверка соединения с БД
secure-t-admin db-check

# Восстановление БД из резервной копии
secure-t-admin db-restore --backup /path/to/backup.sql

# Пересоздание БД
secure-t-admin db-reset --confirm
```

### Получение помощи
- **Документация:** `https://docs.secure-t.com`
- **Поддержка:** `support@secure-t.com`
- **Телефон:** `+7 (495) 123-45-67`

---

## Следующие шаги

После успешной установки рекомендуется:

1. **Изучить полную документацию** - `docs/SECURE-T_Documentation.md`
2. **Настроить резервное копирование**
3. **Интегрировать с существующими системами**
4. **Провести обучение персонала**
5. **Настроить мониторинг и алерты**

---

## Полезные команды

### Управление сервисом
```bash
# Статус
systemctl status secure-t

# Запуск/остановка
systemctl start secure-t
systemctl stop secure-t
systemctl restart secure-t

# Включение/отключение автозапуска
systemctl enable secure-t
systemctl disable secure-t
```

### Управление конфигурацией
```bash
# Просмотр конфигурации
secure-t-admin config show

# Изменение параметра
secure-t-admin config set server.port 8444

# Валидация конфигурации
secure-t-admin config validate

# Сброс к умолчаниям
secure-t-admin config reset
```

### Управление пользователями
```bash
# Список пользователей
secure-t-admin users list

# Создание пользователя
secure-t-admin users create --username user1 --role operator

# Смена пароля
secure-t-admin users passwd --username user1

# Блокировка пользователя
secure-t-admin users disable --username user1
```

### Резервное копирование
```bash
# Создание резервной копии
secure-t-admin backup create --output /backup/secure-t-$(date +%Y%m%d).tar.gz

# Восстановление из резервной копии
secure-t-admin backup restore --input /backup/secure-t-20241201.tar.gz

# Автоматическое резервное копирование
secure-t-admin backup schedule --daily --time "02:00" --keep 30
```

---

*Руководство по быстрому старту SECURE-T*  
*Версия 1.0 | 2024*  
*© GUNDYREV. Все права защищены.* 