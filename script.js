const districtsByState = {
    'Andhra Pradesh': ['ANANTAPUR', 'CHITTOOR', 'EAST GODAVARI', 'GUNTUR', 'KRISHNA', 'KURNOOL', 'PRAKASAM', 'S.P.S. NELLORE', 'SRIKAKULAM', 'VISAKHAPATNAM', 'VIZIANAGARAM', 'WEST GODAVARI', 'YSR KADAPA'],
    'Arunachal Pradesh': ['ANJAW', 'CHANGLANG', 'DIBANG VALLEY', 'EAST KAMENG', 'EAST SIANG', 'KAMLE', 'KRA DAADI', 'KURUNG KUMEY', 'LEPA RADA', 'LOHIT', 'LONGDING', 'LOWER DIBANG VALLEY', 'LOWER SIANG', 'LOWER SUBANSIRI', 'NAMSAI', 'PAPUM PARE', 'SHI YOMI', 'SIANG', 'TAWANG', 'TIRAP', 'UPPER SIANG', 'UPPER SUBANSIRI', 'WEST KAMENG', 'WEST SIANG'],
    'Assam': ['BAKSA', 'BARPETA', 'BISWANATH', 'BONGAIGAON', 'CACHAR', 'CHARAIDEO', 'CHIRANG', 'DARRANG', 'DHEMAJI', 'DHUBRI', 'DIBRUGARH', 'DIMA HASAO', 'GOALPARA', 'GOLAGHAT', 'HAILAKANDI', 'HOJAI', 'JORHAT', 'KAMRUP', 'KAMRUP METRO', 'KARBI ANGLONG', 'KARIMGANJ', 'KOKRAJHAR', 'LAKHIMPUR', 'MAJULI', 'MORIGAON', 'NAGAON', 'NALBARI', 'SIVASAGAR', 'SONITPUR', 'SOUTH SALMARA-MANKACHAR', 'TINSUKIA', 'UDALGURI', 'WEST KARBI ANGLONG'],
    'Bihar': ['ARARIA', 'ARWAL', 'AURANGABAD', 'BANKA', 'BEGUSARAI', 'BHAGALPUR', 'BHOJPUR', 'BUXAR', 'DARBHANGA', 'EAST CHAMPARAN', 'GOPALGANJ', 'JAMUI', 'JEHANABAD', 'KAIMUR', 'KATIHAR', 'KHAGARIA', 'KISHANGANJ', 'LAKHISARAI', 'MADHEPURA', 'MADHUBANI', 'MUNGER', 'MUZAFFARPUR', 'NALANDA', 'NAWADA', 'PASHCHIM CHAMPARAN', 'PATNA', 'PURBI CHAMPARAN', 'PURNIA', 'ROHTAS', 'SAHARSA', 'SAMASTIPUR', 'SARAN', 'SHEIKHPURA', 'SHEOHAR', 'SITAMARHI', 'SIWAN', 'SUPAUL', 'VAISHALI', 'WEST CHAMPARAN'],
    'Chhattisgarh': ['BALOD', 'BALODA BAZAR', 'BALRAMPUR', 'BASTAR', 'BEMETARA', 'BIJAPUR', 'BILASPUR', 'DANTEWADA', 'DHAMTARI', 'DURG', 'GARIYABAND', 'JANJGIR-CHAMPA', 'JASHPUR', 'KABIRDHAM', 'KANKER', 'KONDAGAON', 'KORBA', 'KOREA', 'MAHASAMUND', 'MUNGELI', 'NARAYANPUR', 'RAIGARH', 'RAIPUR', 'RAJNANDGAON', 'SUKMA', 'SURAJPUR'],
    'Goa': ['NORTH GOA', 'SOUTH GOA'],
    'Gujarat': ['AHMEDABAD', 'AMRELI', 'ANAND', 'ARAVALLI', 'BANASKANTHA', 'BHARUCH', 'BHAVNAGAR', 'BOTAD', 'CHHOTA UDEPUR', 'DAHOD', 'DANG', 'DEVBHUMI DWARKA', 'GANDHINAGAR', 'GIR SOMNATH', 'JAMNAGAR', 'JUNAGADH', 'KHEDA', 'KUTCH', 'MAHISAGAR', 'MEHSANA', 'MORBI', 'NARMADA', 'NAVSARI', 'PANCHMAHAL', 'PATAN', 'PORBANDAR', 'RAJKOT', 'SABARKANTHA', 'SURAT', 'SURENDRANAGAR', 'TAPI', 'VADODARA', 'VALSAD'],
    'Haryana': ['AMBALA', 'BHIWANI', 'CHARKHI DADRI', 'FARIDABAD', 'FATEHABAD', 'GURUGRAM', 'HISAR', 'JHAJJAR', 'JIND', 'KAITHAL', 'KARNAL', 'KURUKSHETRA', 'MAHENDRAGARH', 'NUH', 'PALWAL', 'PANCHKULA', 'PANIPAT', 'REWARI', 'ROHTAK', 'SIRSA', 'SONIPAT', 'YAMUNANAGAR'],
    'Himachal Pradesh': ['BILASPUR', 'CHAMBA', 'HAMIRPUR', 'KANGRA', 'KINNAUR', 'KULLU', 'L-S SPITI', 'MANDI', 'SHIMLA', 'SIRMAUR', 'SOLAN', 'UNA'],
    'Jharkhand': ['BOKARO', 'CHATRA', 'DEOGHAR', 'DHANBAD', 'DUMKA', 'EAST SINGHBHUM', 'GARHWA', 'GIRIDIH', 'GODDA', 'GUMLA', 'HAZARIBAGH', 'JAMTARA', 'KHUNTI', 'KODERMA', 'LATEHAR', 'LOHARDAGA', 'PAKUR', 'PALAMU', 'RAMGARH', 'RANCHI', 'SAHEBGANJ', 'SARAIKELA KHARSAWAN', 'SIMDEGA', 'WEST SINGHBHUM'],
    'Karnataka': ['BAGALKOT', 'BALLARI', 'BELAGAVI', 'BENGALURU RURAL', 'BENGALURU URBAN', 'BIDAR', 'CHAMARAJANAGAR', 'CHIKBALLAPUR', 'CHIKKAMAGALUR', 'CHITRADURGA', 'DAKSHINA KANNADA', 'DAVANAGERE', 'DHARWAD', 'GADAG', 'HASSAN', 'HAVERI', 'KALABURAGI', 'KODAGU', 'KOLAR', 'KOPPAL', 'MANDYA', 'MYSURU', 'RAICHUR', 'RAMANAGARA', 'SHIVAMOGGA', 'TUMAKUR', 'UDUPI', 'UTTARA KANNADA', 'VIJAYAPURA', 'YADGIR'],
    'Kerala': ['ALAPPUZHA', 'ERNAKULAM', 'IDUKKI', 'KANNUR', 'KASARAGOD', 'KOLLAM', 'KOTTAYAM', 'KOZHIKODE', 'MALAPPURAM', 'PALAKKAD', 'PATHANAMTHITTA', 'THIRUVANANTHAPURAM', 'THRISSUR', 'WAYANAD'],
    'Madhya Pradesh': ['AGAR MALWA', 'ALIRAJPUR', 'ANUPPUR', 'ASHOKNAGAR', 'BALAGHAT', 'BARWANI', 'BETUL', 'BHIND', 'BHOPAL', 'BURHANPUR', 'CHHATARPUR', 'CHHINDWARA', 'DAMOH', 'DATIA', 'DEWAS', 'DHAR', 'DINDORI', 'GUNA', 'GWALIOR', 'HARDA', 'HOSHANGABAD', 'INDORE', 'JABALPUR', 'JHABUA', 'KATNI', 'KHANDWA', 'KHARGONE', 'MANDLA', 'MANDSAUR', 'MORENA', 'NAGDA', 'NAGOD', 'NALANDA', 'NARSIMHAPUR', 'NEEMUCH', 'NIMAR', 'PANNA', 'RAISEN', 'RAJGARH', 'RATLAM', 'REWA', 'SAGAR', 'SATNA', 'SEHORE', 'SEONI', 'SHAHDOL', 'SHAJAPUR', 'SHEOPUR', 'SHIVPURI', 'SIDHI', 'SINGRAULI', 'TIKAMGARH', 'UJJAIN', 'UMARIA', 'VIDISHA'],
    'Maharashtra': ['AHMEDNAGAR', 'AKOLA', 'AMRAVATI', 'AURANGABAD', 'BEED', 'BHANDARA', 'BULDHANA', 'CHANDRAPUR', 'DHULE', 'GADCHIROLI', 'GONDIA', 'HINGOLI', 'JALGAON', 'JALNA', 'KOLHAPUR', 'LATUR', 'MUMBAI', 'NAGPUR', 'NANDED', 'NANDURBAR', 'NASHIK', 'OSMANABAD', 'PALGHAR', 'PARBHANI', 'PUNE', 'RAIGAD', 'RATNAGIRI', 'SANGLI', 'SATARA', 'SINDHUDURG', 'SOLAPUR', 'THANE', 'WARDHA', 'WASHIM', 'YAVATMAL'],
    'Manipur': ['BISHNUPUR', 'CHANDEL', 'CHURACHANDPUR', 'IMPHAL EAST', 'IMPHAL WEST', 'JIRIBAM', 'KAKCHING', 'KAMJONG', 'KANGPOKPI', 'NONEY', 'PHERZAWL', 'SENAPATI', 'TAMENGLONG', 'TENGNOUPAL', 'THOUBAL', 'UKHRUL'],
    'Meghalaya': ['EAST GARO HILLS', 'EAST JAINTIA HILLS', 'EAST KHASI HILLS', 'NORTH GARO HILLS', 'RI BHOI', 'SOUTH GARO HILLS', 'SOUTH WEST GARO HILLS', 'SOUTH WEST KHASI HILLS', 'WEST GARO HILLS', 'WEST JAINTIA HILLS', 'WEST KHASI HILLS'],
    'Mizoram': ['AIZAWL', 'CHAMPHAI', 'HINGOLI', 'KHAWZAWL', 'KIPHIRE', 'KOLASIB', 'LONGLENG', 'LUNGLEI', 'MAMIT', 'NAGAON', 'NORTH GARO HILLS', 'PEREN', 'SAIHA', 'SAMASTIPUR', 'SERCCHIP', 'SIAHA'],
    'Nagaland': ['DIMAPUR', 'KIPHIRE', 'KOHIMA', 'LONGLENG', 'MOKOKCHUNG', 'MON', 'PEREN', 'PHEK', 'TUENSANG', 'WOKHA', 'ZUNHEBOTO'],
    'Odisha': ['ANGUL', 'BALANGIR', 'BALESHWAR', 'BARGARH', 'BHADRAK', 'BOUDH', 'CUTTACK', 'DEOGARH', 'DHENKANAL', 'GAJAPATI', 'GANJAM', 'JAGATSINGHAPUR', 'JAJPUR', 'JHARSUGUDA', 'KALAHANDI', 'KANDHAMAL', 'KENDRAPARA', 'KENDUJHAR', 'KHORDHA', 'KORAPUT', 'MALKANGIRI', 'MAYURBHANJ', 'NABARANGPUR', 'NAYAGARH', 'NUAPADA', 'PURI', 'RAYAGADA', 'SAMBALPUR', 'SONEPUR', 'SUNDARGARH'],
    'Puducherry': ['KARAIKAL', 'PUDUCHERRY', 'YANAM'],
    'Punjab': ['AMRITSAR', 'BARNALA', 'BATHINDA', 'FARIDKOT', 'FATEHGARH SAHIB', 'FEROZEPUR', 'GURDASPUR', 'HOSHIARPUR', 'JALANDHAR', 'KAPURTHALA', 'LUDHIANA', 'MANSA', 'MOGA', 'MUKTSAR', 'PATHANKOT', 'PATIALA', 'RUPNAGAR', 'S.A.S NAGAR', 'SANGRUR', 'SHAHEED BHAGAT SINGH NAGAR', 'SRI MUKTSAR SAHIB', 'TARN TARAN'],
    'Rajasthan': ['AJMER', 'ALWAR', 'BANSWARA', 'BARAN', 'BARMER', 'BHARATPUR', 'BHILWARA', 'BIKANER', 'BUNDI', 'CHITTORGARH', 'CHURU', 'DAUSA', 'DHOLPUR', 'DUNGARPUR', 'HANUMANGARH', 'JAIPUR', 'JAISALMER', 'JALORE', 'JHALAWAR', 'JHUNJHUNU', 'JODHPUR', 'KARAULI', 'KOTA', 'NAGAUR', 'PALI', 'PRATAPGARH', 'RAJSAMAND', 'SAWAI MADHOPUR', 'SIKAR', 'SIROHI', 'TONK', 'UDAIPUR'],
    'Sikkim': ['EAST DISTRICT', 'NORTH DISTRICT', 'SOUTH DISTRICT', 'WEST DISTRICT'],
    'Tamil Nadu': ['ARIYALUR', 'CHENGALPATTU', 'CHENNAI', 'COIMBATORE', 'CUDDALORE', 'DINDIGUL', 'ERODE', 'KALLAKURICHI', 'KANCHIPURAM', 'KANNIYAKUMARI', 'KARUR', 'KRISHNAGIRI', 'MADURAI', 'MAYILADUTHURAI', 'NAGAPATTINAM', 'NAMAKKAL', 'NILGIRIS', 'PERAMBALUR', 'PUDUKKOTTAI', 'RAMANATHAPURAM', 'RANIPET', 'SALEM', 'SIVAGANGA', 'TENKASI', 'THANJAVUR', 'THENI', 'THIRUVALLUR', 'THIRUVARUR', 'TIRUCHIRAPPALLI', 'TIRUNELVELI', 'TIRUPATHUR', 'TIRUPPUR', 'TIRUVANNAMALAI', 'TUTICORIN', 'VELLORE', 'VILUPPURAM', 'VIRUDHUNAGAR'],
    'Telangana': ['ADILABAD', 'BHADRADRI KOTHAGUDEM', 'HYDERABAD', 'JAGTIAL', 'JANGOAN', 'JAYASHANKAR BHUPALAPALLY', 'JOGULAMBA GADWAL', 'KAMAREDDY', 'KARIMNAGAR', 'KHAMMAM', 'KUMURAM BHEEM', 'MAHABUBABAD', 'MAHABUBNAGAR', 'MANCHERIAL', 'MEDAK', 'MEDCHAL MALKAJGIRI', 'NAGARKURNOOL', 'NALGONDA', 'NIRMAL', 'NIZAMABAD', 'PEDDAPALLI', 'RAJANNA SIRCILLA', 'RANGAREDDI', 'SANGAREDDY', 'SIDDIPET', 'SURYAPET', 'VIKARABAD', 'WANAPARTHY', 'WARANGAL RURAL', 'WARANGAL URBAN', 'YADADRI BHUVANAGIRI'],
    'Tripura': ['DHALAI', 'GOMATI', 'KHOWAI', 'NORTH TRIPURA', 'SEPAHIJALA', 'SOUTH TRIPURA', 'UNAKOTI', 'WEST TRIPURA'],
    'Uttar Pradesh': ['AGRA', 'ALIGARH', 'ALLAHABAD', 'AMBEDKAR NAGAR', 'AMETHI', 'AMROHA', 'AURAIYA', 'AZAMGARH', 'BAGHPAT', 'BAHRAICH', 'BALLIA', 'BALRAMPUR', 'BANDA', 'BARABANKI', 'BAREILLY', 'BASTI', 'BHADOHI', 'BULANDSHAHR', 'CHANDAULI', 'CHITRAKOOT', 'DEORIA', 'ETAH', 'ETAWAH', 'FAIZABAD', 'FARRUKHABAD', 'FATEHPUR', 'FIROZABAD', 'GAUTAM BUDDHA NAGAR', 'GHAZIABAD', 'GHAZIPUR', 'GONDA', 'GORAKHPUR', 'HAMIRPUR', 'HAPUR', 'HARDOI', 'HATHRAS', 'JALAUN', 'JAUNPUR', 'JHANSI', 'KANNAUJ', 'KANPUR DEHAT', 'KANPUR NAGAR', 'KASGANJ', 'KAUSHAMBI', 'KHERI', 'KUSHI NAGAR', 'LALITPUR', 'LUCKNOW', 'MAHARAJGANJ', 'MAHOBA', 'MAINPURI', 'MATHURA', 'MAU', 'MEERUT', 'MIRZAPUR', 'MORADABAD', 'MUZAFFARNAGAR', 'PILIBHIT', 'PRATAPGARH', 'RAE BARELI', 'RAMPUR', 'SAHARANPUR', 'SAMBHAL', 'SANT KABIR NAGAR', 'SHAHJAHANPUR', 'SHAMLI', 'SHRAVASTI', 'SIDDHARTHNAGAR', 'SITAPUR', 'SONBHADRA', 'SULTANPUR', 'UNNAO', 'VARANASI'],
    'Uttarakhand': ['ALMORA', 'BAGESHWAR', 'CHAMOLI', 'CHAMPAWAT', 'DEHRADUN', 'HARIDWAR', 'NAINITAL', 'PAURI GARHWAL', 'PITHORAGARH', 'RUDRA PRAYAG', 'TEHRI GARHWAL', 'UDHAM SINGH NAGAR', 'UTTARKASHI'],
    'West Bengal': ['ALIPURDUAR', 'BANKURA', 'BIRBHUM', 'COOCHBEHAR', 'DARJEELING', 'DAKSHIN DINAJPUR', 'HOOGHLY', 'HOWRAH', 'JALPAIGURI', 'JHARGRAM', 'KALIMPONG', 'KOLKATA', 'MALDAH', 'MURSHIDABAD', 'NADIA', 'NORTH 24 PARGANAS', 'PASCHIM BARDHAMAN', 'PURBA BARDHAMAN', 'PURBA MEDINIPUR', 'PURULIA', 'SOUTH 24 PARGANAS', 'UTTAR DINAJPUR'],
    'Andaman and Nicobar Islands': ['NORTH AND MIDDLE ANDAMAN', 'SOUTH ANDAMANS'],
    'Chandigarh': ['CHANDIGARH'],
    'Dadra and Nagar Haveli': ['DADRA AND NAGAR HAVELI', 'DAMAN', 'DIU'],
    'Daman and Diu': ['DADRA AND NAGAR HAVELI', 'DAMAN', 'DIU'],
    'Delhi': ['CENTRAL DELHI', 'EAST DELHI', 'NEW DELHI', 'NORTH DELHI', 'NORTH EAST DELHI', 'NORTH WEST DELHI', 'SHAHDARA', 'SOUTH DELHI', 'SOUTH EAST DELHI', 'SOUTH WEST DELHI', 'WEST DELHI'],
    'Lakshadweep': ['LAKSHADWEEP'],
    'Puducherry': ['KARAIKAL', 'MAHE', 'PUDUCHERRY', 'YANAM']
  };
  
function updateDistricts() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");

    // Clear existing options
    districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';

    // Get selected state
    const selectedState = stateSelect.value;

    // Populate districts for the selected state
    if (selectedState && districtsByState[selectedState]) {
        districtsByState[selectedState].forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    }
}

document.getElementById("state").addEventListener("change", updateDistricts);
updateDistricts();

document.addEventListener("DOMContentLoaded", function () {
    closePopup();
});

document.getElementById('closePopup').addEventListener('click', function () {
    closePopup();
});

function showPopup() {
    document.getElementById('popupContainer').classList.remove('hidden');
}

function closePopup() {
    console.log('Close popup function called.');
    document.getElementById('popupContainer').classList.add('hidden');
}

function makePredictionRequest() {
    const apiUrl = "http://127.0.0.1:8070";

    const formData = {
        State_Name: document.getElementById("state").value,
        District_Name: document.getElementById("district").value,
        Area: document.getElementById("area").value,
        Crop: document.getElementById("crops").value,
        Season: document.getElementById("season").value,
        Crop_Year: document.getElementById("cropYear").value,
    };

    if (!Object.values(formData).every(value => value.trim() !== '')) {
        alert("Please fill in all fields before submitting.")
        return;
    }

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data sent successfully:", data);
            var predictedValue = JSON.stringify(data.production);
            document.getElementById('predictedProduction').innerHTML = predictedValue;

            showPopup();
        })
        .catch(error => {
            console.error("Error sending data:", error);
            // Handle errors or display a message to the user
        });
}