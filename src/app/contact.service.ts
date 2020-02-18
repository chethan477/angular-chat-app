import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [{
    "id": 1,
    "name": "Efrem Ife",
    "profile": "http://dummyimage.com/217x137.jpg/cc0000/ffffff",
    "msg": "Tephromela aglaea (Sommerf.) Hertel & Rambold",
    "date": "12/15/2019"
  }, {
    "id": 2,
    "name": "Nettie Durnian",
    "profile": "http://dummyimage.com/209x164.bmp/cc0000/ffffff",
    "msg": "Pluchea Cass.",
    "date": "6/3/2019"
  }, {
    "id": 3,
    "name": "Marlowe Witherbed",
    "profile": "http://dummyimage.com/245x149.bmp/5fa2dd/ffffff",
    "msg": "Baeomyces Pers.",
    "date": "6/11/2019"
  }, {
    "id": 4,
    "name": "Tris Lott",
    "profile": "http://dummyimage.com/165x161.jpg/5fa2dd/ffffff",
    "msg": "Aesandra butyracea (Roxb.) Baehni",
    "date": "12/20/2019"
  }, {
    "id": 5,
    "name": "Lorettalorna Blowing",
    "profile": "http://dummyimage.com/135x128.bmp/ff4444/ffffff",
    "msg": "Krigia Schreb.",
    "date": "5/6/2019"
  }, {
    "id": 6,
    "name": "Chelsie Cardoo",
    "profile": "http://dummyimage.com/249x183.bmp/dddddd/000000",
    "msg": "Erigeron acris L. ssp. politus (Fr.) Schinz & R. Keller",
    "date": "2/1/2020"
  }, {
    "id": 7,
    "name": "Phillip Willshear",
    "profile": "http://dummyimage.com/170x123.png/cc0000/ffffff",
    "msg": "Tamaulipa R.M. King & H. Rob.",
    "date": "2/7/2020"
  }, {
    "id": 8,
    "name": "Sidonia Romushkin",
    "profile": "http://dummyimage.com/185x161.png/cc0000/ffffff",
    "msg": "Glandularia bipinnatifida (Nutt.) Nutt. var. ciliata (Benth.) B.L. Turner",
    "date": "7/2/2019"
  }, {
    "id": 9,
    "name": "Jeanne Topliss",
    "profile": "http://dummyimage.com/196x106.bmp/dddddd/000000",
    "msg": "Phacelia cicutaria Greene",
    "date": "6/30/2019"
  }, {
    "id": 10,
    "name": "Mariejeanne Janson",
    "profile": "http://dummyimage.com/176x160.png/5fa2dd/ffffff",
    "msg": "Sticherus bifidus (Willd.) Ching",
    "date": "5/2/2019"
  }, {
    "id": 11,
    "name": "Laverna Gainor",
    "profile": "http://dummyimage.com/185x141.jpg/5fa2dd/ffffff",
    "msg": "Chaenactis fremontii A. Gray",
    "date": "12/13/2019"
  }, {
    "id": 12,
    "name": "Konstance Lamerton",
    "profile": "http://dummyimage.com/244x149.png/5fa2dd/ffffff",
    "msg": "Cylindropuntia ×kelvinensis (V.E. Grant & K.A. Grant) P.V. Heath",
    "date": "10/12/2019"
  }, {
    "id": 13,
    "name": "Boone Kelleway",
    "profile": "http://dummyimage.com/150x181.bmp/5fa2dd/ffffff",
    "msg": "Oreoxis humilis Raf.",
    "date": "3/18/2019"
  }, {
    "id": 14,
    "name": "Ced Locket",
    "profile": "http://dummyimage.com/218x105.bmp/dddddd/000000",
    "msg": "Astragalus oocalycis M.E. Jones",
    "date": "3/13/2019"
  }, {
    "id": 15,
    "name": "Jacquenetta Godney",
    "profile": "http://dummyimage.com/186x133.png/cc0000/ffffff",
    "msg": "Astragalus sparsiflorus A. Gray",
    "date": "9/13/2019"
  }, {
    "id": 16,
    "name": "Phillie Cleere",
    "profile": "http://dummyimage.com/214x226.png/5fa2dd/ffffff",
    "msg": "Quercus ×brittonii W.T. Davis (pro sp.)",
    "date": "10/6/2019"
  }, {
    "id": 17,
    "name": "Puff Welburn",
    "profile": "http://dummyimage.com/211x225.png/cc0000/ffffff",
    "msg": "Morisonia americana L.",
    "date": "11/22/2019"
  }, {
    "id": 18,
    "name": "Sven Cristoforo",
    "profile": "http://dummyimage.com/221x225.jpg/5fa2dd/ffffff",
    "msg": "Symphoricarpos oreophilus A. Gray var. utahensis (Rydb.) A. Nelson",
    "date": "11/12/2019"
  }, {
    "id": 19,
    "name": "Mischa Andreev",
    "profile": "http://dummyimage.com/112x127.bmp/ff4444/ffffff",
    "msg": "Loeskypnum Paul",
    "date": "6/17/2019"
  }, {
    "id": 20,
    "name": "Lowell Addicott",
    "profile": "http://dummyimage.com/168x219.jpg/5fa2dd/ffffff",
    "msg": "Oldenlandia L.",
    "date": "8/22/2019"
  }, {
    "id": 21,
    "name": "Gris Holtaway",
    "profile": "http://dummyimage.com/112x111.png/cc0000/ffffff",
    "msg": "Senecio quaylei T.M. Barkley",
    "date": "5/6/2019"
  }, {
    "id": 22,
    "name": "Gert Flory",
    "profile": "http://dummyimage.com/203x216.png/5fa2dd/ffffff",
    "msg": "Aquilegia eximia Van Houtte ex Planch.",
    "date": "10/14/2019"
  }, {
    "id": 23,
    "name": "Malina Hassekl",
    "profile": "http://dummyimage.com/159x215.png/ff4444/ffffff",
    "msg": "Linum macrocarpum C.M. Rogers",
    "date": "12/8/2019"
  }, {
    "id": 24,
    "name": "Adah Milmore",
    "profile": "http://dummyimage.com/208x133.bmp/cc0000/ffffff",
    "msg": "Sapindus L.",
    "date": "5/1/2019"
  }, {
    "id": 25,
    "name": "Riobard Bahde",
    "profile": "http://dummyimage.com/224x190.bmp/dddddd/000000",
    "msg": "Chaenotheca Th. Fr.",
    "date": "10/8/2019"
  }, {
    "id": 26,
    "name": "Phillida Simonaitis",
    "profile": "http://dummyimage.com/212x129.bmp/cc0000/ffffff",
    "msg": "Pedicularis lanceolata Michx.",
    "date": "10/5/2019"
  }, {
    "id": 27,
    "name": "Dyane Nickoles",
    "profile": "http://dummyimage.com/207x215.jpg/dddddd/000000",
    "msg": "Gahnia beecheyi H. Mann",
    "date": "8/4/2019"
  }, {
    "id": 28,
    "name": "Farrel Sears",
    "profile": "http://dummyimage.com/248x247.bmp/cc0000/ffffff",
    "msg": "Populus nigra L.",
    "date": "11/27/2019"
  }, {
    "id": 29,
    "name": "Billi Retallack",
    "profile": "http://dummyimage.com/225x202.jpg/5fa2dd/ffffff",
    "msg": "Kolkwitzia amabilis Graebn.",
    "date": "6/2/2019"
  }, {
    "id": 30,
    "name": "Giacobo Bess",
    "profile": "http://dummyimage.com/238x205.png/dddddd/000000",
    "msg": "Machaeranthera canescens (Pursh) A. Gray ssp. canescens var. incana (Lindl.) A. Gray",
    "date": "6/27/2019"
  }, {
    "id": 31,
    "name": "Alwyn Teodoro",
    "profile": "http://dummyimage.com/143x186.jpg/5fa2dd/ffffff",
    "msg": "Echinacea paradoxa (J.B.S. Norton) Britton var. paradoxa",
    "date": "11/12/2019"
  }, {
    "id": 32,
    "name": "Belva Ainsby",
    "profile": "http://dummyimage.com/158x123.png/ff4444/ffffff",
    "msg": "Aplectrum Torr.",
    "date": "11/23/2019"
  }, {
    "id": 33,
    "name": "Jaquith Huey",
    "profile": "http://dummyimage.com/237x147.bmp/5fa2dd/ffffff",
    "msg": "Lecania nylanderiana A. Massal.",
    "date": "11/18/2019"
  }, {
    "id": 34,
    "name": "Amandie Raisbeck",
    "profile": "http://dummyimage.com/152x230.png/5fa2dd/ffffff",
    "msg": "Podranea ricasoliana (Tanfani) Sprague",
    "date": "6/5/2019"
  }, {
    "id": 35,
    "name": "Rasia Kundert",
    "profile": "http://dummyimage.com/105x173.png/dddddd/000000",
    "msg": "Sisyrinchium pallidum Cholewa & Douglass M. Hend.",
    "date": "7/15/2019"
  }, {
    "id": 36,
    "name": "Camella Wainer",
    "profile": "http://dummyimage.com/162x143.bmp/cc0000/ffffff",
    "msg": "Richardia humistrata (Cham. & Schltdl.) Schult. & Schult. f.",
    "date": "7/7/2019"
  }, {
    "id": 37,
    "name": "Marabel Nial",
    "profile": "http://dummyimage.com/185x141.jpg/5fa2dd/ffffff",
    "msg": "Enemion Raf.",
    "date": "1/24/2020"
  }, {
    "id": 38,
    "name": "Rogerio Baukham",
    "profile": "http://dummyimage.com/243x210.jpg/cc0000/ffffff",
    "msg": "Phacelia hughesii N.D. Atwood",
    "date": "8/21/2019"
  }, {
    "id": 39,
    "name": "Kincaid Sinclaire",
    "profile": "http://dummyimage.com/154x166.jpg/cc0000/ffffff",
    "msg": "Cannabis sativa L. ssp. indica (Lam.) E. Small & Cronquist",
    "date": "6/28/2019"
  }, {
    "id": 40,
    "name": "Luther Kiffe",
    "profile": "http://dummyimage.com/206x228.bmp/cc0000/ffffff",
    "msg": "Calystegia subacaulis Hook. & Arn. ssp. subacaulis",
    "date": "9/21/2019"
  }, {
    "id": 41,
    "name": "Obidiah Makin",
    "profile": "http://dummyimage.com/229x229.png/dddddd/000000",
    "msg": "Salix ×ehrhartiana Sm. (pro sp.)",
    "date": "2/14/2019"
  }, {
    "id": 42,
    "name": "Emilia Goly",
    "profile": "http://dummyimage.com/185x204.bmp/ff4444/ffffff",
    "msg": "Sisyrinchium atlanticum E.P. Bicknell",
    "date": "9/13/2019"
  }, {
    "id": 43,
    "name": "Jordana Touret",
    "profile": "http://dummyimage.com/198x153.jpg/cc0000/ffffff",
    "msg": "Mirabilis glabra (S. Watson) Standl.",
    "date": "6/28/2019"
  }, {
    "id": 44,
    "name": "Alistair Teasdale",
    "profile": "http://dummyimage.com/247x115.jpg/dddddd/000000",
    "msg": "Tragia nepetifolia Cav.",
    "date": "9/11/2019"
  }, {
    "id": 45,
    "name": "Patrizio Masic",
    "profile": "http://dummyimage.com/201x110.jpg/ff4444/ffffff",
    "msg": "Primula cuneifolia Ledeb. ssp. saxifragifolia (Lehm.) W.W. Sm. & G. Forrest",
    "date": "8/12/2019"
  }, {
    "id": 46,
    "name": "Verla Shotboult",
    "profile": "http://dummyimage.com/208x170.png/5fa2dd/ffffff",
    "msg": "Carex multicaulis L.H. Bailey",
    "date": "7/2/2019"
  }, {
    "id": 47,
    "name": "Gal Dewicke",
    "profile": "http://dummyimage.com/152x247.jpg/dddddd/000000",
    "msg": "Thelidium olivaceum (Schaerer) Körb.",
    "date": "7/3/2019"
  }, {
    "id": 48,
    "name": "Paddie Laville",
    "profile": "http://dummyimage.com/108x201.png/5fa2dd/ffffff",
    "msg": "Agnorhiza bolanderi (A. Gray) W.A. Weber",
    "date": "11/12/2019"
  }, {
    "id": 49,
    "name": "Thedrick McKeurtan",
    "profile": "http://dummyimage.com/159x208.png/5fa2dd/ffffff",
    "msg": "Penstemon hirsutus (L.) Willd.",
    "date": "4/16/2019"
  }, {
    "id": 50,
    "name": "Marjie Bassford",
    "profile": "http://dummyimage.com/246x197.jpg/cc0000/ffffff",
    "msg": "Amelanchier ×intermedia Spach (pro sp.)",
    "date": "7/14/2019"
  }, {
    "id": 51,
    "name": "Jenilee Fransseni",
    "profile": "http://dummyimage.com/198x189.png/cc0000/ffffff",
    "msg": "Carex retrorsa Schwein.",
    "date": "4/16/2019"
  }, {
    "id": 52,
    "name": "Emelda Yantsev",
    "profile": "http://dummyimage.com/169x241.png/ff4444/ffffff",
    "msg": "Scutellaria potosina Brandegee ssp. potosina var. grahamiana B.L. Turner",
    "date": "7/29/2019"
  }, {
    "id": 53,
    "name": "Jedidiah Redding",
    "profile": "http://dummyimage.com/236x202.jpg/ff4444/ffffff",
    "msg": "Astragalus pleianthus (Shinners) Isely",
    "date": "5/16/2019"
  }, {
    "id": 54,
    "name": "Kelli Fernant",
    "profile": "http://dummyimage.com/137x125.bmp/cc0000/ffffff",
    "msg": "Chromolaena frustrata (B.L. Rob.) R.M. King & H. Rob.",
    "date": "1/19/2020"
  }, {
    "id": 55,
    "name": "Cahra Rosone",
    "profile": "http://dummyimage.com/201x196.bmp/ff4444/ffffff",
    "msg": "Corylus colurna L. var. colurna",
    "date": "12/5/2019"
  }, {
    "id": 56,
    "name": "Brandice Donwell",
    "profile": "http://dummyimage.com/239x187.png/cc0000/ffffff",
    "msg": "Rubus niveus Thunb.",
    "date": "6/20/2019"
  }, {
    "id": 57,
    "name": "Gabbie Pottinger",
    "profile": "http://dummyimage.com/126x179.jpg/5fa2dd/ffffff",
    "msg": "Rinodina exigua (Ach.) A. Gray",
    "date": "1/3/2020"
  }, {
    "id": 58,
    "name": "Stephanus Crewe",
    "profile": "http://dummyimage.com/182x176.jpg/dddddd/000000",
    "msg": "Plantago patagonica Jacq.",
    "date": "12/31/2019"
  }, {
    "id": 59,
    "name": "Derrick Trayte",
    "profile": "http://dummyimage.com/101x221.jpg/cc0000/ffffff",
    "msg": "Thelypteris serrata (Cav.) Alston",
    "date": "3/19/2019"
  }, {
    "id": 60,
    "name": "Ludvig Grzegorzewicz",
    "profile": "http://dummyimage.com/125x153.png/ff4444/ffffff",
    "msg": "Fissidens kochii H.A. Crum & L.E. Anderson",
    "date": "12/31/2019"
  }, {
    "id": 61,
    "name": "Rochell Robardley",
    "profile": "http://dummyimage.com/224x184.bmp/cc0000/ffffff",
    "msg": "Phlox hoodii Richardson ssp. muscoides (Nutt.) Wherry",
    "date": "1/14/2020"
  }, {
    "id": 62,
    "name": "Marcella Argrave",
    "profile": "http://dummyimage.com/108x105.jpg/ff4444/ffffff",
    "msg": "Telfairia pedata (Sm. ex Sims) Hook.",
    "date": "8/16/2019"
  }, {
    "id": 63,
    "name": "Darwin Zorzi",
    "profile": "http://dummyimage.com/208x120.png/cc0000/ffffff",
    "msg": "Lobelia ×speciosa Sweet var. schneckii Bowden (pro nm.)",
    "date": "10/22/2019"
  }, {
    "id": 64,
    "name": "Leland Swine",
    "profile": "http://dummyimage.com/194x123.jpg/dddddd/000000",
    "msg": "Carex arapahoensis Clokey",
    "date": "6/9/2019"
  }, {
    "id": 65,
    "name": "Sterne Berns",
    "profile": "http://dummyimage.com/135x165.png/ff4444/ffffff",
    "msg": "Acer circinatum Pursh",
    "date": "2/8/2020"
  }, {
    "id": 66,
    "name": "Neron Langforth",
    "profile": "http://dummyimage.com/113x127.jpg/dddddd/000000",
    "msg": "Sesamum alatum Thonn.",
    "date": "2/23/2019"
  }, {
    "id": 67,
    "name": "Francesca Rousell",
    "profile": "http://dummyimage.com/150x126.png/cc0000/ffffff",
    "msg": "Frangula sphaerosperma (Sw.) Kartesz & Gandhi ssp. longipes (M.C. Johnston & L.A. Johnston) Kartesz & Gandhi",
    "date": "3/27/2019"
  }, {
    "id": 68,
    "name": "Will Liepina",
    "profile": "http://dummyimage.com/140x116.png/cc0000/ffffff",
    "msg": "Argemone squarrosa Greene",
    "date": "12/23/2019"
  }, {
    "id": 69,
    "name": "Clarissa Lawford",
    "profile": "http://dummyimage.com/150x194.png/5fa2dd/ffffff",
    "msg": "Carex ×langeana Fernald (pro sp.)",
    "date": "4/9/2019"
  }, {
    "id": 70,
    "name": "Celesta Pesik",
    "profile": "http://dummyimage.com/118x206.jpg/5fa2dd/ffffff",
    "msg": "Desmodium sericophyllum Schltdl.",
    "date": "2/22/2019"
  }, {
    "id": 71,
    "name": "Ibby Rounds",
    "profile": "http://dummyimage.com/230x242.bmp/ff4444/ffffff",
    "msg": "Pteris cretica L. var. albolineata Hook.",
    "date": "12/23/2019"
  }, {
    "id": 72,
    "name": "Marshal Creese",
    "profile": "http://dummyimage.com/246x193.bmp/cc0000/ffffff",
    "msg": "Phyllanthus juglandifolius Willd.",
    "date": "10/18/2019"
  }, {
    "id": 73,
    "name": "Maryanna Normavell",
    "profile": "http://dummyimage.com/152x132.png/cc0000/ffffff",
    "msg": "Pseudocymopterus longiradiatus Mathias, Constance & W.L. Theobald",
    "date": "4/30/2019"
  }, {
    "id": 74,
    "name": "Heather O'Bruen",
    "profile": "http://dummyimage.com/158x142.png/5fa2dd/ffffff",
    "msg": "Sagittaria lancifolia L. ssp. lancifolia",
    "date": "8/24/2019"
  }, {
    "id": 75,
    "name": "Lucho Bernaldez",
    "profile": "http://dummyimage.com/140x193.png/dddddd/000000",
    "msg": "Peniocereus greggii (Engelm.) Britton & Rose var. transmontanus (Engelm.) Backeb.",
    "date": "5/7/2019"
  }, {
    "id": 76,
    "name": "Danyelle Ashtonhurst",
    "profile": "http://dummyimage.com/203x102.jpg/cc0000/ffffff",
    "msg": "Oligotrichum parallelum (Mitt.) Kindb.",
    "date": "6/30/2019"
  }, {
    "id": 77,
    "name": "Jeffrey Thorley",
    "profile": "http://dummyimage.com/154x248.bmp/cc0000/ffffff",
    "msg": "Briza humilis M. Bieb.",
    "date": "7/19/2019"
  }, {
    "id": 78,
    "name": "Hamnet Ostrich",
    "profile": "http://dummyimage.com/227x156.bmp/dddddd/000000",
    "msg": "Ludwigia glandulosa Walter ssp. brachycarpa (Torr. & A. Gray) Peng",
    "date": "12/26/2019"
  }, {
    "id": 79,
    "name": "Yvette Ludmann",
    "profile": "http://dummyimage.com/220x247.png/5fa2dd/ffffff",
    "msg": "Galium emeryense Dempster & Ehrend. ssp. emeryense",
    "date": "10/15/2019"
  }, {
    "id": 80,
    "name": "Inge Fossitt",
    "profile": "http://dummyimage.com/189x143.jpg/ff4444/ffffff",
    "msg": "Eleocharis quadrangulata (Michx.) Roem. & Schult.",
    "date": "4/13/2019"
  }, {
    "id": 81,
    "name": "Porter Marchment",
    "profile": "http://dummyimage.com/129x201.png/ff4444/ffffff",
    "msg": "Balsamorhiza macrolepis Sharp var. platylepis (Sharp) Ferris",
    "date": "2/24/2019"
  }, {
    "id": 82,
    "name": "Muffin Thying",
    "profile": "http://dummyimage.com/178x186.png/dddddd/000000",
    "msg": "Arctoparmelia subcentrifuga (Oksner) Hale",
    "date": "12/12/2019"
  }, {
    "id": 83,
    "name": "Waldon Brogiotti",
    "profile": "http://dummyimage.com/186x206.bmp/5fa2dd/ffffff",
    "msg": "Rondeletia pilosa Sw.",
    "date": "5/30/2019"
  }, {
    "id": 84,
    "name": "Gery Phant",
    "profile": "http://dummyimage.com/136x219.png/ff4444/ffffff",
    "msg": "Agropyron ×hybrid auct.",
    "date": "3/17/2019"
  }, {
    "id": 85,
    "name": "Lefty Hadcock",
    "profile": "http://dummyimage.com/153x192.png/cc0000/ffffff",
    "msg": "Velezia L.",
    "date": "11/6/2019"
  }, {
    "id": 86,
    "name": "Ahmed Faraker",
    "profile": "http://dummyimage.com/177x143.png/cc0000/ffffff",
    "msg": "Salvia regla Cav.",
    "date": "9/2/2019"
  }, {
    "id": 87,
    "name": "Pammy Riedel",
    "profile": "http://dummyimage.com/236x158.bmp/dddddd/000000",
    "msg": "Arabis rectissima Greene var. rectissima",
    "date": "10/20/2019"
  }, {
    "id": 88,
    "name": "Tracee Ludlow",
    "profile": "http://dummyimage.com/250x177.png/cc0000/ffffff",
    "msg": "Browallia americana L.",
    "date": "11/7/2019"
  }, {
    "id": 89,
    "name": "Libbey Greathead",
    "profile": "http://dummyimage.com/206x137.bmp/ff4444/ffffff",
    "msg": "Juglans microcarpa Berl. var. microcarpa",
    "date": "1/22/2020"
  }, {
    "id": 90,
    "name": "Harwell Tivenan",
    "profile": "http://dummyimage.com/232x187.bmp/cc0000/ffffff",
    "msg": "Priva lappulacea (L.) Pers.",
    "date": "6/22/2019"
  }, {
    "id": 91,
    "name": "Winnie Saffle",
    "profile": "http://dummyimage.com/142x236.jpg/dddddd/000000",
    "msg": "Schefflera J.R. Forst. & G. Forst.",
    "date": "8/8/2019"
  }, {
    "id": 92,
    "name": "Francklyn Kelley",
    "profile": "http://dummyimage.com/195x236.jpg/dddddd/000000",
    "msg": "Bahia absinthifolia Benth.",
    "date": "10/24/2019"
  }, {
    "id": 93,
    "name": "Townie Agronski",
    "profile": "http://dummyimage.com/116x123.jpg/ff4444/ffffff",
    "msg": "Crepis foetida L. var. foetida",
    "date": "2/21/2019"
  }, {
    "id": 94,
    "name": "Cody Spurier",
    "profile": "http://dummyimage.com/244x246.jpg/cc0000/ffffff",
    "msg": "Acacia pinetorum F.J. Herm.",
    "date": "11/2/2019"
  }, {
    "id": 95,
    "name": "Kerwinn Jenckes",
    "profile": "http://dummyimage.com/245x118.bmp/dddddd/000000",
    "msg": "Xanthium L.",
    "date": "7/5/2019"
  }, {
    "id": 96,
    "name": "Terence Merck",
    "profile": "http://dummyimage.com/210x183.jpg/5fa2dd/ffffff",
    "msg": "Taxodium ascendens Brongn.",
    "date": "4/21/2019"
  }, {
    "id": 97,
    "name": "Curran Jirick",
    "profile": "http://dummyimage.com/141x196.png/dddddd/000000",
    "msg": "Tillandsia polystachia (L.) L.",
    "date": "11/29/2019"
  }, {
    "id": 98,
    "name": "Claude Rambadt",
    "profile": "http://dummyimage.com/218x187.bmp/dddddd/000000",
    "msg": "Trapelia mooreana (Carroll) P. James",
    "date": "7/15/2019"
  }, {
    "id": 99,
    "name": "Sisile Keightley",
    "profile": "http://dummyimage.com/102x233.bmp/dddddd/000000",
    "msg": "Buchnera pusilla Kunth",
    "date": "4/13/2019"
  }, {
    "id": 100,
    "name": "Meier Bollans",
    "profile": "http://dummyimage.com/128x110.bmp/cc0000/ffffff",
    "msg": "Artemisia arctica Less. ssp. comata (Rydb.) Hultén",
    "date": "8/21/2019"
  }];

  constructor() { }

  getAll() {
    return this.contacts;
  }
}
