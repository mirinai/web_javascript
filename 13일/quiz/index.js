const data = [
  [
    {
      id: 1,
      fullName: "Brion Iacopetti",
      avatar:
        "https://robohash.org/atquemollitiamaiores.png?size=50x50&set=set1",
      university: "University of Computer Studies, Yangon",
      department: "Legal",
    },
    {
      id: 2,
      fullName: "Thorin Foran",
      avatar: "https://robohash.org/impeditmaioresea.png?size=50x50&set=set1",
      university: "Sultan Salahuddin Abdul Aziz Shah Polytechnic",
      department: "Legal",
    },
    {
      id: 3,
      fullName: "Bunny Tingly",
      avatar: "https://robohash.org/sitilloea.png?size=50x50&set=set1",
      university: "Abylai Khan University",
      department: "Marketing",
    },
    {
      id: 4,
      fullName: "Eberto Choules",
      avatar:
        "https://robohash.org/doloremofficiatempore.png?size=50x50&set=set1",
      university: "Fachhochschule Hof",
      department: "Support",
    },
    {
      id: 5,
      fullName: "Giselbert Goodin",
      avatar:
        "https://robohash.org/estpariatureligendi.png?size=50x50&set=set1",
      university: "Université de Tunis",
      department: "Engineering",
    },
    {
      id: 6,
      fullName: "Meridith Bwye",
      avatar:
        "https://robohash.org/isteducimusarchitecto.png?size=50x50&set=set1",
      university:
        "Qauid-e-Awam University of Engineering Sciences & Technology",
      department: "Support",
    },
    {
      id: 7,
      fullName: "Erhart Neilly",
      avatar:
        "https://robohash.org/perspiciatiscorporiscommodi.png?size=50x50&set=set1",
      university: "Vancouver Community College",
      department: "Legal",
    },
    {
      id: 8,
      fullName: "Eldin Beckles",
      avatar:
        "https://robohash.org/voluptasnisidoloribus.png?size=50x50&set=set1",
      university: "Universitas Madura",
      department: "Training",
    },
    {
      id: 9,
      fullName: "Yorker Ardy",
      avatar:
        "https://robohash.org/dictaexpeditabeatae.png?size=50x50&set=set1",
      university:
        "Schiller International University, American College of Switzerland",
      department: "Research and Development",
    },
    {
      id: 10,
      fullName: "Myrtle Wharf",
      avatar: "https://robohash.org/autvoluptatessed.png?size=50x50&set=set1",
      university: "Great Lakes Christian College",
      department: "Support",
    },
    {
      id: 11,
      fullName: "Cecily Simcox",
      avatar: "https://robohash.org/idsolutadoloribus.png?size=50x50&set=set1",
      university: "Malaspina University College",
      department: "Support",
    },
    {
      id: 12,
      fullName: "Maggi Lalor",
      avatar: "https://robohash.org/autsapienteeos.png?size=50x50&set=set1",
      university: "Universidad del Turabo",
      department: "Services",
    },
    {
      id: 13,
      fullName: "Rod Cochran",
      avatar: "https://robohash.org/fugiatetquod.png?size=50x50&set=set1",
      university: "Kagawa Medical School",
      department: "Sales",
    },
    {
      id: 14,
      fullName: "Flor Skillings",
      avatar: "https://robohash.org/nonillosint.png?size=50x50&set=set1",
      university: "Hefei University of Technology",
      department: "Accounting",
    },
    {
      id: 15,
      fullName: "Odo Stienham",
      avatar: "https://robohash.org/quosenimofficia.png?size=50x50&set=set1",
      university: "National Yunlin University of Science and Technology",
      department: "Product Management",
    },
    {
      id: 16,
      fullName: "Damon Sawday",
      avatar: "https://robohash.org/eteosvoluptate.png?size=50x50&set=set1",
      university: "Agricultural University of Wroclaw",
      department: "Product Management",
    },
    {
      id: 17,
      fullName: "Oralia Espinho",
      avatar: "https://robohash.org/rerumipsumminima.png?size=50x50&set=set1",
      university: "California College of Podiatric Medicine",
      department: "Services",
    },
    {
      id: 18,
      fullName: "Anestassia Matous",
      avatar: "https://robohash.org/magnamessemaiores.png?size=50x50&set=set1",
      university: "Intercollege",
      department: "Legal",
    },
    {
      id: 19,
      fullName: "Ralph Feild",
      avatar: "https://robohash.org/fugapariatursit.png?size=50x50&set=set1",
      university: "Southern College of Optometry",
      department: "Human Resources",
    },
    {
      id: 20,
      fullName: "Kellen Harwin",
      avatar: "https://robohash.org/quivoluptatibusex.png?size=50x50&set=set1",
      university: "Chungnam National University",
      department: "Business Development",
    },
    {
      id: 21,
      fullName: "Lucita Witchalls",
      avatar: "https://robohash.org/nondelenitiofficia.png?size=50x50&set=set1",
      university: "Tashkent State Agrarian University",
      department: "Product Management",
    },
    {
      id: 22,
      fullName: "Hadley Gaskal",
      avatar: "https://robohash.org/providentnisiid.png?size=50x50&set=set1",
      university: "Université de Limoges",
      department: "Research and Development",
    },
    {
      id: 23,
      fullName: "Darryl Gaylard",
      avatar:
        "https://robohash.org/repudiandaevoluptatibuset.png?size=50x50&set=set1",
      university: "Texas A&M University - Commerce",
      department: "Support",
    },
    {
      id: 24,
      fullName: "Delmar Plowright",
      avatar: "https://robohash.org/nihilquispariatur.png?size=50x50&set=set1",
      university: "Truman State University",
      department: "Engineering",
    },
    {
      id: 25,
      fullName: "Garry Sains",
      avatar: "https://robohash.org/eaatveritatis.png?size=50x50&set=set1",
      university: "King Mongkut's University of Technology Thonburi",
      department: "Support",
    },
    {
      id: 26,
      fullName: "Edie Branca",
      avatar:
        "https://robohash.org/quibusdamperspiciatisid.png?size=50x50&set=set1",
      university: "University of the Free State",
      department: "Business Development",
    },
    {
      id: 27,
      fullName: "Vi Trewhella",
      avatar:
        "https://robohash.org/sedeligendisimilique.png?size=50x50&set=set1",
      university: "Kabul Education University",
      department: "Research and Development",
    },
    {
      id: 28,
      fullName: "Winnifred Langtry",
      avatar:
        "https://robohash.org/odioconsequaturcupiditate.png?size=50x50&set=set1",
      university: "Escuela Colombiana de Ingeniería Julio Garavito",
      department: "Legal",
    },
    {
      id: 29,
      fullName: "Ellette Badini",
      avatar: "https://robohash.org/idminimavoluptate.png?size=50x50&set=set1",
      university: "Université de Nice-Sophia Antipolis",
      department: "Accounting",
    },
    {
      id: 30,
      fullName: "Alexio Crosston",
      avatar:
        "https://robohash.org/nesciuntinciduntsint.png?size=50x50&set=set1",
      university: "Jawaharlal Nehru University",
      department: "Business Development",
    },
    {
      id: 31,
      fullName: "Wilie Dobbie",
      avatar: "https://robohash.org/velitetcommodi.png?size=50x50&set=set1",
      university: "University College Dublin",
      department: "Research and Development",
    },
    {
      id: 32,
      fullName: "Aveline Royl",
      avatar: "https://robohash.org/teneturaliquidrem.png?size=50x50&set=set1",
      university: "Yasuda Women's University",
      department: "Engineering",
    },
    {
      id: 33,
      fullName: "Abran Demko",
      avatar: "https://robohash.org/fugiatenimeos.png?size=50x50&set=set1",
      university: "Chiba Keizai University",
      department: "Business Development",
    },
    {
      id: 34,
      fullName: "Nathanael Kitter",
      avatar: "https://robohash.org/velnatuset.png?size=50x50&set=set1",
      university: "College of Busniess Admnistration",
      department: "Services",
    },
    {
      id: 35,
      fullName: "Elmore Ferry",
      avatar: "https://robohash.org/ametaliquidnemo.png?size=50x50&set=set1",
      university: "College of Notre Dame",
      department: "Support",
    },
    {
      id: 36,
      fullName: "Larisa Pietrzak",
      avatar: "https://robohash.org/similiqueabeos.png?size=50x50&set=set1",
      university: "Fort Valley State College",
      department: "Sales",
    },
    {
      id: 37,
      fullName: "Jock Greswell",
      avatar: "https://robohash.org/expeditafugaet.png?size=50x50&set=set1",
      university: "Shanghai Medical University",
      department: "Sales",
    },
    {
      id: 38,
      fullName: "Wayland Scrauniage",
      avatar: "https://robohash.org/nonexpeditaofficia.png?size=50x50&set=set1",
      university: 'University of Gjirokstra "Eqerem Cabej"',
      department: "Support",
    },
    {
      id: 39,
      fullName: "Giulia Oley",
      avatar:
        "https://robohash.org/quaerattemporedignissimos.png?size=50x50&set=set1",
      university: "Capital University of Medical Sciences",
      department: "Legal",
    },
    {
      id: 40,
      fullName: "Lurette McVanamy",
      avatar:
        "https://robohash.org/dolorumautemaccusamus.png?size=50x50&set=set1",
      university: "Universidad de Camagüey",
      department: "Human Resources",
    },
    {
      id: 41,
      fullName: "Missie Drysdale",
      avatar:
        "https://robohash.org/repudiandaenequelaudantium.png?size=50x50&set=set1",
      university: "Vongchavalitkul University",
      department: "Services",
    },
    {
      id: 42,
      fullName: "Deonne Adamides",
      avatar: "https://robohash.org/cumqueadnulla.png?size=50x50&set=set1",
      university: "Universitat Jaume I de Castellón",
      department: "Legal",
    },
    {
      id: 43,
      fullName: "Eda Cuckoo",
      avatar:
        "https://robohash.org/estquireprehenderit.png?size=50x50&set=set1",
      university: "Beijing University of Science and Technology",
      department: "Product Management",
    },
    {
      id: 44,
      fullName: "Fritz Boffin",
      avatar: "https://robohash.org/nesciuntomniset.png?size=50x50&set=set1",
      university: "Centro Universitário Senac",
      department: "Support",
    },
    {
      id: 45,
      fullName: "Germaine Sangwine",
      avatar:
        "https://robohash.org/laborumdignissimosducimus.png?size=50x50&set=set1",
      university: "University of Anbar",
      department: "Support",
    },
    {
      id: 46,
      fullName: "Curran Whyte",
      avatar:
        "https://robohash.org/liberodoloremquecupiditate.png?size=50x50&set=set1",
      university: "Hokkaido University of Health Sciences",
      department: "Marketing",
    },
    {
      id: 47,
      fullName: "Gordan Heintze",
      avatar: "https://robohash.org/consequaturida.png?size=50x50&set=set1",
      university: "Ecole des Hautes Etudes Industrielles de Lille",
      department: "Engineering",
    },
    {
      id: 48,
      fullName: "Chrystel Granham",
      avatar: "https://robohash.org/eumetasperiores.png?size=50x50&set=set1",
      university: "National Theatre Conservatory",
      department: "Research and Development",
    },
    {
      id: 49,
      fullName: "Leif Tills",
      avatar:
        "https://robohash.org/voluptasveritatiset.png?size=50x50&set=set1",
      university: "Fundación Universitaria de Boyacá",
      department: "Services",
    },
    {
      id: 50,
      fullName: "Celesta Dacre",
      avatar: "https://robohash.org/suntrepellendusquo.png?size=50x50&set=set1",
      university: "Gwangju Catholic College",
      department: "Product Management",
    },
    {
      id: 51,
      fullName: "Hope Shelp",
      avatar: "https://robohash.org/harumsedodit.png?size=50x50&set=set1",
      university: "Lutherische Theologische Hochschule Oberursel",
      department: "Legal",
    },
    {
      id: 52,
      fullName: "Misti Pilmer",
      avatar: "https://robohash.org/placeatnullaqui.png?size=50x50&set=set1",
      university: "AISTEDA",
      department: "Product Management",
    },
    {
      id: 53,
      fullName: "Shae Munnings",
      avatar:
        "https://robohash.org/teneturcommodivoluptatem.png?size=50x50&set=set1",
      university: "Khulna University",
      department: "Research and Development",
    },
    {
      id: 54,
      fullName: "Gonzales Palay",
      avatar: "https://robohash.org/molestiaecorporisa.png?size=50x50&set=set1",
      university: "Khmelnitsky National University",
      department: "Accounting",
    },
    {
      id: 55,
      fullName: "Taryn Gentile",
      avatar: "https://robohash.org/eumdoloret.png?size=50x50&set=set1",
      university: "Cameron University",
      department: "Research and Development",
    },
    {
      id: 56,
      fullName: "Jordain Frizell",
      avatar:
        "https://robohash.org/illumvoluptatesdicta.png?size=50x50&set=set1",
      university: "Kostanai State University",
      department: "Legal",
    },
    {
      id: 57,
      fullName: "Debbi Tilling",
      avatar: "https://robohash.org/velnamillo.png?size=50x50&set=set1",
      university: "Rasmussen College",
      department: "Research and Development",
    },
    {
      id: 58,
      fullName: "Ogdan Blampied",
      avatar: "https://robohash.org/porroinciduntipsam.png?size=50x50&set=set1",
      university: "NAES College",
      department: "Research and Development",
    },
    {
      id: 59,
      fullName: "Fernando Cabral",
      avatar: "https://robohash.org/etvelitdelectus.png?size=50x50&set=set1",
      university:
        "Postgraduate Institute of Pali & Buddhist Studies (University of Kelaniya)",
      department: "Engineering",
    },
    {
      id: 60,
      fullName: "Jeniece Lyst",
      avatar: "https://robohash.org/utetquia.png?size=50x50&set=set1",
      university: "Cecos Univeristy of Information Technology",
      department: "Product Management",
    },
    {
      id: 61,
      fullName: "Leigh Le Provest",
      avatar: "https://robohash.org/rerumvelitsunt.png?size=50x50&set=set1",
      university: "Universitas Sanata Dharma",
      department: "Business Development",
    },
    {
      id: 62,
      fullName: "Freda Grisedale",
      avatar:
        "https://robohash.org/beataeutconsectetur.png?size=50x50&set=set1",
      university: "Newport International University",
      department: "Support",
    },
    {
      id: 63,
      fullName: "Jarrid Vinter",
      avatar: "https://robohash.org/quoconsequaturiste.png?size=50x50&set=set1",
      university: "Universidad Mariano Gálvez",
      department: "Services",
    },
    {
      id: 64,
      fullName: "Evangelina Mabon",
      avatar: "https://robohash.org/etnihilsunt.png?size=50x50&set=set1",
      university: "Bow Valley College",
      department: "Legal",
    },
    {
      id: 65,
      fullName: "Harwell MacAfee",
      avatar: "https://robohash.org/etmaioresquia.png?size=50x50&set=set1",
      university: "Universidad Tecnológica San Antonio de Machala",
      department: "Human Resources",
    },
    {
      id: 66,
      fullName: "Marjorie Persse",
      avatar: "https://robohash.org/etsaepeut.png?size=50x50&set=set1",
      university: "Ardabil University of Medical Sciences",
      department: "Product Management",
    },
    {
      id: 67,
      fullName: "Elicia McQuilty",
      avatar:
        "https://robohash.org/ipsamquiavoluptatem.png?size=50x50&set=set1",
      university: "University Medical School of Debrecen",
      department: "Engineering",
    },
    {
      id: 68,
      fullName: "Marie Morritt",
      avatar: "https://robohash.org/eanostrumea.png?size=50x50&set=set1",
      university: "Institute of Information Technology",
      department: "Research and Development",
    },
    {
      id: 69,
      fullName: "Eben Goldsmith",
      avatar:
        "https://robohash.org/voluptatumundesoluta.png?size=50x50&set=set1",
      university: "Institute of Industrial Electronics Engineering",
      department: "Product Management",
    },
    {
      id: 70,
      fullName: "Koressa Jeandin",
      avatar: "https://robohash.org/nostruminminus.png?size=50x50&set=set1",
      university: "University of Neuchatel",
      department: "Human Resources",
    },
    {
      id: 71,
      fullName: "Lesli Kolyagin",
      avatar: "https://robohash.org/quiaoccaecatiillum.png?size=50x50&set=set1",
      university: "University of Kabianga",
      department: "Legal",
    },
    {
      id: 72,
      fullName: "Bethena Dannatt",
      avatar:
        "https://robohash.org/consequaturnostrumnobis.png?size=50x50&set=set1",
      university: "Academy of Arts",
      department: "Engineering",
    },
    {
      id: 73,
      fullName: "Sissy Tatem",
      avatar:
        "https://robohash.org/corporisnumquamcupiditate.png?size=50x50&set=set1",
      university: "Blessing-Rieman College of Nursing",
      department: "Services",
    },
    {
      id: 74,
      fullName: "Zebulen Vitet",
      avatar: "https://robohash.org/evenietodioaut.png?size=50x50&set=set1",
      university: "Yamaguchi University",
      department: "Support",
    },
    {
      id: 75,
      fullName: "Sanders Freckelton",
      avatar:
        "https://robohash.org/etatquevoluptatibus.png?size=50x50&set=set1",
      university: "DEI Bachelor & Master Degrees",
      department: "Research and Development",
    },
    {
      id: 76,
      fullName: "Hamlen Biggs",
      avatar:
        "https://robohash.org/repellendusdignissimosquia.png?size=50x50&set=set1",
      university: "Instituto Superior Politécnico e Universitário",
      department: "Marketing",
    },
    {
      id: 77,
      fullName: "Faye Arbuckel",
      avatar: "https://robohash.org/sedetvoluptates.png?size=50x50&set=set1",
      university: "Instituto Tecnológico de Santo Domingo",
      department: "Sales",
    },
    {
      id: 78,
      fullName: "Hanny MacNamara",
      avatar: "https://robohash.org/doloreexminus.png?size=50x50&set=set1",
      university: "Gauhati University",
      department: "Support",
    },
    {
      id: 79,
      fullName: "Cooper Jeckell",
      avatar: "https://robohash.org/voluptasetvoluptas.png?size=50x50&set=set1",
      university: "Textile Institute of Pakistan",
      department: "Marketing",
    },
    {
      id: 80,
      fullName: "Darrell Worviell",
      avatar:
        "https://robohash.org/remsapientelaudantium.png?size=50x50&set=set1",
      university: "Al-hikmah University",
      department: "Human Resources",
    },
    {
      id: 81,
      fullName: "Klarika MacInerney",
      avatar: "https://robohash.org/pariaturquosrerum.png?size=50x50&set=set1",
      university: "Payap University Chaiang Mai",
      department: "Product Management",
    },
    {
      id: 82,
      fullName: "Prescott Inseal",
      avatar: "https://robohash.org/remquiset.png?size=50x50&set=set1",
      university: "Brigham Young University Hawaii",
      department: "Research and Development",
    },
    {
      id: 83,
      fullName: "Deane Corby",
      avatar: "https://robohash.org/etmolestiaetempore.png?size=50x50&set=set1",
      university: "Chongqing University of Science and Technology ",
      department: "Legal",
    },
    {
      id: 84,
      fullName: "Devon Crosoer",
      avatar:
        "https://robohash.org/explicaboquisquamdeleniti.png?size=50x50&set=set1",
      university: "Nakamura Gakuen University",
      department: "Product Management",
    },
    {
      id: 85,
      fullName: "Effie Cheesworth",
      avatar:
        "https://robohash.org/expeditasedconsectetur.png?size=50x50&set=set1",
      university: "Okinawa International University",
      department: "Product Management",
    },
    {
      id: 86,
      fullName: "Analiese Mitchley",
      avatar:
        "https://robohash.org/explicaboveritatisrepellendus.png?size=50x50&set=set1",
      university: "St. Xavier University",
      department: "Marketing",
    },
    {
      id: 87,
      fullName: "Devora Spowart",
      avatar: "https://robohash.org/veroeadoloremque.png?size=50x50&set=set1",
      university: "Bishop's University",
      department: "Accounting",
    },
    {
      id: 88,
      fullName: "Ava Birney",
      avatar: "https://robohash.org/sequietvero.png?size=50x50&set=set1",
      university: "University of Maryland University College",
      department: "Training",
    },
    {
      id: 89,
      fullName: "Alford Tidey",
      avatar:
        "https://robohash.org/recusandaeillodelectus.png?size=50x50&set=set1",
      university: "Mount Sinai School of Medicine",
      department: "Human Resources",
    },
    {
      id: 90,
      fullName: "Katheryn Yerborn",
      avatar: "https://robohash.org/quamsedoccaecati.png?size=50x50&set=set1",
      university: "Universidad José Antonio Páez",
      department: "Training",
    },
    {
      id: 91,
      fullName: "Luci Rowden",
      avatar:
        "https://robohash.org/optiodeseruntrecusandae.png?size=50x50&set=set1",
      university: "Northeastern State University",
      department: "Research and Development",
    },
    {
      id: 92,
      fullName: "Lindsy Pinchin",
      avatar:
        "https://robohash.org/temporibusquidemratione.png?size=50x50&set=set1",
      university: "Instituto Tecnológico de Santo Domingo",
      department: "Legal",
    },
    {
      id: 93,
      fullName: "Taddeusz Lewty",
      avatar: "https://robohash.org/remidnulla.png?size=50x50&set=set1",
      university: "Arkansas State University, Mountain Home",
      department: "Human Resources",
    },
    {
      id: 94,
      fullName: "Lisha Leverson",
      avatar: "https://robohash.org/utvelnam.png?size=50x50&set=set1",
      university: "National Taiwan Ocean University",
      department: "Business Development",
    },
    {
      id: 95,
      fullName: "Stevana Smithin",
      avatar: "https://robohash.org/magnamfacereullam.png?size=50x50&set=set1",
      university: "Staatlich anerkannte Fachhochschule für Kunsttherapie",
      department: "Engineering",
    },
    {
      id: 96,
      fullName: "Webster Astbury",
      avatar:
        "https://robohash.org/sedteneturconsectetur.png?size=50x50&set=set1",
      university: "Marij State Technical University",
      department: "Legal",
    },
    {
      id: 97,
      fullName: "Justis Alberts",
      avatar: "https://robohash.org/iustomaximequo.png?size=50x50&set=set1",
      university: "Schiller International University, Paris",
      department: "Services",
    },
    {
      id: 98,
      fullName: "Ailee Davidek",
      avatar:
        "https://robohash.org/quisquamblanditiisrepellendus.png?size=50x50&set=set1",
      university: "Université Joseph Fourier (Grenoble I)",
      department: "Services",
    },
    {
      id: 99,
      fullName: "Mandi Persian",
      avatar: "https://robohash.org/voluptateremsit.png?size=50x50&set=set1",
      university: "Alcorn State University",
      department: "Product Management",
    },
    {
      id: 100,
      fullName: "Lily Durrell",
      avatar:
        "https://robohash.org/autabnecessitatibus.png?size=50x50&set=set1",
      university: "Islamic Azad University, Fars Science & Research Branch",
      department: "Sales",
    },
    {
      id: 101,
      fullName: "Toinette Vose",
      avatar: "https://robohash.org/suscipitutesse.png?size=50x50&set=set1",
      university: "Grove City College",
      department: "Training",
    },
    {
      id: 102,
      fullName: "Debor Crow",
      avatar:
        "https://robohash.org/exercitationemharumoptio.png?size=50x50&set=set1",
      university: "Punjab Institute of Computer science",
      department: "Research and Development",
    },
    {
      id: 103,
      fullName: "Camella Consterdine",
      avatar: "https://robohash.org/quidemnihilet.png?size=50x50&set=set1",
      university: "Guangdong University of Technology",
      department: "Product Management",
    },
    {
      id: 104,
      fullName: "Maribeth Stedell",
      avatar: "https://robohash.org/utnonblanditiis.png?size=50x50&set=set1",
      university: "University of Namibia",
      department: "Accounting",
    },
    {
      id: 105,
      fullName: "Milton Graysmark",
      avatar:
        "https://robohash.org/delectusaspernaturexplicabo.png?size=50x50&set=set1",
      university: "Poznan School of Banking",
      department: "Services",
    },
    {
      id: 106,
      fullName: "Konrad Le Pine",
      avatar:
        "https://robohash.org/animiverovoluptatem.png?size=50x50&set=set1",
      university: "Université d'Avignon",
      department: "Services",
    },
    {
      id: 107,
      fullName: "Brandais Forty",
      avatar: "https://robohash.org/veniamquisquamnisi.png?size=50x50&set=set1",
      university: "Chinju National University of Education",
      department: "Business Development",
    },
    {
      id: 108,
      fullName: "Pacorro Pieper",
      avatar: "https://robohash.org/utmagniest.png?size=50x50&set=set1",
      university: "Russian State Geological Prospecting University ",
      department: "Research and Development",
    },
    {
      id: 109,
      fullName: "Alan Brandacci",
      avatar: "https://robohash.org/etquospossimus.png?size=50x50&set=set1",
      university: "Mazandaran University of Medical Science",
      department: "Legal",
    },
    {
      id: 110,
      fullName: "Elianora Mohamed",
      avatar: "https://robohash.org/quasirerumeum.png?size=50x50&set=set1",
      university: "Open University Malaysia",
      department: "Engineering",
    },
    {
      id: 111,
      fullName: "Eustacia Lettuce",
      avatar:
        "https://robohash.org/exconsecteturvoluptate.png?size=50x50&set=set1",
      university: "Oduduwa University",
      department: "Training",
    },
    {
      id: 112,
      fullName: "Gwendolyn Crambie",
      avatar:
        "https://robohash.org/deseruntquiconsequatur.png?size=50x50&set=set1",
      university: "Tashkent Pharmaceutical Institute",
      department: "Training",
    },
    {
      id: 113,
      fullName: "Oralie Chastan",
      avatar: "https://robohash.org/utiuretempora.png?size=50x50&set=set1",
      university: "Hainan University",
      department: "Services",
    },
    {
      id: 114,
      fullName: "Kora Ravenshaw",
      avatar: "https://robohash.org/suntsinttotam.png?size=50x50&set=set1",
      university: "Universidad Nacional de Loja",
      department: "Services",
    },
    {
      id: 115,
      fullName: "Violetta Hazelgreave",
      avatar:
        "https://robohash.org/assumendaasperioresconsectetur.png?size=50x50&set=set1",
      university: "Central Luzon State University",
      department: "Human Resources",
    },
    {
      id: 116,
      fullName: "Electra Golston",
      avatar: "https://robohash.org/ullamquaequi.png?size=50x50&set=set1",
      university: "Coppin State College",
      department: "Legal",
    },
    {
      id: 117,
      fullName: "Corri Riddel",
      avatar: "https://robohash.org/molestiaealiquidut.png?size=50x50&set=set1",
      university: "Sugino Women's College",
      department: "Sales",
    },
    {
      id: 118,
      fullName: "Keary Sadgrove",
      avatar:
        "https://robohash.org/doloremqueinventoreesse.png?size=50x50&set=set1",
      university: "National University of Science and Technology",
      department: "Support",
    },
    {
      id: 119,
      fullName: "Aldric Daber",
      avatar:
        "https://robohash.org/voluptatemexplicabonesciunt.png?size=50x50&set=set1",
      university: "Floret Global University",
      department: "Business Development",
    },
    {
      id: 120,
      fullName: "Dora Poletto",
      avatar: "https://robohash.org/autdeseruntunde.png?size=50x50&set=set1",
      university: "National Taiwan College of the Arts",
      department: "Sales",
    },
    {
      id: 121,
      fullName: "Egor Bennike",
      avatar:
        "https://robohash.org/etvoluptasmolestiae.png?size=50x50&set=set1",
      university: "Universidade Federal de São Carlos",
      department: "Support",
    },
    {
      id: 122,
      fullName: "Norry Keyho",
      avatar: "https://robohash.org/quiaestaspernatur.png?size=50x50&set=set1",
      university: "San Diego State University",
      department: "Marketing",
    },
    {
      id: 123,
      fullName: "Lauren Karpinski",
      avatar: "https://robohash.org/voluptasestsit.png?size=50x50&set=set1",
      university: "Universität Paderborn",
      department: "Product Management",
    },
    {
      id: 124,
      fullName: "Shaw Boarder",
      avatar: "https://robohash.org/hicquitemporibus.png?size=50x50&set=set1",
      university: "Tel Aviv University",
      department: "Support",
    },
    {
      id: 125,
      fullName: "Aurora Fidelli",
      avatar: "https://robohash.org/estrepellatmagni.png?size=50x50&set=set1",
      university: "University of Wisconsin - Platteville",
      department: "Accounting",
    },
    {
      id: 126,
      fullName: "Yuma Claessens",
      avatar:
        "https://robohash.org/consequunturmolestiaeoccaecati.png?size=50x50&set=set1",
      university: "National Chiao Tung University",
      department: "Support",
    },
    {
      id: 127,
      fullName: "Drud Waight",
      avatar:
        "https://robohash.org/excepturiomnisdolorum.png?size=50x50&set=set1",
      university: "Chikushi Jogakuen University",
      department: "Sales",
    },
    {
      id: 128,
      fullName: "Kain Dunnion",
      avatar:
        "https://robohash.org/consecteturquaeratvel.png?size=50x50&set=set1",
      university: "Zanjan Institute for Advanced Studies in Basic Sciences",
      department: "Accounting",
    },
    {
      id: 129,
      fullName: "Lorie Bernardinelli",
      avatar:
        "https://robohash.org/voluptatemtotamquia.png?size=50x50&set=set1",
      university: "Prairie View Agricultural and Mechanical University",
      department: "Sales",
    },
    {
      id: 130,
      fullName: "Maud Nellis",
      avatar: "https://robohash.org/sedmagnamqui.png?size=50x50&set=set1",
      university: "University of New England",
      department: "Legal",
    },
    {
      id: 131,
      fullName: "Anabel Blunsom",
      avatar: "https://robohash.org/fugaetquod.png?size=50x50&set=set1",
      university: "Alahgaff University",
      department: "Accounting",
    },
    {
      id: 132,
      fullName: "Immanuel Yerrall",
      avatar: "https://robohash.org/totamsitipsa.png?size=50x50&set=set1",
      university: "Federal University of Technology, Yola",
      department: "Engineering",
    },
    {
      id: 133,
      fullName: "Alvera Lawrenceson",
      avatar: "https://robohash.org/sitquosmolestias.png?size=50x50&set=set1",
      university: "Assosa University",
      department: "Training",
    },
    {
      id: 134,
      fullName: "Barris Meddemmen",
      avatar:
        "https://robohash.org/optiodoloredistinctio.png?size=50x50&set=set1",
      university: "Université Lumiére (Lyon II)",
      department: "Services",
    },
    {
      id: 135,
      fullName: "Dacia Billie",
      avatar:
        "https://robohash.org/officiadelectusporro.png?size=50x50&set=set1",
      university: "Universidad Técnica de Manabí",
      department: "Support",
    },
    {
      id: 136,
      fullName: "Farah Raymond",
      avatar: "https://robohash.org/quideminciduntet.png?size=50x50&set=set1",
      university: "Xi'an Jiaotong University",
      department: "Engineering",
    },
    {
      id: 137,
      fullName: "Alfie Kermannes",
      avatar: "https://robohash.org/autrepellenduset.png?size=50x50&set=set1",
      university: "Universitas Jambi",
      department: "Sales",
    },
    {
      id: 138,
      fullName: "Charil Vallis",
      avatar: "https://robohash.org/maximemaioresdolor.png?size=50x50&set=set1",
      university: "Doane College",
      department: "Training",
    },
    {
      id: 139,
      fullName: "Geri Tootell",
      avatar:
        "https://robohash.org/quisquamdebitisfacere.png?size=50x50&set=set1",
      university: "Technological Education Institute of Thessaloniki",
      department: "Marketing",
    },
    {
      id: 140,
      fullName: "Stephi Heatherington",
      avatar: "https://robohash.org/modiporroiusto.png?size=50x50&set=set1",
      university: "Mokwon University Taejon",
      department: "Services",
    },
    {
      id: 141,
      fullName: "Amabelle McEllen",
      avatar: "https://robohash.org/ametquilaudantium.png?size=50x50&set=set1",
      university: "Federal University of Technology, Yola",
      department: "Marketing",
    },
    {
      id: 142,
      fullName: "Elvira Essel",
      avatar: "https://robohash.org/quieosnatus.png?size=50x50&set=set1",
      university: "Bowling Green State University",
      department: "Product Management",
    },
    {
      id: 143,
      fullName: "Nikolai Challender",
      avatar: "https://robohash.org/officiisenimsint.png?size=50x50&set=set1",
      university: "Fachhochschule für Wirtschaft Berlin",
      department: "Marketing",
    },
    {
      id: 144,
      fullName: "Reidar Lepope",
      avatar:
        "https://robohash.org/aliquamprovidentqui.png?size=50x50&set=set1",
      university: "Geneva Business School",
      department: "Product Management",
    },
    {
      id: 145,
      fullName: "Ameline Adnett",
      avatar:
        "https://robohash.org/autsimiliquequibusdam.png?size=50x50&set=set1",
      university: "Fukui University",
      department: "Sales",
    },
    {
      id: 146,
      fullName: "Yank Weekes",
      avatar:
        "https://robohash.org/molestiasvoluptasimpedit.png?size=50x50&set=set1",
      university: "San Diego State University",
      department: "Engineering",
    },
    {
      id: 147,
      fullName: "Jorry McNess",
      avatar:
        "https://robohash.org/perferendismaioresdoloribus.png?size=50x50&set=set1",
      university: "Universidade Federal de Rondônia",
      department: "Marketing",
    },
    {
      id: 148,
      fullName: "Tonia Cantu",
      avatar: "https://robohash.org/moditemporeet.png?size=50x50&set=set1",
      university: "University of Performing Arts in Bratislava",
      department: "Support",
    },
    {
      id: 149,
      fullName: "Hyacinthie Libero",
      avatar:
        "https://robohash.org/commodiofficiaoptio.png?size=50x50&set=set1",
      university: "Agnes Scott College",
      department: "Research and Development",
    },
    {
      id: 150,
      fullName: "Fernanda Chilton",
      avatar: "https://robohash.org/autpraesentiumrem.png?size=50x50&set=set1",
      university: "Novgorod State University",
      department: "Research and Development",
    },
    {
      id: 151,
      fullName: "Lorne Duinkerk",
      avatar:
        "https://robohash.org/quisquamevenietquidem.png?size=50x50&set=set1",
      university: "Universidade do Estado do Rio Grande do Norte",
      department: "Support",
    },
    {
      id: 152,
      fullName: "Dolph Greenham",
      avatar: "https://robohash.org/veritatissequiillo.png?size=50x50&set=set1",
      university: "United Arab Emirates University",
      department: "Product Management",
    },
    {
      id: 153,
      fullName: "Colline Sergeant",
      avatar: "https://robohash.org/eaquequonemo.png?size=50x50&set=set1",
      university: "Pädagogische Hochschule Schwäbisch Gmünd",
      department: "Training",
    },
    {
      id: 154,
      fullName: "Reiko Wasiel",
      avatar: "https://robohash.org/molestiaequossit.png?size=50x50&set=set1",
      university: "Dhaka University of Engineering and Technology",
      department: "Training",
    },
    {
      id: 155,
      fullName: "Ranique Rizzardo",
      avatar:
        "https://robohash.org/reiciendisnumquamnon.png?size=50x50&set=set1",
      university: "Universidad Mariano Egaña",
      department: "Training",
    },
    {
      id: 156,
      fullName: "Clarie Bayless",
      avatar:
        "https://robohash.org/debitisutvoluptatibus.png?size=50x50&set=set1",
      university: "Augustana Hochschule Neuendettelsau",
      department: "Services",
    },
    {
      id: 157,
      fullName: "Francene Phippard",
      avatar:
        "https://robohash.org/placeatvoluptaslaboriosam.png?size=50x50&set=set1",
      university: "Hong Kong Baptist University",
      department: "Support",
    },
    {
      id: 158,
      fullName: "Tedda Claesens",
      avatar:
        "https://robohash.org/idmolestiaetemporibus.png?size=50x50&set=set1",
      university: "Universidad Europea de Madrid",
      department: "Accounting",
    },
    {
      id: 159,
      fullName: "Shadow Tilford",
      avatar: "https://robohash.org/inoditnon.png?size=50x50&set=set1",
      university: "Tomball College",
      department: "Engineering",
    },
    {
      id: 160,
      fullName: "Pollyanna Barnham",
      avatar: "https://robohash.org/rationedoloresnam.png?size=50x50&set=set1",
      university: "Hohai University Changzhou",
      department: "Legal",
    },
    {
      id: 161,
      fullName: "Vinson Antonellini",
      avatar: "https://robohash.org/illumsedneque.png?size=50x50&set=set1",
      university: "University for Development Studies",
      department: "Accounting",
    },
    {
      id: 162,
      fullName: "Rodrigo Luther",
      avatar:
        "https://robohash.org/autempossimusnostrum.png?size=50x50&set=set1",
      university: "Academy of Fine Arts and Design in Bratislava",
      department: "Human Resources",
    },
    {
      id: 163,
      fullName: "Jacob Tomik",
      avatar: "https://robohash.org/ineosqui.png?size=50x50&set=set1",
      university: "Victoria International University",
      department: "Training",
    },
    {
      id: 164,
      fullName: "Pearla Casero",
      avatar: "https://robohash.org/illumducimusautem.png?size=50x50&set=set1",
      university: "Siauliai University",
      department: "Product Management",
    },
    {
      id: 165,
      fullName: "Clair McCrachen",
      avatar: "https://robohash.org/quoutratione.png?size=50x50&set=set1",
      university: "National Defence Academy of Latvia",
      department: "Business Development",
    },
    {
      id: 166,
      fullName: "Thedrick Humberstone",
      avatar: "https://robohash.org/ametdoloreaut.png?size=50x50&set=set1",
      university: "Xi'an University of Architecture and Technology",
      department: "Services",
    },
    {
      id: 167,
      fullName: "Barret Burgane",
      avatar: "https://robohash.org/remveritatisqui.png?size=50x50&set=set1",
      university: "Ross University Caribbean School of Medicine",
      department: "Sales",
    },
    {
      id: 168,
      fullName: "Towney Flacke",
      avatar: "https://robohash.org/odioullamsaepe.png?size=50x50&set=set1",
      university: "California State University, Bakersfield",
      department: "Marketing",
    },
    {
      id: 169,
      fullName: "Wendall Pouck",
      avatar: "https://robohash.org/magniundeet.png?size=50x50&set=set1",
      university: "Nairobi Technical Training Institute ",
      department: "Training",
    },
    {
      id: 170,
      fullName: "Leanna Laborda",
      avatar: "https://robohash.org/voluptasvelitquos.png?size=50x50&set=set1",
      university: "Katholieke Universiteit Brussel",
      department: "Training",
    },
    {
      id: 171,
      fullName: "Bennie Knappen",
      avatar:
        "https://robohash.org/eligendinullabeatae.png?size=50x50&set=set1",
      university: "Astrahan State Technical University",
      department: "Product Management",
    },
    {
      id: 172,
      fullName: "Juli Dallinder",
      avatar:
        "https://robohash.org/explicabonihilducimus.png?size=50x50&set=set1",
      university: "Kanazawa College of Art",
      department: "Research and Development",
    },
    {
      id: 173,
      fullName: "Kayne Yitshak",
      avatar: "https://robohash.org/sedveleos.png?size=50x50&set=set1",
      university: "Kookmin University",
      department: "Sales",
    },
    {
      id: 174,
      fullName: "Cathlene Speedy",
      avatar: "https://robohash.org/architectoetquod.png?size=50x50&set=set1",
      university: "Zagreb School of Economics and Management",
      department: "Human Resources",
    },
    {
      id: 175,
      fullName: "Dylan Erickson",
      avatar: "https://robohash.org/autemfacilisminus.png?size=50x50&set=set1",
      university: "Morrison College",
      department: "Business Development",
    },
    {
      id: 176,
      fullName: "Niko Dury",
      avatar:
        "https://robohash.org/quoperspiciatisratione.png?size=50x50&set=set1",
      university: "Monmouth University",
      department: "Engineering",
    },
    {
      id: 177,
      fullName: "Nicolais Plaistowe",
      avatar: "https://robohash.org/placeatacupiditate.png?size=50x50&set=set1",
      university: "Universitas Pattimura",
      department: "Engineering",
    },
    {
      id: 178,
      fullName: "Melanie Horbart",
      avatar: "https://robohash.org/odioquiaincidunt.png?size=50x50&set=set1",
      university: "Yuan Ze University",
      department: "Services",
    },
    {
      id: 179,
      fullName: "Cris Woolerton",
      avatar: "https://robohash.org/sedsintrepellendus.png?size=50x50&set=set1",
      university: "Jazan University",
      department: "Support",
    },
    {
      id: 180,
      fullName: "Dagmar Damiata",
      avatar: "https://robohash.org/ipsaquimagni.png?size=50x50&set=set1",
      university: 'University of Shkodra "Luigj Gurakuqi"',
      department: "Business Development",
    },
    {
      id: 181,
      fullName: "Ilise Andreutti",
      avatar: "https://robohash.org/illototamat.png?size=50x50&set=set1",
      university: "Escuela Colombiana de Ingeniería Julio Garavito",
      department: "Services",
    },
    {
      id: 182,
      fullName: "Asa Pietsma",
      avatar:
        "https://robohash.org/assumendasitquaerat.png?size=50x50&set=set1",
      university:
        "Ecole Nationale Supérieure des Industries Textiles de Mulhouse",
      department: "Research and Development",
    },
    {
      id: 183,
      fullName: "Margo Jeaffreson",
      avatar: "https://robohash.org/esseeiusquasi.png?size=50x50&set=set1",
      university: "Nagoya University of Foreign Studies",
      department: "Research and Development",
    },
    {
      id: 184,
      fullName: "Justen Killford",
      avatar:
        "https://robohash.org/ettemporibuslaudantium.png?size=50x50&set=set1",
      university: "Kagoshima Women's College",
      department: "Services",
    },
    {
      id: 185,
      fullName: "Man Bauser",
      avatar:
        "https://robohash.org/voluptatesdolorquam.png?size=50x50&set=set1",
      university: "Kean University of New Jersey",
      department: "Legal",
    },
    {
      id: 186,
      fullName: "Electra Livingstone",
      avatar: "https://robohash.org/culpasedblanditiis.png?size=50x50&set=set1",
      university: "Shikoku Christian College",
      department: "Research and Development",
    },
    {
      id: 187,
      fullName: "Christophe Lutman",
      avatar:
        "https://robohash.org/adipisciutperspiciatis.png?size=50x50&set=set1",
      university: "Florida Metropolitan University, Tampa College Lakeland",
      department: "Legal",
    },
    {
      id: 188,
      fullName: "Sherline Dealtry",
      avatar: "https://robohash.org/sitvoluptasid.png?size=50x50&set=set1",
      university:
        "Balochistan University of Engineering and Technology Khuzdar",
      department: "Product Management",
    },
    {
      id: 189,
      fullName: "Lezlie Filippo",
      avatar: "https://robohash.org/eafaceretenetur.png?size=50x50&set=set1",
      university: "Amherst College",
      department: "Services",
    },
    {
      id: 190,
      fullName: "Maryl Chesher",
      avatar:
        "https://robohash.org/quiaoccaecatiinventore.png?size=50x50&set=set1",
      university: "United States Military Academy",
      department: "Engineering",
    },
    {
      id: 191,
      fullName: "Cherise Minnock",
      avatar:
        "https://robohash.org/blanditiisharumadipisci.png?size=50x50&set=set1",
      university: "Haramaya University",
      department: "Training",
    },
    {
      id: 192,
      fullName: "Hans Barns",
      avatar: "https://robohash.org/corruptieosoptio.png?size=50x50&set=set1",
      university: "American InterContinental University - Atlanta",
      department: "Support",
    },
    {
      id: 193,
      fullName: "Farrand Lenthall",
      avatar: "https://robohash.org/invelaut.png?size=50x50&set=set1",
      university: "İstanbul Şehir University",
      department: "Services",
    },
    {
      id: 194,
      fullName: "Roi Doyley",
      avatar: "https://robohash.org/seddelenitilibero.png?size=50x50&set=set1",
      university: "Arizona Christian University",
      department: "Training",
    },
    {
      id: 195,
      fullName: "Roosevelt Bunt",
      avatar: "https://robohash.org/possimusdoloremex.png?size=50x50&set=set1",
      university: "Poznan School of Banking",
      department: "Support",
    },
    {
      id: 196,
      fullName: "Shanta Harty",
      avatar: "https://robohash.org/dolorummagnamest.png?size=50x50&set=set1",
      university:
        "Institute of Management & Enteurpreneurship of South East Europe",
      department: "Training",
    },
    {
      id: 197,
      fullName: "Addia Jedrzej",
      avatar: "https://robohash.org/sintquosit.png?size=50x50&set=set1",
      university: "Minia University",
      department: "Research and Development",
    },
    {
      id: 198,
      fullName: "Deanne Bartul",
      avatar: "https://robohash.org/ullambeataeiste.png?size=50x50&set=set1",
      university: "Karpagam University",
      department: "Support",
    },
    {
      id: 199,
      fullName: "Verge Beckett",
      avatar: "https://robohash.org/isteutculpa.png?size=50x50&set=set1",
      university: "School of the Museum of Fine Arts",
      department: "Support",
    },
    {
      id: 200,
      fullName: "Howey Balazs",
      avatar: "https://robohash.org/numquamoccaecatiet.png?size=50x50&set=set1",
      university: "University of Texas at Brownsville",
      department: "Product Management",
    },
  ],
];
/*

id: 43,
      fullName: "Eda Cuckoo",
      avatar:
        "https://robohash.org/estquireprehenderit.png?size=50x50&set=set1",
      university: "Beijing University of Science and Technology",
      department: "Product Management",
*/
const fullNameTag = (fullName) => {
  return `<h2>${fullName}</h2>`;
};
const avatarTag = (avatar) => {
  return `<img src="${avatar}" alt="avatar" />`;
};
const departmentTag = (department) => {
  return `<h5>${department}</h5>`;
};
const universityTag = (university) => {
  return `<h4>${university}</h4>`;
};

const divTag = (v) => {
  return `
    <div class="box">
        <div class="imageBox">
            ${avatarTag(v.avatar)}
        </div
        
        <div>
          ${fullNameTag(v.fullName)}
          
          ${departmentTag(v.department)}
          ${universityTag(v.university)}
        </div>
    </div>
    
      
    `;
};
// const flattenedData = data.flat();
// flattenedData.forEach((v) =>
//   document.querySelector(".array").insertAdjacentHTML("beforeend", divTag(v))
// );
data.forEach((innerArray) => {
  innerArray.forEach((v) =>
    document.querySelector(".array").insertAdjacentHTML("beforeend", divTag(v))
  );
});

// data.forEach((avatar, department, fullName, uni))=>{
//     const array = document.querySelector(".array")
//     array.insertAdjacentHTML{
//         "beforeend",
//         `
//         <div class="box">
//             <div class="imageBox">
//                 <img src=${v.avatar} alt="">
//             </div>
//         </div>
//         <div class="right">
//             <img src="${v.avatar}" alt="">

//         </div>
//         <div class="right">
//             <div class="name"
//         </div
//         `
//     }
// })
