const mongoose = require('mongoose');
const { Schema } = mongoose;

const parkingSchema = new Schema({
    name: {type: String, default: "unnamed"},
    poly_points: {type: [{latitude: Number, longitude: Number}], required: true},
    zone: {type: String, default: "None"},
    price: {type: Number, default: 0},
    free_spaces: {type: Number, default: 0},
    total_spaces: {type: Number, required: true},
});

module.exports = [
    {
        name: "V1",
        poly_points: [
            {latitude: 45.7539497, longitude: 21.2262694},
            {latitude: 45.75246, longitude: 21.2260334},
            {latitude: 45.7520408, longitude: 21.2275247},
            {latitude: 45.7536503, longitude: 21.2280826},
            {latitude: 45.7539497, longitude: 21.2262694},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "V1",
        poly_points: [
            {latitude: 45.753029, longitude: 21.2269882},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "V2",
        poly_points: [
            {latitude: 45.7557129, longitude: 21.2289377},
            {latitude: 45.7537745, longitude: 21.2283511},
            {latitude: 45.7534901, longitude: 21.2284316},
            {latitude: 45.7532356, longitude: 21.2287695},
            {latitude: 45.7529586, longitude: 21.229778},
            {latitude: 45.752895, longitude: 21.2307114},
            {latitude: 45.7529811, longitude: 21.2317307},
            {latitude: 45.7541039, longitude: 21.2328652},
            {latitude: 45.7554663, longitude: 21.2335277},
            {latitude: 45.7556385, longitude: 21.2303895},
            {latitude: 45.7557129, longitude: 21.2289377},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 11
    },
    {
        name: "V2",
        poly_points: [
            {latitude: 45.7538045, longitude: 21.2295634},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "V3",
        poly_points: [
            {latitude: 45.7540815, longitude: 21.2259908},
            {latitude: 45.7539317, longitude: 21.2281257},
            {latitude: 45.7559678, longitude: 21.2282008},
            {latitude: 45.7596357, longitude: 21.2283296},
            {latitude: 45.7575698, longitude: 21.2220854},
            {latitude: 45.7558024, longitude: 21.2233797},
            {latitude: 45.7545893, longitude: 21.2231041},
            {latitude: 45.7532115, longitude: 21.2245667},
            {latitude: 45.7540815, longitude: 21.2259908},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 9
    },
    {
        name: "V3",
        poly_points: [
            {latitude: 45.7572105, longitude: 21.2260765},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "V4",
        poly_points: [
            {latitude: 45.7535912, longitude: 21.2282331},
            {latitude: 45.7540815, longitude: 21.2259908},
            {latitude: 45.7504057, longitude: 21.2217099},
            {latitude: 45.749455, longitude: 21.2255402},
            {latitude: 45.7513041, longitude: 21.2271602},
            {latitude: 45.7524028, longitude: 21.2279112},
            {latitude: 45.7535912, longitude: 21.2282331},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "V4",
        poly_points: [
            {latitude: 45.7514459, longitude: 21.2253086},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "V5",
        poly_points: [
            {latitude: 45.7596203, longitude: 21.2286587},
            {latitude: 45.7557728, longitude: 21.22853},
            {latitude: 45.7554722, longitude: 21.2337426},
            {latitude: 45.7574196, longitude: 21.2340231},
            {latitude: 45.7585499, longitude: 21.2326606},
            {latitude: 45.7593322, longitude: 21.2310137},
            {latitude: 45.7596203, longitude: 21.2286587},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "V5",
        poly_points: [
            {latitude: 45.7573148, longitude: 21.2315313},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "V6",
        poly_points: [
            {latitude: 45.7623636, longitude: 21.2477092},
            {latitude: 45.7615552, longitude: 21.24809},
            {latitude: 45.7609152, longitude: 21.2483851},
            {latitude: 45.7605972, longitude: 21.2485245},
            {latitude: 45.760672, longitude: 21.2487445},
            {latitude: 45.7624485, longitude: 21.2480307},
            {latitude: 45.7623636, longitude: 21.2477092},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "V6",
        poly_points: [
            {latitude: 45.7615926, longitude: 21.2482563},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "P-ta Badea Cartan",
        poly_points: [
            {latitude: 45.76228, longitude: 21.2479823},
            {latitude: 45.7619058, longitude: 21.2481218},
            {latitude: 45.7616214, longitude: 21.2481325},
            {latitude: 45.7607007, longitude: 21.2485724},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bratianu, Ionel I.C., P-ta.",
        poly_points: [
            {latitude: 45.7574634, longitude: 21.2319884},
            {latitude: 45.7576599, longitude: 21.2319857},
            {latitude: 45.7580678, longitude: 21.2318945},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Piata Huniade (Modex) - tarif progresiv",
        poly_points: [
            {latitude: 45.7537243, longitude: 21.2274769},
            {latitude: 45.7537804, longitude: 21.2272033},
            {latitude: 45.7538702, longitude: 21.226463},
            {latitude: 45.7538104, longitude: 21.2263396},
            {latitude: 45.7537018, longitude: 21.2263718},
            {latitude: 45.7536344, longitude: 21.2269994},
            {latitude: 45.7535858, longitude: 21.2275466},
            {latitude: 45.7537243, longitude: 21.2274769},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "Str. Nicolaus Lenau(Hotel Central) - tarif progresiv",
        poly_points: [
            {latitude: 45.7522795, longitude: 21.2275064},
            {latitude: 45.7525826, longitude: 21.226294},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. I. C. Bratianu - tarif progresiv",
        poly_points: [
            {latitude: 45.7532975, longitude: 21.2312347},
            {latitude: 45.7532938, longitude: 21.2311488},
            {latitude: 45.7532751, longitude: 21.2307787},
            {latitude: 45.7533387, longitude: 21.2299418},
            {latitude: 45.7534623, longitude: 21.2290943},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Str. Nicolaus Lenau(Hotel Central)- tarif progresiv",
        poly_points: [
            {latitude: 45.7521971, longitude: 21.2274688},
            {latitude: 45.7525115, longitude: 21.2262619},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Telbisz, Carol - tarif progresiv",
        poly_points: [
            {latitude: 45.7535147, longitude: 21.2287724},
            {latitude: 45.7540761, longitude: 21.2289923},
            {latitude: 45.7545402, longitude: 21.2291747},
            {latitude: 45.7548584, longitude: 21.2292928},
            {latitude: 45.7549594, longitude: 21.2293464},
            {latitude: 45.7550193, longitude: 21.2294269},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Str. Proclamatia de la Timisoara - tarif progresiv",
        poly_points: [
            {latitude: 45.7558652, longitude: 21.2321091},
            {latitude: 45.7559288, longitude: 21.2308162},
            {latitude: 45.7559887, longitude: 21.2298077},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Proclamatia de la Timisoara - tarif progresiv",
        poly_points: [
            {latitude: 45.7558166, longitude: 21.2299016},
            {latitude: 45.7557791, longitude: 21.2305105},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Mihai I, Regele (Blvd. Republicii) - tarif progresiv",
        poly_points: [
            {latitude: 45.753618, longitude: 21.2237909},
            {latitude: 45.7538726, longitude: 21.2248745},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Hector",
        poly_points: [
            {latitude: 45.7557754, longitude: 21.2336165},
            {latitude: 45.7562133, longitude: 21.2337291},
            {latitude: 45.7568758, longitude: 21.2337399},
            {latitude: 45.7570929, longitude: 21.2336916},
            {latitude: 45.7572051, longitude: 21.2337667},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Mihai I, Regele (Dima Gheorghe)",
        poly_points: [
            {latitude: 45.758167, longitude: 21.2255939},
            {latitude: 45.7578525, longitude: 21.2252506},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Sfantul Gheorghe, Piata - tarif progresiv",
        poly_points: [
            {latitude: 45.7559981, longitude: 21.22962},
            {latitude: 45.7560318, longitude: 21.229105},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Oituz",
        poly_points: [
            {latitude: 45.7591476, longitude: 21.2310416},
            {latitude: 45.7593085, longitude: 21.230607},
            {latitude: 45.7593497, longitude: 21.2304354},
            {latitude: 45.7593684, longitude: 21.2303174},
            {latitude: 45.7594021, longitude: 21.2299365},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Str. Oituz",
        poly_points: [
            {latitude: 45.7594882, longitude: 21.2289709},
            {latitude: 45.7594133, longitude: 21.2298614},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Oituz",
        poly_points: [
            {latitude: 45.7590091, longitude: 21.231401},
            {latitude: 45.7590952, longitude: 21.2311649},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Oituz",
        poly_points: [
            {latitude: 45.7592337, longitude: 21.2304997},
            {latitude: 45.7590653, longitude: 21.2309396},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Oituz",
        poly_points: [
            {latitude: 45.7593534, longitude: 21.2292606},
            {latitude: 45.7592936, longitude: 21.2300277},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Oituz",
        poly_points: [
            {latitude: 45.7590054, longitude: 21.2310737},
            {latitude: 45.7587658, longitude: 21.2316638},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. 20 Decembrie 1989",
        poly_points: [
            {latitude: 45.7516019, longitude: 21.2274206},
            {latitude: 45.7526051, longitude: 21.2278873},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Gheorghe Dima",
        poly_points: [
            {latitude: 45.7586087, longitude: 21.2258649},
            {latitude: 45.7585113, longitude: 21.2257361},
            {latitude: 45.758414, longitude: 21.2254786},
            {latitude: 45.7581745, longitude: 21.2251353},
            {latitude: 45.7579125, longitude: 21.224792},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Str. Paris",
        poly_points: [
            {latitude: 45.7550942, longitude: 21.2233007},
            {latitude: 45.7548022, longitude: 21.2233409},
            {latitude: 45.7543306, longitude: 21.223475},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Blv. Regele Ferdinand I",
        poly_points: [
            {latitude: 45.7502132, longitude: 21.2254035},
            {latitude: 45.7498314, longitude: 21.2255377},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Tepes, Voda, P-ta.",
        poly_points: [
            {latitude: 45.7574128, longitude: 21.2308642},
            {latitude: 45.7573585, longitude: 21.2318124},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Blv. Regele Ferdinand I",
        poly_points: [
            {latitude: 45.7505988, longitude: 21.2250978},
            {latitude: 45.7504603, longitude: 21.2251782},
            {latitude: 45.7497191, longitude: 21.2254143},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Brediceanu, Coriolan – V3",
        poly_points: [
            {latitude: 45.7562202, longitude: 21.2232671},
            {latitude: 45.7561641, longitude: 21.2241093},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Eminescu, Mihai",
        poly_points: [
            {latitude: 45.7515388, longitude: 21.2269123},
            {latitude: 45.7514939, longitude: 21.2272074},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Tepes, Voda, P-ta.",
        poly_points: [
            {latitude: 45.7574802, longitude: 21.2308575},
            {latitude: 45.75741, longitude: 21.2318191},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7510779, longitude: 21.2232149},
            {latitude: 45.750887, longitude: 21.2228125},
            {latitude: 45.7504191, longitude: 21.2219703},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Eminescu, Mihai",
        poly_points: [
            {latitude: 45.7515716, longitude: 21.2271752},
            {latitude: 45.7515997, longitude: 21.2269284},
            {latitude: 45.7517681, longitude: 21.2262713},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "P-ţa. 700",
        poly_points: [
            {latitude: 45.7568271, longitude: 21.2235475},
            {latitude: 45.7564528, longitude: 21.2233973},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "P-ta 700",
        poly_points: [
            {latitude: 45.7573885, longitude: 21.2225175},
            {latitude: 45.7572239, longitude: 21.223408},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. I.C. Bratianu - tarif progresiv",
        poly_points: [
            {latitude: 45.7532863, longitude: 21.2288582},
            {latitude: 45.7531553, longitude: 21.2298292},
            {latitude: 45.7531254, longitude: 21.230135},
            {latitude: 45.7530805, longitude: 21.2308699},
            {latitude: 45.7530805, longitude: 21.2313527},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Proclamatia de la Timisoara",
        poly_points: [
            {latitude: 45.7557866, longitude: 21.2334609},
            {latitude: 45.7558577, longitude: 21.2323183},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Martin Luther",
        poly_points: [
            {latitude: 45.7572424, longitude: 21.2323467},
            {latitude: 45.7564938, longitude: 21.2322823},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Foch, Ferdinand, Maresal - tarif progresiv",
        poly_points: [
            {latitude: 45.7551807, longitude: 21.2296142},
            {latitude: 45.7550759, longitude: 21.2295914},
            {latitude: 45.7550076, longitude: 21.2305181},
            {latitude: 45.7551087, longitude: 21.2305395},
            {latitude: 45.7551807, longitude: 21.2296142},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Labirint",
        poly_points: [
            {latitude: 45.7637303, longitude: 21.2133007},
            {latitude: 45.7628325, longitude: 21.2125781},
            {latitude: 45.7627801, longitude: 21.2126934},
            {latitude: 45.763697, longitude: 21.2134042},
            {latitude: 45.7637303, longitude: 21.2133007},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Nicoara, Elena, Martir",
        poly_points: [
            {latitude: 45.7321948, longitude: 21.2390312},
            {latitude: 45.7318129, longitude: 21.2390044},
            {latitude: 45.7317268, longitude: 21.2401578},
            {latitude: 45.7320338, longitude: 21.2401953},
            {latitude: 45.7320113, longitude: 21.2406835},
            {latitude: 45.7321199, longitude: 21.2407049},
            {latitude: 45.7321948, longitude: 21.2390312},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Grozavescu, Traian",
        poly_points: [
            {latitude: 45.7542065, longitude: 21.2345897},
            {latitude: 45.7535702, longitude: 21.2358074},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Herman, Sporer, Martir",
        poly_points: [
            {latitude: 45.7215984, longitude: 21.2057346},
            {latitude: 45.7243547, longitude: 21.2041521},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Lalelelor",
        poly_points: [
            {latitude: 45.7629578, longitude: 21.2590318},
            {latitude: 45.762838, longitude: 21.2589514},
            {latitude: 45.7625274, longitude: 21.2600457},
            {latitude: 45.7630177, longitude: 21.2603622},
            {latitude: 45.7630326, longitude: 21.2601208},
            {latitude: 45.7630326, longitude: 21.2599009},
            {latitude: 45.7629578, longitude: 21.2590318},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Mihai I, Regele (Sfantul Ioan)",
        poly_points: [
            {latitude: 45.7574883, longitude: 21.2249982},
            {latitude: 45.757129, longitude: 21.2249553},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "R1",
        poly_points: [
            {latitude: 45.7581732, longitude: 21.2297161},
            {latitude: 45.7573423, longitude: 21.2305852},
            {latitude: 45.7579561, longitude: 21.2318083},
            {latitude: 45.758832, longitude: 21.2318512},
            {latitude: 45.7605161, longitude: 21.2282249},
            {latitude: 45.7581732, longitude: 21.2297161},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "R1",
        poly_points: [
            {latitude: 45.7587945, longitude: 21.2305315},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "R2",
        poly_points: [
            {latitude: 45.7570189, longitude: 21.2246685},
            {latitude: 45.7566147, longitude: 21.218081},
            {latitude: 45.7563601, longitude: 21.218081},
            {latitude: 45.751644, longitude: 21.2230592},
            {latitude: 45.7528118, longitude: 21.2246256},
            {latitude: 45.7565548, longitude: 21.2249475},
            {latitude: 45.7575204, longitude: 21.2251728},
            {latitude: 45.7575784, longitude: 21.225036},
            {latitude: 45.7575915, longitude: 21.2248885},
            {latitude: 45.7570189, longitude: 21.2246685},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 10
    },
    {
        name: "R2",
        poly_points: [
            {latitude: 45.7554376, longitude: 21.2213649},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "R3",
        poly_points: [
            {latitude: 45.7493857, longitude: 21.2278409},
            {latitude: 45.7511075, longitude: 21.2340637},
            {latitude: 45.7526796, longitude: 21.2325831},
            {latitude: 45.7534432, longitude: 21.2286992},
            {latitude: 45.7529341, longitude: 21.2282057},
            {latitude: 45.7521916, longitude: 21.2277709},
            {latitude: 45.751464, longitude: 21.2272718},
            {latitude: 45.7493857, longitude: 21.2278409},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "R3",
        poly_points: [
            {latitude: 45.7520698, longitude: 21.2298454},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "R4",
        poly_points: [
            {latitude: 45.7513133, longitude: 21.2341127},
            {latitude: 45.7525261, longitude: 21.2362156},
            {latitude: 45.7549665, longitude: 21.2387476},
            {latitude: 45.7556702, longitude: 21.2388763},
            {latitude: 45.755745, longitude: 21.2381575},
            {latitude: 45.7592033, longitude: 21.2377391},
            {latitude: 45.7580206, longitude: 21.2342093},
            {latitude: 45.7555579, longitude: 21.2338874},
            {latitude: 45.7553408, longitude: 21.2335763},
            {latitude: 45.7539559, longitude: 21.2329969},
            {latitude: 45.7531325, longitude: 21.2325141},
            {latitude: 45.7513133, longitude: 21.2341127},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 12
    },
    {
        name: "R4",
        poly_points: [
            {latitude: 45.7544834, longitude: 21.2351669},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "R5",
        poly_points: [
            {latitude: 45.7619866, longitude: 21.232464},
            {latitude: 45.7590375, longitude: 21.2319276},
            {latitude: 45.7586034, longitude: 21.2330004},
            {latitude: 45.7580262, longitude: 21.2341691},
            {latitude: 45.7625106, longitude: 21.2476346},
            {latitude: 45.7644865, longitude: 21.2457678},
            {latitude: 45.7627202, longitude: 21.2376997},
            {latitude: 45.7619866, longitude: 21.232464},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "R5",
        poly_points: [
            {latitude: 45.7617771, longitude: 21.2401888},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "R6",
        poly_points: [
            {latitude: 45.7592097, longitude: 21.237807},
            {latitude: 45.7557963, longitude: 21.2382468},
            {latitude: 45.7556915, longitude: 21.2390193},
            {latitude: 45.7560658, longitude: 21.2404677},
            {latitude: 45.7577276, longitude: 21.2417015},
            {latitude: 45.7586932, longitude: 21.2430855},
            {latitude: 45.7593968, longitude: 21.2444481},
            {latitude: 45.760542, longitude: 21.2485251},
            {latitude: 45.7625106, longitude: 21.2476346},
            {latitude: 45.7592097, longitude: 21.237807},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 10
    },
    {
        name: "R6",
        poly_points: [
            {latitude: 45.7596289, longitude: 21.2422165},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "Borza, Alexandru, Acad.",
        poly_points: [
            {latitude: 45.7512984, longitude: 21.2336773},
            {latitude: 45.750983, longitude: 21.2329196},
            {latitude: 45.7507276, longitude: 21.2322357},
            {latitude: 45.7506134, longitude: 21.2318266},
            {latitude: 45.7504889, longitude: 21.2313465},
            {latitude: 45.7504262, longitude: 21.2311038},
            {latitude: 45.7503607, longitude: 21.2307215},
            {latitude: 45.7502756, longitude: 21.2302495},
            {latitude: 45.750196, longitude: 21.2298069},
            {latitude: 45.7501118, longitude: 21.2293335},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 10
    },
    {
        name: "Popa Sapca",
        poly_points: [
            {latitude: 45.7599198, longitude: 21.232568},
            {latitude: 45.7614542, longitude: 21.2327397},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Popa Sapca",
        poly_points: [
            {latitude: 45.7598, longitude: 21.2327182},
            {latitude: 45.7617611, longitude: 21.2329113},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Liviu Gabor",
        poly_points: [
            {latitude: 45.7541149, longitude: 21.2224824},
            {latitude: 45.7541317, longitude: 21.2227963},
            {latitude: 45.7541467, longitude: 21.2229357},
            {latitude: 45.7541673, longitude: 21.2231141},
            {latitude: 45.7541776, longitude: 21.2231939},
            {latitude: 45.7541865, longitude: 21.2232455},
            {latitude: 45.7541954, longitude: 21.2233159},
            {latitude: 45.7542071, longitude: 21.2233649},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "Liviu Gabor",
        poly_points: [
            {latitude: 45.7541418, longitude: 21.2224741},
            {latitude: 45.7541615, longitude: 21.2227369},
            {latitude: 45.7541736, longitude: 21.2229046},
            {latitude: 45.7541848, longitude: 21.2230306},
            {latitude: 45.7542017, longitude: 21.2231808},
            {latitude: 45.7542204, longitude: 21.2233069},
            {latitude: 45.7542298, longitude: 21.2233578},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Str. Zurobara",
        poly_points: [
            {latitude: 45.7603789, longitude: 21.2340617},
            {latitude: 45.7591663, longitude: 21.2339437},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Aurel Popovici",
        poly_points: [
            {latitude: 45.7606334, longitude: 21.2348717},
            {latitude: 45.7597052, longitude: 21.2355423},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Aurel Popovici",
        poly_points: [
            {latitude: 45.7617487, longitude: 21.2341046},
            {latitude: 45.7608018, longitude: 21.2347591},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Aurel Popovici",
        poly_points: [
            {latitude: 45.7608056, longitude: 21.2349147},
            {latitude: 45.7617449, longitude: 21.2342709},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Aurel Popovici",
        poly_points: [
            {latitude: 45.7597314, longitude: 21.2356818},
            {latitude: 45.7606933, longitude: 21.2349898},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7605847, longitude: 21.2408209},
            {latitude: 45.7597838, longitude: 21.2385195},
            {latitude: 45.7592786, longitude: 21.2370551},
            {latitude: 45.7589904, longitude: 21.236186},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7582868, longitude: 21.2349415},
            {latitude: 45.7586423, longitude: 21.23595},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7586798, longitude: 21.2360626},
            {latitude: 45.7591439, longitude: 21.2374145},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7592824, longitude: 21.237865},
            {latitude: 45.7600795, longitude: 21.2401342},
            {latitude: 45.7604239, longitude: 21.2411212},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7589492, longitude: 21.236068},
            {latitude: 45.7584777, longitude: 21.2347054},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7615597, longitude: 21.243664},
            {latitude: 45.7621323, longitude: 21.2453565},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7611106, longitude: 21.242339},
            {latitude: 45.7615166, longitude: 21.243546},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Valeriu Braniste",
        poly_points: [
            {latitude: 45.758167, longitude: 21.2412072},
            {latitude: 45.7586386, longitude: 21.240263},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Valeriu Braniste",
        poly_points: [
            {latitude: 45.7585487, longitude: 21.2401879},
            {latitude: 45.7580734, longitude: 21.2411481},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Semenic",
        poly_points: [
            {latitude: 45.7579518, longitude: 21.2394127},
            {latitude: 45.7578433, longitude: 21.2396649},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Nicolae Iorga",
        poly_points: [
            {latitude: 45.7564023, longitude: 21.2397105},
            {latitude: 45.7567092, longitude: 21.2389487},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Nicolae Iorga",
        poly_points: [
            {latitude: 45.7563013, longitude: 21.2397373},
            {latitude: 45.7567335, longitude: 21.238651},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Badea Cartan",
        poly_points: [
            {latitude: 45.761438, longitude: 21.2480655},
            {latitude: 45.7608523, longitude: 21.2483284},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7621323, longitude: 21.2453565},
            {latitude: 45.7615597, longitude: 21.243664},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Take Ionescu",
        poly_points: [
            {latitude: 45.7615166, longitude: 21.243546},
            {latitude: 45.7611106, longitude: 21.242339},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bucuresti",
        poly_points: [
            {latitude: 45.7606634, longitude: 21.2368316},
            {latitude: 45.7614399, longitude: 21.2391061},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Patriarh Miron Cristea",
        poly_points: [
            {latitude: 45.7524329, longitude: 21.2288797},
            {latitude: 45.7528297, longitude: 21.2287939},
            {latitude: 45.7532901, longitude: 21.2287134},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Patriarh Miron Cristea",
        poly_points: [
            {latitude: 45.7516094, longitude: 21.2290299},
            {latitude: 45.7523019, longitude: 21.2288958},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Maximilian Robespierre",
        poly_points: [
            {latitude: 45.7523482, longitude: 21.228922},
            {latitude: 45.7524305, longitude: 21.2294209},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Blv. Mihai Eminescu",
        poly_points: [
            {latitude: 45.7526088, longitude: 21.2325007},
            {latitude: 45.7524217, longitude: 21.2320125},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Blv. Mihai Eminescu",
        poly_points: [
            {latitude: 45.7525302, longitude: 21.232608},
            {latitude: 45.7520736, longitude: 21.2313956},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Blv. Mihai Eminescu",
        poly_points: [
            {latitude: 45.7520436, longitude: 21.2312722},
            {latitude: 45.7518303, longitude: 21.2306178},
            {latitude: 45.7516244, longitude: 21.2297809},
            {latitude: 45.7514822, longitude: 21.229046},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Blv. Mihai Eminescu",
        poly_points: [
            {latitude: 45.7515869, longitude: 21.228869},
            {latitude: 45.7515682, longitude: 21.2276298},
            {latitude: 45.7515832, longitude: 21.2274099},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Blv. Mihai Eminescu",
        poly_points: [
            {latitude: 45.752403, longitude: 21.2319535},
            {latitude: 45.7521634, longitude: 21.2313259},
            {latitude: 45.7518977, longitude: 21.2304515},
            {latitude: 45.7517142, longitude: 21.2296683},
            {latitude: 45.7515945, longitude: 21.2290674},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Blv. Mihai Eminescu",
        poly_points: [
            {latitude: 45.751484, longitude: 21.2288931},
            {latitude: 45.7514784, longitude: 21.2276083},
            {latitude: 45.7514934, longitude: 21.2273455},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Gheorghe Andrasiu",
        poly_points: [
            {latitude: 45.7520174, longitude: 21.2312829},
            {latitude: 45.7512838, longitude: 21.231755},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Blv. C.D. Loga",
        poly_points: [
            {latitude: 45.7509544, longitude: 21.2305346},
            {latitude: 45.751091, longitude: 21.2311462},
            {latitude: 45.7512669, longitude: 21.2317577},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Blv. C.D. Loga",
        poly_points: [
            {latitude: 45.7513025, longitude: 21.231873},
            {latitude: 45.7515009, longitude: 21.2324443},
            {latitude: 45.7518359, longitude: 21.2332222},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Blv. C.D. Loga",
        poly_points: [
            {latitude: 45.7512314, longitude: 21.231924},
            {latitude: 45.7513942, longitude: 21.232388},
            {latitude: 45.7515383, longitude: 21.2327582},
            {latitude: 45.7517685, longitude: 21.2332839},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Blv. C.D. Loga",
        poly_points: [
            {latitude: 45.7508814, longitude: 21.2305695},
            {latitude: 45.7510292, longitude: 21.2312132},
            {latitude: 45.7511977, longitude: 21.231814},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Blv. C.D. Loga",
        poly_points: [
            {latitude: 45.7507186, longitude: 21.2292472},
            {latitude: 45.750756, longitude: 21.2297621},
            {latitude: 45.7507691, longitude: 21.2298962},
            {latitude: 45.7508627, longitude: 21.2304783},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Gheorghe Andrasiu",
        poly_points: [
            {latitude: 45.7511846, longitude: 21.2318248},
            {latitude: 45.7507167, longitude: 21.2321278},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Silviu Bejan",
        poly_points: [
            {latitude: 45.7503854, longitude: 21.2307438},
            {latitude: 45.7508571, longitude: 21.2305829},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Patriarh Miron Cristea",
        poly_points: [
            {latitude: 45.7506998, longitude: 21.2292498},
            {latitude: 45.7501365, longitude: 21.2293625},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Academician Alexandru Borza",
        poly_points: [
            {latitude: 45.7501103, longitude: 21.2292364},
            {latitude: 45.7499456, longitude: 21.2283057},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. George Enescu",
        poly_points: [
            {latitude: 45.7506881, longitude: 21.2281917},
            {latitude: 45.7499362, longitude: 21.2282594},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Academician Alexandru Borza",
        poly_points: [
            {latitude: 45.7512501, longitude: 21.2337399},
            {latitude: 45.7508309, longitude: 21.2327152},
            {latitude: 45.7506549, longitude: 21.2322164},
            {latitude: 45.7503592, longitude: 21.2311327},
            {latitude: 45.7500485, longitude: 21.2293839},
            {latitude: 45.7498501, longitude: 21.2282896},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Blv. Revolutiei din 1989",
        poly_points: [
            {latitude: 45.7554161, longitude: 21.2351614},
            {latitude: 45.7554123, longitude: 21.2360036},
            {latitude: 45.7554348, longitude: 21.2368083},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Blv. Revolutiei din 1989",
        poly_points: [
            {latitude: 45.7554423, longitude: 21.2369692},
            {latitude: 45.7555358, longitude: 21.2384069},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Blv. Revolutiei din 1989",
        poly_points: [
            {latitude: 45.7554423, longitude: 21.2344962},
            {latitude: 45.7554273, longitude: 21.2350059},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Eminescu, Mihai",
        poly_points: [
            {latitude: 45.754368, longitude: 21.2340872},
            {latitude: 45.7543194, longitude: 21.2339759},
            {latitude: 45.7539264, longitude: 21.2337506},
            {latitude: 45.7536943, longitude: 21.2340885},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Camil Petrescu",
        poly_points: [
            {latitude: 45.7527324, longitude: 21.2336165},
            {latitude: 45.7523543, longitude: 21.2340778},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Mihai Eminescu",
        poly_points: [
            {latitude: 45.7536195, longitude: 21.2340081},
            {latitude: 45.7532788, longitude: 21.2336379},
            {latitude: 45.753058, longitude: 21.2333858},
            {latitude: 45.7528671, longitude: 21.2330425},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bd. Mihai Eminescu",
        poly_points: [
            {latitude: 45.7551803, longitude: 21.2349415},
            {latitude: 45.7547274, longitude: 21.2347108},
            {latitude: 45.7543157, longitude: 21.2344801},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. C.D. Loga",
        poly_points: [
            {latitude: 45.7519987, longitude: 21.2337613},
            {latitude: 45.7528334, longitude: 21.2351185},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. C.D. Loga",
        poly_points: [
            {latitude: 45.7524329, longitude: 21.2342387},
            {latitude: 45.7529195, longitude: 21.2349951},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. C.D. Loga",
        poly_points: [
            {latitude: 45.7530093, longitude: 21.2351346},
            {latitude: 45.7532414, longitude: 21.2354887},
            {latitude: 45.7534959, longitude: 21.2357461},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. C.D. Loga",
        poly_points: [
            {latitude: 45.7536569, longitude: 21.2358695},
            {latitude: 45.7543082, longitude: 21.236406},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. C.D. Loga",
        poly_points: [
            {latitude: 45.7544354, longitude: 21.2366849},
            {latitude: 45.7546413, longitude: 21.2368083},
            {latitude: 45.7548883, longitude: 21.2368941},
            {latitude: 45.7552776, longitude: 21.2369585},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bd. C.D. Loga",
        poly_points: [
            {latitude: 45.7544953, longitude: 21.2365401},
            {latitude: 45.754675, longitude: 21.2366474},
            {latitude: 45.7549482, longitude: 21.2367278},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. C.D. Loga",
        poly_points: [
            {latitude: 45.752096, longitude: 21.2336594},
            {latitude: 45.7523094, longitude: 21.2340295},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Rene Brasey",
        poly_points: [
            {latitude: 45.7530655, longitude: 21.2350595},
            {latitude: 45.7530917, longitude: 21.2350327},
            {latitude: 45.7536157, longitude: 21.2343407},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Ludwig van Beethoven",
        poly_points: [
            {latitude: 45.7543873, longitude: 21.2365146},
            {latitude: 45.7548537, longitude: 21.2348972},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Blv. Revolutiei din 1989",
        poly_points: [
            {latitude: 45.7554722, longitude: 21.2337399},
            {latitude: 45.755446, longitude: 21.234287},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Revolutiei din 1989",
        poly_points: [
            {latitude: 45.755693, longitude: 21.2349468},
            {latitude: 45.7557192, longitude: 21.2344211},
            {latitude: 45.7557454, longitude: 21.2341046},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. Revolutiei din 1989",
        poly_points: [
            {latitude: 45.7556968, longitude: 21.2366205},
            {latitude: 45.755693, longitude: 21.2352848},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Revolutiei din 1989",
        poly_points: [
            {latitude: 45.75597, longitude: 21.2395442},
            {latitude: 45.7558952, longitude: 21.2391847},
            {latitude: 45.7558166, longitude: 21.238423},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Vasile Goldis",
        poly_points: [
            {latitude: 45.7582391, longitude: 21.2348127},
            {latitude: 45.757542, longitude: 21.2352526},
            {latitude: 45.7572276, longitude: 21.2352312},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Vasile Goldis",
        poly_points: [
            {latitude: 45.7575046, longitude: 21.2353814},
            {latitude: 45.7563668, longitude: 21.2353116},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Vasile Goldis",
        poly_points: [
            {latitude: 45.7568982, longitude: 21.2352097},
            {latitude: 45.7563106, longitude: 21.2351668},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Vasile Goldis",
        poly_points: [
            {latitude: 45.7578264, longitude: 21.2352097},
            {latitude: 45.7576131, longitude: 21.2353653},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Henri Coanda",
        poly_points: [
            {latitude: 45.7563144, longitude: 21.2353921},
            {latitude: 45.7563031, longitude: 21.2359661},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Henri Coanda",
        poly_points: [
            {latitude: 45.7562021, longitude: 21.2354082},
            {latitude: 45.7561946, longitude: 21.2360895},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Medicinei",
        poly_points: [
            {latitude: 45.7573848, longitude: 21.2360895},
            {latitude: 45.7568196, longitude: 21.2361431},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Medicinei",
        poly_points: [
            {latitude: 45.7577665, longitude: 21.2361807},
            {latitude: 45.7575719, longitude: 21.2362182},
            {latitude: 45.7567485, longitude: 21.2362933},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Piata Eftimie Murgu",
        poly_points: [
            {latitude: 45.7563144, longitude: 21.2365884},
            {latitude: 45.7564154, longitude: 21.2363952},
            {latitude: 45.7565502, longitude: 21.2362933},
            {latitude: 45.7566287, longitude: 21.236288},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Regimentul 13 Calarasi",
        poly_points: [
            {latitude: 45.7567916, longitude: 21.2371516},
            {latitude: 45.7575532, longitude: 21.2370712},
            {latitude: 45.7575888, longitude: 21.2370524},
            {latitude: 45.7578901, longitude: 21.2367305},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Regimentul 13 Calarasi",
        poly_points: [
            {latitude: 45.7567279, longitude: 21.2372589},
            {latitude: 45.7569506, longitude: 21.2372375},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Regimentul 13 Calarasi",
        poly_points: [
            {latitude: 45.757033, longitude: 21.2372267},
            {latitude: 45.7575775, longitude: 21.2371758},
            {latitude: 45.7576393, longitude: 21.2371328},
            {latitude: 45.7579443, longitude: 21.236811},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Henrich Heine",
        poly_points: [
            {latitude: 45.7575532, longitude: 21.2361096},
            {latitude: 45.7575514, longitude: 21.2356643},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Henrich Heine",
        poly_points: [
            {latitude: 45.7579612, longitude: 21.2363898},
            {latitude: 45.7576318, longitude: 21.235537},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Henrich Heine",
        poly_points: [
            {latitude: 45.7576253, longitude: 21.2357609},
            {latitude: 45.7576271, longitude: 21.2360787},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Martir Leontina Binciu",
        poly_points: [
            {latitude: 45.7550792, longitude: 21.2383425},
            {latitude: 45.7550175, longitude: 21.2381226},
            {latitude: 45.7549931, longitude: 21.2380636},
            {latitude: 45.754879, longitude: 21.2378973},
            {latitude: 45.7545739, longitude: 21.2377015},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Huniade, P-ţa",
        poly_points: [
            {latitude: 45.7526508, longitude: 21.227958},
            {latitude: 45.75259, longitude: 21.2287211},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Loga, C-tin Diaconovici",
        poly_points: [
            {latitude: 45.7532008, longitude: 21.2355846},
            {latitude: 45.7533505, longitude: 21.235767},
            {latitude: 45.7537772, longitude: 21.2361211},
            {latitude: 45.7543237, longitude: 21.2365449},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Beethoven, Ludwig van",
        poly_points: [
            {latitude: 45.7543312, longitude: 21.2365677},
            {latitude: 45.7540944, longitude: 21.237379},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Matei Corvin",
        poly_points: [
            {latitude: 45.7592786, longitude: 21.2300357},
            {latitude: 45.7584683, longitude: 21.2299392},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Paul Chinezu",
        poly_points: [
            {latitude: 45.7583785, longitude: 21.2307787},
            {latitude: 45.7589867, longitude: 21.2308511},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Paul Chinezu",
        poly_points: [
            {latitude: 45.758923, longitude: 21.2309933},
            {latitude: 45.7583691, longitude: 21.2309396},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. George Cosbuc",
        poly_points: [
            {latitude: 45.7583242, longitude: 21.2309369},
            {latitude: 45.7582849, longitude: 21.2317443},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. George Cosbuc",
        poly_points: [
            {latitude: 45.7582456, longitude: 21.2309369},
            {latitude: 45.7582082, longitude: 21.2317228},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. George Cosbuc",
        poly_points: [
            {latitude: 45.7582924, longitude: 21.2301269},
            {latitude: 45.7582512, longitude: 21.2307358},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Paul Chinezu",
        poly_points: [
            {latitude: 45.7579499, longitude: 21.2307358},
            {latitude: 45.7582026, longitude: 21.230768},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Paul Chinezu",
        poly_points: [
            {latitude: 45.7574933, longitude: 21.2306821},
            {latitude: 45.757774, longitude: 21.2307143},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Paul Chinezu",
        poly_points: [
            {latitude: 45.7581839, longitude: 21.2308887},
            {latitude: 45.7575457, longitude: 21.2308136},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Colonel Enescu",
        poly_points: [
            {latitude: 45.7550755, longitude: 21.2213695},
            {latitude: 45.7551503, longitude: 21.2220883},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bvd. Republicii",
        poly_points: [
            {latitude: 45.7535783, longitude: 21.2235904},
            {latitude: 45.7534211, longitude: 21.222893},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Colonel Enescu",
        poly_points: [
            {latitude: 45.7551354, longitude: 21.2233758},
            {latitude: 45.7552027, longitude: 21.2242877},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Colonel Enescu",
        poly_points: [
            {latitude: 45.7552402, longitude: 21.2233382},
            {latitude: 45.7553057, longitude: 21.2241402},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Enescu, Col.",
        poly_points: [
            {latitude: 45.7553899, longitude: 21.2242824},
            {latitude: 45.7556818, longitude: 21.2242637},
            {latitude: 45.7559494, longitude: 21.2242716},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Mihai I, Regele (Sfantul Ioan)",
        poly_points: [
            {latitude: 45.7568888, longitude: 21.2246016},
            {latitude: 45.7566268, longitude: 21.2246391},
            {latitude: 45.7563611, longitude: 21.2246606},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Piatra Craiului",
        poly_points: [
            {latitude: 45.7529345, longitude: 21.2238693},
            {latitude: 45.7519313, longitude: 21.2231183},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Aurel Cosma",
        poly_points: [
            {latitude: 45.7562133, longitude: 21.2222546},
            {latitude: 45.7555433, longitude: 21.222201},
            {latitude: 45.7551952, longitude: 21.2222224},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Colonel Enescu",
        poly_points: [
            {latitude: 45.7551803, longitude: 21.22226},
            {latitude: 45.7552327, longitude: 21.2230003},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Aurel Cosma",
        poly_points: [
            {latitude: 45.7560205, longitude: 21.2221178},
            {latitude: 45.7554572, longitude: 21.2220535},
            {latitude: 45.7551728, longitude: 21.2220964},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Piatra Craiului",
        poly_points: [
            {latitude: 45.753466, longitude: 21.2236869},
            {latitude: 45.7531478, longitude: 21.2238479},
            {latitude: 45.7529457, longitude: 21.2236977},
            {latitude: 45.7519987, longitude: 21.2229788},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Cicio Pop",
        poly_points: [
            {latitude: 45.754588, longitude: 21.2339538},
            {latitude: 45.7552487, longitude: 21.2343159},
            {latitude: 45.7553872, longitude: 21.2343856},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Cicio Pop",
        poly_points: [
            {latitude: 45.7554003, longitude: 21.2342998},
            {latitude: 45.754603, longitude: 21.2338867},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Brediceanu Coriolan",
        poly_points: [
            {latitude: 45.7564977, longitude: 21.218588},
            {latitude: 45.7564304, longitude: 21.2197253},
            {latitude: 45.7564238, longitude: 21.2198205},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Brediceanu Coriolan",
        poly_points: [
            {latitude: 45.7563275, longitude: 21.2213173},
            {latitude: 45.7562826, longitude: 21.2220415},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Brediceanu Coriolan",
        poly_points: [
            {latitude: 45.7562613, longitude: 21.2223201},
            {latitude: 45.7562174, longitude: 21.2230242},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Cosbuc, George",
        poly_points: [
            {latitude: 45.7583628, longitude: 21.2300446},
            {latitude: 45.758316, longitude: 21.2307702},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Corvin , Matei",
        poly_points: [
            {latitude: 45.7592634, longitude: 21.2301365},
            {latitude: 45.7584465, longitude: 21.2300359},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Doinei, Intrarea",
        poly_points: [
            {latitude: 45.760338, longitude: 21.2284512},
            {latitude: 45.7601097, longitude: 21.2284298},
            {latitude: 45.7600517, longitude: 21.2284995},
            {latitude: 45.7603343, longitude: 21.2285317},
            {latitude: 45.760338, longitude: 21.2284512},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Marasti",
        poly_points: [
            {latitude: 45.7591689, longitude: 21.2274212},
            {latitude: 45.7591389, longitude: 21.2281615},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Nemoianu, Iosif, Dr.",
        poly_points: [
            {latitude: 45.7549261, longitude: 21.2212135},
            {latitude: 45.7547278, longitude: 21.2212671},
            {latitude: 45.7544882, longitude: 21.2213154},
            {latitude: 45.7541551, longitude: 21.2213691},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Draghici, Melentie, Protop.",
        poly_points: [
            {latitude: 45.7604912, longitude: 21.2482452},
            {latitude: 45.7600682, longitude: 21.2464374},
            {latitude: 45.7598923, longitude: 21.2458741},
            {latitude: 45.7596902, longitude: 21.245166},
            {latitude: 45.759554, longitude: 21.2447914},
            {latitude: 45.759402, longitude: 21.2443829},
            {latitude: 45.7592898, longitude: 21.2441629},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Mocioni, Andrei, Str.",
        poly_points: [
            {latitude: 45.7586576, longitude: 21.2422711},
            {latitude: 45.7586135, longitude: 21.2420512},
            {latitude: 45.7585593, longitude: 21.2418835},
            {latitude: 45.7585041, longitude: 21.2417615},
            {latitude: 45.7584218, longitude: 21.2416382},
            {latitude: 45.7582683, longitude: 21.2414503},
            {latitude: 45.7581224, longitude: 21.2413055},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Mocioni, Andrei, Str.",
        poly_points: [
            {latitude: 45.758039, longitude: 21.2411392},
            {latitude: 45.7578556, longitude: 21.2409676},
            {latitude: 45.7576984, longitude: 21.2408174},
            {latitude: 45.7575712, longitude: 21.2406993},
            {latitude: 45.757544, longitude: 21.240677},
            {latitude: 45.7575111, longitude: 21.240644},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "G1",
        poly_points: [
            {latitude: 45.7654949, longitude: 21.2178521},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G2",
        poly_points: [
            {latitude: 45.7692452, longitude: 21.2208494},
            {latitude: 45.7646649, longitude: 21.2253984},
            {latitude: 45.7643356, longitude: 21.224347},
            {latitude: 45.7641859, longitude: 21.2203559},
            {latitude: 45.7640362, longitude: 21.2195219},
            {latitude: 45.7628461, longitude: 21.2177059},
            {latitude: 45.7605108, longitude: 21.2158498},
            {latitude: 45.7568505, longitude: 21.217266},
            {latitude: 45.7589464, longitude: 21.2212678},
            {latitude: 45.7604659, longitude: 21.2226197},
            {latitude: 45.7610423, longitude: 21.2234565},
            {latitude: 45.7617159, longitude: 21.2251946},
            {latitude: 45.7621201, longitude: 21.2264606},
            {latitude: 45.767973, longitude: 21.2254414},
            {latitude: 45.7676362, longitude: 21.2290784},
            {latitude: 45.7684894, longitude: 21.2294432},
            {latitude: 45.7692452, longitude: 21.2208494},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 17
    },
    {
        name: "G2",
        poly_points: [
            {latitude: 45.7621926, longitude: 21.2224159},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G3",
        poly_points: [
            {latitude: 45.7500716, longitude: 21.2046855},
            {latitude: 45.7450399, longitude: 21.2110913},
            {latitude: 45.7451003, longitude: 21.211552},
            {latitude: 45.747616, longitude: 21.2097388},
            {latitude: 45.7504459, longitude: 21.2177318},
            {latitude: 45.7502063, longitude: 21.2200063},
            {latitude: 45.7506555, longitude: 21.2200492},
            {latitude: 45.7522127, longitude: 21.2167877},
            {latitude: 45.7500716, longitude: 21.2046855},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 9
    },
    {
        name: "G3",
        poly_points: [
            {latitude: 45.7492331, longitude: 21.2099427},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G4",
        poly_points: [
            {latitude: 45.747616, longitude: 21.2097388},
            {latitude: 45.7448158, longitude: 21.2116325},
            {latitude: 45.7431985, longitude: 21.2129467},
            {latitude: 45.7467099, longitude: 21.2163697},
            {latitude: 45.7480426, longitude: 21.2177859},
            {latitude: 45.7496073, longitude: 21.2205862},
            {latitude: 45.7500565, longitude: 21.218537},
            {latitude: 45.7484319, longitude: 21.2134193},
            {latitude: 45.7485217, longitude: 21.2126361},
            {latitude: 45.747616, longitude: 21.2097388},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 10
    },
    {
        name: "G4",
        poly_points: [
            {latitude: 45.747833, longitude: 21.2151681},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G5",
        poly_points: [
            {latitude: 45.7436402, longitude: 21.2062954},
            {latitude: 45.7388781, longitude: 21.2097715},
            {latitude: 45.743052, longitude: 21.2127435},
            {latitude: 45.7450399, longitude: 21.2110913},
            {latitude: 45.7459423, longitude: 21.2078726},
            {latitude: 45.7436402, longitude: 21.2062954},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "G5",
        poly_points: [
            {latitude: 45.7425171, longitude: 21.2099753},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G6",
        poly_points: [
            {latitude: 45.7484779, longitude: 21.2238214},
            {latitude: 45.7494063, longitude: 21.2206349},
            {latitude: 45.7478565, longitude: 21.2177167},
            {latitude: 45.7443976, longitude: 21.2141654},
            {latitude: 45.7438585, longitude: 21.2174914},
            {latitude: 45.7484779, longitude: 21.2238214},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "G6",
        poly_points: [
            {latitude: 45.7462768, longitude: 21.2186501},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G7",
        poly_points: [
            {latitude: 45.7391488, longitude: 21.2099597},
            {latitude: 45.7365279, longitude: 21.2169549},
            {latitude: 45.740257, longitude: 21.2228987},
            {latitude: 45.7432317, longitude: 21.220023},
            {latitude: 45.7438119, longitude: 21.2176734},
            {latitude: 45.7443976, longitude: 21.2141654},
            {latitude: 45.7391488, longitude: 21.2099597},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "G7",
        poly_points: [
            {latitude: 45.7407661, longitude: 21.217191},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G8",
        poly_points: [
            {latitude: 45.7438119, longitude: 21.2176734},
            {latitude: 45.7431172, longitude: 21.2201092},
            {latitude: 45.7405751, longitude: 21.2228827},
            {latitude: 45.7384299, longitude: 21.2244007},
            {latitude: 45.7387519, longitude: 21.2263642},
            {latitude: 45.7419042, longitude: 21.2263534},
            {latitude: 45.7468308, longitude: 21.2256882},
            {latitude: 45.7479389, longitude: 21.225774},
            {latitude: 45.7482683, longitude: 21.223757},
            {latitude: 45.7438119, longitude: 21.2176734},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 10
    },
    {
        name: "G8",
        poly_points: [
            {latitude: 45.745588, longitude: 21.222255},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G9",
        poly_points: [
            {latitude: 45.7482234, longitude: 21.2260047},
            {latitude: 45.7409309, longitude: 21.2265197},
            {latitude: 45.7404516, longitude: 21.2276569},
            {latitude: 45.7411854, longitude: 21.231412},
            {latitude: 45.7437911, longitude: 21.2369266},
            {latitude: 45.7496908, longitude: 21.233944},
            {latitude: 45.7482683, longitude: 21.2294164},
            {latitude: 45.7482234, longitude: 21.2260047},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "G9",
        poly_points: [
            {latitude: 45.7457502, longitude: 21.230844},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G10",
        poly_points: [
            {latitude: 45.7496908, longitude: 21.2339494},
            {latitude: 45.7446451, longitude: 21.2365868},
            {latitude: 45.7499757, longitude: 21.2506631},
            {latitude: 45.7551711, longitude: 21.2484958},
            {latitude: 45.7542279, longitude: 21.240063},
            {latitude: 45.7508591, longitude: 21.2364152},
            {latitude: 45.7496908, longitude: 21.2339494},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "G10",
        poly_points: [
            {latitude: 45.75166, longitude: 21.2447837},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "G11",
        poly_points: [
            {latitude: 45.754355, longitude: 21.240063},
            {latitude: 45.7552325, longitude: 21.2487718},
            {latitude: 45.7565857, longitude: 21.2490108},
            {latitude: 45.7573808, longitude: 21.2506494},
            {latitude: 45.7578749, longitude: 21.2507888},
            {latitude: 45.7580845, longitude: 21.2496945},
            {latitude: 45.7591326, longitude: 21.2498438},
            {latitude: 45.7603733, longitude: 21.2490752},
            {latitude: 45.7591158, longitude: 21.2443974},
            {latitude: 45.7584571, longitude: 21.2432387},
            {latitude: 45.7573043, longitude: 21.2417796},
            {latitude: 45.754355, longitude: 21.240063},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 12
    },
    {
        name: "G11",
        poly_points: [
            {latitude: 45.7562863, longitude: 21.244376},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "B-dul Eroilor de la Tisa",
        poly_points: [
            {latitude: 45.7455753, longitude: 21.2368923},
            {latitude: 45.7456539, longitude: 21.237123},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Coposu, Corneliu, Nr. 1",
        poly_points: [
            {latitude: 45.7512426, longitude: 21.2370929},
            {latitude: 45.7508009, longitude: 21.2377581},
            {latitude: 45.7510049, longitude: 21.2379726},
            {latitude: 45.7514447, longitude: 21.2373181},
            {latitude: 45.7512426, longitude: 21.2370929},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Strada Johan Heinrich Pestalozzi",
        poly_points: [
            {latitude: 45.7540724, longitude: 21.2410196},
            {latitude: 45.7541266, longitude: 21.2415024},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Strada Johan Heinrich Pestalozzi",
        poly_points: [
            {latitude: 45.754136, longitude: 21.2415829},
            {latitude: 45.7543418, longitude: 21.243616},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Strada Johan Heinrich Pestalozzi",
        poly_points: [
            {latitude: 45.7543475, longitude: 21.2436857},
            {latitude: 45.754572, longitude: 21.245802},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Strada Johan Heinrich Pestalozzi",
        poly_points: [
            {latitude: 45.7545809, longitude: 21.2458731},
            {latitude: 45.7547044, longitude: 21.2470587},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Strada Johan Heinrich Pestalozzi",
        poly_points: [
            {latitude: 45.7542197, longitude: 21.241756},
            {latitude: 45.754841, longitude: 21.2476945},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "B-dul Eroilor de la Tisa",
        poly_points: [
            {latitude: 45.7471023, longitude: 21.2412552},
            {latitude: 45.7473231, longitude: 21.2419231},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Parcare Eroilor de la Tisa",
        poly_points: [
            {latitude: 45.7471079, longitude: 21.2413018},
            {latitude: 45.7470237, longitude: 21.2414694},
            {latitude: 45.7471846, longitude: 21.2419106},
            {latitude: 45.7473114, longitude: 21.2419381},
            {latitude: 45.7471079, longitude: 21.2413018},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "B-dul Eroilor de la Tisa",
        poly_points: [
            {latitude: 45.7473861, longitude: 21.2420958},
            {latitude: 45.7485353, longitude: 21.2454244},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "B-dul Eroilor de la Tisa",
        poly_points: [
            {latitude: 45.7483383, longitude: 21.244665},
            {latitude: 45.7485872, longitude: 21.2453758},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "B-dul Eroilor de la Tisa",
        poly_points: [
            {latitude: 45.7485864, longitude: 21.245563},
            {latitude: 45.7490131, longitude: 21.2468652},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "B-dul Eroilor de la Tisa",
        poly_points: [
            {latitude: 45.7490799, longitude: 21.2470509},
            {latitude: 45.7501224, longitude: 21.2500549},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Amforei",
        poly_points: [
            {latitude: 45.7648974, longitude: 21.214435},
            {latitude: 45.7648301, longitude: 21.2145422},
            {latitude: 45.7634941, longitude: 21.2164466},
            {latitude: 45.7628018, longitude: 21.2175034},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Timis",
        poly_points: [
            {latitude: 45.7660336, longitude: 21.2189985},
            {latitude: 45.7669317, longitude: 21.2207848},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Timis",
        poly_points: [
            {latitude: 45.7659719, longitude: 21.219028},
            {latitude: 45.7668887, longitude: 21.2208653},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Ulmului",
        poly_points: [
            {latitude: 45.7650479, longitude: 21.2165035},
            {latitude: 45.7656168, longitude: 21.215672},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Andronescu, Plautius",
        poly_points: [
            {latitude: 45.7469875, longitude: 21.2332096},
            {latitude: 45.7468565, longitude: 21.2326678},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Andronescu, Plautius",
        poly_points: [
            {latitude: 45.7466244, longitude: 21.2319704},
            {latitude: 45.7470062, longitude: 21.2335046},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Coposu, Corneliu, Blvd.",
        poly_points: [
            {latitude: 45.751353, longitude: 21.238524},
            {latitude: 45.7533143, longitude: 21.2397471},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Delfinului",
        poly_points: [
            {latitude: 45.7505056, longitude: 21.2396897},
            {latitude: 45.7510614, longitude: 21.2391291},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Varadia",
        poly_points: [
            {latitude: 45.7503948, longitude: 21.2486675},
            {latitude: 45.7496331, longitude: 21.2467148},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Socrate",
        poly_points: [
            {latitude: 45.7510276, longitude: 21.2409648},
            {latitude: 45.750556, longitude: 21.2399134},
            {latitude: 45.7502865, longitude: 21.2394038},
            {latitude: 45.7500319, longitude: 21.2388995},
            {latitude: 45.7498822, longitude: 21.2386528},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Salceanu, Cornelia",
        poly_points: [
            {latitude: 45.7529323, longitude: 21.2433463},
            {latitude: 45.7532205, longitude: 21.2460392},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Ofcea",
        poly_points: [
            {latitude: 45.7540889, longitude: 21.2415867},
            {latitude: 45.7527377, longitude: 21.241871},
            {latitude: 45.7522249, longitude: 21.2418818},
            {latitude: 45.7519367, longitude: 21.2418228},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Milcov",
        poly_points: [
            {latitude: 45.7489667, longitude: 21.2452479},
            {latitude: 45.7496873, longitude: 21.2456074},
            {latitude: 45.7497154, longitude: 21.2456503},
            {latitude: 45.749925, longitude: 21.2462323},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Milcov",
        poly_points: [
            {latitude: 45.7489911, longitude: 21.2451836},
            {latitude: 45.7494552, longitude: 21.2454196},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Mehadia",
        poly_points: [
            {latitude: 45.7520778, longitude: 21.2435528},
            {latitude: 45.7514602, longitude: 21.243703},
            {latitude: 45.7508088, longitude: 21.2440356},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Charles, Darvin",
        poly_points: [
            {latitude: 45.7519501, longitude: 21.2418562},
            {latitude: 45.7521241, longitude: 21.2434494},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Labirint",
        poly_points: [
            {latitude: 45.7628621, longitude: 21.2126034},
            {latitude: 45.7637303, longitude: 21.2133007},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Dropiei",
        poly_points: [
            {latitude: 45.7637928, longitude: 21.2133602},
            {latitude: 45.7633137, longitude: 21.2145886},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Zaicu, Ion, Pictor",
        poly_points: [
            {latitude: 45.7591925, longitude: 21.2209799},
            {latitude: 45.7596116, longitude: 21.2213554},
            {latitude: 45.7600383, longitude: 21.2217309},
            {latitude: 45.7604949, longitude: 21.2221601},
            {latitude: 45.7608167, longitude: 21.2225892},
            {latitude: 45.7611611, longitude: 21.2231149},
            {latitude: 45.761438, longitude: 21.2236621},
            {latitude: 45.7616551, longitude: 21.2241985},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "Zaicu, Ion, Pictor",
        poly_points: [
            {latitude: 45.7592524, longitude: 21.2208189},
            {latitude: 45.7596416, longitude: 21.2211837},
            {latitude: 45.7598811, longitude: 21.221409},
            {latitude: 45.7601805, longitude: 21.2216773},
            {latitude: 45.7604126, longitude: 21.2218811},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Umbroasa, Intrarea",
        poly_points: [
            {latitude: 45.76353, longitude: 21.218648},
            {latitude: 45.7633915, longitude: 21.2187928},
            {latitude: 45.7633317, longitude: 21.2188331},
            {latitude: 45.7632905, longitude: 21.2188304},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Catargiu, Lascar",
        poly_points: [
            {latitude: 45.7504239, longitude: 21.2425154},
            {latitude: 45.7508039, longitude: 21.2439357},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Sever, Bocu",
        poly_points: [
            {latitude: 45.7684491, longitude: 21.2246903},
            {latitude: 45.7683293, longitude: 21.2262352},
            {latitude: 45.7682058, longitude: 21.2274315},
            {latitude: 45.7681084, longitude: 21.2283703},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Daliei",
        poly_points: [
            {latitude: 45.7513217, longitude: 21.2418069},
            {latitude: 45.7508538, longitude: 21.2421368},
            {latitude: 45.7505487, longitude: 21.2423434},
            {latitude: 45.7497421, longitude: 21.2429281},
            {latitude: 45.7493771, longitude: 21.243199},
            {latitude: 45.749072, longitude: 21.2434055},
            {latitude: 45.7484544, longitude: 21.2438186},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Daliei",
        poly_points: [
            {latitude: 45.7511421, longitude: 21.242009},
            {latitude: 45.7510111, longitude: 21.2421056},
            {latitude: 45.7507565, longitude: 21.2422799},
            {latitude: 45.7504683, longitude: 21.2424757},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Daliei",
        poly_points: [
            {latitude: 45.7494019, longitude: 21.2432526},
            {latitude: 45.7493551, longitude: 21.2432901},
            {latitude: 45.7491249, longitude: 21.2434376},
            {latitude: 45.7487337, longitude: 21.2437032},
            {latitude: 45.7484735, longitude: 21.2438829},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Str. Episcop Joseph Nischbach",
        poly_points: [
            {latitude: 45.7563593, longitude: 21.2461826},
            {latitude: 45.7558353, longitude: 21.2461156},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Academicia Corneliu Miclosi",
        poly_points: [
            {latitude: 45.7582437, longitude: 21.2434468},
            {latitude: 45.7575457, longitude: 21.2443534},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Academician Corneliu Miclosi",
        poly_points: [
            {latitude: 45.7575308, longitude: 21.2448496},
            {latitude: 45.7569731, longitude: 21.244989},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Academician Corneliu Miclosi",
        poly_points: [
            {latitude: 45.7575195, longitude: 21.2447584},
            {latitude: 45.7569731, longitude: 21.2448791},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Academician Corneliu Miclosi",
        poly_points: [
            {latitude: 45.7572444, longitude: 21.2452626},
            {latitude: 45.7575775, longitude: 21.2449059},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Academician Corneliu Miclosi",
        poly_points: [
            {latitude: 45.757628, longitude: 21.2449971},
            {latitude: 45.7572893, longitude: 21.2453619},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Academicia Corneliu Miclosi",
        poly_points: [
            {latitude: 45.7575541, longitude: 21.2445022},
            {latitude: 45.7582952, longitude: 21.2435487},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Abrud",
        poly_points: [
            {latitude: 45.7571715, longitude: 21.2426421},
            {latitude: 45.7575195, longitude: 21.2443534},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Dionisie Lintia",
        poly_points: [
            {latitude: 45.7565988, longitude: 21.2428057},
            {latitude: 45.7570255, longitude: 21.2426662},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Dionisie Lintia",
        poly_points: [
            {latitude: 45.757323, longitude: 21.2422988},
            {latitude: 45.757164, longitude: 21.2425965},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Dionisie Lintia",
        poly_points: [
            {latitude: 45.7565875, longitude: 21.2426796},
            {latitude: 45.7570966, longitude: 21.2425241},
            {latitude: 45.7571939, longitude: 21.2423417},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. 3 August 1919",
        poly_points: [
            {latitude: 45.7565464, longitude: 21.2426823},
            {latitude: 45.7564192, longitude: 21.2419528},
            {latitude: 45.7563892, longitude: 21.2417811},
            {latitude: 45.756378, longitude: 21.2416148},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bd. 3 August 1919",
        poly_points: [
            {latitude: 45.756567, longitude: 21.2428325},
            {latitude: 45.7569076, longitude: 21.2447208},
            {latitude: 45.7569076, longitude: 21.2448737},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. 3 August 1919",
        poly_points: [
            {latitude: 45.7561871, longitude: 21.2418133},
            {latitude: 45.7566512, longitude: 21.2447047},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Episcop Joseph Nischbach",
        poly_points: [
            {latitude: 45.7557829, longitude: 21.2451392},
            {latitude: 45.7557192, longitude: 21.2459359},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Episcop Alexandru Bonnaz",
        poly_points: [
            {latitude: 45.7575532, longitude: 21.2476471},
            {latitude: 45.7571565, longitude: 21.247631},
            {latitude: 45.7563574, longitude: 21.2474298},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Episcop Alexandru Bonnaz",
        poly_points: [
            {latitude: 45.7562807, longitude: 21.2472957},
            {latitude: 45.7552345, longitude: 21.2469846},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Episcop Alexandru Bonnaz",
        poly_points: [
            {latitude: 45.756262, longitude: 21.2473977},
            {latitude: 45.7552252, longitude: 21.2470838},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Stelelor",
        poly_points: [
            {latitude: 45.7660453, longitude: 21.2189137},
            {latitude: 45.7670445, longitude: 21.2178569},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Teiului G1",
        poly_points: [
            {latitude: 45.7640483, longitude: 21.2193852},
            {latitude: 45.763704, longitude: 21.2187737},
            {latitude: 45.7635094, longitude: 21.2184787},
            {latitude: 45.7631239, longitude: 21.2178939},
            {latitude: 45.7629368, longitude: 21.2176203},
            {latitude: 45.7628018, longitude: 21.2175034},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Teiului G2",
        poly_points: [
            {latitude: 45.7640857, longitude: 21.2195033},
            {latitude: 45.7645161, longitude: 21.2202972},
            {latitude: 45.7647219, longitude: 21.2207102},
            {latitude: 45.7653656, longitude: 21.2219709},
            {latitude: 45.7655377, longitude: 21.2222981},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Str. Episcop Alexandru Bonnaz",
        poly_points: [
            {latitude: 45.7575495, longitude: 21.2475371},
            {latitude: 45.7571396, longitude: 21.247521},
            {latitude: 45.7563705, longitude: 21.2473172},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Ion Luca Caragiale",
        poly_points: [
            {latitude: 45.7562395, longitude: 21.2478778},
            {latitude: 45.7564697, longitude: 21.2452519},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ion Luca Caragiale",
        poly_points: [
            {latitude: 45.7563125, longitude: 21.2479073},
            {latitude: 45.7563537, longitude: 21.2474513},
            {latitude: 45.7564566, longitude: 21.2462845},
            {latitude: 45.7565427, longitude: 21.2452519},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Piata Romanilor",
        poly_points: [
            {latitude: 45.7563742, longitude: 21.2479824},
            {latitude: 45.7575495, longitude: 21.2482131},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Romanilor",
        poly_points: [
            {latitude: 45.7563705, longitude: 21.248095},
            {latitude: 45.7575382, longitude: 21.248315},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Gheorghe Marinescu",
        poly_points: [
            {latitude: 45.7571172, longitude: 21.2463033},
            {latitude: 45.756509, longitude: 21.2462014},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Gheorghe Marinescu",
        poly_points: [
            {latitude: 45.756348, longitude: 21.2462765},
            {latitude: 45.7558278, longitude: 21.2462175},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Gheorghe Marinescu",
        poly_points: [
            {latitude: 45.7571134, longitude: 21.2464026},
            {latitude: 45.7565071, longitude: 21.2463033},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. 3 August 1919",
        poly_points: [
            {latitude: 45.7572313, longitude: 21.2464294},
            {latitude: 45.7574147, longitude: 21.2469229},
            {latitude: 45.7574933, longitude: 21.247167},
            {latitude: 45.7575588, longitude: 21.2474996},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bd. 3 August 1919",
        poly_points: [
            {latitude: 45.7577067, longitude: 21.247513},
            {latitude: 45.7576805, longitude: 21.2473467},
            {latitude: 45.7575326, longitude: 21.2468049},
            {latitude: 45.7573586, longitude: 21.2462926},
            {latitude: 45.7570985, longitude: 21.2456328},
            {latitude: 45.7569787, longitude: 21.2452894},
            {latitude: 45.7569207, longitude: 21.2451097},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Bd. 3 August 1919",
        poly_points: [
            {latitude: 45.7567766, longitude: 21.2452358},
            {latitude: 45.7571864, longitude: 21.2463167},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Zlatna",
        poly_points: [
            {latitude: 45.7577385, longitude: 21.2475237},
            {latitude: 45.7585076, longitude: 21.2475023},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Dacilor",
        poly_points: [
            {latitude: 45.7593422, longitude: 21.2494817},
            {latitude: 45.7599878, longitude: 21.2489963},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Dacilor",
        poly_points: [
            {latitude: 45.7599504, longitude: 21.248889},
            {latitude: 45.7592936, longitude: 21.2493744},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Dacilor",
        poly_points: [
            {latitude: 45.7590709, longitude: 21.2496266},
            {latitude: 45.7589605, longitude: 21.2496319},
            {latitude: 45.7582419, longitude: 21.2495112},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Iuliu Maniu",
        poly_points: [
            {latitude: 45.7434488, longitude: 21.2068534},
            {latitude: 45.7433702, longitude: 21.2068963},
            {latitude: 45.7423968, longitude: 21.2075883},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Piata Traian",
        poly_points: [
            {latitude: 45.7581782, longitude: 21.2494951},
            {latitude: 45.7580772, longitude: 21.2494764},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Iuliu Maniu",
        poly_points: [
            {latitude: 45.7421385, longitude: 21.2076527},
            {latitude: 45.7393269, longitude: 21.2096751},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Iuliu Maniu",
        poly_points: [
            {latitude: 45.741416, longitude: 21.2083018},
            {latitude: 45.7393306, longitude: 21.2097394},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. General Ion Dragalina",
        poly_points: [
            {latitude: 45.7491913, longitude: 21.2086612},
            {latitude: 45.7477726, longitude: 21.2096268},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. General Ion Dragalina",
        poly_points: [
            {latitude: 45.7470351, longitude: 21.2097341},
            {latitude: 45.7450399, longitude: 21.2110913},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. General Ion Dragalina",
        poly_points: [
            {latitude: 45.7448751, longitude: 21.2112147},
            {latitude: 45.7447366, longitude: 21.2113488},
            {latitude: 45.7431568, longitude: 21.2125504},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. General Ion Dragalina",
        poly_points: [
            {latitude: 45.7432729, longitude: 21.2128454},
            {latitude: 45.7436023, longitude: 21.2125397},
            {latitude: 45.7449837, longitude: 21.2115473},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. General Ion Dragalina",
        poly_points: [
            {latitude: 45.7451596, longitude: 21.2114292},
            {latitude: 45.74714, longitude: 21.2100345},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. General Ion Dragalina",
        poly_points: [
            {latitude: 45.7502731, longitude: 21.2075508},
            {latitude: 45.7491876, longitude: 21.2082803},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. General Ion Dragalina",
        poly_points: [
            {latitude: 45.7500672, longitude: 21.2080765},
            {latitude: 45.7493261, longitude: 21.2086129},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul N. Titulescu",
        poly_points: [
            {latitude: 45.7502507, longitude: 21.216681},
            {latitude: 45.7498689, longitude: 21.2155974},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul N. Titulescu",
        poly_points: [
            {latitude: 45.749371, longitude: 21.2142563},
            {latitude: 45.7489929, longitude: 21.2131405},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul N. Titulescu",
        poly_points: [
            {latitude: 45.7489555, longitude: 21.2130171},
            {latitude: 45.7481058, longitude: 21.2106085},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul N. Titulescu",
        poly_points: [
            {latitude: 45.7505913, longitude: 21.2194061},
            {latitude: 45.7507223, longitude: 21.218682},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul N. Titulescu",
        poly_points: [
            {latitude: 45.7498202, longitude: 21.2155008},
            {latitude: 45.7494271, longitude: 21.2144065},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.741225, longitude: 21.2116492},
            {latitude: 45.740918, longitude: 21.2113917},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7417267, longitude: 21.2120783},
            {latitude: 45.7412849, longitude: 21.211735},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7418091, longitude: 21.2121212},
            {latitude: 45.7426027, longitude: 21.212765},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7429771, longitude: 21.2126684},
            {latitude: 45.7413224, longitude: 21.2113595},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7432991, longitude: 21.2129581},
            {latitude: 45.7446468, longitude: 21.2142241},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7443323, longitude: 21.2143207},
            {latitude: 45.7437783, longitude: 21.2138164},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7449687, longitude: 21.214546},
            {latitude: 45.7458073, longitude: 21.2153935},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7449388, longitude: 21.2149107},
            {latitude: 45.7451933, longitude: 21.2151682},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7464362, longitude: 21.2155974},
            {latitude: 45.7458821, longitude: 21.2154257},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7393531, longitude: 21.210233},
            {latitude: 45.7405736, longitude: 21.2111771},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Regele Carol I",
        poly_points: [
            {latitude: 45.7435873, longitude: 21.2069392},
            {latitude: 45.7440852, longitude: 21.2084574},
            {latitude: 45.7441638, longitude: 21.2088221},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bulevardul Regele Carol I",
        poly_points: [
            {latitude: 45.7450099, longitude: 21.2110484},
            {latitude: 45.7444109, longitude: 21.2091386},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Regele Carol I",
        poly_points: [
            {latitude: 45.7457886, longitude: 21.2134409},
            {latitude: 45.7451409, longitude: 21.2114614},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Regele Carol I",
        poly_points: [
            {latitude: 45.7458297, longitude: 21.2135965},
            {latitude: 45.7462715, longitude: 21.2148303},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Regele Carol I",
        poly_points: [
            {latitude: 45.7434937, longitude: 21.2069714},
            {latitude: 45.7440216, longitude: 21.20857},
            {latitude: 45.744089, longitude: 21.2088972},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Romulus",
        poly_points: [
            {latitude: 45.7432317, longitude: 21.220023},
            {latitude: 45.7426926, longitude: 21.219492},
            {latitude: 45.7424118, longitude: 21.2191164},
            {latitude: 45.7420187, longitude: 21.2183225},
            {latitude: 45.7419214, longitude: 21.218006},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Str. Romulus",
        poly_points: [
            {latitude: 45.7410266, longitude: 21.2143475},
            {latitude: 45.7418802, longitude: 21.217888},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Romulus",
        poly_points: [
            {latitude: 45.7411202, longitude: 21.2143099},
            {latitude: 45.7419663, longitude: 21.2177861},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Constantin Brancoveanu",
        poly_points: [
            {latitude: 45.7375091, longitude: 21.2165898},
            {latitude: 45.7368502, longitude: 21.2170431},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Constantin Brancoveanu",
        poly_points: [
            {latitude: 45.7429808, longitude: 21.2130708},
            {latitude: 45.741255, longitude: 21.2142134},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Constantin Brancoveanu",
        poly_points: [
            {latitude: 45.7409892, longitude: 21.2143904},
            {latitude: 45.7394654, longitude: 21.2154204},
            {latitude: 45.7390835, longitude: 21.2156886},
            {latitude: 45.7387391, longitude: 21.2159836},
            {latitude: 45.7386155, longitude: 21.2160534},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Bulevardul Constantin Brancoveanu",
        poly_points: [
            {latitude: 45.7424455, longitude: 21.2130868},
            {latitude: 45.7420037, longitude: 21.2134141},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Traian",
        poly_points: [
            {latitude: 45.7578715, longitude: 21.2505998},
            {latitude: 45.7577311, longitude: 21.2505113},
            {latitude: 45.7574186, longitude: 21.2504335},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Consiliul Europei(Piata)",
        poly_points: [
            {latitude: 45.7639687, longitude: 21.2247327},
            {latitude: 45.7639341, longitude: 21.2247535},
            {latitude: 45.763907, longitude: 21.2247944},
            {latitude: 45.7638991, longitude: 21.2248614},
            {latitude: 45.763877, longitude: 21.2249332},
            {latitude: 45.7638499, longitude: 21.225015},
            {latitude: 45.7638289, longitude: 21.2251129},
            {latitude: 45.7638036, longitude: 21.2252061},
            {latitude: 45.7638059, longitude: 21.2252564},
            {latitude: 45.7638368, longitude: 21.2253053},
            {latitude: 45.7638293, longitude: 21.2252785},
            {latitude: 45.7638359, longitude: 21.2253053},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 12
    },
    {
        name: "Consiliul Europei(Piata)",
        poly_points: [
            {latitude: 45.7640278, longitude: 21.2248786},
            {latitude: 45.7639913, longitude: 21.2249189},
            {latitude: 45.7639829, longitude: 21.2249484},
            {latitude: 45.763966, longitude: 21.2249873},
            {latitude: 45.7639539, longitude: 21.2250154},
            {latitude: 45.7639351, longitude: 21.2250731},
            {latitude: 45.7639174, longitude: 21.22512},
            {latitude: 45.7638949, longitude: 21.2251857},
            {latitude: 45.763908, longitude: 21.2252635},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 9
    },
    {
        name: "Consiliul Europei(Piata)",
        poly_points: [
            {latitude: 45.7640119, longitude: 21.2248478},
            {latitude: 45.7639735, longitude: 21.2248853},
            {latitude: 45.7639525, longitude: 21.224937},
            {latitude: 45.763922, longitude: 21.2250034},
            {latitude: 45.7638898, longitude: 21.2251033},
            {latitude: 45.7638748, longitude: 21.2251549},
            {latitude: 45.7638748, longitude: 21.2252119},
            {latitude: 45.7638818, longitude: 21.2252649},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "Lonovici, Joseph, Episc.",
        poly_points: [
            {latitude: 45.7558502, longitude: 21.2451046},
            {latitude: 45.7565558, longitude: 21.2452468},
            {latitude: 45.7566662, longitude: 21.2452602},
            {latitude: 45.7567167, longitude: 21.2452414},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Lonovici, Joseph, Episc.",
        poly_points: [
            {latitude: 45.7567563, longitude: 21.2451422},
            {latitude: 45.7566627, longitude: 21.2451905},
            {latitude: 45.7565916, longitude: 21.2451878},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Nistrului, Splaiul",
        poly_points: [
            {latitude: 45.7563745, longitude: 21.2415422},
            {latitude: 45.7568106, longitude: 21.2418292},
            {latitude: 45.7571156, longitude: 21.2420732},
            {latitude: 45.7572747, longitude: 21.2422208},
            {latitude: 45.7575217, longitude: 21.2424783},
            {latitude: 45.7578473, longitude: 21.2428538},
            {latitude: 45.7580887, longitude: 21.2431542},
            {latitude: 45.7582721, longitude: 21.2434439},
            {latitude: 45.7586127, longitude: 21.244042},
            {latitude: 45.758841, longitude: 21.2445301},
            {latitude: 45.7589888, longitude: 21.2448681},
            {latitude: 45.7591629, longitude: 21.2453402},
            {latitude: 45.7592583, longitude: 21.2456272},
            {latitude: 45.7593856, longitude: 21.2461127},
            {latitude: 45.7596906, longitude: 21.2472794},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 15
    },
    {
        name: "Piata Balcescu",
        poly_points: [
            {latitude: 45.7418559, longitude: 21.2260634},
            {latitude: 45.7417819, longitude: 21.2260111},
            {latitude: 45.7414394, longitude: 21.2257348},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Piata Balcescu",
        poly_points: [
            {latitude: 45.7417791, longitude: 21.2262002},
            {latitude: 45.7414085, longitude: 21.2258917},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Independentei",
        poly_points: [
            {latitude: 45.73872, longitude: 21.2250582},
            {latitude: 45.7399705, longitude: 21.2251118},
            {latitude: 45.7404647, longitude: 21.2252191},
            {latitude: 45.741161, longitude: 21.2253479},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Virgil Onitiu",
        poly_points: [
            {latitude: 45.7427338, longitude: 21.222842},
            {latitude: 45.74314, longitude: 21.2235689},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Onitiu",
        poly_points: [
            {latitude: 45.7421217, longitude: 21.2216833},
            {latitude: 45.7427413, longitude: 21.2226784},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Onitiu",
        poly_points: [
            {latitude: 45.7420505, longitude: 21.2217396},
            {latitude: 45.7426757, longitude: 21.2227535},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Onitiu",
        poly_points: [
            {latitude: 45.7428049, longitude: 21.2227884},
            {latitude: 45.7432111, longitude: 21.2235152},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Coriolan Baran",
        poly_points: [
            {latitude: 45.7439823, longitude: 21.2211442},
            {latitude: 45.7427544, longitude: 21.222665},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Coriolan Baran",
        poly_points: [
            {latitude: 45.7440178, longitude: 21.2212274},
            {latitude: 45.7433973, longitude: 21.2220012},
            {latitude: 45.7428012, longitude: 21.2227562},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Coriolan Baran",
        poly_points: [
            {latitude: 45.7427188, longitude: 21.2228474},
            {latitude: 45.7417342, longitude: 21.2240195},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Coriolan Baran",
        poly_points: [
            {latitude: 45.7414684, longitude: 21.2240919},
            {latitude: 45.741328, longitude: 21.2241912},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Coriolan Baran",
        poly_points: [
            {latitude: 45.7414964, longitude: 21.2241885},
            {latitude: 45.7413635, longitude: 21.224277},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Calea Torontalului",
        poly_points: [
            {latitude: 45.7684809, longitude: 21.2205219},
            {latitude: 45.7682414, longitude: 21.2207955},
            {latitude: 45.7681965, longitude: 21.2209189},
            {latitude: 45.7673957, longitude: 21.2217236},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Calea Torontalului",
        poly_points: [
            {latitude: 45.7673359, longitude: 21.2217933},
            {latitude: 45.7663554, longitude: 21.2228072},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7679458, longitude: 21.2167293},
            {latitude: 45.7676128, longitude: 21.2160802},
            {latitude: 45.7671226, longitude: 21.2152648},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7670402, longitude: 21.2151468},
            {latitude: 45.765476, longitude: 21.2128615},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7647051, longitude: 21.2117565},
            {latitude: 45.7643795, longitude: 21.2113702},
            {latitude: 45.7640203, longitude: 21.211043},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7638706, longitude: 21.2114131},
            {latitude: 45.764054, longitude: 21.2115633},
            {latitude: 45.7644619, longitude: 21.211971},
            {latitude: 45.7653488, longitude: 21.2132317},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7654049, longitude: 21.2133229},
            {latitude: 45.7667933, longitude: 21.2153184},
            {latitude: 45.7674893, longitude: 21.2165362},
            {latitude: 45.7677213, longitude: 21.2170458},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7677625, longitude: 21.2171423},
            {latitude: 45.7680768, longitude: 21.2179255},
            {latitude: 45.768305, longitude: 21.2185746},
            {latitude: 45.7683687, longitude: 21.2187785},
            {latitude: 45.7684622, longitude: 21.2192452},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7589605, longitude: 21.209659},
            {latitude: 45.7596978, longitude: 21.209718},
            {latitude: 45.7601094, longitude: 21.2097716},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7602292, longitude: 21.2097824},
            {latitude: 45.7610151, longitude: 21.2099326},
            {latitude: 45.7613707, longitude: 21.210072},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7629949, longitude: 21.2104529},
            {latitude: 45.7622389, longitude: 21.2100399},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7609478, longitude: 21.2095946},
            {latitude: 45.7602629, longitude: 21.2094283},
            {latitude: 45.7594732, longitude: 21.2093157},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bd. Cetatii",
        poly_points: [
            {latitude: 45.7654087, longitude: 21.2127757},
            {latitude: 45.76478, longitude: 21.2118584},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ion Heliade Radulescu",
        poly_points: [
            {latitude: 45.7454479, longitude: 21.2159514},
            {latitude: 45.74533, longitude: 21.2159621},
            {latitude: 45.7444989, longitude: 21.2162277},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Piata Alexandru Mocioni",
        poly_points: [
            {latitude: 45.7454479, longitude: 21.2159514},
            {latitude: 45.7459215, longitude: 21.2170485},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Alexandru Mocioni",
        poly_points: [
            {latitude: 45.7455134, longitude: 21.2159166},
            {latitude: 45.7459795, longitude: 21.2169814},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Mocioni",
        poly_points: [
            {latitude: 45.7466084, longitude: 21.216622},
            {latitude: 45.7464905, longitude: 21.2167293},
            {latitude: 45.7460356, longitude: 21.217086},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Treboniu Laurian",
        poly_points: [
            {latitude: 45.7469809, longitude: 21.2199479},
            {latitude: 45.7467506, longitude: 21.2192962},
            {latitude: 45.7465429, longitude: 21.2186846},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Treboniu Laurian",
        poly_points: [
            {latitude: 45.7463632, longitude: 21.2178612},
            {latitude: 45.7462116, longitude: 21.2175232},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Treboniu Laurian",
        poly_points: [
            {latitude: 45.7470501, longitude: 21.2198862},
            {latitude: 45.7468161, longitude: 21.2192371},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Treboniu Laurian",
        poly_points: [
            {latitude: 45.7467787, longitude: 21.2191218},
            {latitude: 45.7463988, longitude: 21.2179685},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Treboniu Laurian",
        poly_points: [
            {latitude: 45.7464156, longitude: 21.2182742},
            {latitude: 45.7463127, longitude: 21.2179604},
            {latitude: 45.7459907, longitude: 21.2171987},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Motilor",
        poly_points: [
            {latitude: 45.7472991, longitude: 21.217263},
            {latitude: 45.7463688, longitude: 21.2178826},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Timotei Cipariu",
        poly_points: [
            {latitude: 45.7480945, longitude: 21.218242},
            {latitude: 45.7467956, longitude: 21.2191111},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Metianu, Ioan, Mitropolit",
        poly_points: [
            {latitude: 45.7471081, longitude: 21.2200847},
            {latitude: 45.7473402, longitude: 21.2207821},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Metianu, Ioan, Mitropolit",
        poly_points: [
            {latitude: 45.7470445, longitude: 21.2201223},
            {latitude: 45.7472504, longitude: 21.2207419},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Metianu, Ioan, Mitropolit",
        poly_points: [
            {latitude: 45.7477071, longitude: 21.2218711},
            {latitude: 45.7479766, longitude: 21.2227321},
            {latitude: 45.74816, longitude: 21.2232417},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Metianu, Ioan, Mitropolit",
        poly_points: [
            {latitude: 45.747548, longitude: 21.221686},
            {latitude: 45.7478849, longitude: 21.2227321},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7489442, longitude: 21.2157744},
            {latitude: 45.7493148, longitude: 21.2169493},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7488469, longitude: 21.2157583},
            {latitude: 45.7489592, longitude: 21.2161177},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7490116, longitude: 21.2162733},
            {latitude: 45.7491239, longitude: 21.216622},
            {latitude: 45.7492362, longitude: 21.2170029},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.749371, longitude: 21.2171316},
            {latitude: 45.7497191, longitude: 21.2181938},
            {latitude: 45.7497341, longitude: 21.2183225},
            {latitude: 45.7497229, longitude: 21.2184352},
            {latitude: 45.7496255, longitude: 21.2189019},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7493036, longitude: 21.2172228},
            {latitude: 45.7496199, longitude: 21.2181455},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Miron Costin",
        poly_points: [
            {latitude: 45.7492362, longitude: 21.2170324},
            {latitude: 45.7483416, longitude: 21.2181696},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Miron Costin",
        poly_points: [
            {latitude: 45.7492681, longitude: 21.2171102},
            {latitude: 45.7483977, longitude: 21.2182474},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. General Henri Berthelot",
        poly_points: [
            {latitude: 45.7481001, longitude: 21.2202893},
            {latitude: 45.7478362, longitude: 21.2195383},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Zugrav Nedelcu",
        poly_points: [
            {latitude: 45.748933, longitude: 21.2161285},
            {latitude: 45.7474993, longitude: 21.2170994},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Zugrav Nedelcu",
        poly_points: [
            {latitude: 45.7489854, longitude: 21.2162304},
            {latitude: 45.7475817, longitude: 21.2172067},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. General Henri Berthelot",
        poly_points: [
            {latitude: 45.7478746, longitude: 21.2195302},
            {latitude: 45.7481291, longitude: 21.2202624},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Alexandru Odobescu",
        poly_points: [
            {latitude: 45.7432616, longitude: 21.219905},
            {latitude: 45.7438119, longitude: 21.2176734},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Alexandru Odobescu",
        poly_points: [
            {latitude: 45.7432317, longitude: 21.220023},
            {latitude: 45.7431156, longitude: 21.2202644},
            {latitude: 45.7420749, longitude: 21.2215894},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Alexandru Odobescu",
        poly_points: [
            {latitude: 45.7441302, longitude: 21.2163538},
            {latitude: 45.744059, longitude: 21.2168527},
            {latitude: 45.7440403, longitude: 21.2170243},
            {latitude: 45.7439392, longitude: 21.2175554},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Alexandru Odobescu",
        poly_points: [
            {latitude: 45.7440553, longitude: 21.2162465},
            {latitude: 45.7442387, longitude: 21.2148464},
            {latitude: 45.7442836, longitude: 21.2145191},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Alexandru Odobescu",
        poly_points: [
            {latitude: 45.7420412, longitude: 21.2217933},
            {latitude: 45.7417155, longitude: 21.2220293},
            {latitude: 45.7416406, longitude: 21.2220937},
            {latitude: 45.7406297, longitude: 21.2228554},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Piata Plevnei",
        poly_points: [
            {latitude: 45.7473627, longitude: 21.2207928},
            {latitude: 45.7480739, longitude: 21.2203074},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Plevnei",
        poly_points: [
            {latitude: 45.7481132, longitude: 21.2203825},
            {latitude: 45.7473702, longitude: 21.2208867},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Plevnei",
        poly_points: [
            {latitude: 45.7481132, longitude: 21.2203825},
            {latitude: 45.748321, longitude: 21.2209752},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Plevnei",
        poly_points: [
            {latitude: 45.748321, longitude: 21.2209752},
            {latitude: 45.7475648, longitude: 21.2214956},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Plevnei",
        poly_points: [
            {latitude: 45.7483491, longitude: 21.2210664},
            {latitude: 45.7475948, longitude: 21.2215787},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Plevnei",
        poly_points: [
            {latitude: 45.7475648, longitude: 21.2214956},
            {latitude: 45.7473683, longitude: 21.2209028},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Plevnei",
        poly_points: [
            {latitude: 45.7475068, longitude: 21.2215385},
            {latitude: 45.7473103, longitude: 21.220935},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Plevnei",
        poly_points: [
            {latitude: 45.7481694, longitude: 21.2203422},
            {latitude: 45.7483828, longitude: 21.2209672},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Gheorghe Lazar",
        poly_points: [
            {latitude: 45.7619882, longitude: 21.2131244},
            {latitude: 45.7614455, longitude: 21.2145299},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Gheroghe Lazar",
        poly_points: [
            {latitude: 45.7613632, longitude: 21.2144548},
            {latitude: 45.7618572, longitude: 21.213178},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Gheorghe Lazar",
        poly_points: [
            {latitude: 45.760974, longitude: 21.2163645},
            {latitude: 45.7605585, longitude: 21.2175179},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Gheorghe Lazar",
        poly_points: [
            {latitude: 45.7619882, longitude: 21.2137359},
            {latitude: 45.7613183, longitude: 21.2154526},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Gheorghe Lazar",
        poly_points: [
            {latitude: 45.7630136, longitude: 21.2111235},
            {latitude: 45.7629051, longitude: 21.2114507},
            {latitude: 45.7622352, longitude: 21.2131244},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Calea Circumvalatiunii",
        poly_points: [
            {latitude: 45.7578189, longitude: 21.2175715},
            {latitude: 45.7575308, longitude: 21.2174428},
            {latitude: 45.7574784, longitude: 21.2174696},
            {latitude: 45.7571378, longitude: 21.2173301},
            {latitude: 45.7571003, longitude: 21.2175608},
            {latitude: 45.7572912, longitude: 21.2176627},
            {latitude: 45.7572426, longitude: 21.217888},
            {latitude: 45.7577104, longitude: 21.2181026},
            {latitude: 45.7578189, longitude: 21.2175715},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 9
    },
    {
        name: "Calea Circumvalatiunii",
        poly_points: [
            {latitude: 45.760218, longitude: 21.2182742},
            {latitude: 45.76106, longitude: 21.2186819},
            {latitude: 45.7615615, longitude: 21.2189555},
            {latitude: 45.7618684, longitude: 21.2192076},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Calea Circumvalatiunii",
        poly_points: [
            {latitude: 45.7600907, longitude: 21.2185907},
            {latitude: 45.7610039, longitude: 21.2189448},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Calea Circumvalatiunii",
        poly_points: [
            {latitude: 45.7621716, longitude: 21.2199211},
            {latitude: 45.7626356, longitude: 21.220479},
            {latitude: 45.7632269, longitude: 21.2214446},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Calea Circumvalatiunii",
        poly_points: [
            {latitude: 45.7629275, longitude: 21.2204629},
            {latitude: 45.762587, longitude: 21.2199694},
            {latitude: 45.7621865, longitude: 21.2195295},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Aleea Ionel Perlea",
        poly_points: [
            {latitude: 45.7617299, longitude: 21.220082},
            {latitude: 45.7623437, longitude: 21.220715},
            {latitude: 45.76292, longitude: 21.221627},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.740918, longitude: 21.2113917},
            {latitude: 45.741225, longitude: 21.2116492},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7417267, longitude: 21.2120783},
            {latitude: 45.7412849, longitude: 21.211735},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7425877, longitude: 21.2126792},
            {latitude: 45.7418091, longitude: 21.2121212},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul 16 Decembrie 1989",
        poly_points: [
            {latitude: 45.7397125, longitude: 21.2105012},
            {latitude: 45.7407009, longitude: 21.2112629},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Protopop George Popovici",
        poly_points: [
            {latitude: 45.7434806, longitude: 21.2295422},
            {latitude: 45.7435012, longitude: 21.229679},
            {latitude: 45.7437015, longitude: 21.230422},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Protopop George Popovici",
        poly_points: [
            {latitude: 45.7433889, longitude: 21.2290057},
            {latitude: 45.7434601, longitude: 21.2294188},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Protopop George Popovici",
        poly_points: [
            {latitude: 45.7433159, longitude: 21.2290058},
            {latitude: 45.7434357, longitude: 21.2296924},
            {latitude: 45.7436397, longitude: 21.2304649},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Protopop George Popovici",
        poly_points: [
            {latitude: 45.7436716, longitude: 21.230548},
            {latitude: 45.7438812, longitude: 21.2311891},
            {latitude: 45.7439374, longitude: 21.2313849},
            {latitude: 45.7439711, longitude: 21.2315512},
            {latitude: 45.7440628, longitude: 21.2321761},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Str. Doctor Aurel Candea",
        poly_points: [
            {latitude: 45.7437165, longitude: 21.2304085},
            {latitude: 45.7441414, longitude: 21.2300625},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Doctor Aurel Candea",
        poly_points: [
            {latitude: 45.7436229, longitude: 21.2304783},
            {latitude: 45.7431025, longitude: 21.230886},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Mitropolit Varlaam",
        poly_points: [
            {latitude: 45.7431006, longitude: 21.2308645},
            {latitude: 45.7428854, longitude: 21.2303174},
            {latitude: 45.7428255, longitude: 21.2300867},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Mitropolit Varlaam",
        poly_points: [
            {latitude: 45.7431269, longitude: 21.2309906},
            {latitude: 45.7432485, longitude: 21.2323102},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Mitropolit Varlaam",
        poly_points: [
            {latitude: 45.7430688, longitude: 21.2310308},
            {latitude: 45.7430969, longitude: 21.2313634},
            {latitude: 45.7431886, longitude: 21.2323934},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Mitropolit Varlaam",
        poly_points: [
            {latitude: 45.7432598, longitude: 21.2324202},
            {latitude: 45.7433346, longitude: 21.2335226},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Mitropolit Varlaam",
        poly_points: [
            {latitude: 45.7432654, longitude: 21.2335816},
            {latitude: 45.742803, longitude: 21.2343138},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Mitropolit Varlaam",
        poly_points: [
            {latitude: 45.743198, longitude: 21.232439},
            {latitude: 45.743271, longitude: 21.2335575},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Mitropolit Varlaam",
        poly_points: [
            {latitude: 45.7431306, longitude: 21.2339437},
            {latitude: 45.7428611, longitude: 21.2343621},
            {latitude: 45.7428236, longitude: 21.2344024},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Putna",
        poly_points: [
            {latitude: 45.7458185, longitude: 21.2331176},
            {latitude: 45.7449725, longitude: 21.2333912},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Putna",
        poly_points: [
            {latitude: 45.7439654, longitude: 21.233528},
            {latitude: 45.7433627, longitude: 21.2336192},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Putna",
        poly_points: [
            {latitude: 45.7433552, longitude: 21.2335226},
            {latitude: 45.744877, longitude: 21.2333027},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Arges",
        poly_points: [
            {latitude: 45.743183, longitude: 21.2338686},
            {latitude: 45.7439542, longitude: 21.2348235},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Arges",
        poly_points: [
            {latitude: 45.7439916, longitude: 21.2349308},
            {latitude: 45.7444409, longitude: 21.2363738},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Arges",
        poly_points: [
            {latitude: 45.7439392, longitude: 21.2349951},
            {latitude: 45.744381, longitude: 21.2364113},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Arges",
        poly_points: [
            {latitude: 45.7431418, longitude: 21.2340134},
            {latitude: 45.7438981, longitude: 21.23492},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Petre Ramneantu",
        poly_points: [
            {latitude: 45.7432766, longitude: 21.2322915},
            {latitude: 45.7434563, longitude: 21.2322754},
            {latitude: 45.7440403, longitude: 21.2321627},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Petre Ramneantu",
        poly_points: [
            {latitude: 45.7446954, longitude: 21.2320715},
            {latitude: 45.7443061, longitude: 21.2321573},
            {latitude: 45.7441489, longitude: 21.2321573},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Petre Ramneantu",
        poly_points: [
            {latitude: 45.7455639, longitude: 21.2319803},
            {latitude: 45.744804, longitude: 21.2321788},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Petre Ramneantu",
        poly_points: [
            {latitude: 45.7465335, longitude: 21.2317175},
            {latitude: 45.7456501, longitude: 21.231975},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Petre Ramneantu",
        poly_points: [
            {latitude: 45.7465148, longitude: 21.2315994},
            {latitude: 45.7456314, longitude: 21.2318677},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Petre Ramneantu",
        poly_points: [
            {latitude: 45.7447142, longitude: 21.2321949},
            {latitude: 45.7443099, longitude: 21.2322754},
            {latitude: 45.7440777, longitude: 21.23227},
            {latitude: 45.7432878, longitude: 21.2324309},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Piata Bisericii",
        poly_points: [
            {latitude: 45.742307, longitude: 21.2301779},
            {latitude: 45.7427413, longitude: 21.230194},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Bisericii",
        poly_points: [
            {latitude: 45.7426252, longitude: 21.2292176},
            {latitude: 45.7422658, longitude: 21.229341},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Bisericii",
        poly_points: [
            {latitude: 45.7428199, longitude: 21.2300223},
            {latitude: 45.7427787, longitude: 21.2298882},
            {latitude: 45.7427038, longitude: 21.2292069},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Piata Bisericii",
        poly_points: [
            {latitude: 45.7427487, longitude: 21.2300813},
            {latitude: 45.7427038, longitude: 21.2299043},
            {latitude: 45.7426252, longitude: 21.2292176},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Sorin Titel",
        poly_points: [
            {latitude: 45.7422321, longitude: 21.2272221},
            {latitude: 45.7444671, longitude: 21.2268466},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Traian Lalescu",
        poly_points: [
            {latitude: 45.7465597, longitude: 21.2293518},
            {latitude: 45.7452383, longitude: 21.2296039},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ioan Curea",
        poly_points: [
            {latitude: 45.7453543, longitude: 21.2319106},
            {latitude: 45.745081, longitude: 21.2297595},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ion Vidu",
        poly_points: [
            {latitude: 45.7457811, longitude: 21.2329888},
            {latitude: 45.7455639, longitude: 21.2319803},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ion Vidu",
        poly_points: [
            {latitude: 45.7464437, longitude: 21.2353331},
            {latitude: 45.7461517, longitude: 21.234169},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ion Vidu",
        poly_points: [
            {latitude: 45.7460581, longitude: 21.2341475},
            {latitude: 45.7458185, longitude: 21.2331176},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Bela Bartok",
        poly_points: [
            {latitude: 45.7460899, longitude: 21.2342361},
            {latitude: 45.7459514, longitude: 21.2343058},
            {latitude: 45.7451391, longitude: 21.2345365},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Bela Bartok",
        poly_points: [
            {latitude: 45.7460469, longitude: 21.234161},
            {latitude: 45.7459402, longitude: 21.2342146},
            {latitude: 45.7451241, longitude: 21.2344426},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Bela Bartok",
        poly_points: [
            {latitude: 45.7450473, longitude: 21.2345579},
            {latitude: 45.7440553, longitude: 21.2348691},
            {latitude: 45.743986, longitude: 21.2349066},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Bela Bartok",
        poly_points: [
            {latitude: 45.7450342, longitude: 21.2344667},
            {latitude: 45.7440646, longitude: 21.2347671},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Bela Bartok",
        poly_points: [
            {latitude: 45.7470351, longitude: 21.2336916},
            {latitude: 45.7462565, longitude: 21.2340617},
            {latitude: 45.7461891, longitude: 21.2341073},
            {latitude: 45.7461367, longitude: 21.2341207},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Ciprian Porumbescu",
        poly_points: [
            {latitude: 45.7411427, longitude: 21.2243199},
            {latitude: 45.7406859, longitude: 21.2229574},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ciprian Porumbescu",
        poly_points: [
            {latitude: 45.7405624, longitude: 21.2226731},
            {latitude: 45.7403976, longitude: 21.2222815},
            {latitude: 45.7398398, longitude: 21.2208974},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Ciprian Porumbescu",
        poly_points: [
            {latitude: 45.74048, longitude: 21.2227911},
            {latitude: 45.7397424, longitude: 21.2209564},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ciprian Porumbescu",
        poly_points: [
            {latitude: 45.7395964, longitude: 21.2201196},
            {latitude: 45.7392707, longitude: 21.2187999},
            {latitude: 45.7386155, longitude: 21.2160534},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Ciprian Porumbescu",
        poly_points: [
            {latitude: 45.7397088, longitude: 21.2208545},
            {latitude: 45.7395889, longitude: 21.2204951},
            {latitude: 45.7394991, longitude: 21.2201464},
            {latitude: 45.7385594, longitude: 21.2162358},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Ciprian Porumbescu",
        poly_points: [
            {latitude: 45.74124, longitude: 21.2251139},
            {latitude: 45.7405062, longitude: 21.2229359},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Odobescu, Zona",
        poly_points: [
            {latitude: 45.7426701, longitude: 21.2172228},
            {latitude: 45.7420524, longitude: 21.2178397},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Odobescu, Zona",
        poly_points: [
            {latitude: 45.7427487, longitude: 21.2171209},
            {latitude: 45.7435611, longitude: 21.2164772},
            {latitude: 45.7440291, longitude: 21.2163699},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Odobescu, Zona",
        poly_points: [
            {latitude: 45.7427188, longitude: 21.217019},
            {latitude: 45.7434263, longitude: 21.216445},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Odobescu, Zona",
        poly_points: [
            {latitude: 45.7424455, longitude: 21.2162465},
            {latitude: 45.7422022, longitude: 21.2155062},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Odobescu, Zona",
        poly_points: [
            {latitude: 45.7427188, longitude: 21.217019},
            {latitude: 45.7424979, longitude: 21.216386},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Odobescu, Zona",
        poly_points: [
            {latitude: 45.7418989, longitude: 21.2148839},
            {latitude: 45.7426364, longitude: 21.2170833},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Odobescu, Zona",
        poly_points: [
            {latitude: 45.7427347, longitude: 21.2171423},
            {latitude: 45.7429631, longitude: 21.2177566},
            {latitude: 45.7429762, longitude: 21.2178303},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Odobescu, Zona",
        poly_points: [
            {latitude: 45.7419888, longitude: 21.2148517},
            {latitude: 45.742161, longitude: 21.2153721},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Madgearu",
        poly_points: [
            {latitude: 45.7439018, longitude: 21.2177056},
            {latitude: 45.7457324, longitude: 21.2208652},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Madgearu",
        poly_points: [
            {latitude: 45.7458971, longitude: 21.2210101},
            {latitude: 45.7463651, longitude: 21.2223673},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Madgearu",
        poly_points: [
            {latitude: 45.7458185, longitude: 21.2210584},
            {latitude: 45.7462827, longitude: 21.2224102},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Madgearu",
        poly_points: [
            {latitude: 45.7463988, longitude: 21.2224746},
            {latitude: 45.7467806, longitude: 21.2235636},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Madgearu",
        poly_points: [
            {latitude: 45.7463276, longitude: 21.2225336},
            {latitude: 45.7467057, longitude: 21.2236011},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Madgearu",
        poly_points: [
            {latitude: 45.7468105, longitude: 21.2236655},
            {latitude: 45.7469565, longitude: 21.2251997},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Madgearu",
        poly_points: [
            {latitude: 45.7467357, longitude: 21.2237406},
            {latitude: 45.7468779, longitude: 21.2252051},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Virgil Madgearu",
        poly_points: [
            {latitude: 45.7439579, longitude: 21.217593},
            {latitude: 45.7458148, longitude: 21.2207955},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Sfanta Rozalia",
        poly_points: [
            {latitude: 45.7451915, longitude: 21.2236467},
            {latitude: 45.7451596, longitude: 21.2243146},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Sfanta Rozalia",
        poly_points: [
            {latitude: 45.7452495, longitude: 21.2237191},
            {latitude: 45.7452289, longitude: 21.2241563},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Remus",
        poly_points: [
            {latitude: 45.7453, longitude: 21.2234643},
            {latitude: 45.7462846, longitude: 21.2224478},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Remus",
        poly_points: [
            {latitude: 45.7475274, longitude: 21.221627},
            {latitude: 45.7464081, longitude: 21.2224585},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Remus",
        poly_points: [
            {latitude: 45.7475068, longitude: 21.2215385},
            {latitude: 45.7463875, longitude: 21.2223512},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Remus",
        poly_points: [
            {latitude: 45.74533, longitude: 21.2235662},
            {latitude: 45.7463127, longitude: 21.2225443},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Romulus",
        poly_points: [
            {latitude: 45.7452121, longitude: 21.2233382},
            {latitude: 45.7446543, longitude: 21.22226},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Filaret Barbu",
        poly_points: [
            {latitude: 45.7467207, longitude: 21.2237191},
            {latitude: 45.7457961, longitude: 21.2243977},
            {latitude: 45.7456651, longitude: 21.2244353},
            {latitude: 45.7452289, longitude: 21.224438},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Filaret Barbu",
        poly_points: [
            {latitude: 45.7478737, longitude: 21.2227535},
            {latitude: 45.7467806, longitude: 21.2235636},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Filaret Barbu",
        poly_points: [
            {latitude: 45.7479055, longitude: 21.2228447},
            {latitude: 45.7468105, longitude: 21.2236655},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Filaret Barbu",
        poly_points: [
            {latitude: 45.7452289, longitude: 21.224328},
            {latitude: 45.7457118, longitude: 21.2243414},
            {latitude: 45.7458166, longitude: 21.2242904},
            {latitude: 45.7466945, longitude: 21.2236333},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bulevardul Mihai Viteazu",
        poly_points: [
            {latitude: 45.7468779, longitude: 21.2252051},
            {latitude: 45.7460132, longitude: 21.2253016},
            {latitude: 45.7452682, longitude: 21.2254089},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Bulevardul Mihai Viteazu",
        poly_points: [
            {latitude: 45.7478063, longitude: 21.2255752},
            {latitude: 45.746994, longitude: 21.2254518},
            {latitude: 45.7468293, longitude: 21.2254357},
            {latitude: 45.7453468, longitude: 21.2256289},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bulevardul Mihai Viteazu",
        poly_points: [
            {latitude: 45.744366, longitude: 21.225543},
            {latitude: 45.7421722, longitude: 21.2258756},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Mihai Viteazu",
        poly_points: [
            {latitude: 45.7445083, longitude: 21.2257737},
            {latitude: 45.7424043, longitude: 21.2260956},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Mihai Viteazu",
        poly_points: [
            {latitude: 45.7478213, longitude: 21.2253284},
            {latitude: 45.7471549, longitude: 21.2252212},
            {latitude: 45.746979, longitude: 21.2252265},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Ion Ghica",
        poly_points: [
            {latitude: 45.7478138, longitude: 21.212014},
            {latitude: 45.7457923, longitude: 21.2133873},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ion Ghica",
        poly_points: [
            {latitude: 45.7446468, longitude: 21.2142241},
            {latitude: 45.7456501, longitude: 21.2135482},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Emanoil Gojdu",
        poly_points: [
            {latitude: 45.7481507, longitude: 21.2135696},
            {latitude: 45.7462715, longitude: 21.2148303},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Emanoil Gojdu",
        poly_points: [
            {latitude: 45.7467244, longitude: 21.2160695},
            {latitude: 45.7482929, longitude: 21.2150341},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Emanoil Gojdu",
        poly_points: [
            {latitude: 45.7481731, longitude: 21.2137038},
            {latitude: 45.7463239, longitude: 21.2149537},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Ady Endre",
        poly_points: [
            {latitude: 45.7467544, longitude: 21.2161821},
            {latitude: 45.7485849, longitude: 21.2149751},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.74714, longitude: 21.2100345},
            {latitude: 45.7478138, longitude: 21.212014},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7472298, longitude: 21.2099808},
            {latitude: 45.7479036, longitude: 21.2119818},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7478624, longitude: 21.2121695},
            {latitude: 45.7480009, longitude: 21.2125504},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7480234, longitude: 21.2126684},
            {latitude: 45.7481357, longitude: 21.2135482},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7481881, longitude: 21.2131459},
            {latitude: 45.748233, longitude: 21.2136018},
            {latitude: 45.7486523, longitude: 21.2148571},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Splaiul Tudor Vladimirescu",
        poly_points: [
            {latitude: 45.7481881, longitude: 21.2137413},
            {latitude: 45.7485624, longitude: 21.2148786},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Anton Seiller",
        poly_points: [
            {latitude: 45.7498689, longitude: 21.2155974},
            {latitude: 45.7499025, longitude: 21.2155706},
            {latitude: 45.750041, longitude: 21.2154794},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Str. Anton Seiller",
        poly_points: [
            {latitude: 45.7501009, longitude: 21.2154365},
            {latitude: 45.7505726, longitude: 21.2151039},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Anton Seiller",
        poly_points: [
            {latitude: 45.7513998, longitude: 21.2145299},
            {latitude: 45.7506849, longitude: 21.2150234},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Andrei Muresanu",
        poly_points: [
            {latitude: 45.7497528, longitude: 21.2141651},
            {latitude: 45.7499362, longitude: 21.2140256},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Andrei Muresanu",
        poly_points: [
            {latitude: 45.7502319, longitude: 21.2138218},
            {latitude: 45.7503555, longitude: 21.2137359},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Andrei Muresanu",
        poly_points: [
            {latitude: 45.7511191, longitude: 21.2132317},
            {latitude: 45.7504753, longitude: 21.2136608},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Andrei Muresanu",
        poly_points: [
            {latitude: 45.7508945, longitude: 21.2132317},
            {latitude: 45.749371, longitude: 21.2142563},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Andrei Muresanu",
        poly_points: [
            {latitude: 45.7494197, longitude: 21.2143743},
            {latitude: 45.7496143, longitude: 21.2142295},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Bulevardul Republicii",
        poly_points: [
            {latitude: 45.75131, longitude: 21.2130654},
            {latitude: 45.7511116, longitude: 21.2117028},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Garii",
        poly_points: [
            {latitude: 45.7500317, longitude: 21.2054291},
            {latitude: 45.7501767, longitude: 21.2063371},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str. Romulus",
        poly_points: [
            {latitude: 45.7440514, longitude: 21.2212577},
            {latitude: 45.7444819, longitude: 21.2220784},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Burebista",
        poly_points: [
            {latitude: 45.764104, longitude: 21.2194374},
            {latitude: 45.7649591, longitude: 21.2185308},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Burebista",
        poly_points: [
            {latitude: 45.7640362, longitude: 21.2195219},
            {latitude: 45.7631699, longitude: 21.2204473},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Zanelor, Intrarea",
        poly_points: [
            {latitude: 45.7642392, longitude: 21.2224819},
            {latitude: 45.7646434, longitude: 21.2232705},
            {latitude: 45.764692, longitude: 21.2231632},
            {latitude: 45.764344, longitude: 21.2225195},
            {latitude: 45.7642392, longitude: 21.2224819},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Brandusei",
        poly_points: [
            {latitude: 45.7659122, longitude: 21.2217746},
            {latitude: 45.7661667, longitude: 21.2215117},
            {latitude: 45.7660731, longitude: 21.2212972},
            {latitude: 45.7658261, longitude: 21.2215493},
            {latitude: 45.7659122, longitude: 21.2217746},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Libelulei, Aleea",
        poly_points: [
            {latitude: 45.7641922, longitude: 21.2208012},
            {latitude: 45.7640266, longitude: 21.2207248},
            {latitude: 45.7639695, longitude: 21.220765},
            {latitude: 45.7639424, longitude: 21.2208321},
            {latitude: 45.7639022, longitude: 21.2213913},
            {latitude: 45.764152, longitude: 21.2214208},
            {latitude: 45.7641922, longitude: 21.2208012},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Crucii, P-ta.",
        poly_points: [
            {latitude: 45.742498, longitude: 21.2313747},
            {latitude: 45.7422809, longitude: 21.2307846},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Crucii, P-ta.",
        poly_points: [
            {latitude: 45.7422678, longitude: 21.2307793},
            {latitude: 45.7415059, longitude: 21.2313103},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Muhle, Wilhelm",
        poly_points: [
            {latitude: 45.7415264, longitude: 21.2276244},
            {latitude: 45.7415452, longitude: 21.2290406},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Parvan, Vasile, nr. 5 si nr. 5A",
        poly_points: [
            {latitude: 45.7486223, longitude: 21.2310835},
            {latitude: 45.7482386, longitude: 21.2312901},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Barbu, Iscovescu",
        poly_points: [
            {latitude: 45.7520482, longitude: 21.2399615},
            {latitude: 45.7512023, longitude: 21.2393177},
            {latitude: 45.7511424, longitude: 21.2394787},
            {latitude: 45.7520071, longitude: 21.240117},
            {latitude: 45.7520482, longitude: 21.2399615},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Consiliul Europei(Piata)",
        poly_points: [
            {latitude: 45.7641158, longitude: 21.2250582},
            {latitude: 45.76407, longitude: 21.2251105},
            {latitude: 45.7640194, longitude: 21.2251896},
            {latitude: 45.7639942, longitude: 21.2252245},
            {latitude: 45.763967, longitude: 21.2252513},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Iuliu Maniu",
        poly_points: [
            {latitude: 45.7434263, longitude: 21.2067515},
            {latitude: 45.7423669, longitude: 21.2074757},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Ghirlandei",
        poly_points: [
            {latitude: 45.7408083, longitude: 21.2274715},
            {latitude: 45.7413474, longitude: 21.2275359},
            {latitude: 45.7415534, longitude: 21.2275573},
            {latitude: 45.7421374, longitude: 21.2275251},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Nicolint",
        poly_points: [
            {latitude: 45.7505225, longitude: 21.2459107},
            {latitude: 45.7502979, longitude: 21.2459966},
            {latitude: 45.7499685, longitude: 21.2462165},
            {latitude: 45.7496391, longitude: 21.2464579},
            {latitude: 45.7491225, longitude: 21.2468549},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Nicolint",
        poly_points: [
            {latitude: 45.7504963, longitude: 21.2459966},
            {latitude: 45.7503429, longitude: 21.2460556},
            {latitude: 45.750107, longitude: 21.2462111},
            {latitude: 45.7496204, longitude: 21.2465652},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bd. General Ion Dragalina",
        poly_points: [
            {latitude: 45.7487646, longitude: 21.2085593},
            {latitude: 45.747664, longitude: 21.2092942},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.745804, longitude: 21.2081456},
            {latitude: 45.74449, longitude: 21.2090522},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.745789, longitude: 21.2080652},
            {latitude: 45.7451713, longitude: 21.2084889},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7457478, longitude: 21.207931},
            {latitude: 45.7451264, longitude: 21.2083656},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7449542, longitude: 21.2084889},
            {latitude: 45.7444601, longitude: 21.2088484},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7457142, longitude: 21.2078559},
            {latitude: 45.7443964, longitude: 21.2087947},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7441401, longitude: 21.2092666},
            {latitude: 45.7426127, longitude: 21.210318},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7440054, longitude: 21.2090037},
            {latitude: 45.7416992, longitude: 21.210597},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7440675, longitude: 21.2091176},
            {latitude: 45.7425588, longitude: 21.2101798},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7440862, longitude: 21.2091981},
            {latitude: 45.7425738, longitude: 21.2102656},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7424203, longitude: 21.2102495},
            {latitude: 45.7418175, longitude: 21.2106894},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7424016, longitude: 21.2103783},
            {latitude: 45.7418138, longitude: 21.2108021},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vacarescu, Iancu",
        poly_points: [
            {latitude: 45.7425068, longitude: 21.2103859},
            {latitude: 45.7417692, longitude: 21.2109009},
            {latitude: 45.7417019, longitude: 21.2108821},
            {latitude: 45.7413556, longitude: 21.2111396},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Ulmului",
        poly_points: [
            {latitude: 45.7656183, longitude: 21.2157159},
            {latitude: 45.7657792, longitude: 21.2159787},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Ulmului",
        poly_points: [
            {latitude: 45.7657642, longitude: 21.2160351},
            {latitude: 45.7654779, longitude: 21.2163489},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Ulmului",
        poly_points: [
            {latitude: 45.7654461, longitude: 21.2163623},
            {latitude: 45.7653151, longitude: 21.2161504},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Burebista",
        poly_points: [
            {latitude: 45.765707, longitude: 21.2190719},
            {latitude: 45.7653721, longitude: 21.2183799},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Burebista",
        poly_points: [
            {latitude: 45.7654029, longitude: 21.2185341},
            {latitude: 45.7651624, longitude: 21.2187768},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Burebista",
        poly_points: [
            {latitude: 45.7653187, longitude: 21.2183664},
            {latitude: 45.7650661, longitude: 21.2186078},
            {latitude: 45.7649969, longitude: 21.2184764},
            {latitude: 45.765096, longitude: 21.2183396},
            {latitude: 45.7649931, longitude: 21.2181358},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "G1",
        poly_points: [
            {latitude: 45.7585349, longitude: 21.2085978},
            {latitude: 45.7581494, longitude: 21.2103037},
            {latitude: 45.7607842, longitude: 21.2104753},
            {latitude: 45.7619668, longitude: 21.2112049},
            {latitude: 45.7603052, longitude: 21.2155394},
            {latitude: 45.7612632, longitude: 21.216387},
            {latitude: 45.7630072, longitude: 21.2178032},
            {latitude: 45.7635087, longitude: 21.2185542},
            {latitude: 45.7640904, longitude: 21.2194866},
            {latitude: 45.764912, longitude: 21.2248413},
            {latitude: 45.769178, longitude: 21.220464},
            {latitude: 45.768714, longitude: 21.2175672},
            {latitude: 45.7677112, longitude: 21.2146489},
            {latitude: 45.7660197, longitude: 21.2118379},
            {latitude: 45.7643732, longitude: 21.2102929},
            {latitude: 45.7612745, longitude: 21.2088982},
            {latitude: 45.7585349, longitude: 21.2085978},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 17
    },
    {
        name: "Burebista",
        poly_points: [
            {latitude: 45.7651491, longitude: 21.2187613},
            {latitude: 45.7650825, longitude: 21.218638},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Burebista",
        poly_points: [
            {latitude: 45.7650562, longitude: 21.218297},
            {latitude: 45.7649635, longitude: 21.2180865},
            {latitude: 45.7647016, longitude: 21.2183829},
            {latitude: 45.764798, longitude: 21.2185787},
            {latitude: 45.7650562, longitude: 21.218297},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "1 Decembrie 1918, Blvd.",
        poly_points: [
            {latitude: 45.7435835, longitude: 21.2367128},
            {latitude: 45.7427299, longitude: 21.2342237},
            {latitude: 45.7423555, longitude: 21.2334083},
            {latitude: 45.7418763, longitude: 21.2324535},
            {latitude: 45.741487, longitude: 21.2314664},
            {latitude: 45.7410227, longitude: 21.2300395},
            {latitude: 45.7407532, longitude: 21.2289773},
            {latitude: 45.7406933, longitude: 21.2283551},
            {latitude: 45.7407232, longitude: 21.2276791},
            {latitude: 45.7408131, longitude: 21.2272393},
            {latitude: 45.7410227, longitude: 21.2265526},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 11
    },
    {
        name: "1 Decembrie 1918, Blvd.",
        poly_points: [
            {latitude: 45.7410927, longitude: 21.2263377},
            {latitude: 45.7413267, longitude: 21.2256779},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Kodaly, Zoltan, Intrarea",
        poly_points: [
            {latitude: 45.7631618, longitude: 21.2586123},
            {latitude: 45.7633302, longitude: 21.2585211},
            {latitude: 45.7633938, longitude: 21.258666},
            {latitude: 45.7635061, longitude: 21.2596906},
            {latitude: 45.7639702, longitude: 21.2596316},
            {latitude: 45.7638467, longitude: 21.2583119},
            {latitude: 45.7638167, longitude: 21.2581617},
            {latitude: 45.7631431, longitude: 21.2585158},
            {latitude: 45.7631618, longitude: 21.2586123},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 9
    },
    {
        name: "Lazarescu, Vasile, Mitropolit, Dr.",
        poly_points: [
            {latitude: 45.7684117, longitude: 21.2246504},
            {latitude: 45.7683238, longitude: 21.2259996},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Meziad",
        poly_points: [
            {latitude: 45.7310064, longitude: 21.2294614},
            {latitude: 45.7292502, longitude: 21.2292683},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Meziad",
        poly_points: [
            {latitude: 45.7306713, longitude: 21.2287828},
            {latitude: 45.7297389, longitude: 21.2286621},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Macin",
        poly_points: [
            {latitude: 45.7779706, longitude: 21.2632829},
            {latitude: 45.7803875, longitude: 21.2608046},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Macin",
        poly_points: [
            {latitude: 45.7790706, longitude: 21.2617702},
            {latitude: 45.7802678, longitude: 21.2605578},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vasile Parvan",
        poly_points: [
            {latitude: 45.7485656, longitude: 21.2330034},
            {latitude: 45.7484327, longitude: 21.2330437},
            {latitude: 45.7485412, longitude: 21.2336257},
            {latitude: 45.7486667, longitude: 21.2335614},
            {latitude: 45.7485656, longitude: 21.2330034},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Miorita",
        poly_points: [
            {latitude: 45.7512299, longitude: 21.2452099},
            {latitude: 45.7509342, longitude: 21.2454298},
            {latitude: 45.7510353, longitude: 21.2458375},
            {latitude: 45.7507808, longitude: 21.2461969},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "A1",
        poly_points: [
            {latitude: 45.7812866, longitude: 21.2196787},
            {latitude: 45.7680863, longitude: 21.2097223},
            {latitude: 45.7689844, longitude: 21.2188204},
            {latitude: 45.77102, longitude: 21.2237556},
            {latitude: 45.7810771, longitude: 21.2204941},
            {latitude: 45.7812866, longitude: 21.2196787},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "A1",
        poly_points: [
            {latitude: 45.7747317, longitude: 21.2180908},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A2",
        poly_points: [
            {latitude: 45.7209227, longitude: 21.2027333},
            {latitude: 45.7220052, longitude: 21.2078032},
            {latitude: 45.732225, longitude: 21.2153635},
            {latitude: 45.736935, longitude: 21.2305297},
            {latitude: 45.7379682, longitude: 21.2303494},
            {latitude: 45.7380436, longitude: 21.2192452},
            {latitude: 45.7385374, longitude: 21.2101148},
            {latitude: 45.7438686, longitude: 21.2060378},
            {latitude: 45.7437639, longitude: 21.1999866},
            {latitude: 45.7421616, longitude: 21.1953089},
            {latitude: 45.7374735, longitude: 21.1949878},
            {latitude: 45.7340661, longitude: 21.1986251},
            {latitude: 45.7291905, longitude: 21.2007171},
            {latitude: 45.7243374, longitude: 21.1994291},
            {latitude: 45.7209227, longitude: 21.2027333},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 15
    },
    {
        name: "A2",
        poly_points: [
            {latitude: 45.7338081, longitude: 21.2038435},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A3",
        poly_points: [
            {latitude: 45.7551876, longitude: 21.2498984},
            {latitude: 45.7561757, longitude: 21.2498018},
            {latitude: 45.7571937, longitude: 21.2509927},
            {latitude: 45.7628001, longitude: 21.250467},
            {latitude: 45.7627552, longitude: 21.2573012},
            {latitude: 45.7649482, longitude: 21.2697253},
            {latitude: 45.7698459, longitude: 21.2692959},
            {latitude: 45.7693914, longitude: 21.2636526},
            {latitude: 45.7782042, longitude: 21.2635668},
            {latitude: 45.7798029, longitude: 21.2623223},
            {latitude: 45.7808381, longitude: 21.2613751},
            {latitude: 45.7801075, longitude: 21.2598056},
            {latitude: 45.7727797, longitude: 21.2603149},
            {latitude: 45.7670799, longitude: 21.2602263},
            {latitude: 45.7652777, longitude: 21.2580793},
            {latitude: 45.7647627, longitude: 21.2538725},
            {latitude: 45.7635411, longitude: 21.2481174},
            {latitude: 45.7627701, longitude: 21.2479993},
            {latitude: 45.7592971, longitude: 21.2497803},
            {latitude: 45.7580845, longitude: 21.2496945},
            {latitude: 45.7578749, longitude: 21.2507888},
            {latitude: 45.7573808, longitude: 21.2506494},
            {latitude: 45.7565574, longitude: 21.249201},
            {latitude: 45.7552325, longitude: 21.2487718},
            {latitude: 45.7551876, longitude: 21.2498984},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 25
    },
    {
        name: "A3",
        poly_points: [
            {latitude: 45.7624138, longitude: 21.2495766},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A4",
        poly_points: [
            {latitude: 45.7413156, longitude: 21.2458373},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A5",
        poly_points: [
            {latitude: 45.7336342, longitude: 21.2483293},
            {latitude: 45.7367044, longitude: 21.2501532},
            {latitude: 45.7371724, longitude: 21.2460817},
            {latitude: 45.7360679, longitude: 21.2454486},
            {latitude: 45.734413, longitude: 21.2456793},
            {latitude: 45.7336342, longitude: 21.2483293},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "A5",
        poly_points: [
            {latitude: 45.7352142, longitude: 21.247589},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A6",
        poly_points: [
            {latitude: 45.7335825, longitude: 21.2483963},
            {latitude: 45.7334095, longitude: 21.2492842},
            {latitude: 45.7332073, longitude: 21.2532431},
            {latitude: 45.736053, longitude: 21.2538547},
            {latitude: 45.7366445, longitude: 21.2502069},
            {latitude: 45.7335825, longitude: 21.2483963},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "A6",
        poly_points: [
            {latitude: 45.7353197, longitude: 21.2516396},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A7",
        poly_points: [
            {latitude: 45.7311928, longitude: 21.2446923},
            {latitude: 45.731058, longitude: 21.2467522},
            {latitude: 45.7336342, longitude: 21.2483293},
            {latitude: 45.7343456, longitude: 21.2456578},
            {latitude: 45.7336042, longitude: 21.2451214},
            {latitude: 45.7311928, longitude: 21.2446923},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "A7",
        poly_points: [
            {latitude: 45.7329527, longitude: 21.246602},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A8",
        poly_points: [
            {latitude: 45.731073, longitude: 21.247117},
            {latitude: 45.7306761, longitude: 21.253801},
            {latitude: 45.7312902, longitude: 21.2539083},
            {latitude: 45.7313201, longitude: 21.2531037},
            {latitude: 45.7332073, longitude: 21.2532431},
            {latitude: 45.7333271, longitude: 21.2501425},
            {latitude: 45.733513, longitude: 21.2483612},
            {latitude: 45.731058, longitude: 21.2468917},
            {latitude: 45.731073, longitude: 21.247117},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 9
    },
    {
        name: "A8",
        poly_points: [
            {latitude: 45.7326456, longitude: 21.2499065},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A9",
        poly_points: [
            {latitude: 45.7346462, longitude: 21.2387632},
            {latitude: 45.731456, longitude: 21.2382912},
            {latitude: 45.7313211, longitude: 21.2413596},
            {latitude: 45.7340171, longitude: 21.2415957},
            {latitude: 45.7352303, longitude: 21.2438272},
            {latitude: 45.7361438, longitude: 21.2430119},
            {latitude: 45.7346462, longitude: 21.2387632},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "A9",
        poly_points: [
            {latitude: 45.7336641, longitude: 21.2397624},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "A10",
        poly_points: [
            {latitude: 45.7328701, longitude: 21.2217797},
            {latitude: 45.7259557, longitude: 21.2209778},
            {latitude: 45.7259758, longitude: 21.2216488},
            {latitude: 45.7320747, longitude: 21.2224564},
            {latitude: 45.7319911, longitude: 21.2252333},
            {latitude: 45.7319112, longitude: 21.2281067},
            {latitude: 45.7290966, longitude: 21.227663},
            {latitude: 45.7290917, longitude: 21.231559},
            {latitude: 45.7287922, longitude: 21.2371273},
            {latitude: 45.7328475, longitude: 21.2372881},
            {latitude: 45.7331041, longitude: 21.231437},
            {latitude: 45.736049, longitude: 21.2313256},
            {latitude: 45.7360649, longitude: 21.2304438},
            {latitude: 45.7326736, longitude: 21.2304739},
            {latitude: 45.7328701, longitude: 21.2217797},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 15
    },
    {
        name: "A10",
        poly_points: [
            {latitude: 45.7305188, longitude: 21.2346125},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 1
    },
    {
        name: "Astrilor – A6",
        poly_points: [
            {latitude: 45.7341856, longitude: 21.2507217},
            {latitude: 45.7355635, longitude: 21.2513225},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "B-dul Dr.Iosif Bulbuca",
        poly_points: [
            {latitude: 45.7373395, longitude: 21.250153},
            {latitude: 45.7373694, longitude: 21.2495897},
            {latitude: 45.7374481, longitude: 21.2488602},
            {latitude: 45.7377813, longitude: 21.2461994},
            {latitude: 45.7378599, longitude: 21.2457166},
            {latitude: 45.7379722, longitude: 21.2448637},
            {latitude: 45.7380621, longitude: 21.2438552},
            {latitude: 45.738253, longitude: 21.2423478},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "Astrilor – A6",
        poly_points: [
            {latitude: 45.7342043, longitude: 21.2506466},
            {latitude: 45.7349345, longitude: 21.2509363},
            {latitude: 45.7351816, longitude: 21.2510651},
            {latitude: 45.7356159, longitude: 21.2512957},
            {latitude: 45.7357582, longitude: 21.2514298},
            {latitude: 45.7362412, longitude: 21.2516015},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Astrilor – A6",
        poly_points: [
            {latitude: 45.7333824, longitude: 21.2503369},
            {latitude: 45.7333525, longitude: 21.2507071},
            {latitude: 45.7334685, longitude: 21.2506964},
            {latitude: 45.733521, longitude: 21.250396},
            {latitude: 45.7333824, longitude: 21.2503369},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Astrilor – A6",
        poly_points: [
            {latitude: 45.7340789, longitude: 21.2505086},
            {latitude: 45.7339104, longitude: 21.2504442},
            {latitude: 45.733843, longitude: 21.2508358},
            {latitude: 45.7339104, longitude: 21.2508573},
            {latitude: 45.7339553, longitude: 21.2505783},
            {latitude: 45.7340676, longitude: 21.2506266},
            {latitude: 45.7340789, longitude: 21.2505086},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Astrilor – A8",
        poly_points: [
            {latitude: 45.7333075, longitude: 21.2504335},
            {latitude: 45.7325062, longitude: 21.2503209},
            {latitude: 45.7317686, longitude: 21.250235},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Azurului, Aleea",
        poly_points: [
            {latitude: 45.7335066, longitude: 21.2494898},
            {latitude: 45.7343079, longitude: 21.2497688},
            {latitude: 45.7341693, longitude: 21.2505305},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Azurului, Aleea",
        poly_points: [
            {latitude: 45.7340832, longitude: 21.250949},
            {latitude: 45.7339933, longitude: 21.2514264},
            {latitude: 45.733735, longitude: 21.2531376},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Azurului, Aleea",
        poly_points: [
            {latitude: 45.7337874, longitude: 21.2531215},
            {latitude: 45.7340607, longitude: 21.2513674},
            {latitude: 45.7343528, longitude: 21.2497795},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Icar, Aleea",
        poly_points: [
            {latitude: 45.7362956, longitude: 21.2515934},
            {latitude: 45.7364865, longitude: 21.2507512},
            {latitude: 45.7364566, longitude: 21.2506171},
            {latitude: 45.7359623, longitude: 21.2502899},
            {latitude: 45.7358388, longitude: 21.2503543},
            {latitude: 45.7356291, longitude: 21.2512555},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Nagy, Eugen, Martir, Aleea – A6",
        poly_points: [
            {latitude: 45.7332323, longitude: 21.2530499},
            {latitude: 45.7333446, longitude: 21.2507486},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Nagy, Eugen, Martir, Aleea – A6",
        poly_points: [
            {latitude: 45.733326, longitude: 21.2503248},
            {latitude: 45.7333971, longitude: 21.2494933},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Nagy, Eugen, Martir, Aleea – A6",
        poly_points: [
            {latitude: 45.7334514, longitude: 21.2493779},
            {latitude: 45.7335825, longitude: 21.2483963},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Nagy, Eugen, Martir, Aleea – A8",
        poly_points: [
            {latitude: 45.7333125, longitude: 21.2504995},
            {latitude: 45.7331758, longitude: 21.2530664},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Orion – A6",
        poly_points: [
            {latitude: 45.7359672, longitude: 21.2536618},
            {latitude: 45.7354056, longitude: 21.253238},
            {latitude: 45.7352895, longitude: 21.2532058},
            {latitude: 45.7345968, longitude: 21.2532809},
            {latitude: 45.7343235, longitude: 21.2532809},
            {latitude: 45.7339153, longitude: 21.2532595},
            {latitude: 45.7331964, longitude: 21.2531468},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Orion – A6",
        poly_points: [
            {latitude: 45.7360009, longitude: 21.2535974},
            {latitude: 45.7354617, longitude: 21.2531897},
            {latitude: 45.7353644, longitude: 21.2531361},
            {latitude: 45.7353344, longitude: 21.2531415},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Orion – A6",
        poly_points: [
            {latitude: 45.735252, longitude: 21.2531307},
            {latitude: 45.7346941, longitude: 21.2531951},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Orion – A6",
        poly_points: [
            {latitude: 45.7343686, longitude: 21.2531919},
            {latitude: 45.7342825, longitude: 21.2532027},
            {latitude: 45.7341571, longitude: 21.2532027},
            {latitude: 45.7338987, longitude: 21.2531785},
            {latitude: 45.7338033, longitude: 21.2531571},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Orion – A6",
        poly_points: [
            {latitude: 45.7337153, longitude: 21.2531383},
            {latitude: 45.7332379, longitude: 21.2530793},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Nagy, Eugen, Martir, Aleea – A8",
        poly_points: [
            {latitude: 45.733513, longitude: 21.2483612},
            {latitude: 45.7333445, longitude: 21.2482646},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Orion – A8",
        poly_points: [
            {latitude: 45.7331964, longitude: 21.2531468},
            {latitude: 45.7317773, longitude: 21.2530341},
            {latitude: 45.7316238, longitude: 21.253018},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Orion – A8",
        poly_points: [
            {latitude: 45.7315526, longitude: 21.2529268},
            {latitude: 45.7313617, longitude: 21.2528625},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Orion – A8",
        poly_points: [
            {latitude: 45.7313055, longitude: 21.2528517},
            {latitude: 45.7308, longitude: 21.2527927},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Nicoara, Elena, Martir",
        poly_points: [
            {latitude: 45.7328712, longitude: 21.2386997},
            {latitude: 45.7327008, longitude: 21.2386702},
            {latitude: 45.7326934, longitude: 21.239035},
            {latitude: 45.7328712, longitude: 21.2390564},
            {latitude: 45.7328712, longitude: 21.2386997},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Versului",
        poly_points: [
            {latitude: 45.7318587, longitude: 21.2407623},
            {latitude: 45.7320815, longitude: 21.2407918},
            {latitude: 45.7322088, longitude: 21.2409071},
            {latitude: 45.7322931, longitude: 21.2409447},
            {latitude: 45.7327368, longitude: 21.2409769},
            {latitude: 45.7327649, longitude: 21.2409608},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Versului",
        poly_points: [
            {latitude: 45.7329577, longitude: 21.2408401},
            {latitude: 45.733394, longitude: 21.2408937},
            {latitude: 45.7334969, longitude: 21.2408508},
            {latitude: 45.7335175, longitude: 21.2408159},
            {latitude: 45.733628, longitude: 21.2407543},
            {latitude: 45.7342102, longitude: 21.2408267},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Sanatatii, Aleea",
        poly_points: [
            {latitude: 45.7343516, longitude: 21.2410595},
            {latitude: 45.7347673, longitude: 21.2420788},
            {latitude: 45.7352278, longitude: 21.2429961},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Sanatatii, Aleea",
        poly_points: [
            {latitude: 45.7350518, longitude: 21.2419447},
            {latitude: 45.7353813, longitude: 21.2416228},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Juganaru, Dumitru, Martir",
        poly_points: [
            {latitude: 45.7316319, longitude: 21.2315546},
            {latitude: 45.7312163, longitude: 21.2315064},
            {latitude: 45.7311863, longitude: 21.2321715},
            {latitude: 45.731426, longitude: 21.2322145},
            {latitude: 45.731441, longitude: 21.2318872},
            {latitude: 45.7316169, longitude: 21.2319087},
            {latitude: 45.7316319, longitude: 21.2315546},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Juganaru, Dumitru, Martir",
        poly_points: [
            {latitude: 45.7314672, longitude: 21.2329387},
            {latitude: 45.7311639, longitude: 21.2328957},
            {latitude: 45.7311114, longitude: 21.2337165},
            {latitude: 45.7314335, longitude: 21.2337379},
            {latitude: 45.7314672, longitude: 21.2329387},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Crivaia",
        poly_points: [
            {latitude: 45.7306434, longitude: 21.2326919},
            {latitude: 45.7301865, longitude: 21.2326543},
            {latitude: 45.7301266, longitude: 21.2335019},
            {latitude: 45.7306097, longitude: 21.2335448},
            {latitude: 45.7306434, longitude: 21.2326919},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Magura",
        poly_points: [
            {latitude: 45.7299025, longitude: 21.2324524},
            {latitude: 45.7298425, longitude: 21.2339437},
            {latitude: 45.7297527, longitude: 21.2352204},
            {latitude: 45.7296516, longitude: 21.2371677},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Magura",
        poly_points: [
            {latitude: 45.7297003, longitude: 21.2371677},
            {latitude: 45.7297751, longitude: 21.2354994},
            {latitude: 45.7299025, longitude: 21.2339651},
            {latitude: 45.7299624, longitude: 21.2324631},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Vulturilor",
        poly_points: [
            {latitude: 45.7338336, longitude: 21.2085417},
            {latitude: 45.7339646, longitude: 21.2071577},
            {latitude: 45.7341818, longitude: 21.205999},
            {latitude: 45.7345974, longitude: 21.2045452},
            {latitude: 45.735043, longitude: 21.2033704},
            {latitude: 45.7353837, longitude: 21.2026516},
            {latitude: 45.7358106, longitude: 21.2019435},
            {latitude: 45.7362524, longitude: 21.2012783},
            {latitude: 45.7371173, longitude: 21.200243},
            {latitude: 45.7373569, longitude: 21.2000123},
            {latitude: 45.7376976, longitude: 21.1997387},
            {latitude: 45.7384614, longitude: 21.1991165},
            {latitude: 45.7388433, longitude: 21.1988375},
            {latitude: 45.7395134, longitude: 21.1983654},
            {latitude: 45.7405692, longitude: 21.197593},
            {latitude: 45.7416961, longitude: 21.1967776},
            {latitude: 45.7423588, longitude: 21.1963377},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 17
    },
    {
        name: "Clabucet",
        poly_points: [
            {latitude: 45.7360789, longitude: 21.2049222},
            {latitude: 45.7359665, longitude: 21.20489},
            {latitude: 45.7357456, longitude: 21.2049061},
            {latitude: 45.735506, longitude: 21.2049115},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Clabucet",
        poly_points: [
            {latitude: 45.7371759, longitude: 21.205126},
            {latitude: 45.7368951, longitude: 21.2052011},
            {latitude: 45.7367453, longitude: 21.2052226},
            {latitude: 45.7366143, longitude: 21.2052065},
            {latitude: 45.7363747, longitude: 21.2051421},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Clabucet",
        poly_points: [
            {latitude: 45.7374305, longitude: 21.2049705},
            {latitude: 45.7371422, longitude: 21.2050563},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Clabucet",
        poly_points: [
            {latitude: 45.7379041, longitude: 21.204949},
            {latitude: 45.7372639, longitude: 21.2051153},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Liege",
        poly_points: [
            {latitude: 45.7744283, longitude: 21.2201522},
            {latitude: 45.7741945, longitude: 21.2197123},
            {latitude: 45.7740691, longitude: 21.2194763},
            {latitude: 45.7739344, longitude: 21.2191973},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Str. Zavoi",
        poly_points: [
            {latitude: 45.7579368, longitude: 21.2506163},
            {latitude: 45.7580566, longitude: 21.25067},
            {latitude: 45.7582531, longitude: 21.2507209},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "F.C. Ripensia, Aleea",
        poly_points: [
            {latitude: 45.7451516, longitude: 21.2413586},
            {latitude: 45.7442999, longitude: 21.2419674},
            {latitude: 45.743656, longitude: 21.2424368},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7719048, longitude: 21.2224638},
            {latitude: 45.7735511, longitude: 21.2218845},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7767651, longitude: 21.2210101},
            {latitude: 45.7759569, longitude: 21.2212139},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7752049, longitude: 21.2211442},
            {latitude: 45.7747447, longitude: 21.2212837},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7777416, longitude: 21.2205595},
            {latitude: 45.777143, longitude: 21.2207365},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7784674, longitude: 21.2205219},
            {latitude: 45.7797881, longitude: 21.2201679},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7783776, longitude: 21.2203932},
            {latitude: 45.7778613, longitude: 21.220538},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7799041, longitude: 21.2201303},
            {latitude: 45.7806673, longitude: 21.2199479},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7810115, longitude: 21.2198621},
            {latitude: 45.7807571, longitude: 21.2199211},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7739515, longitude: 21.2222064},
            {latitude: 45.7747596, longitude: 21.2219489},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aradului",
        poly_points: [
            {latitude: 45.7734202, longitude: 21.222075},
            {latitude: 45.7719384, longitude: 21.2225899},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "16 Decembrie",
        poly_points: [
            {latitude: 45.7387765, longitude: 21.2100023},
            {latitude: 45.738593, longitude: 21.2100238},
            {latitude: 45.7372227, longitude: 21.2097663},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "16 Decembrie",
        poly_points: [
            {latitude: 45.737818, longitude: 21.2095571},
            {latitude: 45.737189, longitude: 21.2094444},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "16 Decembrie",
        poly_points: [
            {latitude: 45.7369831, longitude: 21.2097126},
            {latitude: 45.7361294, longitude: 21.2095571},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "16 Decembrie",
        poly_points: [
            {latitude: 45.7346692, longitude: 21.2093049},
            {latitude: 45.7338192, longitude: 21.209144},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "16 Decembrie",
        poly_points: [
            {latitude: 45.7337481, longitude: 21.2088168},
            {latitude: 45.7330928, longitude: 21.208688},
            {latitude: 45.7327221, longitude: 21.2085539},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "16 Decembrie",
        poly_points: [
            {latitude: 45.7337181, longitude: 21.2091172},
            {latitude: 45.7330853, longitude: 21.2090153},
            {latitude: 45.7327409, longitude: 21.2089348},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "16 Decembrie",
        poly_points: [
            {latitude: 45.7359572, longitude: 21.2095195},
            {latitude: 45.734819, longitude: 21.2093157},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Calea Sagului",
        poly_points: [
            {latitude: 45.73249, longitude: 21.2084627},
            {latitude: 45.7321418, longitude: 21.2083393},
            {latitude: 45.7320556, longitude: 21.2083018},
            {latitude: 45.7318647, longitude: 21.2081838},
            {latitude: 45.7311233, longitude: 21.207583},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Calea Sagului",
        poly_points: [
            {latitude: 45.7310446, longitude: 21.2075239},
            {latitude: 45.7300673, longitude: 21.2067515},
            {latitude: 45.7298052, longitude: 21.2064993},
            {latitude: 45.7300224, longitude: 21.2066978},
            {latitude: 45.7299625, longitude: 21.2066602},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Calea Sagului",
        poly_points: [
            {latitude: 45.7310334, longitude: 21.2078619},
            {latitude: 45.7294719, longitude: 21.2066281},
            {latitude: 45.7287417, longitude: 21.2060326},
            {latitude: 45.7284908, longitude: 21.2058234},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Calea Sagului",
        poly_points: [
            {latitude: 45.7324338, longitude: 21.2088382},
            {latitude: 45.7321155, longitude: 21.2086934},
            {latitude: 45.7317336, longitude: 21.2084305},
            {latitude: 45.731127, longitude: 21.207937},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Aries",
        poly_points: [
            {latitude: 45.7406897, longitude: 21.2389809},
            {latitude: 45.7402104, longitude: 21.2393456},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aries",
        poly_points: [
            {latitude: 45.740027, longitude: 21.2394261},
            {latitude: 45.7391284, longitude: 21.2400484},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aries",
        poly_points: [
            {latitude: 45.7410715, longitude: 21.2389433},
            {latitude: 45.7404837, longitude: 21.2393725},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Parcare Casa Tineretului",
        poly_points: [
            {latitude: 45.7403639, longitude: 21.2396139},
            {latitude: 45.7403003, longitude: 21.2395924},
            {latitude: 45.7403265, longitude: 21.2398875},
            {latitude: 45.7402928, longitude: 21.2399089},
            {latitude: 45.7402703, longitude: 21.2395978},
            {latitude: 45.7392595, longitude: 21.2403327},
            {latitude: 45.7393156, longitude: 21.2405151},
            {latitude: 45.7391771, longitude: 21.2406063},
            {latitude: 45.7397312, longitude: 21.242559},
            {latitude: 45.7405811, longitude: 21.2422103},
            {latitude: 45.7403639, longitude: 21.2396139},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 11
    },
    {
        name: "Spitalul Judetean (Parcare)",
        poly_points: [
            {latitude: 45.7381887, longitude: 21.2405714},
            {latitude: 45.7381924, longitude: 21.2404937},
            {latitude: 45.7376982, longitude: 21.2408718},
            {latitude: 45.7377768, longitude: 21.241073},
            {latitude: 45.7381625, longitude: 21.2407967},
            {latitude: 45.7381887, longitude: 21.2405714},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Doctor Ioan Muresan",
        poly_points: [
            {latitude: 45.7378442, longitude: 21.2413278},
            {latitude: 45.7379865, longitude: 21.2417704},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Doctor Ioan Muresan(Judetean)",
        poly_points: [
            {latitude: 45.7374623, longitude: 21.2403193},
            {latitude: 45.7377001, longitude: 21.2409711},
            {latitude: 45.7377432, longitude: 21.2410676},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.7632381, longitude: 21.2497259},
            {latitude: 45.763066, longitude: 21.249007},
            {latitude: 45.7629388, longitude: 21.2485242},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.7635076, longitude: 21.2527621},
            {latitude: 45.7635862, longitude: 21.2543231},
            {latitude: 45.7636797, longitude: 21.2555409},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.764054, longitude: 21.2573647},
            {latitude: 45.7636984, longitude: 21.2558305},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.7640989, longitude: 21.2575632},
            {latitude: 45.7643122, longitude: 21.2584698},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.7643384, longitude: 21.2585986},
            {latitude: 45.7644619, longitude: 21.2589955},
            {latitude: 45.7647538, longitude: 21.2596017},
            {latitude: 45.7648585, longitude: 21.2598002},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.7626244, longitude: 21.2482131},
            {latitude: 45.7633916, longitude: 21.2514371},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.7637583, longitude: 21.2539476},
            {latitude: 45.7638294, longitude: 21.2551171},
            {latitude: 45.7638743, longitude: 21.2554926},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.7640839, longitude: 21.2565011},
            {latitude: 45.7644694, longitude: 21.2581855},
            {latitude: 45.7645405, longitude: 21.2585342},
            {latitude: 45.7646265, longitude: 21.2587702},
            {latitude: 45.7651055, longitude: 21.259709},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Simion Barnutiu",
        poly_points: [
            {latitude: 45.763631, longitude: 21.2513942},
            {latitude: 45.763429, longitude: 21.250493},
            {latitude: 45.7632793, longitude: 21.2499136},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Piata Petru Rares",
        poly_points: [
            {latitude: 45.7590671, longitude: 21.2498197},
            {latitude: 45.7589923, longitude: 21.2508067},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Piata Petru Rares",
        poly_points: [
            {latitude: 45.7591326, longitude: 21.2498438},
            {latitude: 45.7590578, longitude: 21.2508094},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Str.Zavoi",
        poly_points: [
            {latitude: 45.7587659, longitude: 21.2509409},
            {latitude: 45.7580548, longitude: 21.2507692},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aurel Vlaicu",
        poly_points: [
            {latitude: 45.7556781, longitude: 21.2496842},
            {latitude: 45.7557511, longitude: 21.2490325},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aurel Vlaicu",
        poly_points: [
            {latitude: 45.7556893, longitude: 21.2490579},
            {latitude: 45.7556238, longitude: 21.2496561},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aurel Vlaicu",
        poly_points: [
            {latitude: 45.755563, longitude: 21.2492135},
            {latitude: 45.7555957, longitude: 21.2495998},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aurel Vlaicu",
        poly_points: [
            {latitude: 45.7555658, longitude: 21.2495998},
            {latitude: 45.7555171, longitude: 21.2491318},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aurel Vlaicu",
        poly_points: [
            {latitude: 45.7553917, longitude: 21.2491558},
            {latitude: 45.755476, longitude: 21.2496601},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Aurel Vlaicu",
        poly_points: [
            {latitude: 45.7556668, longitude: 21.2490539},
            {latitude: 45.755505, longitude: 21.2490566},
            {latitude: 45.755373, longitude: 21.2491049},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Torontalului",
        poly_points: [
            {latitude: 45.7724735, longitude: 21.2166489},
            {latitude: 45.7702434, longitude: 21.2190092},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Torontalului",
        poly_points: [
            {latitude: 45.7707074, longitude: 21.2182957},
            {latitude: 45.7700974, longitude: 21.2189287},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Steaua, Zona (Intrarea Timotei Popovici)",
        poly_points: [
            {latitude: 45.7213212, longitude: 21.2027925},
            {latitude: 45.7210665, longitude: 21.2029481},
            {latitude: 45.7211564, longitude: 21.2033129},
            {latitude: 45.721411, longitude: 21.2031573},
            {latitude: 45.7213212, longitude: 21.2027925},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Luceafarul",
        poly_points: [
            {latitude: 45.7317782, longitude: 21.2111442},
            {latitude: 45.7313008, longitude: 21.2111308},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Podeanu, Aurel, Dr.",
        poly_points: [
            {latitude: 45.7434789, longitude: 21.2483158},
            {latitude: 45.7446881, longitude: 21.2519421},
            {latitude: 45.7450999, longitude: 21.2532511},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Rebreanu, Liviu, Blvd.",
        poly_points: [
            {latitude: 45.7385316, longitude: 21.240191},
            {latitude: 45.7387169, longitude: 21.2386621},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Spitalul Judetean (Parcare)",
        poly_points: [
            {latitude: 45.7381563, longitude: 21.2409209},
            {latitude: 45.7377969, longitude: 21.2411918},
            {latitude: 45.7378137, longitude: 21.2412266},
            {latitude: 45.7381563, longitude: 21.2409799},
            {latitude: 45.7381563, longitude: 21.2409209},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Spitalul Judetean (Parcare)",
        poly_points: [
            {latitude: 45.7381507, longitude: 21.2410684},
            {latitude: 45.7378343, longitude: 21.2412991},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Arenei, Intrarea",
        poly_points: [
            {latitude: 45.7364915, longitude: 21.2483256},
            {latitude: 45.7357951, longitude: 21.2479849},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Cristalului, Aleea – A5",
        poly_points: [
            {latitude: 45.7342656, longitude: 21.2487064},
            {latitude: 45.7347448, longitude: 21.2472044},
            {latitude: 45.7348834, longitude: 21.2468718},
            {latitude: 45.7350331, longitude: 21.2464641},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Istvan Andrei, Martir, Aleea",
        poly_points: [
            {latitude: 45.7364374, longitude: 21.2495952},
            {latitude: 45.736692, longitude: 21.2484847},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Istvan Andrei, Martir, Aleea",
        poly_points: [
            {latitude: 45.7367182, longitude: 21.2473153},
            {latitude: 45.7365123, longitude: 21.2482594},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Sirius - A5",
        poly_points: [
            {latitude: 45.7354078, longitude: 21.2493162},
            {latitude: 45.7359507, longitude: 21.2472402},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Sirius - A6",
        poly_points: [
            {latitude: 45.7353666, longitude: 21.2494718},
            {latitude: 45.7345166, longitude: 21.2527602},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Uranus",
        poly_points: [
            {latitude: 45.7364872, longitude: 21.2472},
            {latitude: 45.7354314, longitude: 21.2465616},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Cristalului, Aleea – A5",
        poly_points: [
            {latitude: 45.7335563, longitude: 21.2482594},
            {latitude: 45.734249, longitude: 21.2458401},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Prezan, C-tin., Maresal – A8",
        poly_points: [
            {latitude: 45.7311449, longitude: 21.2479697},
            {latitude: 45.7311973, longitude: 21.2479429},
            {latitude: 45.7313771, longitude: 21.2474333},
            {latitude: 45.7316804, longitude: 21.2475781},
            {latitude: 45.7316954, longitude: 21.2475084},
            {latitude: 45.7313359, longitude: 21.2473475},
            {latitude: 45.7311449, longitude: 21.2479697},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Prezan, C-tin., Maresal – A8",
        poly_points: [
            {latitude: 45.731407, longitude: 21.2486618},
            {latitude: 45.7312423, longitude: 21.2486457},
            {latitude: 45.7312348, longitude: 21.2491446},
            {latitude: 45.7313321, longitude: 21.2491553},
            {latitude: 45.7313434, longitude: 21.248812},
            {latitude: 45.7314183, longitude: 21.2488173},
            {latitude: 45.731407, longitude: 21.2486618},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Prezan, C-tin., Maresal – A8",
        poly_points: [
            {latitude: 45.7313546, longitude: 21.2498527},
            {latitude: 45.7311636, longitude: 21.2498419},
            {latitude: 45.7311599, longitude: 21.2502443},
            {latitude: 45.7312498, longitude: 21.2502604},
            {latitude: 45.7313546, longitude: 21.2498527},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Prezan, C-tin., Maresal – A8",
        poly_points: [
            {latitude: 45.7312947, longitude: 21.2509631},
            {latitude: 45.7310962, longitude: 21.2509524},
            {latitude: 45.731085, longitude: 21.2511079},
            {latitude: 45.7311711, longitude: 21.2511348},
            {latitude: 45.7311861, longitude: 21.2514352},
            {latitude: 45.7312797, longitude: 21.2514513},
            {latitude: 45.7312947, longitude: 21.2509631},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Prezan, C-tin., Maresal – A8",
        poly_points: [
            {latitude: 45.7312273, longitude: 21.2522398},
            {latitude: 45.7310813, longitude: 21.2522827},
            {latitude: 45.7310925, longitude: 21.2524759},
            {latitude: 45.7312423, longitude: 21.2525027},
            {latitude: 45.7312273, longitude: 21.2522398},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Prezan, C-tin., Maresal – A8",
        poly_points: [
            {latitude: 45.7311973, longitude: 21.2532215},
            {latitude: 45.7309727, longitude: 21.2532054},
            {latitude: 45.7309465, longitude: 21.2536292},
            {latitude: 45.7311936, longitude: 21.2536453},
            {latitude: 45.7311973, longitude: 21.2532215},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Uranus – A7",
        poly_points: [
            {latitude: 45.7348256, longitude: 21.24606},
            {latitude: 45.7336312, longitude: 21.2453251},
            {latitude: 45.731276, longitude: 21.2450032},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Sudului, Bd-ul.",
        poly_points: [
            {latitude: 45.7319987, longitude: 21.2473797},
            {latitude: 45.7335039, longitude: 21.2482648},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Sudului, Bd-ul.",
        poly_points: [
            {latitude: 45.7365019, longitude: 21.2500974},
            {latitude: 45.7336338, longitude: 21.2484022},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vega, Intrarea",
        poly_points: [
            {latitude: 45.7327225, longitude: 21.2463673},
            {latitude: 45.7325315, longitude: 21.2462547},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vega, Intrarea",
        poly_points: [
            {latitude: 45.7326701, longitude: 21.2456485},
            {latitude: 45.7328573, longitude: 21.2457772},
            {latitude: 45.7328124, longitude: 21.2459114},
            {latitude: 45.7326252, longitude: 21.2457719},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Vega, Intrarea",
        poly_points: [
            {latitude: 45.7322807, longitude: 21.246421},
            {latitude: 45.7321159, longitude: 21.2462976},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vega, Intrarea",
        poly_points: [
            {latitude: 45.7326514, longitude: 21.2467804},
            {latitude: 45.7325428, longitude: 21.2466946},
            {latitude: 45.7324529, longitude: 21.2469842},
            {latitude: 45.732569, longitude: 21.2470647},
            {latitude: 45.7326514, longitude: 21.2467804},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Vega, Intrarea",
        poly_points: [
            {latitude: 45.7324791, longitude: 21.2460616},
            {latitude: 45.7323481, longitude: 21.2460026},
            {latitude: 45.7322769, longitude: 21.2462386},
            {latitude: 45.7324005, longitude: 21.2463083},
            {latitude: 45.7324791, longitude: 21.2460616},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Prezan, C-tin., Maresal – A7",
        poly_points: [
            {latitude: 45.7316778, longitude: 21.2455091},
            {latitude: 45.7315243, longitude: 21.2455144},
            {latitude: 45.7315243, longitude: 21.2457558},
            {latitude: 45.7316741, longitude: 21.2457612},
            {latitude: 45.7316778, longitude: 21.2455091},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Cristalului, Aleea – A7",
        poly_points: [
            {latitude: 45.73381, longitude: 21.2459865},
            {latitude: 45.7336078, longitude: 21.2458685},
            {latitude: 45.7334768, longitude: 21.2463245},
            {latitude: 45.7336827, longitude: 21.2464371},
            {latitude: 45.73381, longitude: 21.2459865},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Cristalului, Aleea – A7",
        poly_points: [
            {latitude: 45.7337052, longitude: 21.2476709},
            {latitude: 45.7329039, longitude: 21.2472096},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Cristalului, Aleea – A7",
        poly_points: [
            {latitude: 45.7336865, longitude: 21.2477675},
            {latitude: 45.7328552, longitude: 21.247274},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Sudului, Bd-ul.",
        poly_points: [
            {latitude: 45.7318255, longitude: 21.2462869},
            {latitude: 45.7317094, longitude: 21.2461796},
            {latitude: 45.7315933, longitude: 21.2465766},
            {latitude: 45.7316982, longitude: 21.2466571},
            {latitude: 45.7318255, longitude: 21.2462869},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Sudului, Bd-ul.",
        poly_points: [
            {latitude: 45.7316533, longitude: 21.2461045},
            {latitude: 45.7313425, longitude: 21.2462064},
            {latitude: 45.7313724, longitude: 21.2462923},
            {latitude: 45.7315072, longitude: 21.2462494},
            {latitude: 45.7315222, longitude: 21.2463137},
            {latitude: 45.7316607, longitude: 21.2462654},
            {latitude: 45.7316533, longitude: 21.2461045},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Balmus, Vasile, Martir",
        poly_points: [
            {latitude: 45.7316315, longitude: 21.2516227},
            {latitude: 45.7315753, longitude: 21.2525454},
            {latitude: 45.731579, longitude: 21.2529263},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Oglinzilor",
        poly_points: [
            {latitude: 45.7324684, longitude: 21.2503353},
            {latitude: 45.7324234, longitude: 21.2519446},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Oglinzilor",
        poly_points: [
            {latitude: 45.7324197, longitude: 21.2520626},
            {latitude: 45.732386, longitude: 21.2529585},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Oglinzilor",
        poly_points: [
            {latitude: 45.7321351, longitude: 21.2524489},
            {latitude: 45.7321538, longitude: 21.2522933},
            {latitude: 45.7321913, longitude: 21.2510917},
            {latitude: 45.7320115, longitude: 21.2510273},
            {latitude: 45.7319891, longitude: 21.2516978},
            {latitude: 45.7321576, longitude: 21.2517247},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Balmus, Vasile, Martir",
        poly_points: [
            {latitude: 45.731727, longitude: 21.2508932},
            {latitude: 45.7317686, longitude: 21.250235},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Balmus, Vasile, Martir",
        poly_points: [
            {latitude: 45.7317232, longitude: 21.2510005},
            {latitude: 45.7316184, longitude: 21.2525615},
            {latitude: 45.7316259, longitude: 21.2529263},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Balmus, Vasile, Martir",
        poly_points: [
            {latitude: 45.732532, longitude: 21.2487099},
            {latitude: 45.7318505, longitude: 21.2486616},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Oglinzilor",
        poly_points: [
            {latitude: 45.7323523, longitude: 21.2489673},
            {latitude: 45.7323298, longitude: 21.2494662},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Oglinzilor",
        poly_points: [
            {latitude: 45.7319891, longitude: 21.2494233},
            {latitude: 45.7321913, longitude: 21.2494501},
            {latitude: 45.7322137, longitude: 21.2490854},
            {latitude: 45.7320415, longitude: 21.24908},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Oglinzilor",
        poly_points: [
            {latitude: 45.73218, longitude: 21.2495628},
            {latitude: 45.7319741, longitude: 21.2495467},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Oglinzilor",
        poly_points: [
            {latitude: 45.7321725, longitude: 21.2489513},
            {latitude: 45.7319928, longitude: 21.2489352},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Sudului, Bd-ul.",
        poly_points: [
            {latitude: 45.7336342, longitude: 21.2483293},
            {latitude: 45.7364923, longitude: 21.2500365},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Istvan Andrei, Martir, Aleea",
        poly_points: [
            {latitude: 45.7367355, longitude: 21.2471955},
            {latitude: 45.7369826, longitude: 21.2460744},
            {latitude: 45.7360691, longitude: 21.2455862},
            {latitude: 45.7357733, longitude: 21.2466644},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "A4",
        poly_points: [
            {latitude: 45.7438015, longitude: 21.2370826},
            {latitude: 45.741282, longitude: 21.2385632},
            {latitude: 45.7385901, longitude: 21.2384345},
            {latitude: 45.7371898, longitude: 21.2401833},
            {latitude: 45.738006, longitude: 21.2420715},
            {latitude: 45.7378255, longitude: 21.243369},
            {latitude: 45.7373691, longitude: 21.2454239},
            {latitude: 45.7372122, longitude: 21.2483372},
            {latitude: 45.7370611, longitude: 21.2573548},
            {latitude: 45.7338552, longitude: 21.2589131},
            {latitude: 45.7338545, longitude: 21.259377},
            {latitude: 45.7390347, longitude: 21.2574353},
            {latitude: 45.7455477, longitude: 21.2542702},
            {latitude: 45.7488364, longitude: 21.2524678},
            {latitude: 45.7481, longitude: 21.2492866},
            {latitude: 45.7471539, longitude: 21.2467814},
            {latitude: 45.7453962, longitude: 21.2411059},
            {latitude: 45.7438015, longitude: 21.2370826},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 18
    },
    {
        name: "unnamed",
        poly_points: [
            {latitude: 45.7424824, longitude: 21.2431701},
            {latitude: 45.7423814, longitude: 21.2431272},
            {latitude: 45.7422691, longitude: 21.2431057},
            {latitude: 45.7417599, longitude: 21.2431701},
            {latitude: 45.7419733, longitude: 21.2442484},
            {latitude: 45.742576, longitude: 21.2436744},
            {latitude: 45.7424824, longitude: 21.2431701},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Averescu, Alexandru, Maresal",
        poly_points: [
            {latitude: 45.7317482, longitude: 21.2358296},
            {latitude: 45.7321376, longitude: 21.2288452},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Averescu, Alexandru, Maresal",
        poly_points: [
            {latitude: 45.7320927, longitude: 21.2280513},
            {latitude: 45.731692, longitude: 21.2358457},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Azuga",
        poly_points: [
            {latitude: 45.7306793, longitude: 21.2356288},
            {latitude: 45.7288856, longitude: 21.2354142},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Ferkel-Suteu, Alexandru, Martir",
        poly_points: [
            {latitude: 45.7307928, longitude: 21.234041},
            {latitude: 45.7289804, longitude: 21.2338264},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Boboc, Nicolae, Aleea",
        poly_points: [
            {latitude: 45.7250409, longitude: 21.2035779},
            {latitude: 45.7247282, longitude: 21.2043906},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "1 Decembrie 1918, Blvd.",
        poly_points: [
            {latitude: 45.7437825, longitude: 21.2372143},
            {latitude: 45.7452051, longitude: 21.2413235},
            {latitude: 45.7463506, longitude: 21.2446065},
            {latitude: 45.7470019, longitude: 21.246527},
            {latitude: 45.747803, longitude: 21.2487478},
            {latitude: 45.7480426, longitude: 21.2494237},
            {latitude: 45.7485742, longitude: 21.2518055},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Brediceanu, Tiberiu, Aleea",
        poly_points: [
            {latitude: 45.7237288, longitude: 21.2025027},
            {latitude: 45.7233993, longitude: 21.2032805},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Duiliu, Marcu, Arhitect",
        poly_points: [
            {latitude: 45.7233915, longitude: 21.2013967},
            {latitude: 45.7231518, longitude: 21.2019868},
            {latitude: 45.7254475, longitude: 21.203859},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Dunarea - A1",
        poly_points: [
            {latitude: 45.7527705, longitude: 21.2000261},
            {latitude: 45.7525964, longitude: 21.200061},
            {latitude: 45.7526339, longitude: 21.2012922},
            {latitude: 45.7526638, longitude: 21.2017776},
            {latitude: 45.7529034, longitude: 21.2016891},
            {latitude: 45.7528772, longitude: 21.2015523},
            {latitude: 45.7528304, longitude: 21.2012439},
            {latitude: 45.7529202, longitude: 21.201217},
            {latitude: 45.7527705, longitude: 21.2000261},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 9
    },
    {
        name: "Eneas",
        poly_points: [
            {latitude: 45.7337898, longitude: 21.209138},
            {latitude: 45.7335239, longitude: 21.2133705},
            {latitude: 45.7334528, longitude: 21.2143254},
            {latitude: 45.7334266, longitude: 21.214894},
            {latitude: 45.733479, longitude: 21.2156236},
            {latitude: 45.7338984, longitude: 21.2189173},
            {latitude: 45.7341904, longitude: 21.2206822},
            {latitude: 45.7344338, longitude: 21.2217229},
            {latitude: 45.7350029, longitude: 21.2234824},
            {latitude: 45.7352613, longitude: 21.2241423},
            {latitude: 45.7355196, longitude: 21.2248182},
            {latitude: 45.7360513, longitude: 21.2262773},
            {latitude: 45.7362423, longitude: 21.2268137},
            {latitude: 45.737388, longitude: 21.2301075},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 14
    },
    {
        name: "Iliesu, Nicolae",
        poly_points: [
            {latitude: 45.732435, longitude: 21.2355189},
            {latitude: 45.7328394, longitude: 21.2355404},
            {latitude: 45.7328694, longitude: 21.2349503},
            {latitude: 45.7326335, longitude: 21.2348967},
            {latitude: 45.7326934, longitude: 21.2335502},
            {latitude: 45.7325399, longitude: 21.2335234},
            {latitude: 45.732435, longitude: 21.2355189},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Iorgovanului, Intrarea",
        poly_points: [
            {latitude: 45.7359285, longitude: 21.1972642},
            {latitude: 45.73576, longitude: 21.1974198},
            {latitude: 45.7362168, longitude: 21.1982566},
            {latitude: 45.7363928, longitude: 21.1981011},
            {latitude: 45.7363591, longitude: 21.1980099},
            {latitude: 45.7359285, longitude: 21.1972642},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Kiriac, Dumitru",
        poly_points: [
            {latitude: 45.7332246, longitude: 21.2112531},
            {latitude: 45.7358231, longitude: 21.2116286},
            {latitude: 45.7361002, longitude: 21.211532},
            {latitude: 45.7363023, longitude: 21.2114355},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Kiriac, Dumitru",
        poly_points: [
            {latitude: 45.7362986, longitude: 21.213018},
            {latitude: 45.7359804, longitude: 21.2126908},
            {latitude: 45.734902, longitude: 21.2125781},
            {latitude: 45.7348421, longitude: 21.2126264},
            {latitude: 45.7348122, longitude: 21.2129214},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Kiriac, Dumitru",
        poly_points: [
            {latitude: 45.7352083, longitude: 21.2115543},
            {latitude: 45.7351372, longitude: 21.2124207},
            {latitude: 45.7350801, longitude: 21.2125857},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 3
    },
    {
        name: "Kiriac, Dumitru",
        poly_points: [
            {latitude: 45.7353234, longitude: 21.2121672},
            {latitude: 45.7353543, longitude: 21.2114632},
            {latitude: 45.7354488, longitude: 21.2097723},
            {latitude: 45.7354778, longitude: 21.2097294},
            {latitude: 45.7360193, longitude: 21.2098425},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 5
    },
    {
        name: "Lacului",
        poly_points: [
            {latitude: 45.7365441, longitude: 21.1964986},
            {latitude: 45.7344585, longitude: 21.1988965},
            {latitude: 45.7336048, longitude: 21.1998513},
            {latitude: 45.7334139, longitude: 21.2000605},
            {latitude: 45.733133, longitude: 21.2001732},
            {latitude: 45.7326275, longitude: 21.2002429},
            {latitude: 45.7320022, longitude: 21.2003127},
            {latitude: 45.7315754, longitude: 21.2003502},
            {latitude: 45.7314892, longitude: 21.2005058},
            {latitude: 45.7314892, longitude: 21.2005487},
            {latitude: 45.7313507, longitude: 21.2005594},
            {latitude: 45.7311073, longitude: 21.2006238},
            {latitude: 45.7308414, longitude: 21.2007579},
            {latitude: 45.7305494, longitude: 21.2009779},
            {latitude: 45.730291, longitude: 21.2012193},
            {latitude: 45.7300663, longitude: 21.2014446},
            {latitude: 45.7299802, longitude: 21.2013534},
            {latitude: 45.7296432, longitude: 21.2012622},
            {latitude: 45.7295196, longitude: 21.2012354},
            {latitude: 45.7291676, longitude: 21.2011442},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 20
    },
    {
        name: "Lacului",
        poly_points: [
            {latitude: 45.7356706, longitude: 21.1974218},
            {latitude: 45.7356182, longitude: 21.1973789},
            {latitude: 45.735547, longitude: 21.1974057},
            {latitude: 45.7354235, longitude: 21.1975533},
            {latitude: 45.7349236, longitude: 21.1981192},
            {latitude: 45.7349311, longitude: 21.198205},
            {latitude: 45.7349461, longitude: 21.1982614},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 7
    },
    {
        name: "Lacului",
        poly_points: [
            {latitude: 45.7342084, longitude: 21.1990938},
            {latitude: 45.7341719, longitude: 21.1990589},
            {latitude: 45.7341166, longitude: 21.1990576},
            {latitude: 45.7340577, longitude: 21.1991072},
            {latitude: 45.7339809, longitude: 21.1991944},
            {latitude: 45.7338751, longitude: 21.1993124},
            {latitude: 45.733746, longitude: 21.1994639},
            {latitude: 45.7336308, longitude: 21.1995887},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "Lacului",
        poly_points: [
            {latitude: 45.7326562, longitude: 21.2003806},
            {latitude: 45.7315104, longitude: 21.2005388},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Miletici, Alexandru",
        poly_points: [
            {latitude: 45.7628885, longitude: 21.2575138},
            {latitude: 45.7635584, longitude: 21.2570176},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Miloia, Ioachim",
        poly_points: [
            {latitude: 45.7323553, longitude: 21.2220565},
            {latitude: 45.7317075, longitude: 21.2219492},
            {latitude: 45.7315615, longitude: 21.2219975},
            {latitude: 45.7314604, longitude: 21.2221477},
            {latitude: 45.7288046, longitude: 21.2217746},
            {latitude: 45.7260784, longitude: 21.2213294},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 6
    },
    {
        name: "Rusu Sirianu, Ioan",
        poly_points: [
            {latitude: 45.7378893, longitude: 21.2228213},
            {latitude: 45.737864, longitude: 21.2183392},
            {latitude: 45.7378397, longitude: 21.2178537},
            {latitude: 45.737675, longitude: 21.2169525},
            {latitude: 45.7375289, longitude: 21.2162014},
            {latitude: 45.7370441, longitude: 21.2141469},
            {latitude: 45.7360837, longitude: 21.2101692},
            {latitude: 45.7360949, longitude: 21.2096595},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 8
    },
    {
        name: "Salcamilor",
        poly_points: [
            {latitude: 45.7359538, longitude: 21.2310064},
            {latitude: 45.7320709, longitude: 21.2309367},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Strandului",
        poly_points: [
            {latitude: 45.7688567, longitude: 21.2684538},
            {latitude: 45.7655637, longitude: 21.268942},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Kodaly, Zoltan, Intrarea",
        poly_points: [
            {latitude: 45.7634808, longitude: 21.2560233},
            {latitude: 45.763391, longitude: 21.2561172},
            {latitude: 45.763595, longitude: 21.2570372},
            {latitude: 45.7637793, longitude: 21.2575173},
            {latitude: 45.7638172, longitude: 21.2577949},
            {latitude: 45.7638569, longitude: 21.2580645},
            {latitude: 45.7639579, longitude: 21.259081},
            {latitude: 45.7640047, longitude: 21.2590651},
            {latitude: 45.7639542, longitude: 21.2585288},
            {latitude: 45.7639991, longitude: 21.2583736},
            {latitude: 45.7638625, longitude: 21.2577305},
            {latitude: 45.7638812, longitude: 21.2575602},
            {latitude: 45.7634808, longitude: 21.2560233},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 13
    },
    {
        name: "Transilvania",
        poly_points: [
            {latitude: 45.7377539, longitude: 21.2038265},
            {latitude: 45.7340509, longitude: 21.2022896},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 2
    },
    {
        name: "Vidrighin, Stan, Calea",
        poly_points: [
            {latitude: 45.7339692, longitude: 21.2591033},
            {latitude: 45.7348472, longitude: 21.2587734},
            {latitude: 45.7371986, longitude: 21.2578695},
            {latitude: 45.7386438, longitude: 21.2573169},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 4
    },
    {
        name: "Bucovinei",
        poly_points: [
            {latitude: 45.7716043, longitude: 21.2145947},
            {latitude: 45.7712226, longitude: 21.2148361},
            {latitude: 45.7711889, longitude: 21.2149541},
            {latitude: 45.7712002, longitude: 21.2150775},
            {latitude: 45.77129, longitude: 21.2152224},
            {latitude: 45.7715145, longitude: 21.2149649},
            {latitude: 45.7715893, longitude: 21.2149595},
            {latitude: 45.7717091, longitude: 21.2148254},
            {latitude: 45.7716043, longitude: 21.2145947},
        ],
        zone: "default_zone",
        price: 0,
        free_spaces: 0,
        total_spaces: 9
    },
];
