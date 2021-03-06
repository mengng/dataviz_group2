const geoCoordMap = {
    Malaysia: [101.7, 3.166666667],
    China: [116.383333, 39.91666667],
    India: [77.2, 28.6],
    Indonesia: [106.816667, -6.166666667],
    Bangladesh: [90.4, 23.71666667],
    Philippines: [120.966667, 14.6],
    Thailand: [100.516667, 13.75],
    Pakistan: [73.05, 33.68333333],
    "United Kingdom": [-0.083333, 51.5],
    Vietnam: [105.85, 21.03333333],
    "United States": [-77, 38.883333],
    "Sri Lanka": [79.833333, 6.916666667],
    Australia: [149.133333, -35.26666667],
    Mexico: [-99.133333, 19.43333333],
    Netherlands: [4.916667, 52.35],
    France: [2.333333, 48.86666667],
    Nepal: [85.316667, 27.71666667],
    Canada: [-75.7, 45.41666667],
    "New Zealand": [174.783333, -41.3],
    Myanmar: [96.15, 16.8],
    Japan: [139.75, 35.68333333],
    "Brunei Darussalam": [114.933333, 4.883333333],
    Turkey: [32.866667, 39.93333333],
    Cyprus: [33.366667, 35.16666667],
    "South Africa": [28.216667, -25.7],
    Lebanon: [35.5, 33.86666667],
    Poland: [21, 52.25],
    Iraq: [44.4, 33.33333333],
    Israel: [35.233333, 31.76666667],
    Cambodia: [104.916667, 11.55],
    Portugal: [-9.133333, 38.71666667],
    Germany: [13.4, 52.51666667],
    Jordan: [35.933333, 31.95],
    Afghanistan: [69.183333, 34.51666667],
    Algeria: [3.05, 36.75],
    Spain: [-3.683333, 40.4],
    "Papua New Guinea": [147.183333, -9.45],
    "Czech Republic": [14.466667, 50.08333333],
    Morocco: [-6.816667, 34.01666667],
    Italy: [12.483333, 41.9],
    Colombia: [-74.083333, 4.6],
    Kuwait: [47.966667, 29.36666667],
    "Saudi Arabia": [46.7, 24.65],
    Romania: [26.1, 44.43333333],
    Greece: [23.733333, 37.98333333],
    Fiji: [178.416667, -18.13333333],
    Samoa: [-171.766667, -13.81666667],
    "Burkina Faso": [-1.516667, 12.36666667],
    Bhutan: [89.633333, 27.46666667],
    Ireland: [-6.233333, 53.31666667],
    Hungary: [19.083333, 47.5],
    "Bosnia and Herzegovina": [18.416667, 43.86666667],
    "El Salvador": [-89.2, 13.7],
    Ukraine: [30.516667, 50.43333333],
    Austria: [16.366667, 48.2],
    Bulgaria: [23.316667, 42.68333333],
    Chile: [-70.666667, -33.45],
    Finland: [24.933333, 60.16666667],
    Tunisia: [10.183333, 36.8],
    Argentina: [-58.666667, -34.58333333],
    Brazil: [-47.916667, -15.78333333],
    "United Arab Emirates": [54.366667, 24.46666667],
    Belgium: [4.333333, 50.83333333],
    Paraguay: [-57.666667, -25.26666667],
    Mozambique: [32.583333, -25.95],
    Oman: [58.583333, 23.61666667],
    Ecuador: [-78.5, -0.216666667],
    Guatemala: [-90.516667, 14.61666667],
    Peru: [-77.05, -12.05],
    Sweden: [18.05, 59.33333333],
    Mali: [-8, 12.65],
    Tonga: [-175.2, -21.13333333],
    Nicaragua: [-86.25, 12.13333333],
    Bolivia: [-68.15, -16.5],
    Switzerland: [7.466667, 46.91666667],
    "Puerto Rico": [-66.116667, 18.46666667],
    Denmark: [12.583333, 55.66666667],
    Norway: [10.75, 59.91666667],
    Nigeria: [7.533333, 9.083333333],
    Kenya: [36.816667, -1.283333333],
    "Cook Islands": [-159.766667, -21.2],
    Uruguay: [-56.166667, -34.85],
    Croatia: [16, 45.8],
    Guyana: [-58.15, 6.8],
    Honduras: [-87.216667, 14.1],
    Belarus: [27.566667, 53.9],
    Albania: [19.816667, 41.31666667],
    "Cote d'Ivoire": [-5.266667, 6.816666667],
    Uganda: [32.55, 0.316666667],
    Guinea: [-13.7, 9.5],
    Rwanda: [30.05, -1.95],
    Zimbabwe: [31.033333, -17.81666667],
    Angola: [13.216667, -8.833333333],
    Cuba: [-82.35, 23.11666667],
    Malta: [14.5, 35.88333333],
    Panama: [-79.533333, 8.966666667],
    Sudan: [32.533333, 15.6],
    Suriname: [-55.166667, 5.833333333],
    Burundi: [29.35, -3.366666667],
    Ghana: [-0.216667, 5.55],
    Lesotho: [27.483333, -29.31666667],
    "Timor-Leste": [125.6, -8.583333333],
    Tanzania: [39.283333, -6.8],
    Jamaica: [-76.8, 18],
    Malawi: [33.783333, -13.96666667],
    Togo: [1.216667, 6.116666667],
    Bermuda: [-64.783333, 32.28333333],
    "Costa Rica": [-84.083333, 9.933333333],
    "Dominican Republic": [-69.9, 18.46666667],
    Maldives: [73.5, 4.166666667],
    Niue: [-169.916667, -19.01666667],
    Somalia: [45.333333, 2.066666667],
    Senegal: [-17.633333, 14.73333333],
    Bahrain: [50.566667, 26.23333333],
    Chad: [15.033333, 12.1],
    Ethiopia: [38.7, 9.033333333],
    Niger: [2.116667, 13.51666667],
    Slovenia: [14.516667, 46.05],
    Zambia: [28.283333, -15.41666667],
    Haiti: [-72.333333, 18.53333333],
    Libya: [13.166667, 32.88333333],
    Vanuatu: [168.316667, -17.73333333],
    Belize: [-88.766667, 17.25],
    Benin: [2.616667, 6.483333333],
    Botswana: [25.9, -24.63333333],
    "Cape Verde": [-23.516667, 14.91666667],
    Greenland: [-51.75, 64.18333333],
    Kiribati: [169.533333, -0.883333333],
    Liberia: [-10.8, 6.3],
    Moldova: [28.85, 47],
    Namibia: [17.083333, -22.56666667],
    Qatar: [51.533333, 25.28333333],
    Cameroon: [11.516667, 3.866666667],
    Madagascar: [47.516667, -18.91666667],
    Mauritania: [-15.966667, 18.06666667],
    Mauritius: [57.483333, -20.15],
    Mongolia: [106.916667, 47.91666667],
    Swaziland: [31.133333, -26.31666667],
    "Trinidad and Tobago": [-61.516667, 10.65],
    Comoros: [43.233333, -11.7],
    "Sierra Leone": [-13.233333, 8.483333333],
    Tokelau: [-171.833333, -9.166667],
    "American Samoa": [-170.7, -14.26666667],
    Andorra: [1.516667, 42.5],
    Anguilla: [-63.05, 18.21666667],
    "Antigua and Barbuda": [-61.85, 17.11666667],
    Armenia: [44.5, 40.16666667],
    Aruba: [-70.033333, 12.51666667],
    Azerbaijan: [49.866667, 40.38333333],
    Barbados: [-59.616667, 13.1],
    "Cayman Islands": [-81.383333, 19.3],
    "Central African Republic": [18.583333, 4.366666667],
    Djibouti: [43.15, 11.58333333],
    Dominica: [-61.4, 15.3],
    "Equatorial Guinea": [8.783333, 3.75],
    Eritrea: [38.933333, 15.33333333],
    Estonia: [24.716667, 59.43333333],
    "French Polynesia": [-149.566667, -17.53333333],
    Gabon: [9.45, 0.383333333],
    Georgia: [44.833333, 41.68333333],
    Gibraltar: [-5.35, 36.13333333],
    Grenada: [-61.75, 12.05],
    Guam: [144.733333, 13.46666667],
    "Guinea-Bissau": [-15.583333, 11.85],
    Iceland: [-21.95, 64.15],
    Kazakhstan: [71.416667, 51.16666667],
    Latvia: [24.1, 56.95],
    Liechtenstein: [9.516667, 47.13333333],
    Lithuania: [25.316667, 54.68333333],
    Luxembourg: [6.116667, 49.6],
    "Marshall Islands": [171.383333, 7.1],
    Monaco: [7.416667, 43.73333333],
    Montserrat: [-62.216667, 16.7],
    "New Caledonia": [166.45, -22.26666667],
    "Norfolk Island": [167.966667, -29.05],
    "Northern Mariana Islands": [145.75, 15.2],
    Palau: [134.633333, 7.483333333],
    "Saint Helena": [-5.716667, -15.93333333],
    "Saint Pierre and Miquelon": [-56.183333, 46.76666667],
    "San Marino": [12.416667, 43.93333333],
    "Sao Tome and Principe": [6.733333, 0.333333333],
    Seychelles: [55.45, -4.616666667],
    Singapore: [103.85, 1.283333333],
    "Solomon Islands": [159.95, -9.433333333],
    Tajikistan: [68.766667, 38.55],
    Turkmenistan: [58.383333, 37.95],
    "Turks and Caicos Islands": [-71.133333, 21.46666667],
    Tuvalu: [179.216667, -8.516666667],
    Uzbekistan: [69.25, 41.31666667],
    "Wallis and Futuna": [-171.933333, -13.95],
  };
