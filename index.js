require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Groq } = require('groq-sdk');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// Fungsi membuat daftar 7 tanggal dengan jarak tertentu (misal 2 hari sekali)
function generateTanggalDenganJarak(jarakHari = 1, jumlahTanggal = 7) {
  const hasil = [];
  const now = new Date();

  for (let i = 0; i < jumlahTanggal; i++) {
    const tanggal = new Date(now);
    tanggal.setDate(now.getDate() + i * jarakHari);
    const opsi = { day: 'numeric', month: 'long', year: 'numeric' };
    const formatTanggal = tanggal.toLocaleDateString('id-ID', opsi);
    hasil.push(formatTanggal);
  }

  return hasil;
}

// Endpoint caption generator
app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'Kamu adalah asisten kreatif caption yang membantu menulis ulang caption dengan kalimat yang panjang, lebih menarik, ekspresif, dan sangat persuasif.'
        },
        { role: 'user', content: userMessage }
      ],
      model: 'llama-3.3-70b-versatile' // gunakan model valid
    });

    const reply = chatCompletion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('❌ Kesalahan /chat:', error.response?.data || error.message || error);
    res.status(500).json({ error: 'Gagal memproses permintaan caption' });
  }
});

// Endpoint kalender konten
app.post('/regenerate-konten', async (req, res) => {
  try {
    const { tema, platform, audiens, rentang } = req.body;
    const jarakHari = parseInt(rentang) || 1; // jarak antar tanggal, default 1 hari
    const tanggalList = generateTanggalDenganJarak(jarakHari, 7); // total 7 tanggal

    const prompt = `
Buatkan ide konten untuk platform ${platform} dengan tema "${tema}" dan target audiens "${audiens}".

Tolong buat 5 ide konten untuk *setiap* tanggal berikut.
Format:
Tanggal - Judul - Deskripsi

Tanggal:
${tanggalList.join('\n')}

Total: ${tanggalList.length} tanggal × 5 ide = ${tanggalList.length * 5} ide konten.

Pastikan format tetap satu baris per konten.
    `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'Kamu adalah asisten konten kreatif. Jawabanmu harus hanya berupa daftar konten dengan format: Tanggal - Judul - Deskripsi. Setiap tanggal wajib memiliki 5 ide.'
        },
        { role: 'user', content: prompt }
      ],
      model: 'llama-3.3-70b-versatile' // gunakan model yang tersedia
    });

    const kalender = chatCompletion.choices[0].message.content;
    res.json({ kalender });
  } catch (error) {
    console.error('❌ Kesalahan /regenerate-konten:', error.response?.data || error.message || error);
    res.status(500).json({ error: 'Gagal menghasilkan kalender konten' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
