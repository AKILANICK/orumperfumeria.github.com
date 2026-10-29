const BOTTLE_IMAGE_PATH = "images/frasco.png";
const PHONE_NUMBER = "573042885479";

const perfumes = [
    { name: "ONDA*", insp: "Acqua di Giò", casa: "Giorgio Armani", salida: "lima, limon, bergamota, jazmin", corazon: "notas marinas, jazmin, calone", fondo: "almizcle blanco, cedro" },
    { name: "ABYS*", insp: "Acqua di Giò Profondo", casa: "Giorgio Armani", salida: "notas marinas, Aquozone, bergamota", corazon: "romero, lavanda, ciprés", fondo: "Notas minerales, almizcle" },
    { name: "BOND*", insp: "Stronger With You", casa: "Giorgio Armani", salida: "castaña y azúcar", corazon: "salvia y lavanda", fondo: "vainilla y Humo" },
    { name: "CROWN*", insp: "Aventus", casa: "Creed", salida: "bergamota, grosellas negras, manzana", corazon: "piña, pachuli y jazmin", fondo: "abedul, almizcle, musgo" },
    { name: "FROST*", insp: "Silver Mountain Water", casa: "Creed", salida: "bergamota y mandarina", corazon: "té verde y grosellas negras", fondo: "almizcle, sándalo" },
    { name: "ROYAL*", insp: "Millesime Imperial", casa: "Creed", salida: "sal de mar y notas afrutadas", corazon: "limón siciliano, bergamota, iris", fondo: "notas marinas, almizcle" },
    { name: "INTEN*", insp: "Club the nuit intense man", casa: "Armaf", salida: "limón, piña, bergamota", corazon: "abedul, jazmin y rosa", fondo: "almizcle, ámbar gris" },
    { name: "WILD*", insp: "Sauvage", casa: "Dior", salida: "bergamota de Calabria y pimienta", corazon: "pimienta de Sichuan, lavanda", fondo: "ambroxan, cedro y ládano" },
    { name: "FLAME*", insp: "Fahrenheit", casa: "Dior", salida: "flor del moscadero, lavanda", corazon: "hojas de violeta, nuez moscada, cuero", fondo: "cuero, vetiver, almizcle" },
    { name: "AZURE*", insp: "Light Blue", casa: "Dolce & Gabbana", salida: "toronja, bergamota", corazon: "pimienta, romero", fondo: "almizcle, incienso" },
    { name: "UNO*", insp: "The One", casa: "Dolce & Gabbana", salida: "toronja, cilantro", corazon: "cardamomo, jengibre", fondo: "ambar, tabaco y cedro" },
    { name: "REING*", insp: "K", casa: "Dolce & Gabbana", salida: "bayas de enebro, cítricos", corazon: "pimienta de Jamaica, lavanda", fondo: "vetiver, cedro y pachuli" },
    { name: "SAIL*", insp: "Le Male", casa: "Jean Paul Gaultier", salida: "lavanda, menta, cardamomo", corazon: "canela, flor de azahar", fondo: "vainilla, haba tonka" },
    { name: "PULSE*", insp: "Ultra Male", casa: "Jean Paul Gaultier", salida: "pera, lavanda, menta", corazon: "canela, esclarea", fondo: "vaina de vainilla negra" },
    { name: "EDEN*", insp: "Le Beau Le Parfum", casa: "Jean Paul Gaultier", salida: "piña, iris, jengibre", corazon: "coco y notas amaderadas", fondo: "haba tonka, sandalo" },
    { name: "AURA*", insp: "CH", casa: "Carolina Herrera", salida: "hierba, bergamota", corazon: "notas amaderadas, nuez moscada", fondo: "azúcar, cuero, vainilla" },
    { name: "NOIR*", insp: "CH Men Private", casa: "Carolina Herrera", salida: "whisky y toronja", corazon: "cardamomo, lavanda", fondo: "cuero, haba tonka" },
    { name: "REBEL*", insp: "Bad Boy", casa: "Carolina Herrera", salida: "pimienta blanca, bergamota", corazon: "cedro y esclarea", fondo: "haba tonka y cacao" },
    { name: "METRO*", insp: "212 Men", casa: "Carolina Herrera", salida: "notas verdes, toronja", corazon: "jengibre, violeta", fondo: "almizcle, sándalo" },
    { name: "ELITE*", insp: "212 Vip", casa: "Carolina Herrera", salida: "maracuyá, lima", corazon: "vodka, ginebra, menta", fondo: "ámbar, cuero" },
    { name: "NIGHT*", insp: "212 Vip Black", casa: "Carolina Herrera", salida: "absenta, anis", corazon: "lavanda", fondo: "vaina de vainilla negra" },
    { name: "DARK*", insp: "Black XS", casa: "Paco Rabanne", salida: "citricos, limón", corazon: "praliné, canela", fondo: "pachuli, ambar negro" },
    { name: "FURY*", insp: "Black XS L'Excès", casa: "Paco Rabanne", salida: "limon de Amalfi", corazon: "cipriol y notas marinas", fondo: "ámbar y pachuli" },
    { name: "GHOST*", insp: "Phantom", casa: "Paco Rabanne", salida: "lavanda, ralladura de limón", corazon: "notas terrosas, manzana", fondo: "vainilla, lavanda" },
    { name: "GOLD*", insp: "One Million", casa: "Paco Rabanne", salida: "mandarina roja, toronja", corazon: "canela, notas especiadas", fondo: "ámbar, cuero" },
    { name: "LUCK*", insp: "One Million Lucky", casa: "Paco Rabanne", salida: "ciruela, notas ozónicas", corazon: "avellana, miel, cedro", fondo: "Amberwood, pachuli" },
    { name: "VICTOR*", insp: "Invictus", casa: "Paco Rabanne", salida: "notas marinas, toronja", corazon: "hoja de laurel y jazmin", fondo: "ámbar gris, madera de gaiac" },
    { name: "VIVO*", insp: "Uomo", casa: "Valentino", salida: "bergamota y mirto", corazon: "avellana, chocolate", fondo: "cuero y cedro" },
    { name: "ROMA*", insp: "Born In Roma", casa: "Valentino", salida: "vainilla", corazon: "lavanda", fondo: "vetiver" },
    { name: "CLASS*", insp: "Pour Homme", casa: "Versace", salida: "limón, bergamota", corazon: "jacinto, cedro", fondo: "almizcle, haba tonka" },
    { name: "FRESH*", insp: "Eau Fraîche", casa: "Versace", salida: "limón, bergamota", corazon: "cedro, estragón", fondo: "almizcle, notas amaderadas" },
    { name: "INDIG*", insp: "Dylan Blue", casa: "Versace", salida: "bergamota de Calabria, notas acuáticas", corazon: "ambroxan, pimienta negra", fondo: "incienso, almizcle" },
    { name: "DESIRE*", insp: "Eros", casa: "Versace", salida: "menta, manzana verde", corazon: "haba tonka, ambroxan", fondo: "vainilla de Madagascar" },
    { name: "INFER*", insp: "Eros Flame", casa: "Versace", salida: "mandarina, pimienta", corazon: "rosa, geranio", fondo: "vainilla, haba tonka" },
    { name: "LAGOON*", insp: "Blue", casa: "Lacoste", salida: "toronja y menta", corazon: "salvia y flor del naranjo", fondo: "helecho, pachuli" },
    { name: "ROUGE*", insp: "Red", casa: "Lacoste", salida: "jengibre, cardamomo", corazon: "té rooibos y mango", fondo: "benjuí y Acácia" },
    { name: "LEAF*", insp: "Vert", casa: "Lacoste", salida: "jengibre, cardamomo", corazon: "té rooibos y mango", fondo: "benjuí y Acácia" },
    { name: "ONYX*", insp: "Noir", casa: "Lacoste", salida: "sandia", corazon: "albahaca, lavanda", fondo: "chocolate oscuro" },
    { name: "PURE*", insp: "Blanc", casa: "Lacoste", salida: "toronja, romero", corazon: "ylang-ylang y nardos", fondo: "cedro de Virginia" },
    { name: "MARK*", insp: "Emblem", casa: "Montblanc", salida: "esclarea, toronja", corazon: "hojas de violeta", fondo: "haba tonka y notas amaderadas" },
    { name: "MYTH*", insp: "Legend", casa: "Montblanc", salida: "lavanda, piña", corazon: "manzana roja, frutas secas", fondo: "haba tonka y sándalo" },
    { name: "NOVA*", insp: "Starwalker", casa: "Montblanc", salida: "bambu, bergamota", corazon: "almizcle blanco, sándalo", fondo: "jengibre, resina de abeto" },
    { name: "QUEST*", insp: "Explorer", casa: "Montblanc", salida: "bergamota, pimienta rosa", corazon: "vetiver de Haiti y cuero", fondo: "ambroxan, Akigalawood" },
    { name: "PLAY*", insp: "Toy boy", casa: "Moschino", salida: "pimienta rosa, pera", corazon: "rosa, clavo de olor", fondo: "vetiver de Haiti" },
    { name: "AXIS*", insp: "XY", casa: "Hugo Boss", salida: "cedro, hojas del peral", corazon: "menta y albahaca", fondo: "cedro, almizcle" },
    { name: "CRIM*", insp: "Red", casa: "Hugo Boss", salida: "notas metálicas, toronja", corazon: "ruibarbo, notas metálicas", fondo: "ámbar y haba tonka" },
    { name: "PRIME*", insp: "Bottled", casa: "Hugo Boss", salida: "manzana, ciruela", corazon: "canela, caoba", fondo: "vainilla, sándalo" },
    { name: "RAW*", insp: "Bad", casa: "Diesel", salida: "lavanda, bergamota", corazon: "caviar, raíz de lirio", fondo: "notas amaderadas, tabaco" },
    { name: "BRAVE*", insp: "Only the brave", casa: "Diesel", salida: "limón de Amalfi", corazon: "violeta, cedro", fondo: "ambar, cuero" },
    { name: "ZERO*", insp: "Zero Plus", casa: "Diesel", salida: "nuez moscada, cardamomo", corazon: "canela, rosa", fondo: "vainilla, almizcle" },
    { name: "PLUS*", insp: "Plus Plus Masculine", casa: "Diesel", salida: "naranja, bergamota", corazon: "jazmin, cilantro", fondo: "canela, haba tonka" },
    { name: "ETER*", insp: "Eternity", casa: "Calvin Klein", salida: "lavanda, limón", corazon: "salvia, bayas de enebro", fondo: "sándalo, almizcle" },
    { name: "ASH*", insp: "Carbón", casa: "Prada", salida: "bergamota y pimienta", corazon: "lavanda, notas metálicas", fondo: "ambroxan y pachuli" },
    { name: "RIDER*", insp: "Polo Red", casa: "Ralph Lauren", salida: "arándano, toronja", corazon: "azafrán y salvia", fondo: "ámbar, café" },
    { name: "MARINE*", insp: "Polo Blue", casa: "Ralph Lauren", salida: "pepino, melón", corazon: "albahaca, salvia", fondo: "gamuza, notas amaderadas" }
];

function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    
    const targetSection = document.getElementById(pageId);
    if(targetSection) targetSection.classList.add('active');
    
    const activeBtn = Array.from(document.querySelectorAll('.nav-link')).find(btn => btn.getAttribute('onclick').includes(pageId));
    if(activeBtn) activeBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const grid = document.getElementById('catalog-grid');
const searchInput = document.getElementById('searchInput');
const casaSelect = document.getElementById('casaSelect');
const notasSelect = document.getElementById('notasSelect');

function initFilters() {
    const casasUnicas = [...new Set(perfumes.map(p => p.casa))].sort();
    casasUnicas.forEach(casa => {
        const option = document.createElement('option');
        option.value = casa.toLowerCase();
        option.textContent = casa;
        casaSelect.appendChild(option);
    });
}

function renderGrid(data) {
    grid.innerHTML = '';
    if (data.length === 0) {
        grid.innerHTML = '<div class="no-results">[ NO SE ENCONTRARON FRAGANCIAS ]</div>';
        return;
    }

    data.forEach(p => {
        const waLink = `https://wa.me/${PHONE_NUMBER}?text=Hola,%20estoy%20interesado%20en%20el%20perfume%20${encodeURIComponent(p.name)}%20inspirado%20en%20${encodeURIComponent(p.insp)}`;
        const cardHTML = `
            <div class="card">
                <div class="bottle-img-container">
                    <img src="${BOTTLE_IMAGE_PATH}" alt="ORUM Bottle" class="bottle-img">
                </div>
                <div class="card-header">
                    <h2>${p.name} <span class="ml-badge">50ML</span></h2>
                </div>
                <div class="inspiration">REF: ${p.insp} — ${p.casa}</div>
                <div class="notes">
                    <div><span>[ SALIDA ]</span> ${p.salida}</div>
                    <div><span>[ CORAZÓN ]</span> ${p.corazon}</div>
                    <div><span>[ FONDO ]</span> ${p.fondo}</div>
                </div>
                <div class="card-footer">
                    <span class="price">$32.000</span>
                    <a href="${waLink}" target="_blank" class="editorial-btn" style="padding: 0.5rem 1rem;">
                        <span>ORDENAR</span>
                    </a>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

function filterPerfumes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCasa = casaSelect.value;
    const selectedNota = notasSelect.value;

    const filtered = perfumes.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm) || p.insp.toLowerCase().includes(searchTerm) || p.casa.toLowerCase().includes(searchTerm);
        const matchesCasa = selectedCasa === "" || p.casa.toLowerCase() === selectedCasa;
        
        let matchesNota = true;
        if (selectedNota !== "") {
            const allNotes = (p.salida + " " + p.corazon + " " + p.fondo).toLowerCase();
            let keywords = [];
            if (selectedNota === "dulce") keywords = ["vainilla", "haba tonka", "praliné", "azúcar", "caramelo", "cacao", "chocolate", "canela"];
            if (selectedNota === "amaderado") keywords = ["cedro", "cuero", "sándalo", "vetiver", "musgo", "abedul", "madera", "incienso"];
            if (selectedNota === "citrico") keywords = ["limón", "bergamota", "toronja", "mandarina", "naranja", "lima", "cítricos"];
            if (selectedNota === "acuatico") keywords = ["marinas", "calone", "aquozone", "agua", "sal", "acuáticas", "marino"];
            matchesNota = keywords.some(kw => allNotes.includes(kw));
        }

        return matchesSearch && matchesCasa && matchesNota;
    });
    renderGrid(filtered);
}

searchInput.addEventListener('input', filterPerfumes);
casaSelect.addEventListener('change', filterPerfumes);
notasSelect.addEventListener('change', filterPerfumes);

// CHATBOT ORUM AI
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatBtn = document.getElementById('closeChatBtn');
const chatBody = document.getElementById('chatBody');
const chatOptions = document.getElementById('chatOptions');

let currentQuestion = 0;
let userAnswers = {};
let isChatInitialized = false;

const chatQuestions = [
    { id: "notas", text: "SYS.ON // ORUM AI. Te guiaré hacia tu fragancia ideal. ¿Qué perfil aromático prefieres?", options: ["Dulce / Vainilla", "Amaderado / Cuero", "Cítrico / Fresco", "Acuático / Marino"] },
    { id: "situacion", text: "Entendido. ¿Para qué contexto principal requieres la fragancia?", options: ["Uso Diario / Casual", "Trabajo / Oficina", "Citas / Noche Especial", "Fiestas / Eventos"] },
    { id: "horario", text: "Procesando... ¿En qué momento del día planeas usarla?", options: ["Día", "Noche", "Versátil (Ambos)"] },
    { id: "clima", text: "Parámetro final: ¿Cuál es la temperatura promedio de tu entorno?", options: ["Clima Cálido", "Clima Frío", "Clima Templado"] }
];

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-msg', sender);
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showOptions(options) {
    chatOptions.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('chat-option-btn');
        btn.textContent = opt;
        btn.onclick = () => handleOptionClick(opt);
        chatOptions.appendChild(btn);
    });
}

function handleOptionClick(optionText) {
    addMessage(optionText, 'user');
    userAnswers[chatQuestions[currentQuestion].id] = optionText;
    chatOptions.innerHTML = '';
    currentQuestion++;

    setTimeout(() => {
        if (currentQuestion < chatQuestions.length) {
            addMessage(chatQuestions[currentQuestion].text, 'bot');
            showOptions(chatQuestions[currentQuestion].options);
        } else {
            recommendPerfumes();
        }
    }, 400);
}

function recommendPerfumes() {
    addMessage("ESCANEANDO BASE DE DATOS...", 'bot');

    setTimeout(() => {
        addMessage("Análisis completado. Según tus parámetros, he extraído estas referencias:", 'bot');
        
        let keywords = [];
        const n = userAnswers.notas;
        if (n.includes("Dulce")) keywords = ["vainilla", "haba tonka", "praliné", "azúcar", "caramelo", "cacao", "chocolate", "canela"];
        else if (n.includes("Amaderado")) keywords = ["cedro", "cuero", "sándalo", "vetiver", "musgo", "abedul", "madera", "incienso"];
        else if (n.includes("Cítrico")) keywords = ["limón", "bergamota", "toronja", "mandarina", "naranja", "lima", "cítricos"];
        else if (n.includes("Acuático")) keywords = ["marinas", "calone", "aquozone", "agua", "sal", "acuáticas", "marino"];

        perfumes.forEach(p => {
            p.score = 0;
            const allNotes = (p.salida + " " + p.corazon + " " + p.fondo).toLowerCase();
            keywords.forEach(kw => { if (allNotes.includes(kw)) p.score += 15; });
            p.score += Math.random();
        });

        const sorted = [...perfumes].sort((a, b) => b.score - a.score);
        renderRecommendation(sorted[0]);
        renderRecommendation(sorted[1]);

        chatOptions.innerHTML = '';
        const btnWa = document.createElement('button');
        btnWa.classList.add('chat-option-btn');
        btnWa.textContent = "ASESORÍA PERSONALIZADA";
        btnWa.onclick = () => {
            const msg = `Hola, vengo de ORUM AI. Busco un perfume con notas ${userAnswers.notas}, para ${userAnswers.situacion}.`;
            window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
        };
        chatOptions.appendChild(btnWa);

        const btnRestart = document.createElement('button');
        btnRestart.classList.add('chat-option-btn');
        btnRestart.textContent = "REINICIAR";
        btnRestart.onclick = () => initChat();
        chatOptions.appendChild(btnRestart);

    }, 1000);
}

function renderRecommendation(p) {
    const waLink = `https://wa.me/${PHONE_NUMBER}?text=Hola,%20ORUM%20AI%20me%20recomendó%20el%20perfume%20${encodeURIComponent(p.name)}`;
    const recHTML = `
        <div class="chat-recommendation">
            <div class="chat-rec-info">
                <h4>${p.name}</h4>
                <p>REF: ${p.insp}</p>
                <a href="${waLink}" target="_blank" class="chat-wa-link">ORDENAR</a>
            </div>
        </div>
    `;
    chatBody.insertAdjacentHTML('beforeend', recHTML);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function initChat() {
    currentQuestion = 0;
    userAnswers = {};
    chatBody.innerHTML = '';
    chatOptions.innerHTML = '';
    addMessage(chatQuestions[0].text, 'bot');
    showOptions(chatQuestions[0].options);
}

chatbotBtn.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
    if (!isChatInitialized) {
        initChat();
        isChatInitialized = true;
    }
});

closeChatBtn.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

initFilters();
renderGrid(perfumes);