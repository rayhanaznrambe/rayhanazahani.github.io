<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Katalog Buku - Source Library</title>

<style>

body{
font-family: "Outfit", Arial;
background:#faf6f0;
margin:0;
padding:40px;
}

/* HEADER */

.header{
text-align:center;
margin-bottom:40px;
}

.header h1{
color:#800000;
margin-bottom:10px;
}

.back-btn{
display:inline-block;
margin-top:10px;
padding:8px 16px;
background:#800000;
color:white;
text-decoration:none;
border-radius:6px;
font-size:14px;
}

/* SEARCH */

.search-box{
text-align:center;
margin-bottom:30px;
}

.search-box input{
padding:12px;
width:300px;
max-width:80%;
border-radius:8px;
border:1px solid #ccc;
}

/* BOOK GRID */

.book-container{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:25px;
}

/* BOOK CARD */

.book-card{
background:white;
padding:15px;
border-radius:12px;
box-shadow:0 6px 15px rgba(0,0,0,0.1);
text-align:center;
transition:transform 0.2s;
}

.book-card:hover{
transform:translateY(-5px);
}

.book-card img{
width:120px;
height:180px;
object-fit:cover;
margin-bottom:10px;
border-radius:6px;
}

.book-title{
font-weight:bold;
color:#800000;
margin-bottom:5px;
}

.book-author{
font-size:14px;
color:#555;
}

.book-year{
font-size:13px;
color:#777;
margin-bottom:10px;
}

.book-btn{
display:inline-block;
padding:6px 12px;
background:#800000;
color:white;
text-decoration:none;
border-radius:6px;
font-size:13px;
}

</style>

</head>

<body>

<div class="header">
<h1>📚 Katalog Buku</h1>

<a class="back-btn" href="index.html">
← Kembali ke Homepage
</a>
</div>


<div class="search-box">
<input type="text" id="search" placeholder="Cari judul, penulis, atau tahun...">
</div>


<div id="bookList" class="book-container"></div>


<!-- LOAD DATA BUKU -->
<script src="book.js"></script>


<script>

/* =====================
AMBIL PARAMETER KATEGORI
===================== */

const params = new URLSearchParams(window.location.search);
const kategori = params.get("kategori");


let filteredBooks = books;


/* FILTER BERDASARKAN KATEGORI */

if(kategori){

filteredBooks = books.filter(book =>
book.kategori === kategori
);

}


/* =====================
TAMPILKAN BUKU
===================== */

displayBooks(filteredBooks);


function displayBooks(data){

const container = document.getElementById("bookList");

container.innerHTML="";

data.forEach(book=>{

const card = `
<div class="book-card">

<img src="${book.cover}" alt="${book.judul}">

<div class="book-title">${book.judul}</div>

<div class="book-author">${book.penulis}</div>

<div class="book-year">${book.tahun}</div>

<a class="book-btn" href="${book.file}" target="_blank">
Baca Buku
</a>

</div>
`;

container.innerHTML += card;

});

}


/* =====================
SEARCH SYSTEM
===================== */

document.getElementById("search").addEventListener("input", function(){

const keyword = this.value.toLowerCase();

const results = books.filter(book =>

book.judul.toLowerCase().includes(keyword) ||

book.penulis.toLowerCase().includes(keyword) ||

book.tahun.includes(keyword)

);

displayBooks(results);

});

</script>

</body>
</html>
