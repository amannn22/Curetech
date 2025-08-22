// Mock Databases
const medicinesData = [
    {
        id: 1,
        genericName: "Paracetamol",
        brandNames: ["Tylenol", "Panadol", "Calpol"],
        form: "Tablet",
        composition: { activeIngredient: "Acetaminophen", strength: "500mg" },
        pharmacologicalClass: "Analgesic",
        mechanismOfAction: "Inhibits prostaglandin synthesis in the central nervous system, leading to reduced pain and fever.",
        indications: ["Fever", "Mild to moderate pain", "Headache", "Muscle aches"],
        dosage: "Adults: 500mg to 1000mg every 4-6 hours. Max 4000mg/day. Children: 10-15mg/kg per dose.",
        sideEffects: "Rare when used as directed. Potential for liver damage with overdose. Nausea and skin rash can occur.",
        warnings: "Do not exceed the recommended dose. Avoid alcohol. Consult a doctor if you have liver or kidney disease.",
        contraindications: "Known hypersensitivity to acetaminophen. Severe liver disease.",
        drugInteractions: "Warfarin (increased bleeding risk), certain seizure medications.",
        price: 50 // Price per unit in INR
    },
    {
        id: 14,
        genericName: "Aspirin",
        brandNames: ["Bayer", "Ecosprin"],
        form: "Tablet",
        composition: { activeIngredient: "Acetylsalicylic Acid", strength: "81mg" },
        pharmacologicalClass: "Analgesic",
        mechanismOfAction: "Irreversibly inhibits COX-1 and COX-2 enzymes, leading to decreased prostaglandin formation.",
        indications: ["Pain", "Fever", "Inflammation", "Prevention of heart attacks and strokes"],
        dosage: "For pain/fever: 325-650mg every 4-6 hours. For cardiovascular protection: 81-325mg once daily.",
        sideEffects: "Stomach irritation, heartburn, increased risk of bleeding.",
        warnings: "Risk of Reye's syndrome in children with viral illnesses. Can cause stomach ulcers or bleeding.",
        contraindications: "Bleeding disorders, allergy to NSAIDs, children under 16.",
        drugInteractions: "Other anticoagulants (e.g., Warfarin), NSAIDs (e.g., Ibuprofen), methotrexate.",
        price: 30
    },
    {
        id: 2,
        genericName: "Amoxicillin",
        brandNames: ["Amoxil", "Moxatag"],
        form: "Capsule",
        composition: { activeIngredient: "Amoxicillin Trihydrate", strength: "500mg" },
        pharmacologicalClass: "Antibiotic",
        mechanismOfAction: "Inhibits the synthesis of bacterial cell walls, leading to cell death.",
        indications: ["Bacterial infections such as pneumonia, bronchitis, and infections of the ear, nose, throat, skin, or urinary tract."],
        dosage: "Varies by infection type and patient weight. Typically 500mg every 8 or 12 hours.",
        sideEffects: "Nausea, vomiting, diarrhea, rash. Severe reactions like anaphylaxis are rare but possible.",
        warnings: "Complete the full course of treatment. Not effective for viral infections like the common cold or flu.",
        contraindications: "History of allergic reaction to penicillin or any other beta-lactam antibiotic.",
        drugInteractions: "Methotrexate, Allopurinol, Probenecid.",
        price: 100
    },
    {
        id: 15,
        genericName: "Azithromycin",
        brandNames: ["Zithromax", "Z-Pak"],
        form: "Tablet",
        composition: { activeIngredient: "Azithromycin", strength: "250mg" },
        pharmacologicalClass: "Antibiotic",
        mechanismOfAction: "Binds to the 50S ribosomal subunit of susceptible microorganisms, thus interfering with microbial protein synthesis.",
        indications: ["Respiratory tract infections", "Skin infections", "Certain sexually transmitted diseases"],
        dosage: "Typically 500mg on day 1, followed by 250mg daily for 4 days (Z-Pak).",
        sideEffects: "Diarrhea, nausea, abdominal pain, headache.",
        warnings: "Can cause abnormal changes in the electrical activity of the heart, which may lead to a potentially fatal irregular heart rhythm.",
        contraindications: "History of liver problems from previous azithromycin use, known hypersensitivity.",
        drugInteractions: "Antacids containing aluminum or magnesium, blood thinners, certain statins.",
        price: 120
    },
    {
        id: 8,
        genericName: "Sertraline",
        brandNames: ["Zoloft"],
        form: "Tablet",
        composition: { activeIngredient: "Sertraline Hydrochloride", strength: "50mg" },
        pharmacologicalClass: "SSRI",
        mechanismOfAction: "Increases the level of serotonin, a natural substance in the brain that helps maintain mental balance.",
        indications: ["Major depressive disorder", "Obsessive-compulsive disorder (OCD)", "Panic disorder", "Post-traumatic stress disorder (PTSD)"],
        dosage: "Typically starting at 25mg or 50mg once daily. May be increased gradually. Takes several weeks to reach full effect.",
        sideEffects: "Nausea, insomnia, dizziness, sexual dysfunction.",
        warnings: "Increased risk of suicidal thoughts, especially in young adults. Do not stop taking abruptly.",
        contraindications: "Use of MAO inhibitors within 14 days.",
        drugInteractions: "MAOIs, other antidepressants, blood thinners.",
        price: 200
    },
    {
        id: 18,
        genericName: "Escitalopram",
        brandNames: ["Lexapro", "Cipralex"],
        form: "Tablet",
        composition: { activeIngredient: "Escitalopram Oxalate", strength: "10mg" },
        pharmacologicalClass: "SSRI",
        mechanismOfAction: "Selectively inhibits the reuptake of serotonin in the brain, enhancing serotonergic neurotransmission.",
        indications: ["Major depressive disorder", "Generalized anxiety disorder"],
        dosage: "10mg once daily, may be increased to 20mg daily.",
        sideEffects: "Nausea, headache, insomnia, ejaculation disorder.",
        warnings: "Risk of suicidal ideation. Serotonin syndrome can occur. Do not discontinue abruptly.",
        contraindications: "Concurrent use of MAOIs, known hypersensitivity.",
        drugInteractions: "Other serotonergic drugs, drugs that prolong the QT interval.",
        price: 250
    }
];

const mentalHealthData = {
    categories: [
        {
            id: 'conditions',
            title: 'Common Conditions',
            description: 'Learn about common mental health conditions, their symptoms, and treatment options.',
            items: [
                {
                    id: 'anxiety',
                    title: 'Anxiety Disorders',
                    summary: 'Characterized by significant feelings of anxiety and fear. Includes generalized anxiety disorder, panic disorder, and phobias.',
                    content: 'Anxiety is a normal emotion, but when it becomes excessive and persistent, it can interfere with daily life. Treatment often involves therapy (like CBT), medication (like SSRIs), and lifestyle changes such as exercise and mindfulness.'
                },
                {
                    id: 'depression',
                    title: 'Depression',
                    summary: 'A mood disorder causing a persistent feeling of sadness and loss of interest.',
                    content: 'Major depressive disorder affects how you feel, think and behave and can lead to a variety of emotional and physical problems. It\'s more than just a bout of the blues. Treatment typically includes psychotherapy, antidepressants, and self-care strategies.'
                },
                {
                    id: 'ptsd',
                    title: 'PTSD (Post-Traumatic Stress Disorder)',
                    summary: 'A disorder that develops in some people who have experienced a shocking, scary, or dangerous event.',
                    content: 'Symptoms may include flashbacks, nightmares, and severe anxiety, as well as uncontrollable thoughts about the event. Effective treatments include trauma-focused psychotherapies like Prolonged Exposure (PE) and Eye Movement Desensitization and Reprocessing (EMDR).'
                }
            ]
        },
        {
            id: 'therapies',
            title: 'Therapeutic Approaches',
            description: 'Explore different types of therapy and counseling that can help manage mental health.',
            items: [
                {
                    id: 'cbt',
                    title: 'Cognitive Behavioral Therapy (CBT)',
                    summary: 'A common type of talk therapy that helps you manage your problems by changing the way you think and behave.',
                    content: 'CBT is based on the concept that your thoughts, feelings, physical sensations and actions are interconnected, and that negative thoughts and feelings can trap you in a vicious cycle. It aims to help you deal with overwhelming problems in a more positive way by breaking them down into smaller parts.'
                },
                {
                    id: 'mindfulness',
                    title: 'Mindfulness',
                    summary: 'The practice of being present and fully engaged with whatever we’re doing at the moment — free from distraction or judgment.',
                    content: 'Mindfulness involves breathing methods, guided imagery, and other practices to relax the body and mind and help reduce stress. It can be practiced through meditation or by simply paying more attention to the present moment throughout the day.'
                }
            ]
        }
    ]
};

// Application State
let state = {
    activeView: 'medicines',
    medicineSearchQuery: '',
    activeFormFilter: 'All',
    activeClassFilter: 'All',
    selectedClassView: null,
    selectedMedicineId: null,
    selectedMentalHealthItem: null,
    cart: [], // Array of { id, quantity }
    showQuantityModal: false,
    modalMedicineId: null
};

// DOM Elements
const headerEl = document.getElementById('app-header');
const mainEl = document.getElementById('app-main');

// Debounce Utility for Search Input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Razorpay Payment Handler
function initiatePayment() {
    const totalAmount = state.cart.reduce((sum, item) => {
        const medicine = medicinesData.find(m => m.id === item.id);
        return sum + (medicine.price * item.quantity);
    }, 0) * 100; // Convert to paise for Razorpay

    const options = {
        key: 'rzp_test_YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
        amount: totalAmount,
        currency: 'INR',
        name: 'Medication Hub',
        description: 'Purchase of Medicines',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2322c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M6 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2"/%3E%3Cpath d="M12 15h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/%3E%3Cpath d="M6 9h12"/%3E%3Cpath d="M6 15v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1"/%3E%3C/svg%3E',
        handler: function (response) {
            alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
            state.cart = []; // Clear cart on successful payment
            render();
        },
        prefill: {
            name: 'Customer Name',
            email: 'customer@example.com',
            contact: '9999999999'
        },
        theme: {
            color: '#059669' // teal-600
        },
        modal: {
            ondismiss: function() {
                alert('Payment cancelled.');
            }
        }
    };

    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function (response) {
        alert(`Payment Failed: ${response.error.description}`);
    });
    rzp.open();
}

// Render Functions
function render() {
    headerEl.innerHTML = getHeaderHTML();
    mainEl.innerHTML = getMainHTML();
    lucide.createIcons();
    addEventListeners();
}

function getHeaderHTML() {
    const cartItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    return `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div class="flex items-center">
                <i data-lucide="stethoscope" class="text-teal-600 h-8 w-8 mr-2"></i>
                <h1 class="text-xl font-bold text-slate-800">Medi<span class="text-teal-600">cation</span></h1>
            </div>
            <div class="flex items-center space-x-4">
                <nav class="flex space-x-2 bg-slate-200 p-1 rounded-full">
                    <button data-view="medicines" class="nav-button px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${state.activeView === 'medicines' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'}">
                        Medicine Finder
                    </button>
                    <button data-view="mental_health" class="nav-button px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${state.activeView === 'mental_health' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'}">
                        Mental Health
                    </button>
                    <button data-view="cart" class="nav-button px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${state.activeView === 'cart' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100'} relative">
                        <i data-lucide="shopping-cart" class="w-5 h-5 inline-block mr-1"></i>
                        Cart
                        ${cartItemCount > 0 ? `<span class="cart-badge absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${cartItemCount}</span>` : ''}
                    </button>
                </nav>
            </div>
        </div>
    `;
}

function getMainHTML() {
    if (state.activeView === 'cart') {
        return getCartHTML();
    }
    return state.activeView === 'medicines' ? getMedicineFinderHTML() : getMentalHealthHTML();
}

function getMedicineFinderHTML() {
    const selectedMedicine = medicinesData.find(m => m.id === state.selectedMedicineId);
    return `
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full">
            <div class="md:col-span-1 lg:col-span-1 bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col h-full ${selectedMedicine ? 'hidden md:flex' : 'flex'}">
                ${getLeftPanelHTML()}
            </div>
            <div class="md:col-span-2 lg:col-span-3 h-full ${!selectedMedicine ? 'flex' : ''}">
                ${selectedMedicine ? getMedicineDetailsHTML(selectedMedicine) : getPlaceholderHTML()}
            </div>
        </div>
        ${state.showQuantityModal ? getQuantityModalHTML() : ''}
    `;
}

function getLeftPanelHTML() {
    const medicineForms = ['All', ...new Set(medicinesData.map(m => m.form))];
    const medicineClasses = ['All', ...Array.from(new Set(medicinesData.map(m => m.pharmacologicalClass))).sort()];
    return `
        <div class="relative mb-4">
            <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"></i>
            <input id="search-input" type="text" placeholder="Search medicines..." value="${state.medicineSearchQuery}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-slate-50 focus:ring-2 focus:ring-teal-500 transition">
        </div>
        <div class="mb-4">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Form</p>
            <div class="flex flex-wrap gap-2">
                ${medicineForms.map(form => `
                    <button data-filter-type="form" data-filter-value="${form}" class="filter-button px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${state.activeFormFilter === form ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}">
                        ${form}
                    </button>
                `).join('')}
            </div>
        </div>
        ${!state.selectedClassView ? `
            <div class="flex-grow flex flex-col">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Class</p>
                <div class="flex-grow overflow-y-auto -mr-2 pr-2 custom-scrollbar">
                    <div class="flex flex-wrap gap-2">
                        ${medicineClasses.map(medClass => `
                            <button data-filter-type="class" data-filter-value="${medClass}" class="class-button px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 bg-slate-200 text-slate-700 hover:bg-slate-300">
                                ${medClass}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        ` : `
            <div class="flex-grow flex flex-col min-h-0">
                <div class="mb-2">
                    <button id="back-to-classes" class="flex items-center text-sm font-semibold text-teal-700 hover:text-teal-900">
                        <i data-lucide="arrow-left" class="w-4 h-4 mr-1"></i>
                        Back to All Classes
                    </button>
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2">
                        Showing: <span class="font-bold text-gray-700">${state.selectedClassView}</span>
                    </p>
                </div>
                <div class="flex-grow overflow-y-auto -mr-2 pr-2 custom-scrollbar">
                    <ul class="space-y-1">
                        ${getMedicineListHTML()}
                    </ul>
                </div>
            </div>
        `}
    `;
}

function getMedicineListHTML() {
    const medicines = getFilteredMedicines();
    if (medicines.length === 0) {
        return `<div class="text-center text-gray-500 pt-10"><i data-lucide="x-circle" class="mx-auto h-10 w-10 text-gray-300"></i><p class="text-sm">No medicines found.</p></div>`;
    }
    return medicines.map(med => `
        <li>
            <button data-medicine-id="${med.id}" class="medicine-item w-full text-left p-2.5 rounded-md transition-colors duration-200 flex items-center ${state.selectedMedicineId === med.id ? 'bg-teal-50' : 'hover:bg-slate-100'}">
                ${getFormIcon(med.form, `w-6 h-6 ${state.selectedMedicineId === med.id ? 'text-teal-600' : 'text-gray-400'}`)}
                <div>
                    <p class="font-semibold ${state.selectedMedicineId === med.id ? 'text-teal-800' : 'text-slate-700'}">${med.genericName}</p>
                    <p class="text-xs text-gray-500">${med.brandNames[0]}</p>
                </div>
            </button>
        </li>
    `).join('');
}

function getMedicineDetailsHTML(medicine) {
    return `
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full">
            <div class="p-6 border-b border-gray-200 relative">
                <button id="close-details" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors md:hidden"><i data-lucide="x" class="w-6 h-6"></i></button>
                <h2 class="text-2xl font-bold text-gray-800">${medicine.genericName}</h2>
                <p class="text-sm text-gray-500 mt-1">Also known as: ${medicine.brandNames.join(', ')}</p>
                <p class="text-sm text-gray-500 mt-1">Price: ₹${medicine.price} per unit</p>
                <button data-buy-id="${medicine.id}" class="buy-button mt-4 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 flex items-center">
                    <i data-lucide="shopping-cart" class="w-5 h-5 mr-2"></i>
                    Add to Cart
                </button>
            </div>
            <div class="flex-grow p-6 overflow-y-auto custom-scrollbar">
                <div class="divide-y divide-gray-200">
                    ${renderDetailSection('Indications (Uses)', medicine.indications.join(', '), 'check-circle', 'text-teal-600')}
                    ${renderDetailSection('Dosage & Administration', medicine.dosage, 'info', 'text-blue-600')}
                    ${renderDetailSection('Side Effects', medicine.sideEffects, 'alert-triangle', 'text-amber-600')}
                    ${renderDetailSection('Warnings', medicine.warnings, 'alert-triangle', 'text-amber-600')}
                </div>
            </div>
        </div>
    `;
}

function getCartHTML() {
    const cartItems = state.cart.map(item => {
        const medicine = medicinesData.find(m => m.id === item.id);
        return { ...medicine, quantity: item.quantity };
    });
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return `
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <i data-lucide="shopping-cart" class="w-6 h-6 text-teal-600 mr-2"></i>
                Your Cart
            </h2>
            ${cartItems.length === 0 ? `
                <div class="text-center text-gray-500 pt-10">
                    <i data-lucide="shopping-cart" class="mx-auto h-12 w-12 text-gray-300"></i>
                    <p class="mt-2 text-sm">Your cart is empty.</p>
                </div>
            ` : `
                <div class="flex-grow overflow-y-auto custom-scrollbar">
                    <ul class="space-y-4">
                        ${cartItems.map(item => `
                            <li class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                                <div class="flex items-center">
                                    ${getFormIcon(item.form, 'w-6 h-6 text-teal-600 mr-3')}
                                    <div>
                                        <p class="font-semibold text-slate-700">${item.genericName}</p>
                                        <p class="text-sm text-gray-500">₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <input type="number" data-cart-id="${item.id}" class="quantity-input w-16 p-1 border border-gray-300 rounded text-center" value="${item.quantity}" min="1">
                                    <button data-remove-id="${item.id}" class="text-red-500 hover:text-red-700">
                                        <i data-lucide="trash-2" class="w-5 h-5"></i>
                                    </button>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="mt-6 border-t border-gray-200 pt-4">
                        <p class="text-lg font-semibold text-gray-800">Total: ₹${total}</p>
                        <button id="proceed-to-pay" class="mt-4 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 flex items-center buy-button">
                            <i data-lucide="credit-card" class="w-5 h-5 mr-2"></i>
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            `}
        </div>
    `;
}

function getQuantityModalHTML() {
    const medicine = medicinesData.find(m => m.id === state.modalMedicineId);
    return `
        <div class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="modal bg-white p-6 rounded-lg shadow-lg max-w-md w-full transform animate-slideIn">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-gray-800">Add ${medicine.genericName} to Cart</h3>
                    <button id="close-modal" class="text-gray-400 hover:text-gray-700">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                </div>
                <p class="text-sm text-gray-500 mb-4">Price: ₹${medicine.price} per unit</p>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <input id="quantity-input" type="number" min="1" value="1" class="quantity-input w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500">
                </div>
                <button id="confirm-add-to-cart" data-medicine-id="${medicine.id}" class="buy-button w-full px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 flex items-center justify-center">
                    <i data-lucide="shopping-cart" class="w-5 h-5 mr-2"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

function getPlaceholderHTML() {
    return `<div class="flex items-center justify-center h-full bg-white rounded-lg border border-gray-200 shadow-sm"><div class="text-center text-gray-400"><i data-lucide="stethoscope" class="mx-auto h-12 w-12 mb-4"></i><h2 class="text-xl font-semibold text-gray-600">Select a medicine</h2><p class="text-sm">Use the list to view details.</p></div></div>`;
}

function renderDetailSection(title, content, icon, colorClass) {
    return `<div class="py-5"><h3 class="text-md font-semibold text-gray-700 flex items-center mb-2"><i data-lucide="${icon}" class="w-5 h-5 mr-2 ${colorClass}"></i>${title}</h3><p class="text-gray-600 leading-relaxed pl-7">${content}</p></div>`;
}

function getFormIcon(form, className) {
    let iconName = 'pill';
    if (form.toLowerCase() === 'injection') iconName = 'syringe';
    if (form.toLowerCase() === 'syrup') iconName = 'droplets';
    if (form.toLowerCase() === 'inhaler') return `<svg class="${className}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2"/><path d="M12 15h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M6 9h12"/><path d="M6 15v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1"/></svg>`;
    return `<i data-lucide="${iconName}" class="${className}"></i>`;
}

// Event Listeners
function addEventListeners() {
    const appContainer = document.getElementById('app-container');
    if (appContainer.dataset.listenerAttached) return;
    appContainer.addEventListener('click', handleClicks);
    appContainer.addEventListener('input', debounce(handleInputs, 300));
    appContainer.dataset.listenerAttached = 'true';
}

function handleClicks(e) {
    const target = e.target.closest('button, input');
    if (!target) return;

    if (target.classList.contains('nav-button')) {
        state.activeView = target.dataset.view;
        state.selectedMedicineId = null;
        state.selectedMentalHealthItem = null;
        state.showQuantityModal = false;
        render();
    } else if (target.classList.contains('medicine-item')) {
        state.selectedMedicineId = parseInt(target.dataset.medicineId);
        state.showQuantityModal = false;
        render();
    } else if (target.classList.contains('filter-button') && target.dataset.filterType === 'form') {
        state.activeFormFilter = target.dataset.filterValue;
        render();
    } else if (target.classList.contains('class-button')) {
        const medClass = target.dataset.filterValue;
        state.activeClassFilter = medClass;
        state.selectedClassView = medClass;
        const firstInClass = getFilteredMedicines()[0];
        state.selectedMedicineId = firstInClass ? firstInClass.id : null;
        render();
    } else if (target.id === 'back-to-classes') {
        state.selectedClassView = null;
        state.activeClassFilter = 'All';
        state.selectedMedicineId = null;
        render();
    } else if (target.id === 'close-details') {
        state.selectedMedicineId = null;
        render();
    } else if (target.classList.contains('mh-topic-button')) {
        const topicId = target.dataset.topicId;
        for (const cat of mentalHealthData.categories) {
            const item = cat.items.find(i => i.id === topicId);
            if (item) {
                state.selectedMentalHealthItem = item;
                break;
            }
        }
        render();
    } else if (target.id === 'back-to-topics') {
        state.selectedMentalHealthItem = null;
        render();
    } else if (target.classList.contains('buy-button') && target.dataset.buyId) {
        state.modalMedicineId = parseInt(target.dataset.buyId);
        state.showQuantityModal = true;
        render();
    } else if (target.id === 'close-modal') {
        state.showQuantityModal = false;
        render();
    } else if (target.id === 'confirm-add-to-cart') {
        const quantity = parseInt(document.getElementById('quantity-input').value);
        if (quantity > 0) {
            const existingItem = state.cart.find(item => item.id === state.modalMedicineId);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cart.push({ id: state.modalMedicineId, quantity });
            }
            state.showQuantityModal = false;
            render();
        }
    } else if (target.id === 'proceed-to-pay') {
        if (state.cart.length > 0) {
            initiatePayment();
        }
    } else if (target.dataset.removeId) {
        state.cart = state.cart.filter(item => item.id !== parseInt(target.dataset.removeId));
        render();
    }
}

function handleInputs(e) {
    if (e.target.id === 'search-input') {
        state.medicineSearchQuery = e.target.value;
        render();
    } else if (e.target.classList.contains('quantity-input') && e.target.dataset.cartId) {
        const quantity = parseInt(e.target.value);
        const itemId = parseInt(e.target.dataset.cartId);
        if (quantity > 0) {
            const item = state.cart.find(i => i.id === itemId);
            if (item) {
                item.quantity = quantity;
                render();
            }
        } else {
            state.cart = state.cart.filter(i => i.id !== itemId);
            render();
        }
    }
}

function getFilteredMedicines() {
    const query = state.medicineSearchQuery.toLowerCase();
    const formFilter = state.activeFormFilter;
    const classFilter = state.activeClassFilter;

    return medicinesData.filter(med => {
        const matchesSearch = !query || med.genericName.toLowerCase().includes(query) || med.brandNames.some(b => b.toLowerCase().includes(query));
        const matchesForm = formFilter === 'All' || med.form === formFilter;
        const matchesClass = classFilter === 'All' || med.pharmacologicalClass === classFilter;
        return matchesSearch && matchesForm && matchesClass;
    });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    render();
});