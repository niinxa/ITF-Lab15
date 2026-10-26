const menu = [
    {
        name: "กะเพราหมูสับ",
        description: "กะเพราหมูสับรสเด็ด",
        price: "ธรรมดา 40 พิเศษไข่ดาว 50 บาท",
        image: "%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A.jpg"
    },
    {
        name: "ส้มตำปูปลาร้า",
        description: "อร่อยถูกใจ อนามัยถูกลืม",
        price: "ธรรมดา 40 บาท",
        image: "%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B8%95%E0%B8%B3%E0%B8%9B%E0%B8%B9%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A3%E0%B9%89%E0%B8%B2.jpg"
    },
    {
        name: "สปาเก็ตตี้ผัดพริกแห้ง",
        description: "เมนูแนะนำจ้า",
        price: "ธรรมดา 55 บาท",
        image: "%E0%B8%AA%E0%B8%9B%E0%B8%B2%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B9%81%E0%B8%AB%E0%B9%89%E0%B8%87.jpg"
    },
    {
        name: "ข้าวผัดกุ้ง",
        description: "กุ้งเด้งๆจ้า",
        price: "ธรรมดา 40 พิเศษ 50 บาท",
        image: "%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87.jpg"
    },
    {
        name: "คะน้าหมูกรอบ",
        description: "คะน้าหมูกรอบกร๊อบกรอบ",
        price: "ธรรมดา 50 พิเศษ 60 บาท",
        image: "%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%9A.jpg"
    },
]

function randomfood() {
    // ตำแน่งอาหาร
    let randomindex = Math.floor(Math.random() * menu.length);

    let selectmenu = menu[randomindex];

    document.getElementById("foodimg").src = selectmenu.image;

    document.getElementById("foodname").textContent = selectmenu.name;

    document.getElementById("description").textContent = selectmenu.description;

    document.getElementById("foodprice").textContent = selectmenu.price
}


