import {filePaths} from './globalvars';

export async function setMonosSVGPath (newPath) {
  filePaths.monosSVG = newPath;
  return
}

export async function setCSSPath (newPath) {
  filePaths.css = newPath;
  return;
}

