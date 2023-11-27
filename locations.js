const arr = [
    {
        "lat": "28.6",
        "long": "77.2",
        "place": "New Delhi, Delhi India IN"
    },
    {
        "lat": "18.975",
        "long": "72.8258333",
        "place": "Mumbai, Maharashtra India IN"
    },
    {
        "lat": "12.96614",
        "long": "77.58694",
        "place": "Bengaluru, Karnataka, India"
    },
    {
        "lat": "13.0878385345075",
        "long": "80.2784729003906",
        "place": "Chennai, Tamil Nadu India IN"
    },
    {
        "lat": "22.5697222",
        "long": "88.3697222",
        "place": "Kolkata, Bengal India IN"
    },
    {
        "lat": "17.3752778",
        "long": "78.4744444",
        "place": "Hyderabad, Andhra Pradesh India IN"
    },
    {
        "lat": "18.5333333",
        "long": "73.8666667",
        "place": "Pune, Maharashtra India IN"
    },
    {
        "lat": "23.0333333",
        "long": "72.6166667",
        "place": "Ahmadabad, Gujarat India IN"
    },
    {
        "lat": "26.9166667",
        "long": "75.8166667",
        "place": "Jaipur, Rajasthan India IN"
    },
    {
        "lat": "26.85",
        "long": "80.9166667",
        "place": "Lucknow, Uttar Pradesh India IN"
    },
    {
        "lat": "26.4666667",
        "long": "80.35",
        "place": "Kanpur, Uttar Pradesh India IN"
    },
    {
        "lat": "21.15",
        "long": "79.1",
        "place": "Nagpur, Maharashtra India IN"
    },
    {
        "lat": "21.1666667",
        "long": "72.8333333",
        "place": "Surat, Gujarat India IN"
    },
    {
        "lat": "23.2666667",
        "long": "77.4",
        "place": "Bhopal, Madhya Pradesh India IN"
    },
    {
        "lat": "22.7179235376322",
        "long": "75.8333015441895",
        "place": "Indore, India IN"
    },
    {
        "lat": "25.6",
        "long": "85.1166667",
        "place": "Patna, Bihar India IN"
    },
    {
        "lat": "30.9",
        "long": "75.85",
        "place": "Ludhiana, Punjab India IN"
    },
    {
        "lat": "19.2",
        "long": "72.9666667",
        "place": "Thane, Maharashtra India IN"
    },
    {
        "lat": "27.1833333",
        "long": "78.0166667",
        "place": "Agra, Uttar Pradesh India IN"
    },
    {
        "lat": "25.33286",
        "long": "82.99658",
        "place": "Varanasi, Uttar Pradesh, India"
    },
    {
        "lat": "28.9833333",
        "long": "77.7",
        "place": "Meerut, Uttar Pradesh India IN"
    },
    {
        "lat": "22.3",
        "long": "73.2",
        "place": "Vadodara, Gujarat India IN"
    },
    {
        "lat": "25.45",
        "long": "81.85",
        "place": "Allahabad, Uttar Pradesh India IN"
    },
    {
        "lat": "23.35",
        "long": "85.3333333",
        "place": "Ranchi, Jharkhand India IN"
    },
    {
        "lat": "11",
        "long": "76.9666667",
        "place": "Coimbatore, Tamil Nadu India IN"
    },
    {
        "lat": "9.93601",
        "long": "76.26141",
        "place": "Kochi, Kerala, India"
    },
    {
        "lat": "12.3072222",
        "long": "76.6497222",
        "place": "Mysore, Karnataka India IN"
    },
    {
        "lat": "31.6330556",
        "long": "74.8655556",
        "place": "Amritsar, Punjab India IN"
    },
    {
        "lat": "17.7",
        "long": "83.3",
        "place": "Vishakhapatnam, Andhra Pradesh India IN"
    },
    {
        "lat": "9.9333333",
        "long": "78.1166667",
        "place": "Madurai, Tamil Nadu India IN"
    },
    {
        "lat": "16.5166667",
        "long": "80.6166667",
        "place": "Vijayawada, Andhra Pradesh India IN"
    },
    {
        "lat": "20.2333333",
        "long": "85.8333333",
        "place": "Bhubaneshwar, Orissa India IN"
    },
    {
        "lat": "26.2866667",
        "long": "73.03",
        "place": "Jodhpur, Rajasthan India IN"
    },
    {
        "lat": "21.2333333",
        "long": "81.6333333",
        "place": "Raipur, Chhattisgarh India IN"
    },
    {
        "lat": "30.7372222",
        "long": "76.7872222",
        "place": "Chandigarh, Chandigarh India IN"
    },
    {
        "lat": "26.1833333",
        "long": "91.7333333",
        "place": "Guwahati, Assam India IN"
    },
    {
        "lat": "30.3166667",
        "long": "78.0333333",
        "place": "Dehra Dun, Uttarakhand India IN"
    },
    {
        "lat": "28.5829389588817",
        "long": "77.3277425765991",
        "place": "Noida, Uttar Pradesh, India IN"
    },
    {
        "lat": "25.49811",
        "long": "82.1551",
        "place": "Gurgoan, Handia, Uttar Pradesh, India"
    },
    {
        "lat": "28.4333333",
        "long": "77.3166667",
        "place": "Faridabad, Haryana India IN"
    },
    {
        "lat": "28.6666667",
        "long": "77.4333333",
        "place": "Ghaziabad, Uttar Pradesh India IN"
    },
    {
        "lat": "22.8",
        "long": "86.1833333",
        "place": "Jamshedpur, Jharkhand India IN"
    },
    {
        "lat": "22.3",
        "long": "70.7833333",
        "place": "Rajkot, Gujarat India IN"
    },
    {
        "lat": "25.1833333",
        "long": "75.8333333",
        "place": "Kota, Rajasthan India IN"
    },
    {
        "lat": "18",
        "long": "79.5833333",
        "place": "Warangal, Andhra Pradesh India IN"
    },
    {
        "lat": "31.3255556",
        "long": "75.5791667",
        "place": "Jalandhar, Punjab India IN"
    },
    {
        "lat": "11.65",
        "long": "78.1666667",
        "place": "Salem, Tamil Nadu India IN"
    },
    {
        "lat": "27.8833333",
        "long": "78.0833333",
        "place": "Aligarh, Uttar Pradesh India IN"
    },
    {
        "lat": "28.8333333",
        "long": "78.7833333",
        "place": "Moradabad, Uttar Pradesh India IN"
    },
    {
        "lat": "16.3",
        "long": "80.45",
        "place": "Guntur, Andhra Pradesh India IN"
    }
];

module.exports = arr;