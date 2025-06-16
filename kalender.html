<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kalender Konten Visual</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f0f2f5;
    }

    .main-container {
      max-width: 1200px;
      margin: auto;
      padding: 30px;
    }

    h1 {
      text-align: center;
      margin: 30px 0;
      font-size: 28px;
      color: #333;
    }

    form {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 30px;
    }

    input, button {
      padding: 12px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 250px;
    }

    button {
      background-color: #2196f3;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0d8bf2;
    }

    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 15px;
      padding: 0 20px;
    }

    .day {
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      padding: 15px;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .date {
      font-weight: bold;
      color: #2196f3;
      margin-bottom: 8px;
    }

    .judul {
      font-size: 14px;
      margin-bottom: 4px;
      font-weight: 600;
      color: #222;
    }

    .desc {
      font-size: 13px;
      color: #444;
      flex-grow: 1;
    }

    .gcal-link {
      margin-top: auto;
      padding: 6px 10px;
      background-color: #34a853;
      color: white;
      font-size: 12px;
      border: none;
      border-radius: 6px;
      text-align: center;
      text-decoration: none;
      margin-top: 10px;
      display: inline-block;
      transition: background-color 0.3s ease;
    }

    .gcal-link:hover {
      background-color: #2c8c47;
    }
    

    header {
      width: 100%;
      background-color: #1a1a1a;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .navbar {
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      color: white;
      font-size: 1.8rem;
      font-weight: bold;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 25px;
    }

    .nav-links li a {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      padding: 8px 14px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .nav-links li a:hover {
      background-color: #333;
    }

  </style>
<header>
  <nav class="navbar">
    <div class="logo">Help.U</div>
    <ul class="nav-links">
      <li><a href="index.php">Beranda</a></li>
      <li><a href="index.php#regenerate-section">Regenerate</a></li>
      <li><a href="kalender.php">Kalender Konten</a></li>
    </ul>
  </nav>
</header>
  </style>

<body>

  <?php include 'header.html'; ?>

  <div class="main-container">
    <h1>Kalender Konten</h1>

    <form id="kontenForm">
      <input type="text" id="tema" placeholder="Tema konten" required>
      <input type="text" id="platform" placeholder="Platform (misal: Instagram)" required>
      <input type="text" id="audiens" placeholder="Target audiens" required>
      <input type="number" id="rentang" placeholder="Rentang hari (misal: 7)" min="1" max="31" required>
      <button type="submit">Buat Kalender</button>
    </form>

    <div class="calendar" id="calendar"></div>
  </div>

  <script>
    document.getElementById('kontenForm').addEventListener('submit', async function(e) {
      e.preventDefault();

      const tema = document.getElementById('tema').value;
      const platform = document.getElementById('platform').value;
      const audiens = document.getElementById('audiens').value;
      const rentang = document.getElementById('rentang').value;

      const calendarDiv = document.getElementById('calendar');
      calendarDiv.innerHTML = "<p style='grid-column: span 7; text-align:center;'>⏳ Membuat kalender...</p>";

      try {
        const response = await fetch('http://localhost:3000/regenerate-konten', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tema, platform, audiens, rentang })
        });

        const data = await response.json();
        const hasil = data.kalender || "";

        calendarDiv.innerHTML = "";

        const blocks = hasil.split(/\n(?=\d)/); // Pisah per tanggal
        blocks.forEach(block => {
          const lines = block.trim().split('\n');
          if (lines.length === 0) return;

          const tanggalLine = lines[0].split(' - ')[0];
          const div = document.createElement('div');
          div.className = 'day';

          let innerHTML = `<div class="date">${tanggalLine}</div>`;

          lines.forEach(baris => {
            const [tanggal, judul, deskripsi] = baris.split(' - ');
            if (judul && deskripsi) {
              const startDate = new Date(tanggal.trim());
              const endDate = new Date(startDate);
              endDate.setHours(endDate.getHours() + 1);
              const formatDate = d => d.toISOString().replace(/-|:|\.\d\d\d/g, "").slice(0, 15);
              const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(judul.trim())}&details=${encodeURIComponent(deskripsi.trim())}&dates=${formatDate(startDate)}/${formatDate(endDate)}`;

              innerHTML += `
                <div class="judul">${judul.trim()}</div>
                <div class="desc">${deskripsi.trim()}</div>
                <a href="${gcalUrl}" target="_blank" class="gcal-link">+ Tambah ke Google Kalender</a>
              `;
            }
          });

          div.innerHTML = innerHTML;
          calendarDiv.appendChild(div);
        });
      } catch (error) {
        calendarDiv.innerHTML = `<p style='grid-column: span 7; color: red; text-align:center;'>❌ Gagal mengambil data kalender.</p>`;
        console.error("Terjadi kesalahan:", error);
      }
    });
  </script>

</body>
</html>
