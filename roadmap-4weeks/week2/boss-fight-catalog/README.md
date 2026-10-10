# Boss Fight ด่านที่ 2: Responsive Catalog (Artisan Roastery)

เอกสารข้อมูลการออกแบบ (Design Specs), เนื้อหา (Content Copywriting), และโทนสี สำหรับสร้างหน้าร้านค้า Responsive Single-Page Storefront

- **ภาพต้นแบบ (UI Mockup):** [design/mockup.png](file:///home/kxitta/lernTs/roadmap-4weeks/week2/boss-fight-catalog/design/mockup.png)

---

## 1. จานสีและระบบดีไซน์ (Color Tokens & Design System)

| ส่วนประกอบ (Element) | รหัสสี (Hex Code) | คำอธิบายการใช้งาน |
| :--- | :--- | :--- |
| **Page Background** | `#fdfbf7` | สีพื้นหลังหน้าเว็บ (โทนวานิลลา/ครีมอุ่น สไตล์สแกนดิเนเวียน) |
| **Card Background** | `#ffffff` | สีพื้นหลังการ์ดสินค้า (สีขาวสะอาดตา ตัดกับพื้นหลังครีม) |
| **Primary Text (Heading)** | `#1c1917` | สีตัวหนังสือหัวข้อหลัก (สีกาแฟเข้ม Espresso ให้ความรู้สึกพรีเมียม) |
| **Secondary Text (Body)** | `#78716c` | สีคำอธิบายและตัวหนังสือรอง (สีเทาอุ่น Charcoal อ่านง่าย สบายตา) |
| **Accent / CTA Button** | `#d97706` | สีปุ่ม "Order Now" และป้ายเน้น (สีส้มอำพัน/คาราเมล) |
| **Button Hover** | `#b45309` | สีปุ่มเมื่อเอาเมาส์ชี้ (สีคาราเมลเข้มขึ้น) |
| **Badge Background** | `rgba(255, 255, 255, 0.9)` | สีพื้นหลังป้าย Tag บนรูป (สีขาวกึ่งโปร่งแสง มีความหรูหรา) |
| **Border / Card Shadow** | `#f1ece4` | เส้นขอบบางๆ และเงาการ์ดเบาๆ (`rgba(0, 0, 0, 0.05)`) |

---

## 2. แบบอักษรที่แนะนำ (Typography)

- **Headings (`h1`, `h2`, `h3`, `.logo`):** ใช้ฟอนต์แบบมีเชิง (Serif) เพื่อความหรูหราคราฟต์คาเฟ่
  - `font-family: 'Playfair Display', Georgia, serif;`
- **Body, Nav & Buttons:** ใช้ฟอนต์ไม่มีเชิง (Sans-Serif) เพื่อความชัดเจน อ่านง่าย
  - `font-family: 'Inter', system-ui, sans-serif;`

---

## 3. รายละเอียดเนื้อหาและคำแปล (Content & Translations)

### 3.1 ส่วนหัว (Header / Navigation)
- **Logo:** `Artisan Roastery` (โรงคั่วกาแฟงานคราฟต์)
- **Nav Links:**
  - `Menu` (เมนูเครื่องดื่มและขนม)
  - `Beans` (เมล็ดกาแฟคั่ว)
  - `Story` (เรื่องราวและที่มาของร้าน)
  - `Contact` (ติดต่อเรา)

### 3.2 ส่วนโปรโมต (Hero Section)
- **Small Tag / Eyebrow:** `ESTABLISHED 2026` (ก่อตั้งเมื่อปี 2026)
- **Main Heading (`h1`):** `Handcrafted Brews & Artisan Roasts` (กาแฟชงมือสุดประณีต และเมล็ดคั่วสูตรพิเศษ)
- **Subtitle (`p`):** `Experience the finest selection of ethically sourced beans, meticulously roasted and brewed to perfection.`
  *(แปล: สัมผัสเมล็ดกาแฟคุณภาพเยี่ยมที่คัดสรรมาอย่างเป็นธรรม คั่วอย่างพิถีพิถัน และสกัดออกมาอย่างสมบูรณ์แบบ)*
- **Catalog Heading (`h2`):** `Our Signatures` (เมนูซิกเนเจอร์ประจำร้าน)
- **Catalog Link:** `View full menu →` (ดูเมนูทั้งหมด)

### 3.3 รายการสินค้าทั้ง 6 ชิ้น (Product Catalog - 6 Cards)

#### การ์ดที่ 1: Espresso Tonic
- **Badge:** `SIGNATURE`
- **Title:** `Espresso Tonic`
- **Tasting Notes:** `A refreshing collision of double espresso, premium tonic water, and a twist of fresh orange peel.`
  *(แปล: เอสเพรสโซดับเบิ้ลช็อตผสมน้ำโทนิกซ่า และกลิ่นเปลือกส้มสดชื่น)*
- **Price:** `$6.50`
- **Button:** `Order Now`

#### การ์ดที่ 2: Nitro Cold Brew
- **Badge:** `BEST SELLER`
- **Title:** `Nitro Cold Brew`
- **Tasting Notes:** `Steeped for 18 hours and infused with nitrogen for a velvety texture and naturally sweet, creamy head.`
  *(แปล: กาแฟสกัดเย็นบ่ม 18 ชั่วโมง อัดไนโตรเจนให้เนื้อสัมผัสนุ่มละมุนหวานธรรมชาติ)*
- **Price:** `$5.50`
- **Button:** `Order Now`

#### การ์ดที่ 3: Single Origin Drip
- **Badge:** `LIGHT ROAST`
- **Title:** `Single Origin Drip`
- **Tasting Notes:** `Ethiopia Yirgacheffe. Bright and floral with distinct notes of jasmine, bergamot, and a tea-like finish.`
  *(แปล: เมล็ดเอธิโอเปีย กลิ่นหอมฟลอรัล ดอกมะลิ ซิตรัส และรสสัมผัสนุ่มนวลคล้ายชา)*
- **Price:** `$4.50`
- **Button:** `Order Now`

#### การ์ดที่ 4: Dirty Coffee
- **Badge:** `NEW`
- **Title:** `Dirty Coffee`
- **Tasting Notes:** `A stunning visual of hot, rich espresso cascading over ice-cold, creamy milk. Best enjoyed without stirring.`
  *(แปล: ช็อตเอสเพรสโซเข้มข้นสกัดร้อน ราดลงบนนมสดเย็นจัด แยกชั้นเป็นลวดลาย ดื่มโดยไม่ต้องคน)*
- **Price:** `$6.00`
- **Button:** `Order Now`

#### การ์ดที่ 5: Almond Croissant
- **Badge:** `FRESH BAKED`
- **Title:** `Almond Croissant`
- **Tasting Notes:** `Twice-baked French butter pastry, generously filled with sweet almond frangipane and topped with toasted flakes.`
  *(แปล: ครัวซองต์เนยฝรั่งเศสอบ 2 รอบ สอดไส้ครีมอัลมอนด์และโรยอัลมอนด์สไลซ์อบกรอบ)*
- **Price:** `$5.00`
- **Button:** `Order Now`

#### การ์ดที่ 6: Matcha Latte
- **Badge:** `ORGANIC`
- **Title:** `Matcha Latte`
- **Tasting Notes:** `Ceremonial grade Uji matcha whisked to a froth, served over carefully steamed milk with a touch of honey.`
  *(แปล: ผงมัทฉะอุจิเกรดพิธีการ ตีฟองเนียนนุ่มผสมนมสดอุ่นและน้ำผึ้งธรรมชาติ)*
- **Price:** `$6.50`
- **Button:** `Order Now`

### 3.4 ส่วนท้ายหน้าเว็บ (Footer)
- **Brand Title:** `Artisan Roastery`
- **Hours:** `Open Daily: 7:00 AM — 5:00 PM`
- **Address:** `123 Coffee Lane, Brew District, BK 10110`
- **Copyright:** `© 2026 Artisan Roastery. All rights reserved.`

---

## 4. แผนผังเลย์เอาต์ตามขนาดหน้าจอ (Responsive Behavior)

- **Mobile View (< 768px):**
  - Padding ซ้าย-ขวาของหน้าจอ: `16px` – `20px`
  - Navbar: เรียงตัวแนวตั้ง (Logo อยู่บน เมนูอยู่ล่าง) จัดกึ่งกลาง
  - Catalog Grid: เรียง **1 คอลัมน์** เต็มความกว้างหน้าจอ
  - **Zero Horizontal Overflow:** ห้ามมีแถบเลื่อนแนวนอนเด็ดขาด
- **Desktop View (≥ 768px / 1024px):**
  - Padding ซ้าย-ขวาของหน้าจอ: `40px` – `80px` (หรือใช้ `max-width: 1200px; margin: 0 auto;`)
  - Navbar: เรียงตัวแนวนอน (Logo อยู่ซ้ายสุด เมนูอยู่ขวาสุด)
  - Catalog Grid: ดีดตัวเป็น **3 คอลัมน์** (2 แถว แถวละ 3 ใบ)

---

## 5. บันทึกสรุปการเรียนรู้ & จุดปลดล็อก (Engineering Retrospective)

### 5.1 สิ่งที่ได้เรียนรู้และสร้างสำเร็จ (What I Learned & Mastered)
1. **Full-Page Semantic HTML Architecture:**
   - การประกอบร่างหน้าเว็บเต็มรูปแบบชิ้นแรก ตั้งแต่ `<header>`, `<nav>`, `<main>`, `<section>`, จนถึง `<footer>`
   - การแบ่งกายวิภาคภายในการ์ด (Card Anatomy) เป็น 3 ส่วนมาตรฐาน: `.card-header` (รูปภาพ + ป้าย), `.card-content` (ชื่อ + คำบรรยาย), และ `.card-footer` (ราคา + ปุ่ม)
2. **2D CSS Grid & Mobile-First Responsive Design:**
   - การใช้ `display: grid` ร่วมกับ `gap` แบ่งคอลัมน์ และใช้ `@media (min-width: 768px)` เปลี่ยนการจัดวางจากการ์ด 1 คอลัมน์บนมือถือ สู่ 3 คอลัมน์บนจอคอม
   - การจัดการหน้าเว็บแบบ **Zero Horizontal Overflow** (ไม่มีแถบเลื่อนแนวนอนทะลุจอ)
3. **Responsive Image Techniques:**
   - การคุมภาพสินค้าไม่ให้บี้หรือดันจอพังด้วย `width: 100%; height: 220px; object-fit: cover; display: block;`
4. **CSS Positioning & Shape:**
   - การทำป้าย Badge ทรงเม็ดยา (`border-radius: 9999px`) ให้ลอยทับรูปภาพได้อย่างแม่นยำด้วยคู่หู `position: relative` (ตัวแม่) และ `position: absolute` (ตัวลูก)
5. **Micro-interactions:**
   - การใส่ชีวิตชีวาให้ปุ่ม Action ด้วย `transition`, `transform: translateY(-2px)`, และเงาเรืองแสงสีส้มคาราเมลเมื่อ Hover

---

### 5.2 จุดที่เคยติดขัดและได้ปลดล็อกความเข้าใจ (Stuck Points & Breakthroughs)
1. **Cascading Order (ลำดับใครอยู่ล่างคนนั้นชนะ):**
   - *จุดติด:* เคยเขียน `@media` ไว้ก่อนสไตล์หลัก แล้วพบว่าหน้าจอคอมไม่เปลี่ยนตามคำสั่ง
   - *ปลดล็อก:* เข้าใจตัว "C" ใน CSS ว่าโค้ดที่อยู่ล่างกว่าจะ Override โค้ดด้านบนเสมอ ดังนั้นบล็อก `@media` จึงต้องวางไว้ล่างสุดของไฟล์เสมอ
2. **SEO & Heading Hierarchy (กฎ single `h1` ต่อหนึ่งหน้า):**
   - *จุดติด:* พยายามใช้ `<h1>` สองตัวติดกันเพื่อตัดบรรทัดข้อความ
   - *ปลดล็อก:* เข้าใจมาตรฐาน Semantic Web ว่าใน 1 หน้าต้องมี `<h1>` เพียงตัวเดียว และใช้แท็ก `<br>` หรือใช้ `max-width` ในการควบคุมการตัดบรรทัดแทน
3. **Class Selector vs Tag Selector:**
   - *จุดติด:* เผลอเขียน `.nav` (มีจุด) ทั้งที่ใน HTML คือแท็ก `<nav>` ทำให้สไตล์บนมือถือไม่ติด
   - *ปลดล็อก:* ตระหนักว่าชื่อคลาสต้องมีจุด (`.`) แต่ชื่อแท็ก HTML ต้องเขียนชื่อแท็กตรงๆ
4. **Padding vs Margin ใน Box Model:**
   - *จุดติด:* สงสัยเรื่องระยะห่างของเส้นคั่นใต้ Navbar ว่าทำไมต้องใช้ `padding-bottom`
   - *ปลดล็อก:* เข้าใจว่า Padding คือระยะห่าง "ภายในรั้ว" (ดันให้ตัวหนังสือห่างจากเส้นขอบ) ส่วน Margin คือระยะห่าง "ภายนอกรั้ว" (ผลักกล่องอื่นออกไป)
5. **Full-Bleed Lines vs Centered Content:**
   - *จุดติด:* สงสัยว่าทำไมเส้นคั่นไม่ลากยาวชนขอบจอคอมเหมือนในภาพต้นแบบ
   - *ปลดล็อก:* มองเห็นโครงสร้างกล่องว่า ตราบใดที่กล่อง `.container` คลุมอยู่นอกสุด ทุกอย่างข้างในจะถูกจำกัดความกว้างไว้ที่ 1200px การจะทำเส้นเต็มจอแต่เนื้อหาอยู่ตรงกลาง ต้องให้กล่องแถบด้านนอกกว้าง 100% แล้วเอา `.container` ไปครอบเฉพาะเนื้อหาข้างใน
6. **The Copy-Paste Bug (`alt` attribute):**
   - *จุดติด:* ก๊อปปี้โครงสร้างการ์ดมาใส่ แล้วลืมเปลี่ยน `alt` ทำให้รูปทุกใบมีชื่อเป็น Espresso Tonic ทั้งหมด
   - *ปลดล็อก:* เข้าใจความสำคัญของ Accessibility (a11y) และ Screen Reader ในระบบจริง

