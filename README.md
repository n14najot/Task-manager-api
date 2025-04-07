Task Manager API

Task Manager API - Bu backend xizmatlari, foydalanuvchilarni boshqarish, mahsulotlar ro‘yxatini yaratish, yangilash, o‘chirish va boshqa vazifalarni bajarish uchun mo‘ljallangan RESTful API. Loyiha NestJS framework asosida ishlab chiqilgan va CRUD (Create, Read, Update, Delete) amallarini bajarish uchun endpointlarga ega.
🧰 Texnologiyalar

    Backend: NestJS

    Database: PostgreSQL

    ORM: TypeORM

    Authentication: JWT (JSON Web Tokens)

    Validation: class-validator

📦 O‘rnatish

Loyihani o‘rnatish va ishga tushirish uchun quyidagi qadamlarni bajarishingiz kerak:
1. Repositorini klonlash

git clone https://github.com/n14najot/task-manager-api.git
cd task-manager-api

2. Qaramliklarni o‘rnatish

npm install

3. Muhit o‘zgaruvchilarini sozlash

.env faylini yaratib, uning ichiga quyidagi ma'lumotlarni qo‘shing:

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=task_manager_db
JWT_SECRET=your_jwt_secret_key

4. Ma'lumotlar bazasini yaratish

npm run start:dev

Bu buyruq NestJS serverini ishga tushiradi va TypeORM orqali bazani avtomatik tarzda yaratadi (agar kerak bo‘lsa).
5. Serverni ishga tushurish

npm run start:dev

Serverni ishga tushurishdan so‘ng, API quyidagi portda ishlaydi:

http://localhost:3000

🔧 Endpoints
1. Users CRUD
POST /users

    Yangi foydalanuvchi yaratish.

    Kirish parametrlari: name, email, password, role.

GET /users

    Barcha foydalanuvchilarni olish.

GET /users/:id

    ID bo‘yicha bitta foydalanuvchini olish.

PATCH /users/:id

    ID bo‘yicha foydalanuvchini yangilash.

    Kirish parametrlari: name, email, password, role.

DELETE /users/:id

    ID bo‘yicha foydalanuvchini o‘chirish.

🛠 Modullar va Kod Struktura

Loyihada quyidagi modullar mavjud:

    Users Module: Foydalanuvchilarni boshqarish (CRUD operatsiyalar).

    Products Module: Mahsulotlar ro‘yxatini boshqarish.

    Tasks Module: Task'larni boshqarish.

    Categories Module: Kategoriyalarni boshqarish.

Har bir modul quyidagi qismlardan iborat:

    Entity: Ma'lumotlar bazasiga o‘xshash strukturadagi klass.

    DTO (Data Transfer Object): Foydalanuvchi tomonidan yuboriladigan va API orqali qaytariladigan ma'lumotlar.

    Service: Biznes logikasi, CRUD metodlari.

    Controller: HTTP metodlar (POST, GET, PATCH, DELETE).

🧑‍💻 Jamoa

Bu loyiha bir nechta jamoa a'zolari tomonidan ishlab chiqilgan:

    Dasturchi Abdulhaq: Users moduli uchun javobgar.

    Dasturchi Abdulhamid: Products moduli uchun javobgar.

    Dasturchi Umidjon: Tasks moduli uchun javobgar.

    Dasturchi Abubakir: Categories moduli uchun javobgar.

📋 Qo‘shimcha ma'lumotlar

    JWT Authentication: API barcha yo‘nalishlarda xavfsizlik uchun JWT asosida autentifikatsiya qilishni qo‘llaydi.

    Validation: class-validator orqali kirish ma'lumotlarini tekshirish (DTO validatsiyasi).

🤝 Yordam

Agar biror muammo yuzaga kelsa yoki savollaringiz bo‘lsa, issues bo‘limiga murojaat qilishingiz mumkin.
