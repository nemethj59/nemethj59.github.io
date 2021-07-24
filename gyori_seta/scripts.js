let aktualis = 0;

let kep1 = {nev: "./Kepek/gyor_kep_1.jpg", 
    cim: "Városháza",
    leiras: "Győr egyik jelképe. " +
    "Neobarokk stílusú, U alakú, műemlék épület. " +
    "A legforgalmasabb ponton, a város kelet-nyugati és észak-déli tengelyeinek metszéspontjában áll."};

let kep2 = {nev: "./Kepek/gyor_kep_2.jpg",
    cim: "Káptalandomb",
    leiras: "A Duna és Rába találkozásánál fekvő hordalékkúp " +
    "Győr legősibb része, mai képe majd három évezredes fejlődés eredménye. " +
    "2020-ban nemzeti emlékhellyé nyilvánították."};

let kep3 = {nev: "./Kepek/gyor_kep_3.jpg",
    cim: "Püspökvár",
    leiras: "Az ezeréves győri püspökség székhelyének tetejéről csodás a panoráma, " +
    "pincéje pedig a Boldog Apor Vilmos életét bemutató kiállításnak ad otthont. " +
    "Éke a XIII. századi lakótorony."};

let kep4 = {nev: "./Kepek/gyor_kep_4.jpg",
    cim: "Székesegyház",
    leiras: "A székesegyházat Szent István király alapította, " +
    "és 1996-ban II. János Pál pápa emelte bazilika rangra. " +
    "Itt őrzik a középkori ötvösművészet remekét, a Szent László hermát."};

let kep5 = {nev: "./Kepek/gyor_kep_5.jpg",
    cim: "A csónakos szobor",
    leiras: "A sétálóutca közepén látható Paulikovics Iván 1997-es alkotása. " +
    "A szobor egyaránt nagy népszerűségnek örvend a győriek és az idelátogatók körében is."};

let kep6 = {nev: "./Kepek/gyor_kep_6.jpg",
    cim: "Széchenyi tér",
    leiras: "Győr barokk főtere. Jórészt 17–18. századi épületek keretezik. " +
    "Különösen az északi oldal barokk palotái és a déli oldalon a bencések " +
    "épületegyüttese figyelemreméltó."};

let kep7 = {nev: "./Kepek/gyor_kep_7.jpg",
    cim: "Széchenyi István Egyetem",
    leiras: "A Győrben 1968-ban megalakult Közlekedési és Távközlési Műszaki Főiskola " +
    "1986-ban vette fel a Széchenyi István nevet, majd 2002-ben egyetemi rangot szerzett."};

let kep8 = {nev: "./Kepek/gyor_kep_8.jpg",
    cim: "Színház",
    leiras: "A városközpontban álló színház építését 1973-ban kezdték el és 1978-ban avatták fel." +
    " A színház Kisfaludy Károly nevét viselte. " +
    "1992. január 1-jétől Győri Nemzeti Színház a neve."};

let kepek_tomb = [kep1,kep2,kep3,kep4,kep5,kep6,kep7,kep8]

function aktualis_kiir(aktualis) {
    console.log(kepek_tomb[aktualis].nev);
    console.log(kepek_tomb[aktualis].cim);
    console.log(kepek_tomb[aktualis].leiras);
    $("#kontener_kicsi button").css("box-shadow","3px 3px dimgrey");
    $("#kk"+aktualis).css("box-shadow","5px 5px black");
    $("#nagykep").css("background-image","url(" + kepek_tomb[aktualis].nev +")");
    $("#fej_szoveg").text(kepek_tomb[aktualis].cim);
    $("#leiras").text(kepek_tomb[aktualis].leiras);
}

aktualis_kiir(aktualis);

$("#kk7").on("click" , () => {aktualis = 7; aktualis_kiir(aktualis);});

$("#kk6").on("click" , () => {aktualis = 6; aktualis_kiir(aktualis);});

$("#kk5").on("click" , () => {aktualis = 5; aktualis_kiir(aktualis);});

$("#kk4").on("click" , () => {aktualis = 4; aktualis_kiir(aktualis);});

$("#kk3").on("click" , () => {aktualis = 3; aktualis_kiir(aktualis);});

$("#kk2").on("click" , () => {aktualis = 2; aktualis_kiir(aktualis);});

$("#kk1").on("click" , () => {aktualis = 1; aktualis_kiir(aktualis);});

$("#kk0").on("click" , () => {aktualis = 0; aktualis_kiir(aktualis);});

$("#bal_nyil").on("click" , () => {
    aktualis = aktualis - 1;
    if (aktualis < 0) {aktualis = 7;};
    aktualis_kiir(aktualis);});

$("#jobb_nyil").on("click" , () => {
    aktualis = aktualis + 1;
    if (aktualis > 7) {aktualis = 0;};
    aktualis_kiir(aktualis);});