function createMVCell(basename) {
  let mv = document.createElement('model-viewer');
  mv.setAttribute('class', 'scan-table-cell');
  mv.setAttribute('src', basename + '.compressed.gltf');
  mv.setAttribute('poster', basename + '.thumbnail256.webp');
  mv.setAttribute('orientation', '0 -90deg 180deg');
  mv.setAttribute('camera-controls', '');
  mv.setAttribute('camera-orbit', '0 55deg 50%');
  mv.setAttribute('min-field-of-view', '5deg');
  mv.setAttribute('enable-pan', '');
  mv.setAttribute('loading', 'lazy');
  mv.setAttribute('reveal', 'interaction');
  // mv.setAttribute('auto-rotate', '');
  // mv.setAttribute('rotation-per-second', '30deg');
  // mv.setAttribute('bounds', 'tight');
  let td = document.createElement('td');
  td.appendChild(mv);
  return td;
};

function createArtCell(basename) {
  let img = document.createElement('img');
  img.setAttribute('class', 'scan-table-cell');
  img.setAttribute('src', basename + '-animation-camera-best.thumbnail256.webp');
  img.style['background-image'] = 'url("' + basename + '-texture-camera-best.thumbnail256.png")';
  img.style['background-size'] = 'cover';
  let td = document.createElement('td');
  td.appendChild(img);
  return td;
};

function addRow(parentTableId, scanId) {
  let row = document.createElement('tr');
  row.appendChild(createMVCell(scanId + '/' + scanId + '-texture'));
  row.appendChild(createMVCell(scanId + '/' + scanId + '-instance'));
  row.appendChild(createMVCell(scanId + '/' + scanId + '-obb'));
  row.appendChild(createMVCell(scanId + '/' + scanId + '-articulation'));
  row.appendChild(createArtCell(scanId + '/' + scanId));
  document.getElementById(parentTableId).appendChild(row);
};