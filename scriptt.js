document.addEventListener('DOMContentLoaded', () => {
    // --- DATA STORE ---
    let bookedAppointments = [];
    
    const healthData = [
        { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', chartData: [120, 80], chartLabels: ['Systolic', 'Diastolic'], bgColor: ['rgba(2, 132, 199, 0.2)', 'rgba(14, 165, 233, 0.2)'], borderColor: ['#0284c7', '#0ea5e9'], recommendation: 'Your blood pressure is in the ideal range. Keep up the healthy lifestyle!' },
        { label: 'Blood Sugar', value: '95', unit: 'mg/dL', chartData: [95, 25], chartLabels: ['Current', ''], bgColor: ['rgba(22, 163, 74, 0.2)', 'rgba(240, 240, 240, 0.5)'], borderColor: ['#16a34a', '#e5e5e5'], recommendation: 'Excellent! Your blood sugar is at a healthy level.' },
        { label: 'Heart Rate', value: '72', unit: 'bpm', chartData: [72, 28], chartLabels: ['Current', ''], bgColor: ['rgba(220, 38, 38, 0.2)', 'rgba(240, 240, 240, 0.5)'], borderColor: ['#dc2626', '#e5e5e5'], recommendation: 'Your resting heart rate is great. Regular cardio helps maintain this.' },
        { label: 'BMI', value: '22.5', unit: 'kg/m²', chartData: [22.5, 2.5], chartLabels: ['Current', ''], bgColor: ['rgba(249, 115, 22, 0.2)', 'rgba(240, 240, 240, 0.5)'], borderColor: ['#f97316', '#e5e5e5'], recommendation: 'Your BMI is in the healthy weight range. Well done!' },
        { label: 'Step Count', value: '8,500', unit: 'steps', chartData: [8500, 1500], chartLabels: ['Today', 'Goal'], bgColor: ['rgba(139, 92, 246, 0.2)', 'rgba(240, 240, 240, 0.5)'], borderColor: ['#8b5cf6', '#e5e5e5'], recommendation: 'You\'re so close to your 10,000 step goal. Keep going!' }
    ];

    const departmentsData = [
        { id: 1, name: 'Cardiology 🫀', description: 'Specializing in heart conditions, from hypertension to complex cardiac procedures.', color: 'rose' },
        { id: 2, name: 'Endocrinology', description: 'Focused on hormonal health, including diabetes, thyroid disorders, and metabolism.', color: 'orange' },
        { id: 3, name: 'General Medicine', description: 'Comprehensive primary care for adults, focusing on prevention and treatment of common illnesses.', color: 'sky' },
        { id: 4, name: 'Pediatrics 👶', description: 'Dedicated to the health and well-being of infants, children, and adolescents.', color: 'amber' },
        { id: 5, name: 'Radiology & Diagnostics', description: 'Advanced imaging services like MRI, CT scans, and X-rays for accurate diagnoses.', color: 'violet' },
        { id: 6, name: 'Emergency & Trauma 🚑', description: '24/7 immediate care for critical injuries and medical emergencies.', color: 'red' },
    ];

    const doctorsData = [
        { name: 'Dr. Evelyn Reed', departmentId: 1, img: 'https://placehold.co/200x200/E2E8F0/475569?text=ER' },
        { name: 'Dr. Anya Sharma', departmentId: 1, img: 'https://placehold.co/200x200/E2E8F0/475569?text=AS' },
        { name: 'Dr. Liam Chen', departmentId: 2, img: 'https://placehold.co/200x200/E2E8F0/475569?text=LC' },
        { name: 'Dr. Meera Patel', departmentId: 2, img: 'https://placehold.co/200x200/E2E8F0/475569?text=MP' },
        { name: 'Dr. Julian Croft', departmentId: 3, img: 'https://placehold.co/200x200/E2E8F0/475569?text=JC' },
        { name: 'Dr. Sarah Miller', departmentId: 3, img: 'https://placehold.co/200x200/E2E8F0/475569?text=SM' },
        { name: 'Dr. Kenji Tanaka', departmentId: 4, img: 'https://placehold.co/200x200/E2E8F0/475569?text=KT' },
        { name: 'Dr. Sofia Rossi', departmentId: 4, img: 'https://placehold.co/200x200/E2E8F0/475569?text=SR' },
        { name: 'Dr. Marcus Thorne', departmentId: 5, img: 'https://placehold.co/200x200/E2E8F0/475569?text=MT' }
    ];

    const servicesData = [
        { name: 'Telehealth Consultation', description: 'Consult with our expert doctors from the comfort of your home.', icon: ' videoconference' },
        { name: 'Annual Health Check-up', description: 'A comprehensive check-up to assess your overall health and detect potential issues early.', icon: ' stethoscope' },
        { name: 'Lab Testing Services', description: 'Accurate and timely lab results for a wide range of tests.', icon: ' test tube' },
        { name: 'Vaccinations & Immunizations', description: 'Protect yourself and your loved ones with our complete range of vaccination services.', icon: ' syringe' },
        { name: 'Chronic Disease Management', description: 'Personalized care plans to help you manage long-term health conditions effectively.', icon: ' heart' },
        { name: 'Nutritional Counseling', description: 'Expert advice from our dietitians to help you achieve your health and wellness goals.', icon: ' leaf' }
    ];
    
    const timeSlotsData = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];


    // --- RENDER FUNCTIONS ---
    const renderHealthMetrics = () => {
        const metricsGrid = document.getElementById('health-metrics-grid');
        if (!metricsGrid) return;
        metricsGrid.innerHTML = '';
        healthData.forEach((metric, index) => {
            const card = document.createElement('div');
            card.className = 'animated-card bg-white p-6 rounded-xl soft-shadow flex flex-col items-center text-center soft-shadow-hover transition-shadow duration-300';
            card.style.animationDelay = `${index * 100}ms`;
            card.innerHTML = `
                <div class="chart-container mb-4">
                    <canvas id="chart-${index}"></canvas>
                    <div class="chart-value">
                        <span class="text-2xl font-bold">${metric.value}</span>
                        <span class="text-sm text-slate-500 block">${metric.unit}</span>
                    </div>
                </div>
                <h3 class="font-semibold text-lg">${metric.label}</h3>
                <p class="text-sm text-slate-500 mt-2">${metric.recommendation}</p>
            `;
            metricsGrid.appendChild(card);

            const ctx = document.getElementById(`chart-${index}`).getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: { datasets: [{ data: metric.chartData, backgroundColor: metric.bgColor, borderColor: metric.borderColor, borderWidth: 1.5 }] },
                options: { responsive: true, maintainAspectRatio: false, cutout: '80%', plugins: { legend: { display: false }, tooltip: { enabled: false } }, animation: { animateScale: true, animateRotate: true } }
            });
        });
    };

    const renderDepartments = () => {
        const departmentsGrid = document.getElementById('departments-grid');
        if (!departmentsGrid) return;
        departmentsGrid.innerHTML = '';
        departmentsData.forEach((dept, index) => {
            const card = document.createElement('div');
            const theme = getThemeColors(dept.color);
            card.className = `animated-card bg-white rounded-xl soft-shadow overflow-hidden transform hover:-translate-y-1.5 transition-transform duration-300 border-t-4 ${theme.border}`;
            card.style.animationDelay = `${index * 100}ms`;
            card.innerHTML = `
                <div class="p-6 flex flex-col h-full">
                    <h3 class="text-xl font-bold mb-2">${dept.name}</h3>
                    <p class="text-slate-600 mb-4 flex-grow">${dept.description}</p>
                    <button data-dept-id="${dept.id}" class="booking-btn w-full ${theme.bg} text-white font-semibold py-2.5 px-4 rounded-lg ${theme.hover} transition-colors mt-auto">
                        Quick Appointment
                    </button>
                </div>
            `;
            departmentsGrid.appendChild(card);
        });
    };

    const renderDoctors = () => {
        const doctorsGrid = document.getElementById('doctors-grid');
        if (!doctorsGrid) return;
        doctorsGrid.innerHTML = '';
        doctorsData.forEach((doc, index) => {
            const department = departmentsData.find(d => d.id === doc.departmentId);
            const theme = getThemeColors(department.color);
            const card = document.createElement('div');
            card.className = 'animated-card bg-white rounded-xl soft-shadow text-center overflow-hidden transform hover:-translate-y-1.5 transition-transform duration-300';
            card.style.animationDelay = `${index * 100}ms`;
            card.innerHTML = `
                <div class="bg-slate-50 p-4">
                    <img src="${doc.img}" alt="${doc.name}" class="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md">
                </div>
                <div class="p-6">
                    <h4 class="text-lg font-bold">${doc.name}</h4>
                    <p class="text-sm font-semibold ${theme.text} mt-1">${department.name.replace(/ \S+$/, '')}</p>
                    <button data-dept-id="${department.id}" data-doctor-name="${doc.name}" class="booking-btn w-full mt-4 bg-teal-50 text-teal-600 font-semibold py-2 px-4 rounded-lg hover:bg-teal-100 transition-colors">
                        Book Now
                    </button>
                </div>
            `;
            doctorsGrid.appendChild(card);
        });
    };

    const renderServices = () => {
        const servicesGrid = document.getElementById('services-grid');
        if (!servicesGrid) return;
        servicesGrid.innerHTML = '';
        servicesData.forEach((service, index) => {
            const card = document.createElement('div');
            card.className = 'animated-card bg-white rounded-xl soft-shadow p-6 transform hover:-translate-y-1.5 transition-transform duration-300';
            card.style.animationDelay = `${index * 100}ms`;
            card.innerHTML = `
                <h4 class="text-xl font-bold mb-2">${service.name}</h4>
                <p class="text-slate-600">${service.description}</p>
            `;
            servicesGrid.appendChild(card);
        });
    };

    const renderAppointments = () => {
        const appointmentsList = document.getElementById('appointments-list');
        if (!appointmentsList) return;
        appointmentsList.innerHTML = '';

        if (bookedAppointments.length === 0) {
            appointmentsList.innerHTML = `<p class="text-slate-500 md:col-span-2 lg:col-span-3 text-center">You have no upcoming appointments. Book one from the home page!</p>`;
            return;
        }

        bookedAppointments.forEach((appt, index) => {
            const card = document.createElement('div');
            const theme = getThemeColors(appt.color);
            card.className = `animated-card bg-white rounded-xl soft-shadow overflow-hidden border-l-4 ${theme.border}`;
            card.style.animationDelay = `${index * 100}ms`;
            
            const date = new Date(appt.date + 'T00:00:00');
            const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

            card.innerHTML = `
                <div class="p-6">
                    <p class="text-sm font-semibold ${theme.text}">${appt.department}</p>
                    <h4 class="font-bold text-lg mt-1">${formattedDate} at ${appt.time}</h4>
                    <p class="text-slate-600 text-sm mt-2">with ${appt.doctor}</p>
                </div>
            `;
            appointmentsList.appendChild(card);
        });
    };

    // --- PAGE NAVIGATION ---
    const navigateTo = (pageId) => {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');
        window.scrollTo(0, 0);
    };

    // --- MODAL & FORM LOGIC ---
    const bookingModal = document.getElementById('booking-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContainer = document.getElementById('modal-container');
    const modalTitle = document.getElementById('modal-title');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const doctorSelect = document.getElementById('doctor-select');
    const timeSlotsContainer = document.getElementById('time-slots');
    const bookingForm = document.getElementById('booking-form');
    const appointmentDateInput = document.getElementById('appointment-date');
    const departmentNameInput = document.getElementById('department-name');
    const departmentColorInput = document.getElementById('department-color');
    const selectedTimeInput = document.getElementById('selected-time');
    const toast = document.getElementById('toast');
    
    appointmentDateInput.min = new Date().toISOString().split("T")[0];

    const openModal = (deptId, doctorName = null) => {
        const department = departmentsData.find(d => d.id == deptId);
        if (!department) return;

        modalTitle.textContent = `Book for ${department.name}`;
        departmentNameInput.value = department.name;
        departmentColorInput.value = department.color;
        
        const deptDoctors = doctorsData.filter(d => d.departmentId == deptId);
        doctorSelect.innerHTML = deptDoctors.map(doc => 
            `<option value="${doc.name}" ${doc.name === doctorName ? 'selected' : ''}>${doc.name}</option>`
        ).join('');
        if (deptDoctors.length === 0) {
            doctorSelect.innerHTML = `<option value="On-Call Team">On-Call Team</option>`;
        }

        timeSlotsContainer.innerHTML = timeSlotsData.map(time => `
            <button type="button" data-time="${time}" class="time-slot-btn text-sm border border-slate-300 rounded-md py-2 hover:bg-teal-50 hover:border-teal-500 transition-colors">${time}</button>
        `).join('');
        selectedTimeInput.value = '';

        bookingModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        setTimeout(() => {
            modalOverlay.classList.remove('opacity-0');
            modalContainer.classList.remove('scale-95', 'opacity-0');
        }, 10);
    };
    
    const closeModal = () => {
        modalOverlay.classList.add('opacity-0');
        modalContainer.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            bookingModal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            bookingForm.reset();
        }, 300);
    };

    const showToast = (message) => {
        toast.textContent = message;
        toast.classList.remove('opacity-0', 'translate-x-10');
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-x-10');
        }, 3000);
    };

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!selectedTimeInput.value) {
            alert('Please select a time slot.');
            return;
        }

        const newAppointment = {
            department: departmentNameInput.value,
            color: departmentColorInput.value,
            doctor: doctorSelect.value,
            date: appointmentDateInput.value,
            time: selectedTimeInput.value
        };
        
        bookedAppointments.push(newAppointment);
        renderAppointments();
        closeModal();
        showToast('Appointment Confirmed!');
        navigateTo('appointments-page');
    });

     // --- HEALTH FORM LOGIC ---
    const healthForm = document.getElementById('health-form');
    if (healthForm) {
        healthForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('user-name').value;
            const height = parseFloat(document.getElementById('user-height').value) / 100; // in meters
            const weight = parseFloat(document.getElementById('user-weight').value);

            if (height > 0 && weight > 0) {
                const bmi = (weight / (height * height)).toFixed(1);
                const bmiMetric = healthData.find(m => m.label === 'BMI');
                
                if (bmiMetric) {
                    bmiMetric.value = bmi;
                    if (bmi < 18.5) {
                        bmiMetric.recommendation = "You are in the underweight range. Consider consulting a nutritionist.";
                    } else if (bmi >= 18.5 && bmi < 25) {
                        bmiMetric.recommendation = "Your BMI is in the healthy weight range. Well done!";
                    } else if (bmi >= 25 && bmi < 30) {
                        bmiMetric.recommendation = "You are in the overweight range. A balanced diet and exercise can help.";
                    } else {
                        bmiMetric.recommendation = "You are in the obesity range. It's recommended to consult a doctor.";
                    }
                }
                
                document.getElementById('monitoring-title').textContent = `Welcome, ${name}! Here's Your Health Dashboard`;
                renderHealthMetrics();
            }
        });
    }

    // --- CONTACT FORM LOGIC ---
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            showToast(`Thanks for your message, ${name}!`);
            contactForm.reset();
        });
    }

    // --- CHATBOT LOGIC ---
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const closeChatbotBtn = document.getElementById('close-chatbot-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');

    const toggleChatbot = (show) => {
        if (show) {
            chatbotWindow.classList.remove('scale-95', 'opacity-0', '-translate-y-2', 'pointer-events-none');
        } else {
            chatbotWindow.classList.add('scale-95', 'opacity-0', '-translate-y-2', 'pointer-events-none');
        }
    };

    chatbotToggleBtn.addEventListener('click', () => toggleChatbot(true));
    closeChatbotBtn.addEventListener('click', () => toggleChatbot(false));

    const addMessage = (text, sender) => {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message text-sm p-2 rounded-lg max-w-[80%] ${sender === 'user' ? 'bg-teal-500 text-white self-end' : 'bg-slate-200 text-slate-800 self-start'}`;
        messageElement.textContent = text;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    const getBotResponse = (userInput) => {
        const lowerInput = userInput.toLowerCase();
        if (lowerInput.includes('headache')) {
            return "Common causes of headaches include stress, dehydration, and lack of sleep. For persistent headaches, I recommend seeing a doctor in General Medicine. Would you like me to show you doctors from that department?";
        } else if (lowerInput.includes('fever')) {
            return "A fever is often a sign of infection. It's best to consult with our General Medicine department. You can book an appointment on the Doctors page.";
        } else if (lowerInput.includes('book appointment')) {
            return "You can book an appointment by visiting the Departments or Doctors pages. Which specialist are you looking for?";
        } else if (lowerInput.includes('hours') || lowerInput.includes('open')) {
            return "Our online services are available 24/7. For in-person appointments, please check the specific hospital's operating hours.";
        } else {
            return "I'm here to help with general health questions and booking appointments. How can I assist you today?";
        }
    };

    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userInput = chatbotInput.value.trim();
        if (!userInput) return;

        addMessage(userInput, 'user');
        chatbotInput.value = '';

        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addMessage(botResponse, 'bot');
        }, 1000);
    });
    
    addMessage("Hello! I'm your AI Health Assistant. How can I help you today?", 'bot');


    // --- EVENT LISTENERS ---
    document.body.addEventListener('click', (e) => {
        const navBtn = e.target.closest('.nav-btn');
        if (navBtn) {
            e.preventDefault();
            const targetId = navBtn.dataset.target;
            if (targetId) navigateTo(targetId);
        }
        
        const bookingBtn = e.target.closest('.booking-btn');
        if (bookingBtn) {
            const deptId = bookingBtn.dataset.deptId;
            const doctorName = bookingBtn.dataset.doctorName;
            if (deptId !== undefined) openModal(deptId, doctorName);
        }
    });

    timeSlotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('time-slot-btn')) {
            document.querySelectorAll('.time-slot-btn').forEach(btn => btn.classList.remove('bg-teal-500', 'text-white', 'border-teal-500'));
            e.target.classList.add('bg-teal-500', 'text-white', 'border-teal-500');
            selectedTimeInput.value = e.target.dataset.time;
        }
    });

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                const targetElement = document.querySelector(href);
                if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // --- UTILITY FUNCTIONS ---
    const getThemeColors = (color) => {
        const colors = {
            rose: { border: 'border-rose-500', bg: 'bg-rose-500', hover: 'hover:bg-rose-600', text: 'text-rose-500' },
            orange: { border: 'border-orange-500', bg: 'bg-orange-500', hover: 'hover:bg-orange-600', text: 'text-orange-500' },
            sky: { border: 'border-sky-500', bg: 'bg-sky-500', hover: 'hover:bg-sky-600', text: 'text-sky-500' },
            amber: { border: 'border-amber-500', bg: 'bg-amber-500', hover: 'hover:bg-amber-600', text: 'text-amber-500' },
            violet: { border: 'border-violet-500', bg: 'bg-violet-500', hover: 'hover:bg-violet-600', text: 'text-violet-500' },
            red: { border: 'border-red-500', bg: 'bg-red-500', hover: 'hover:bg-red-600', text: 'text-red-500' },
        };
        return colors[color] || colors.sky;
    };

    // --- INITIAL LOAD ---
    renderHealthMetrics();
    renderDepartments();
    renderDoctors();
    renderServices();
    renderAppointments();
});
