import { filePaths } from './globalvars';

export async function setMonosSVGPath(newPath, pathType) {
  filePaths.monosSVG = setPath(newPath,pathType);
  return
}

export async function setCSSPath(newPath, pathType) {
  filePaths.css = setPath(newPath,pathType);
  return;
}

export async function setImagesPath(newPath, pathType) {
  filePaths.images = setPath(newPath,pathType);
  return;
}

function setPath (newPath, pathType) {
  if (!pathType || pathType === "absolute") {
    return `${window.location.protocol}//${window.location.host}${newPath}`;
  }
  if (pathType === "relative") {
    return newPath;
  }
}

