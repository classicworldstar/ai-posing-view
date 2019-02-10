
export function getleft(data) {
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
export function getright(data) {
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
export function gettop(data) {
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
export function getbottom(data) {
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
export function getcenter(data) {
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

export function isHit(pos_x1, pos_x2, pos_y1, pos_y2, x, y) {
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

export function removeSplitLastData(src) {
  var value = src.split('/');
  var result = "";
  for (var i = 0; i < value.length - 1; i++) {
    result = result + value[i] + "/";
  }
  return result;
}