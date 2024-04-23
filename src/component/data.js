const user = [
        {
            nama_user : "Bagaskara",
            alamat_user : "jalan jalanan",
            telp_user : "1234 12345",
            username_user : "Kirin",
            passowrd_user : "12345678",
            role_user : "user",
        },
        {
            nama_user : "adminin",
            alamat_user : "jalanin aja",
            telp_user : "112233445566",
            username_user : "si admin",
            passowrd_user : "adminkan",
            role_user : "admin",
        },
]
const buku = [
        {
            id: 0,
            author: "test",
            authorProf: "Gege Akutami, the pen name of a talented and mysterious Japanese manga artist, is best known for their creation, Jujutsu Kaisen. While shrouded in secrecy, their work speaks volumes, captivating readers with its unique blend of story and art.",
            title: "Rembulan",
            cover: "https://i.pinimg.com/736x/a0/9b/2e/a09b2eca90d800a22c62d50fbeb8ea48.jpg",
            deskripsi: "Kemunculan Toji Zenin yang tak terduga, menambah kekacauan “Insiden Shibuya”! Di sisi lain, Nanami yang sedang menuju ke tempat Geto di peron bawah tanah, sangat marah atas luka yang diderita para asisten pengawas. Shaman tingkat 1 yang memasuki medan pertempuran pun semakin bertambah, sementara Itadori bertarung sengit melawan si sulung kusozu, Choso!!  Di antara jenis buku lainnya, komik memang disukai oleh semua kalangan mulai dari anak kecil hingga orang dewasa. Alasan komik lebih disukai oleh banyak orang karena disajikan dengan penuh dengan gambar dan cerita yang mengasyikan sehingga mampu menghilangkan rasa bosan di kala waktu senggang. Komik seringkali dijadikan sebagai koleksi dan diburu oleh penggemarnya karena serinya yang cukup terkenal dan kepopulerannya terus berlanjut sampai saat ini. Dalam memilih jenis komik, ada baiknya perhatikan terlebih dahulu ringkasan cerita komik di sampul bagian belakang sehingga sesuai dengan preferensi pribadi pembaca. Jujutsu Kaisen adalah serial manga Jepang yang ditulis dan diilustrasikan oleh Gege Akutami. Ini telah diserialkan di majalah manga shōnen Shueisha Weekly Shonen Jump sejak Maret 2018, dengan bab-babnya dikumpulkan dan diterbitkan dalam 20 volume tankōbon per Agustus 2022. Ceritanya mengikuti siswa sekolah menengah Yuji Itadori saat ia bergabung dengan organisasi rahasia Penyihir Jujutsu untuk menghilangkan Kutukan yang kuat bernama Ryomen Sukuna, di mana Yuji menjadi inangnya. Jujutsu Kaisen adalah sekuel dari Sekolah Teknik Kutukan Metropolitan Tokyo Akutami, yang diserialkan di Jump GIGA Shueisha dari April hingga Juli 2017, kemudian dikumpulkan dalam volume tankōbon, dengan judul retroaktif sebagai Jujutsu Kaisen 0, pada Desember 2018.",
            img: [
                "https://i.pinimg.com/736x/a0/9b/2e/a09b2eca90d800a22c62d50fbeb8ea48.jpg",
                "https://i.pinimg.com/236x/37/3e/76/373e7691ecf16e725e49890edbca1b57.jpg",
                "https://i.pinimg.com/236x/89/12/0e/89120e7751ab997b40f4729ef7b837ab.jpg",
                "https://i.pinimg.com/236x/ae/55/34/ae553467fb105bdbeb3bed3cf051933c.jpg"
                ],
            halaman: "50",
            terbit: "19 Jnauari 2023",
            isbn:"ggggugkojh",
            bahasa: "indonesia",
            penerbit: "PT Mactohicto",
            berat: "11",
            lebar: "12",
            panjang: "13",
            Kategori: "religi",
            hard: 500,
            soft: 100,
            softDisc: 50,
            rate: 5,
            stok: 3
        },
        {
            id: 1,
            author: "coba",
            authorProf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            title: "Rembulan",
            cover: "https://i.pinimg.com/236x/37/3e/76/373e7691ecf16e725e49890edbca1b57.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis tempor sollicitudin. Vivamus non felis et mauris commodo tempor quis quis ante. Sed nulla turpis, iaculis nec urna non, viverra laoreet arcu. Donec nisi magna, hendrerit quis ligula posuere, gravida sagittis erat. Quisque quis eleifend ligula. Aenean vel hendrerit urna, eget bibendum odio. Maecenas sollicitudin porta luctus. Ut nec malesuada lorem. Cras luctus risus leo, vel vulputate augue consequat vitae. Vivamus sit amet leo in libero sagittis tristique. Nullam porttitor ante vitae tincidunt malesuada. In vitae tempus nisi. Pellentesque nisl mi, molestie vel porttitor in, rhoncus eu odio.",
            img: [
                "https://i.pinimg.com/236x/37/3e/76/373e7691ecf16e725e49890edbca1b57.jpg",
                "https://i.pinimg.com/236x/89/12/0e/89120e7751ab997b40f4729ef7b837ab.jpg",
                "https://i.pinimg.com/236x/ae/55/34/ae553467fb105bdbeb3bed3cf051933c.jpg"
                ],
            halaman: "1",
            terbit: "11 Jnauari 1111",
            isbn:"guhkhkh",
            bahasa: "arab",
            penerbit: "PT Mactohicto",
            berat: "11",
            lebar: "12",
            panjang: "13",
            kategori: "comic",
            hard: 1000,
            soft: 100,
            softDisc: 10,
            rate: 3,
            stok: 0
        },
]

const commentData= [
    {
        name: "Hudan Faishal",
        profile: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        date: "1 Januari 1111",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci vel varius. Nulla egestas ex augue. Cras vel nulla blandit, sodales ex non, placerat est. Proin malesuada purus ut diam placerat fringilla. Ut tempus risus nec diam eleifend, nec laoreet quam rutrum. In suscipit nibh id leo rutrum dignissim. Donec mollis sit amet lectus et auctor. Aenean hendrerit, ante at condimentum ultrices, odio lorem consequat magna, a tincidunt metus dui et lacus. Ut non mi nulla. Suspendisse sit amet lectus eget justo posuere tristique. Pellentesque sed vestibulum lorem.",
    },
    {
        name: "Fajar Baru",
        profile: "https://media.istockphoto.com/id/1205742669/photo/young-indian-man-wearing-denim-shirt-standing-over-isolated-yellow-background-cheerful-with-a.jpg?s=612x612&w=0&k=20&c=OnnM5rjkR_xl7ohnUx2ZlJXfVl9-8hcOdSimZQW5DBM=",
        date: "2 Februari 2222",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci vel varius. Nulla egestas ex augue. Cras vel nulla blandit, sodales ex non, placerat est. Proin malesuada purus ut diam placerat fringilla. Ut tempus risus nec diam eleifend, nec laoreet quam rutrum. In suscipit nibh id leo rutrum dignissim. Donec mollis sit amet lectus et auctor. Aenean hendrerit, ante at condimentum ultrices, odio lorem consequat magna, a tincidunt metus dui et lacus. Ut non mi nulla. Suspendisse sit amet lectus eget justo posuere tristique. Pellentesque sed vestibulum lorem.",
    },
    {
        name: "Hudan Faishal",
        profile: "https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg",
        date: "3 Maret 3333",
        rating: 3,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci vel varius. Nulla egestas ex augue. Cras vel nulla blandit, sodales ex non, placerat est. Proin malesuada purus ut diam placerat fringilla. Ut tempus risus nec diam eleifend, nec laoreet quam rutrum. In suscipit nibh id leo rutrum dignissim. Donec mollis sit amet lectus et auctor. Aenean hendrerit, ante at condimentum ultrices, odio lorem consequat magna, a tincidunt metus dui et lacus. Ut non mi nulla. Suspendisse sit amet lectus eget justo posuere tristique. Pellentesque sed vestibulum lorem.",
    },
  ]

export {user, buku, commentData};