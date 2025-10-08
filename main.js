// main.js

// เมื่อโหลดหน้าเว็บเสร็จ จะโชว์ข้อความใน Console
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded successfully!");
});

// ตัวอย่าง: ปุ่ม Scroll to Top
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.background = "rgba(242, 199, 244, 1)";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "6px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none"; // ซ่อนตอนแรก
document.body.appendChild(scrollBtn);

// แสดงปุ่มเมื่อเลื่อนลงมา
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// กดแล้วเลื่อนกลับไปบนสุด
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ตัวอย่าง: Popup alert เวลาเปิดเว็บ
setTimeout(() => {
  alert("ยินดีต้อนรับสู่ Portfolio ของ Nattakan!");
}, 1000);
