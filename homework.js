// แสดงข้อความตอนเริ่มโหลด
document.getElementById("ptag").innerText = "Welcome to the Forum";

// ตัวแปรนับจำนวนโพสต์
let postCount = 0;

// การทำงานเมื่อกดปุ่ม Post
document.getElementById("postBtn").addEventListener("click", function() {
  const message = document.getElementById("message").value;

  // ไม่ให้โพสต์ว่าง
  if(message.trim() === "") return; 

  // เพิ่มจำนวนครั้งที่โพสต์
  postCount++;

  // เงื่อนไขการแสดงโพสต์
  if(postCount === 1) {
    // ครั้งแรก โพสต์ที่ Main Post
    document.getElementById("topic").innerHTML += `<p>${message}</p>`;
  } else if(postCount === 2) {
    // ครั้งที่สอง โพสต์ที่ Reply 1
    document.getElementById("reply1").innerHTML += `<p>${message}</p>`;
  } else if(postCount === 3) {
    // ครั้งที่สาม โพสต์ที่ Reply 2
    document.getElementById("reply2").innerHTML += `<p>${message}</p>`;
  } else {
    // ถ้าโพสต์เกิน 3 ครั้ง
    alert("You have reached the maximum number of posts!");
  }

  // เคลียร์กล่องข้อความหลังโพสต์
  document.getElementById("message").value = "";
});

// การทำงานเมื่อกดปุ่ม Clear
document.getElementById("clearBtn").addEventListener("click", function() {
  // รีเซ็ตค่าเริ่มต้น
  document.getElementById("topic").innerHTML = "<h2>Main Post:</h2>";
  document.getElementById("reply1").innerHTML = "<h3>Reply 1:</h3>";
  document.getElementById("reply2").innerHTML = "<h3>Reply 2:</h3>";
  postCount = 0; // รีเซ็ตจำนวนโพสต์กลับเป็นศูนย์
});
