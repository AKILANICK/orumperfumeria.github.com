const BOTTLE_IMAGE_PATH = "images/frasco.png";
const PHONE_NUMBER = "573042885479";

// Base de datos de perfumes vinculada con la imagen de inspiración exacta para el fondo
const perfumes = [
    { name: "ONDA*", insp: "Acqua di Giò", casa: "Giorgio Armani", salida: "lima, limon, bergamota, jazmin", corazon: "notas marinas, jazmin, calone", fondo: "almizcle blanco, cedro", imgInsp: "images/acqua-di-gio.png" },
    { name: "ABYS*", insp: "Acqua di Giò Profondo", casa: "Giorgio Armani", salida: "notas marinas, Aquozone, bergamota", corazon: "romero, lavanda, ciprés", fondo: "Notas minerales, almizcle", imgInsp: "images/acqua-profondo.png" },
    { name: "BOND*", insp: "Stronger With You", casa: "Giorgio Armani", salida: "castaña y azúcar", corazon: "salvia y lavanda", fondo: "vainilla y Humo", imgInsp: "images/stronger-with-you.png" },
    { name: "CROWN*", insp: "Aventus", casa: "Creed", salida: "bergamota, grosellas negras, manzana", corazon: "piña, pachuli y jazmin", fondo: "abedul, almizcle, musgo", imgInsp: "images/aventus.png" },
    { name: "FROST*", insp: "Silver Mountain Water", casa: "Creed", salida: "bergamota y mandarina", corazon: "té verde y grosellas negras", fondo: "almizcle, sándalo", imgInsp: "images/silver-mountain.png" },
    { name: "ROYAL*", insp: "Millesime Imperial", casa: "Creed", salida: "sal de mar y notas afrutadas", corazon: "limón siciliano, bergamota, iris", fondo: "notas marinas, almizcle", imgInsp: "images/millesime-imperial.png" },
    { name: "INTEN*", insp: "Club the nuit intense man", casa: "Armaf", salida: "limón, piña, bergamota", corazon: "abedul, jazmin y rosa", fondo: "almizcle, ámbar gris", imgInsp: "images/club-de-nuit.png" },
    { name: "WILD*", insp: "Sauvage", casa: "Dior", salida: "bergamota de Calabria y pimienta", corazon: "pimienta de Sichuan, lavanda", fondo: "ambroxan, cedro y ládano", imgInsp: "images/sauvage.png" },
    { name: "FLAME*", insp: "Fahrenheit", casa: "Dior", salida: "flor del moscadero, lavanda", corazon: "hojas de violeta, nuez moscada, cuero", fondo: "cuero, vetiver, almizcle", imgInsp: "images/fahrenheit.png" },
    { name: "AZURE*", insp: "Light Blue", casa: "Dolce & Gabbana", salida: "toronja, bergamota", corazon: "pimienta, romero", fondo: "almizcle, incienso", imgInsp: "images/light-blue.png" },
    { name: "UNO*", insp: "The One", casa: "Dolce & Gabbana", salida: "toronja, cilantro", corazon: "cardamomo, jengibre", fondo: "ambar, tabaco y cedro", imgInsp: "images/the-one.png" },
    { name: "REING*", insp: "K", casa: "Dolce & Gabbana", salida: "bayas de enebro, cítricos", corazon: "pimienta de Jamaica, lavanda", fondo: "vetiver, cedro y pachuli", imgInsp: "images/dg-k.png" },
    { name: "SAIL*", insp: "Le Male", casa: "Jean Paul Gaultier", salida: "lavanda, menta, cardamomo", corazon: "canela, flor de azahar", fondo: "vainilla, haba tonka", imgInsp: "images/le-male.png" },
    { name: "PULSE*", insp: "Ultra Male", casa: "Jean Paul Gaultier", salida: "pera, lavanda, menta", corazon: "canela, esclarea", fondo: "vaina de vainilla negra", imgInsp: "images/ultra-male.png" },
    { name: "EDEN*", insp: "Le Beau Le Parfum", casa: "Jean Paul Gaultier", salida: "piña, iris, jengibre", corazon: "coco y notas amaderadas", fondo: "haba tonka, sandalo", imgInsp: "images/le-beau.png" },
    { name: "AURA*", insp: "CH", casa: "Carolina Herrera", salida: "hierba, bergamota", corazon: "notas amaderadas, nuez moscada", fondo: "azúcar, cuero, vainilla", imgInsp: "images/ch-men.png" },
    { name: "NOIR*", insp: "CH Men Private", casa: "Carolina Herrera", salida: "whisky y toronja", corazon: "cardamomo, lavanda", fondo: "cuero, haba tonka", imgInsp: "images/ch-private.png" },
    { name: "REBEL*", insp: "Bad Boy", casa: "Carolina Herrera", salida: "pimienta blanca, bergamota", corazon: "cedro y esclarea", fondo: "haba tonka y cacao", imgInsp: "images/bad-boy.png" },
    { name: "METRO*", insp: "212 Men", casa: "Carolina Herrera", salida: "notas verdes, toronja", corazon: "jengibre, violeta", fondo: "almizcle, sándalo", imgInsp: "images/212-men.png" },
    { name: "ELITE*", insp: "212 Vip", casa: "Carolina Herrera", salida: "maracuyá, lima", corazon: "vodka, ginebra, menta", fondo: "ámbar, cuero", imgInsp: "images/212-vip.png" },
    { name: "NIGHT*", insp: "212 Vip Black", casa: "Carolina Herrera", salida: "absenta, anis", corazon: "lavanda", fondo: "vaina de vainilla negra", imgInsp: "images/212-vip-black.png" },
    { name: "DARK*", insp: "Black XS", casa: "Paco Rabanne", salida: "citricos, limón", corazon: "praliné, canela", fondo: "pachuli, ambar negro", imgInsp: "images/black-xs.png" },
    { name: "FURY*", insp: "Black XS L'Excès", casa: "Paco Rabanne", salida: "limon de Amalfi", corazon: "cipriol y notas marinas", fondo: "ámbar y pachuli", imgInsp: "images/black-xs-lexces.png" },
    { name: "GHOST*", insp: "Phantom", casa: "Paco Rabanne", salida: "lavanda, ralladura de limón", corazon: "notas terrosas, manzana", fondo: "vainilla, lavanda", imgInsp: "images/phantom.png" },
    { name: "GOLD*", insp: "One Million", casa: "Paco Rabanne", salida: "mandarina roja, toronja", corazon: "canela, notas especiadas", fondo: "ámbar, cuero", imgInsp: "images/one-million.png" },
    { name: "LUCK*", insp: "One Million Lucky", casa: "Paco Rabanne", salida: "ciruela, notas ozónicas", corazon: "avellana, miel, cedro", fondo: "Amberwood, pachuli", imgInsp: "images/one-million-lucky.png" },
    { name: "VICTOR*", insp: "Invictus", casa: "Paco Rabanne", salida: "notas marinas, toronja", corazon: "hoja de laurel y jazmin", fondo: "ámbar gris, madera de gaiac", imgInsp: "images/invictus.png" },
    { name: "VIVO*", insp: "Uomo", casa: "Valentino", salida: "bergamota y mirto", corazon: "avellana, chocolate", fondo: "cuero y cedro", imgInsp: "images/valentino-uomo.png" },
    { name: "ROMA*", insp: "Born In Roma", casa: "Valentino", salida: "vainilla", corazon: "lavanda", fondo: "vetiver", imgInsp: "images/born-in-roma.png" },
    { name: "CLASS*", insp: "Pour Homme", casa: "Versace", salida: "limón, bergamota", corazon: "jacinto, cedro", fondo: "almizcle, haba tonka", imgInsp: "images/versace-pour-homme.png" },
    { name: "FRESH*", insp: "Eau Fraîche", casa: "Versace", salida: "limón, bergamota", corazon: "cedro, estragón", fondo: "almizcle, notas amaderadas", imgInsp: "images/versace-fraiche.png" },
    { name: "INDIG*", insp: "Dylan Blue", casa: "Versace", salida: "bergamota de Calabria, notas acuáticas", corazon: "ambroxan, pimienta negra", fondo: "incienso, almizcle", imgInsp: "images/dylan-blue.png" },
    { name: "DESIRE*", insp: "Eros", casa: "Versace", salida: "menta, manzana verde", corazon: "haba tonka, ambroxan", fondo: "vainilla de Madagascar", imgInsp: "images/eros.png" },
    { name: "INFER*", insp: "Eros Flame", casa: "Versace", salida: "mandarina, pimienta", corazon: "rosa, geranio", fondo: "vainilla, haba tonka", imgInsp: "images/eros-flame.png" },
    { name: "LAGOON*", insp: "Blue", casa: "Lacoste", salida: "toronja y menta", corazon: "salvia y flor del naranjo", fondo: "helecho, pachuli", imgInsp: "images/lacoste-blue.png" },
    { name: "ROUGE*", insp: "Red", casa: "Lacoste", salida: "jengibre, cardamomo", corazon: "té rooibos y mango", fondo: "benjuí y Acácia", imgInsp: "images/lacoste-red.png" },
    { name: "LEAF*", insp: "Vert", casa: "Lacoste", salida: "jengibre, cardamomo", corazon: "té rooibos y mango", fondo: "benjuí y Acácia", imgInsp: "images/lacoste-vert.png" },
    { name: "ONYX*", insp: "Noir", casa: "Lacoste", salida: "sandia", corazon: "albahaca, lavanda", fondo: "chocolate oscuro", imgInsp: "images/lacoste-noir.png" },
    { name: "PURE*", insp: "Blanc", casa: "Lacoste", salida: "toronja, romero", corazon: "ylang-ylang y nardos", fondo: "cedro de Virginia", imgInsp: "images/lacoste-blanc.png" },
    { name: "MARK*", insp: "Emblem", casa: "Montblanc", salida: "esclarea, toronja", corazon: "hojas de violeta", fondo: "haba tonka y notas amaderadas", imgInsp: "images/montblanc-emblem.png" },
    { name: "MYTH*", insp: "Legend", casa: "Montblanc", salida: "lavanda, piña", corazon: "manzana roja, frutas secas", fondo: "haba tonka y sándalo", imgInsp: "images/montblanc-legend.png" },
    { name: "NOVA*", insp: "Starwalker", casa: "Montblanc", salida: "bambu, bergamota", corazon: "almizcle blanco, sándalo", fondo: "jengibre, resina de abeto", imgInsp: "images/starwalker.png" },
    { name: "QUEST*", insp: "Explorer", casa: "Montblanc", salida: "bergamota, pimienta rosa", corazon: "vetiver de Haiti y cuero", fondo: "ambroxan, Akigalawood", imgInsp: "images/explorer.png" },
    { name: "PLAY*", insp: "Toy boy", casa: "Moschino", salida: "pimienta rosa, pera", corazon: "rosa, clavo de olor", fondo: "vetiver de Haiti", imgInsp: "images/toy-boy.png" },
    { name: "AXIS*", insp: "XY", casa: "Hugo Boss", salida: "cedro, hojas del peral", corazon: "menta y albahaca", fondo: "cedro, almizcle", imgInsp: "images/hugo-xy.png" },
    { name: "CRIM*", insp: "Red", casa: "Hugo Boss", salida: "notas metálicas, toronja", corazon: "ruibarbo, notas metálicas", fondo: "ámbar y haba tonka", imgInsp: "images/hugo-red.png" },
    { name: "PRIME*", insp: "Bottled", casa: "Hugo Boss", salida: "manzana, ciruela", corazon: "canela, caoba", fondo: "vainilla, sándalo", imgInsp: "images/hugo-bottled.png" },
    { name: "RAW*", insp: "Bad", casa: "Diesel", salida: "lavanda, bergamota", corazon: "caviar, raíz de lirio", fondo: "notas amaderadas, tabaco", imgInsp: "images/diesel-bad.png" },
    { name: "BRAVE*", insp: "Only the brave", casa: "Diesel", salida: "limón de Amalfi", corazon: "violeta, cedro", fondo: "ambar, cuero", imgInsp: "images/only-the-brave.png" },
    { name: "ZERO*", insp: "Zero Plus", casa: "Diesel", salida: "nuez moscada, cardamomo", corazon: "canela, rosa", fondo: "vainilla, almizcle", imgInsp: "images/zero-plus.png" },
    { name: "PLUS*", insp: "Plus Plus Masculine", casa: "Diesel", salida: "naranja, bergamota", corazon: "jazmin, cilantro", fondo: "canela, haba tonka", imgInsp: "images/plus-plus.png" },
    { name: "ETER*", insp: "Eternity", casa: "Calvin Klein", salida: "lavanda, limón", corazon: "salvia, bayas de enebro", fondo: "sándalo, almizcle", imgInsp: "images/eternity.png" },
    { name: "ASH*", insp: "Carbón", casa: "Prada", salida: "bergamota y pimienta", corazon: "lavanda, notas metálicas", fondo: "ambroxan y pachuli", imgInsp: "images/prada-carbon.png" },
    { name: "RIDER*", insp: "Polo Red", casa: "Ralph Lauren", salida: "arándano, toronja", corazon: "azafrán y salvia", fondo: "ámbar, café", imgInsp: "images/polo-red.png" },
    { name: "MARINE*", insp: "Polo Blue", casa: "Ralph Lauren", salida: "pepino, melón", corazon: "albahaca, salvia", fondo: "gamuza, notas amaderadas", imgInsp: "images/polo-blue.png" }
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
            <div class="card animate-up">
                <div class="bottle-img-container">
                    <!-- Botella de inspiración difuminada de fondo -->
                    <img src="${p.imgInsp}" alt="Inspiración" class="insp-bottle-bg" onerror="this.src='${BOTTLE_IMAGE_PATH}'">
                    <!-- Botella principal de Orum nítida al frente -->
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
                    <a href="${waLink}" target="_blank" class="editorial-btn" style="padding: 0.4rem 0.9rem; font-size: 0.55rem;">
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