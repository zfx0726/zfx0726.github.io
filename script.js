const mapStyle = [
  { stylers: [{ visibility: "off" }] },
  { featureType: "landscape", elementType: "geometry", stylers: [{ visibility: "on" }, { color: "#fcfcfc" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ visibility: "on" }, { color: "#bfd4ff" }] },
];

let map;
let dataMin = Number.MAX_VALUE, dataMax = -Number.MAX_VALUE;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: -100 },
    zoom: 4,
    styles: mapStyle,
  });

  map.data.setStyle(styleFeature);
  map.data.addListener("mouseover", mouseInToRegion);
  map.data.addListener("mouseout", mouseOutOfRegion);

  const selectBox = document.getElementById("billing-code");
  google.maps.event.addDomListener(selectBox, "change", () => {
    clearData();
    loadData(selectBox.options[selectBox.selectedIndex].value);
  });

  loadMapShapes();
}

function loadMapShapes() {
  map.data.loadGeoJson("https://storage.googleapis.com/mapsdevsite/json/states.js", { idPropertyName: "STATE" }, () => {
    google.maps.event.trigger(document.getElementById("billing-code"), "change");
  });
}

function loadData(code) {
  // Here you would replace with a call to your API or data source
  d3.json('https://zfx0726.github.io/data/visualization_data.json').then((data) => {
    const stateData = data[code].state_data;

    for (const state in stateData) {
      const value = stateData[state];

      if (value < dataMin) dataMin = value;
      if (value > dataMax) dataMax = value;

      const feature = map.data.getFeatureById(state);
      if (feature) feature.setProperty("value", value);
    }

    document.getElementById("data-min").textContent = dataMin.toLocaleString();
    document.getElementById("data-max").textContent = dataMax.toLocaleString();
  });
}

function clearData() {
  dataMin = Number.MAX_VALUE;
  dataMax = -Number.MAX_VALUE;
  map.data.forEach((feature) => {
    feature.setProperty("value", undefined);
  });
  document.getElementById("data-box").style.display = "none";
}

function styleFeature(feature) {
  const low = [5, 69, 54];
  const high = [151, 83, 34];
  const delta = (feature.getProperty("value") - dataMin) / (dataMax - dataMin);
  const color = [];
  for (let i = 0; i < 3; i++) {
    color.push((high[i] - low[i]) * delta + low[i]);
  }
  let showRow = true;
  if (feature.getProperty("value") == null || isNaN(feature.getProperty("value"))) {
    showRow = false;
  }
  let outlineWeight = 0.5, zIndex = 1;
  if (feature.getProperty("state") === "hover") {
    outlineWeight = zIndex = 2;
  }
  return {
    strokeWeight: outlineWeight,
    strokeColor: "#fff",
    zIndex: zIndex,
    fillColor: "hsl(" + color[0] + "," + color[1] + "%," + color[2] + "%)",
    fillOpacity: 0.75,
    visible: showRow,
  };
}

function mouseInToRegion(e) {
  e.feature.setProperty("state", "hover");
  const percent = ((e.feature.getProperty("value") - dataMin) / (dataMax - dataMin)) * 100;
  document.getElementById("data-label").textContent = e.feature.getProperty("NAME");
  document.getElementById("data-value").textContent = e.feature.getProperty("value").toLocaleString();
  document.getElementById("data-box").style.display = "block";
  document.getElementById("data-caret").style.display = "block";
  document.getElementById("data-caret").style.paddingLeft = percent + "%";
}

function mouseOutOfRegion(e) {
  e.feature.setProperty("state", "normal");
}

window.initMap = initMap;