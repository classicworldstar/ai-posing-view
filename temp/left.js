  setRegionData(0, data.name);
  document.getElementById("camera_name_text_id").value = data.cameraName;
  for (var i = 0; i < data.region.length; i++) {
    lMapPoints.name = data.region[i].name;
    for (var k = 0; k < data.region[i].mapPoints.length; k++) {
      if (data.region[i].enable) {
        drawPoint(canvas_map_top, lMapPoints, data.region[i].mapPoints[k].x, data.region[i].mapPoints[k].y, 'blue');
      } else {
        drawPoint(canvas_map_top, lMapPoints, data.region[i].mapPoints[k].x, data.region[i].mapPoints[k].y, 'red');
      }
    }
    var polygon;
    if (data.region[i].enable) {
      polygon = drawPolygon(canvas_map_top, lMapPoints, lMapRegionNo, 'blue');
    } else {
      polygon = drawPolygon(canvas_map_top, lMapPoints, lMapRegionNo, 'red');
    }
    addRegionData(canvas, polygon, targetPoints, regionNo);

    clearPoints(lMapPoints, lMapRegionNo);
  }
  finishRegionData();