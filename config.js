var areaObjectPos = { row: 0, column: 0 };

var areaObject = {
  name: "",
  cameraName: "",
  fileName: "", //ファイルの名称
  src: "", //サーバー上ファイルのurl
  clop: 0, //0,1,2,3を指定
  region: [], //設定したregionを格納
  AnalysisObject: [], //解析タイプ、From,To
};

var dataObject = {
  name: "", //data名称を任意に決める。
  index_num: 5,　//areaのindex数
  areaObject: [
    {
      name: "ららぽーと",
      cameraName: "camera01",
      fileName: "camera01_01.jpg", //ファイルの名称
      src: "./images/camera01_01.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera01",
      fileName: "camera01_02.jpg", //ファイルの名称
      src: "./images/camera01_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera01",
      fileName: "camera01_03.jpg", //ファイルの名称
      src: "./images/camera01_03.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_01.jpg", //ファイルの名称
      src: "./images/camera02_01.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_02.jpg", //ファイルの名称
      src: "./images/camera02_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_02.jpg", //ファイルの名称
      src: "./images/camera02_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_02.jpg", //ファイルの名称
      src: "./images/camera02_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_02.jpg", //ファイルの名称
      src: "./images/camera02_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_02.jpg", //ファイルの名称
      src: "./images/camera02_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_02.jpg", //ファイルの名称
      src: "./images/camera02_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_02.jpg", //ファイルの名称
      src: "./images/camera02_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
    {
      name: "ららぽーと",
      cameraName: "camera02",
      fileName: "camera02_02.jpg", //ファイルの名称
      src: "./images/camera02_02.jpg", //サーバー上ファイルのurl
      clop: 0, //0,1,2,3を指定
      region: [],
      AnalysisObject: [], //解析タイプ、From,To
    },
  ]
};
var lMapPoints = {
  name: "", //"region1", "region2",・・・・
  index: 0, //regionNo
  points: [
    {
      circle: null, //bule circle display object
      text: null, //axis display object
      focus: true,
    }
  ]
};

var lCameraData = {
  name: "camera0", //camera1, camera2, ・・・
  index: 0,
  region: [
    {
      name: "", /* "region1", "region2", ・・・*/
      index: 0,
      enable: false, //valid,invalid 有効、無効
      mapPolygon: null,
      mapPoints: [], //mapPoints data
    }
  ],
  focusRegionNo: 0,
  finish: false,
};

var lOutputData = {
  name: "camera0", //camera1, camera2, ・・・
  mapFileName: "",
  mapWidth: "",
  mapHeight: "",
  region: /*region1, region2, ・・・*/[
    {
      name: "", /* "region1", "region2", ・・・*/
      index: 0,
      enable: true,
      mapPoints: [], //only axis data from mapPoints
    }
  ],
};
var lCameraNo = 0;
var lMapRegionNo = 0;

//json保存を作成する機能を作ったら  ai-posingへ移植する

var canvas_map_bg = null; //map image display   canvas1
var canvas_map_top = null; //map image display  canvas1

var lRelativePath = "img\\";
var lMapFileName = "";

var lBgImgSize = { //information of background image at map area and camera area
  map: {
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0
  },
};
window.onload = function () {
  dataLoad();

  initialize();
  initFileName();
  initCanvas();
  document.getElementById("camera_name_text_id").value = "input camera name";
  document.getElementById("region_name_text_id").value = "input region name";
  document.getElementById("file_name_text_id").value = "output_data";
  /*   
     if(window.File && window.FileReader) {
         //File API
         alert("ご使用のブラウザはFile APIを実装しています");
     }else{
         alert("ご使用のブラウザはFile APIをサポートしていません");
     }
 */



  document.getElementById("clear_button_id").onclick = function (e) {

    for (var i = 0; i < lMapPoints.points.length; i++) {
      canvas_map_top.remove(lMapPoints.points[i].circle);
      canvas_map_top.remove(lMapPoints.points[i].text);
    }
    lMapPoints.points.length = 0;
  };
  document.getElementById("clear_all_button_id").onclick = function (e) {

    for (var i = 0; i < lMapPoints.points.length; i++) {
      canvas_map_top.remove(lMapPoints.points[i].circle);
      canvas_map_top.remove(lMapPoints.points[i].text);
    }
    lMapPoints.points.length = 0;

    for (var i = 0; i < lCameraData.region.length; i++) {
      canvas_map_top.remove(lCameraData.region[i].mapPolygon);
    }
    lCameraData.region.length = 0;
    canvas_map_top.clear().renderAll();
    initialize();
    initCanvas();
    //setSelectedBgImg();
    form.myfile.value = ""; //json file name, select button            

  };
  document.getElementById("init_button_id").onclick = function (e) {
    window.location.reload(true);
    form.myfile.value = ""; //json file name, select button
  };

  document.getElementById("camera_name_text_id").onclick = function (e) {
    document.getElementById("camera_name_text_id").value = "";
  };

  document.getElementById("region_name_text_id").onclick = function (e) {
    document.getElementById("region_name_text_id").value = "";
  };

  document.getElementById("drawmode_button_id").onclick = function (e) {
    // draw mode on <-> off

    if (canvas_map_top.isDrawingMode == true) {
      document.getElementById("drawmode_button_id").value = "select on";
      canvas_map_top.isDrawingMode = false;
    } else {
      document.getElementById("drawmode_button_id").value = "select off";
      canvas_map_top.isDrawingMode = true;
    }
  };

  document.getElementById("set_polygon_button_id").onclick = function (e) {
    // set polygon data for n region.

    if (lMapPoints.points.length > 1) {
      // Map and Camera, number of circle point is same.
      lCameraData.name = document.getElementById("camera_name_text_id").value;
      lMapPoints.name = document.getElementById("region_name_text_id").value;
      lMapPoints.index = lMapRegionNo;
      drawPolygon(canvas_map_top, lMapPoints, lMapRegionNo, 'blue');

      //解析タイプのselectboxに追加
      setAnalysisSelectBox(lMapRegionNo, "from_area_select_id");
      setAnalysisSelectBox(lMapRegionNo, "to_area_select_id");
      lMapRegionNo++;

      clearPoints(lMapPoints, lMapRegionNo);
    } else {
      alert("the number of points > 1");
    }

  };
  document.getElementById("file_name_text_id").onclick = function (e) {
    document.getElementById("file_name_text_id").value = "";
  };

  document.getElementById("json_button_id").onclick = function (e) {
    // ここに#buttonをクリックしたら発生させる処理を記述する
    finishRegionData(lCameraNo); // finish the regiondata of cameraXX.
    var intrnlFileName = document.getElementById("file_name_text_id").value + "_internal_data.json";
    saveCameraData(intrnlFileName);
    var jsonFileName = document.getElementById("file_name_text_id").value + ".json";
    saveOutputData(jsonFileName);
  };

  //Form要素を取得する
  var form = document.forms.myform;
  //ファイルが読み込まれた時の処理
  form.myfile.addEventListener('change', function (e) {
    if (lMapFileName == "") {
      form.myfile.value = ""; //json file name, select button            
      alert("set image data(jpg/png) on map and camera.");
      return;
    }
    initialize();
    if (canvas_map_top == null) {
      canvas_map_top = new fabric.Canvas('cvn_top_map_id');
      canvas_map_top.isDrawingMode = true;
    }

    document.getElementById("drawmode_button_id").value = "select off";
    canvas_map_top.isDrawingMode = true;

    //ここにファイル取得処理を書く
    if (e.target.files.length == 0) {
      alert("can not open the file.");
      return;
    }
    var result = e.target.files[0];

    //FileReaderのインスタンスを作成する
    var reader = new FileReader();

    //読み込んだファイルの中身を取得する
    reader.readAsText(result);

    //ファイルの中身を取得後に処理を行う
    reader.addEventListener('load', function () {
      console.log(reader.result);
      var data = JSON.parse(reader.result);
      setRegionData(0, data.name);
      document.getElementById("camera_name_text_id").value = data.name;
      for (var i = 0; i < data.region.length; i++) {
        lMapPoints.name = data.region[i].name;
        for (var k = 0; k < data.region[i].mapPoints.length; k++) {
          if (data.region[i].enable) {
            drawPoint(canvas_map_top, lMapPoints, data.region[i].mapPoints[k].x, data.region[i].mapPoints[k].y, 'blue');
          } else {
            drawPoint(canvas_map_top, lMapPoints, data.region[i].mapPoints[k].x, data.region[i].mapPoints[k].y, 'red');
          }
        }
        if (data.region[i].enable) {
          drawPolygon(canvas_map_top, lMapPoints, lMapRegionNo, 'blue');
        } else {
          drawPolygon(canvas_map_top, lMapPoints, lMapRegionNo, 'red');
        }
        lMapRegionNo++;
        clearPoints(lMapPoints, lMapRegionNo);
      }
      finishRegionData();
    });
  });

  document.getElementById("div_map_img_id").addEventListener("mousedown", function (e) {
    //canvas_map_top,map
    if (canvas_map_top.isDrawingMode) {
      //set clicked point, draw circle.
      drawPoint(canvas_map_top, lMapPoints, e.offsetX, e.offsetY, 'red');
    } else {
      //region enable true or false
      selectRegion(lCameraNo, canvas_map_top, lMapPoints, e.offsetX, e.offsetY);
    }
    console.log("img_map_img_id,mousedown");
  });
  document.getElementById("div_map_img_id").addEventListener("mouseup", function (e) {
    console.log("img_map_img_id,mouseup");
  });

  document.getElementById("analysis_create_button_id").onclick = function (e) {
    createTypeFromTo();
  };
  document.getElementById("set_button_id").onclick = function (e) {
    setTypeFromTo();
  };
  document.getElementById("tbody_id").onclick = function (e) {
    // set polygon data for n region.
    getCELL();
  }
}


function createTypeFromTo() {
  const type1 = document.form1.analysis_select_name;
  const Analysis = type1.options[type1.selectedIndex].value;

  const type2 = document.form1.from_area_select_name;
  const fromArea = type2.options[type2.selectedIndex].value;

  const type3 = document.form1.to_area_select_name;
  const toArea = type3.options[type3.selectedIndex].value;
  var elemet = document.getElementById("tbody_setting_id");

  var analysisType = { Analysis, fromArea, toArea };
  areaObject.AnalysisObject.push(analysisType);

  elemet.insertAdjacentHTML(
    'beforeend',
    '<tr><td><a>' + Analysis + '</a></td> <td><a>' + fromArea + '</a></td><td><a>' + toArea + '</a></td></tr>'
  );
}

function setTypeFromTo() {
  //serverへ送信するデータを作成し、json形式でsendする
  if (areaObjectPos.row > 0) {
    dataObject.areaObject[areaObjectPos.row - 1] = areaObject;
  }
  //server送信
  //http://localhost:5000


}

function dataLoad() {
  //serverからデータを受信して、表示を行う。
  var test2 = document.getElementById("tbody_id");
  for (var i = 0; i < dataObject.areaObject.length; i++) {
    var area_name = dataObject.areaObject[i].name;
    var camera_name = dataObject.areaObject[i].cameraName;
    var file_name = dataObject.areaObject[i].fileName;
    var clop = dataObject.areaObject[i].clop;
    test2.insertAdjacentHTML(
      'beforeend',
      '<tr><td><a>' + area_name + '</a></td> <td><a>' + camera_name + '</a></td><td><a>' + file_name + '</a></td><td><a>' + clop + '</a></td><td><input type="button" id="select_button_id" class="button" value="select"></td></tr>'
    );
  }

  var $sampleTable = document.getElementById("sample1");
  var $sampleTBodies = $sampleTable.tBodies;

  for (var $tbodyIndex = 0; $tbodyIndex < $sampleTBodies.length; $tbodyIndex++) {
    var $sampleTBodyRows = $sampleTBodies[$tbodyIndex].rows;
    for (var $rowIndex = 0; $rowIndex < $sampleTBodyRows.length; $rowIndex++) {
      $sampleTBodyRows[$rowIndex].onmouseover = function () {
        this.style.backgroundColor = "yellow";
      };
      $sampleTBodyRows[$rowIndex].onmouseout = function () {
        this.style.backgroundColor = "";
      };
      $sampleTBodyRows[$rowIndex].onclick = function () {
        this.style.backgroundColor = "blue";
      };
      var $sampleTBodyCells = $sampleTBodyRows[$rowIndex].cells;
      for (var $cellIndex = 0; $cellIndex < $sampleTBodyCells.length; $cellIndex++) {
        //$sampleTBodyCells[$cellIndex].onmouseover = function () {
        //  this.style.backgroundColor = "red";
        //};
        $sampleTBodyCells[$cellIndex].onmouseout = function () {
          this.style.backgroundColor = "";
        };
        $sampleTBodyCells[$cellIndex].onclick = function () {
          this.style.backgroundColor = "green";
        };
      }
    }
  }
}

function setAnalysisSelectBox(regionNo, select_id) {
  let op = document.createElement("option");
  op.value = regionNo;  //value値
  op.text = regionNo;   //テキスト値
  document.getElementById(select_id).appendChild(op);
}
function clearAnalysisSelectBox(select_id) {
  var sl = document.getElementById(select_id);
  while (sl.lastChild) {
    sl.removeChild(sl.lastChild);
  }
}
function clearAnalysisTable(table_id) {
  var tb = document.getElementById(table_id);
  var length = tb.rows.length
  for (var i = 0; i < length - 1; i++) {
    tb.deleteRow(-1);
  }
}
function getCELL() {
  var myTbl = document.getElementById('sample1');
  // trをループ。rowsコレクションで,行位置取得。
  for (var i = 0; i < myTbl.rows.length; i++) {
    // tr内のtdをループ。cellsコレクションで行内セル位置取得。
    for (var j = 0; j < myTbl.rows[i].cells.length; j++) {
      var Cells = myTbl.rows[i].cells[j]; //i番行のj番列のセル "td"
      // onclickで 'Mclk'を実行。thisはクリックしたセル"td"のオブジェクトを返す。
      Cells.onclick = function () { Mclk(this); }
    }
  }
}
function Mclk(Cell) {
  var rowINX = '行位置：' + Cell.parentNode.rowIndex;//Cellの親ノード'tr'の行位置
  var cellINX = 'セル位置：' + Cell.cellIndex;
  var cellVal = 'セルの内容：' + Cell.innerHTML;
  console.log('row:' + rowINX + ' column' + cellINX + ' content:' + cellVal);
  areaObjectPos.row = Cell.parentNode.rowIndex;
  areaObjectPos.column = Cell.cellIndex;
  console.log(areaObjectPos);

  if (areaObjectPos.row > 0 && areaObjectPos.column > 3) {
    areaObject = dataObject.areaObject[areaObjectPos.row - 1];

    if (canvas_map_top == null) {
      canvas_map_top = new fabric.Canvas('cvn_top_map_id', {
        isDrawingMode: true,
        backgroundColor: 'rgba(255,255,255,0)',
      });
    }
    canvas_map_top.setBackgroundImage(areaObject.src, canvas_map_top.renderAll.bind(canvas_map_top), {
      backgroundImageOpacity: 0.5,
      backgroundImageStretch: false
    });
  }
};

function removeSplitLastData(src) {
  var value = src.split('/');
  var result = "";
  for (var i = 0; i < value.length - 1; i++) {
    result = result + value[i] + "/";
  }
  return result;
}

function initialize() {
  lMapRegionNo = 0;
  lOutputData.region.length = 0;
  lMapPoints.points.length = 0;
  document.getElementById("drawmode_button_id").disabled = "";
  setRegionData(lCameraNo, "");
  setPointsData(lMapPoints, lMapRegionNo);
  clearAnalysisSelectBox("from_area_select_id");
  clearAnalysisSelectBox("to_area_select_id");
  clearAnalysisTable("sample2");

}
function initFileName() {
  lMapFileName = "";
}
function initCanvas() {
  if (canvas_map_top != null) {
    canvas_map_top.clear().renderAll();
  }
}

function setImgSize(canvas, img) {
  if (canvas.id == "cvn_bg_map_id") {
    lBgImgSize.map.width = img.width;
    lBgImgSize.map.height = img.height;
    lBgImgSize.map.naturalWidth = img.naturalWidth;
    lBgImgSize.map.naturalHeight = img.naturalHeight;
  }
}

function setPointsData(targetPoints, regionNo) {
  targetPoints.name = "region" + String(regionNo); //"region1", "region2",・・・・
  targetPoints.index = regionNo;
}
function drawPoint(canvas, targetPoints, offsetX, offsetY, color) {
  if (canvas.isDrawingMode == true) {
    var circle = addCircle(canvas, offsetX - 5, offsetY - 5, 5, color);
    var text = setCircleAxis(canvas, offsetX - 5, offsetY - 5, 5);

    var Points = {
      circle: circle,
      text: text,
      focus: true,
    };
    targetPoints.points.push(Points);
  } else {
  }
}
function clearPoints(points, regionNo) {
  points.name = "region" + regionNo;
  points.index = regionNo;
  points.points.length = 0;
}

function drawPolygon(canvas, targetPoints, regionNo, color) {
  var data = [];
  var normData = [];
  for (var i = 0; i < targetPoints.points.length; i++) {
    var circle = addCircle(canvas, targetPoints.points[i].circle.left, targetPoints.points[i].circle.top, 5, color);
    canvas.remove(targetPoints.points[i].circle);
    targetPoints.points[i].circle = circle;
    var points = {
      x: targetPoints.points[i].circle.left + targetPoints.points[i].circle.radius,
      y: targetPoints.points[i].circle.top + targetPoints.points[i].circle.radius
    };
    var normPoints = {
      x: targetPoints.points[i].circle.left + targetPoints.points[i].circle.radius,
      y: targetPoints.points[i].circle.top + targetPoints.points[i].circle.radius
    };
    data.push(points);
    areaObject.region.push(points);
    normData.push(normPoints);
  }
  var left = getleft(data);
  var top = gettop(data);
  var polygon = null;
  var text = null;
  var center = { x: 0, y: 0 };
  if (left != null && top != null) {
    polygon = addPolygon(canvas, data, left, top);
    center = getcenter(data);
    text = addText(String(regionNo), canvas, center.x, center.y, 20, 'red');
    targetPoints.points.text = text;
  }
  addRegionData(canvas, polygon, targetPoints, regionNo);
}
function addPolygon(canvas, data, left, top) {
  var polygon = new fabric.Polygon(data, {
    left: left,
    top: top,
    fill: 'rgba(200, 200, 200, 0.5)',
    stroke: 'rgba(255, 0, 0, 0.5)',
    strokeWidth: 3,
    selectable: false
  });
  canvas.add(polygon);
  if (polygon) {
    return polygon;
  } else {
    return null;
  }
}


function setRegionData(camNo, camName) {
  lCameraData.name = camName;
  lCameraData.index = camNo;
  lCameraData.focusRegionNo = 0;
  lCameraData.finish = false;
  lCameraData.region.length = 0;
}
function addRegionData(canvas, polygon, data, regionNo) {
  if (lCameraData.region.length <= regionNo) {
    var region = {
      name: data.name,
      index: regionNo,
      enable: true,
      mapPolygon: null,
      mapPoints: [],
    };
    lCameraData.region.push(region);
  }
  if (canvas.lowerCanvasEl.id == "cvn_top_map_id") { //map
    lCameraData.region[regionNo].mapPolygon = polygon;
    for (var i = 0; i < data.points.length; i++) {
      lCameraData.region[regionNo].mapPoints.push(data.points[i]);
    }
  }
}
function finishRegionData(camNo) {
  lCameraData.finish = true;
}

function addCircle(canvas, left, top, radius, fill) {
  var circle = new fabric.Circle({
    left: left,
    top: top,
    fill: fill,
    radius: radius
  });

  canvas.add(circle);

  if (circle) {
    return circle;
  } else {
    return null;
  }
}
function removeCircle(canvas, circle) {
  canvas.remove(circle);
}
function setCircleAxis(canvas, left, top, radius) {
  sPoints = "[" + String(left + radius) + "," + String(top + radius) + "]";
  return addText(sPoints, canvas, left + radius * 2, top + radius * 2, 10, 'black');
}
function addText(sInput, canvas, left, top, font_size, color) {
  var text = new fabric.Text(sInput, {
    left: left,
    top: top,
    fontFamily: 'Arial',
    fontSize: font_size,
    fontWeight: 'bold',
    fill: color
  });
  canvas.add(text);
  if (text) {
    return text;
  } else {
    return null;
  }
}

function saveCameraData(fileName) {
  saveJsonData(fileName, lCameraData);
}
function saveOutputData(fileName) {
  tranceCamDataToOutputData(lCameraData);
  saveJsonData(fileName, lOutputData);
  lOutputData.region.length = 0;
}
function saveJsonData(fileName, data) {
  const blob = new Blob([JSON.stringify(data, null, '  ')],
    { type: 'application\/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}
function tranceCamDataToOutputData(data) {
  lOutputData.name = data.name;//"camera" + String(lCameraNo);
  lOutputData.mapFileName = lMapFileName;
  lOutputData.mapWidth = lBgImgSize.map.naturalWidth;
  lOutputData.mapHeight = lBgImgSize.map.naturalHeight;
  for (var i = 0; i < data.region.length; i++) {
    var region = {
      name: "",
      index: 0,
      enable: false,
      mapPoints: [],
    };
    region.name = data.region[i].name;
    region.index = data.region[i].index;
    region.enable = data.region[i].enable;
    //region.mapNormPoints.length = 0;
    //region.camNormPoints.length = 0;
    for (k = 0; k < data.region[i].mapPolygon.points.length; k++) {
      var norm_point = {
        x: data.region[i].mapPolygon.points[k].x / lBgImgSize.map.width, //normalize
        y: data.region[i].mapPolygon.points[k].y / lBgImgSize.map.height //normalize
      };
      region.mapPoints.push(data.region[i].mapPolygon.points[k]);
      //region.mapNormPoints.push(norm_point);
    }

    lOutputData.region.push(region);
  }
  lOutputData.name = data.name;
}

function getleft(data) {
  if (data.length < 1) {
    return null;
  } else if (data.length < 2) {
    return data[i];
  }
  var ret = data[0].x;
  for (var i = 0; i < data.length - 1; i++) {
    if (ret > data[i + 1].x) {
      ret = data[i + 1].x;
    }
  }
  return ret;
}
function getright(data) {
  if (data.length < 1) {
    return null;
  } else if (data.length < 2) {
    return data[i];
  }
  var ret = data[0].x;
  for (var i = 0; i < data.length - 1; i++) {
    if (ret < data[i + 1].x) {
      ret = data[i + 1].x;
    }
  }
  return ret;
}
function gettop(data) {
  if (data.length < 1) {
    return null;
  } else if (data.length < 2) {
    return data[i];
  }
  var ret = data[0].y;
  for (var i = 0; i < data.length - 1; i++) {
    if (ret > data[i + 1].y) {
      ret = data[i + 1].y;
    }
  }
  return ret;
}
function getbottom(data) {
  if (data.length < 1) {
    return null;
  } else if (data.length < 2) {
    return data[i];
  }
  var ret = data[0].y;
  for (var i = 0; i < data.length - 1; i++) {
    if (ret < data[i + 1].y) {
      ret = data[i + 1].y;
    }
  }
  return ret;
}
function getcenter(data) {
  if (data.length < 1) {
    return null;
  }
  ret = { x: 0, y: 0 };
  for (var i = 0; i < data.length; i++) {
    ret.x = ret.x + data[i].x;
    ret.y = ret.y + data[i].y;
  }
  ret.x = ret.x / data.length;
  ret.y = ret.y / data.length;
  return ret;
}


function selectRegion(camenra_no, canvas, targetPoints, x, y) {
  retParam = hitRegion(camenra_no, canvas, x, y);
  if (retParam.enable) {
    console.log("hitRegion");

    for (var i = 0; i < retParam.points.length; i++) {
      /*
      var left = retParam.points[i].circle.left;
      var top = retParam.points[i].circle.top;
      var radius = retParam.points[i].circle.radius;
      */
      var left = retParam.points[i].x;
      var top = retParam.points[i].y;
      var radius = 5;

      //canvas.remove(targetPoints.points[i].circle);
      var circle = null
      if (lCameraData.region[retParam.regionNo].enable) {
        circle = addCircle(canvas, left - radius, top - radius, radius, 'red');
      } else {
        circle = addCircle(canvas, left - radius, top - radius, radius, 'blue');
      }
      if (circle) {
        //                canvas.remove(retParam.points[i].circle); circleを共通のパラメータにしないと余計なcircleを残すことになる。今は修正できていない。
        //                targetPoints.points[i].circle = circle;        
      }

    }
    if (lCameraData.region[retParam.regionNo].enable) {
      lCameraData.region[retParam.regionNo].enable = false;
    } else {
      lCameraData.region[retParam.regionNo].enable = true;
    }
  }
}

function hitRegion(camenra_no, canvas, x, y) {
  var retParam = {
    regionNo: 0,
    enable: false,
    points: [],
  };
  var left = 0;
  var right = 0;
  var top = 0;
  var bottom = 0;
  if (canvas.lowerCanvasEl.id == "cvn_top_map_id") { //map
    for (var i = 0; i < lCameraData.region.length; i++) {
      left = getleft(lCameraData.region[i].mapPolygon.points);
      right = getright(lCameraData.region[i].mapPolygon.points);
      top = gettop(lCameraData.region[i].mapPolygon.points);
      bottom = getbottom(lCameraData.region[i].mapPolygon.points);
      if (isHit(left, right, top, bottom, x, y)) {
        retParam.regionNo = i;
        retParam.enable = true;
        retParam.points = lCameraData.region[i].mapPolygon.points;
      }
    }
  }
  return retParam;
}
function isHit(pos_x1, pos_x2, pos_y1, pos_y2, x, y) {
  if (pos_x1 <= x && x <= pos_x2) {
    if (pos_y1 <= y && y <= pos_y2) {
      var log = "Hit:" + String(pos_x1) + "<=" + String(x) + "<" + String(pos_x2) + ", " + String(pos_y1) + "<=" + String(y) + "<" + String(pos_y2);
      console.log(log);
      return true;
    }
  }
  var log = "noHit:" + String(pos_x1) + "<=" + String(x) + "<" + String(pos_x2) + ", " + String(pos_y1) + "<=" + String(y) + "<" + String(pos_y2);
  console.log(log);
  return false;
}
