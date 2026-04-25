# 🌍 Area of Interests: Salzburg & Bern (FCC & TCC Analysis)

## 📌 Overview

This repository contains **False Color Composite (FCC)** and **True Color Composite (TCC)** visualizations for selected **Areas of Interest (AOI)** in **Salzburg (Austria)** and **Bern (Switzerland)**.

The analysis is performed using **Google Earth Engine (GEE)** with **Sentinel-2 Harmonized imagery**, focusing on basic visualization and interpretation of land surface features.

---

## 🛰️ Data Source

* **Satellite:** Sentinel-2 Harmonized
* **Platform:** Google Earth Engine
* **Spatial Resolution:** 10m

---

## ⚙️ Methodology

### 1. Data Selection

* Selected cloud-free Sentinel-2 images
* Filtered by AOI (Salzburg & Bern)
* Applied date range for optimal visibility

### 2. Image Processing

* Cloud filtering using metadata
* Median composite generation

### 3. Visualization

#### ✅ True Color Composite (TCC)

* Bands: **B4 (Red), B3 (Green), B2 (Blue)**
* Represents natural color as seen by the human eye

#### 🌱 False Color Composite (FCC)

* Bands: **B8 (NIR), B4 (Red), B3 (Green)**
* Highlights vegetation in shades of red
* Useful for vegetation and land-use analysis

---

## 📂 Repository Structure

```
├── Salzburg/
│   ├── FCC.png
│   └── TCC.png
│
├── Bern/
│   ├── FCC.png
│   └── TCC.png
│
└── gee_script.js
```

---

## 📊 Key Observations

* FCC clearly enhances **vegetation cover**
* Urban areas appear in **cyan/gray tones**
* Water bodies are distinguishable in both composites
* TCC provides realistic visualization for general interpretation

---

## 🛠️ Tools Used

* Google Earth Engine (JavaScript API)
* Sentinel-2 Harmonized Dataset
* GitHub for version control

---

## 🚀 Future Work

* NDVI and other vegetation indices
* Time-series analysis
* Land Use/Land Cover classification
* Integration with GIS tools (QGIS/ArcGIS)

---

## 🤝 Acknowledgements

* Copernicus Sentinel Data
* Google Earth Engine Platform

---

## 📎 Notes

This project is intended for **learning and demonstration purposes** in remote sensing and geospatial analysis.

---
