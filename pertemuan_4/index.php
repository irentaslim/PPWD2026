<?php
$pesan = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST["nama"]);
    $komentar = htmlspecialchars($_POST["komentar"]);

    if ($nama != "" && $komentar != "") {
        $pesan = "Terima kasih, $nama! Komentar kamu sudah diterima.";
    }
}
?>

<!DOCTYPE html>

<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perkenalan Diri - Iren</title>

```
<link rel="stylesheet" href="css/style.css">
```

</head>

<body>

```
<div class="container">

    <div class="header">
        <h1>Hai, I'm Iren ♡</h1>
        <p>Selamat datang di halaman perkenalan diri saya!</p>
    </div>

    <div class="about">
        <h2>Tentang Saya</h2>

        <p>
            Halo! Nama saya <b>Iren Meiliani Taslim</b>.
            Saya lahir di Tangerang pada 21 Mei 2007 dan sekarang berusia 19 tahun.
            Saya memiliki zodiak Gemini dan MBTI ISFJ.
        </p>

        <div class="data">
            <p><b>Nama:</b> Iren Meiliani Taslim</p>
            <p><b>Tempat, Tanggal Lahir:</b> Tangerang, 21 Mei 2007</p>
            <p><b>Umur:</b> 19 tahun</p>
            <p><b>Zodiak:</b> Gemini ♊</p>
            <p><b>MBTI:</b> ISFJ</p>
            <p><b>Warna Favorit:</b> Pink ♡</p>
        </div>
    </div>

    <div class="hobby">
        <h2>Hobi Saya</h2>

        <div class="hobby-list">
            <div>
                <span>📖</span>
                <h3>Membaca</h3>
                <p>Saya suka membaca buku di waktu luang.</p>
            </div>

            <div>
                <span>💤</span>
                <h3>Tidur</h3>
                <p>Saya juga suka tidur untuk beristirahat.</p>
            </div>
        </div>
    </div>

    <div class="comment">
        <h2>Berikan Komentar</h2>

        <?php if ($pesan != "") { ?>
            <p class="pesan"><?php echo $pesan; ?></p>
        <?php } ?>

        <form method="POST">

            <label>Nama</label>
            <input type="text" name="nama" placeholder="Masukkan nama" required>

            <label>Komentar</label>
            <textarea name="komentar" placeholder="Tulis komentar..." required></textarea>

            <button type="submit">Kirim Komentar ♡</button>

        </form>
    </div>

    <footer>
        <p>© 2026 Iren Meiliani Taslim ♡</p>
    </footer>

</div>
```

</body>
</html>
