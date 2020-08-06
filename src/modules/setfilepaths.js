import { filePaths } from './globalvars';

export async function setMonosSVGPath(newPath, pathType) {
  if (pathType === "absolute") {
    filePaths.monosSVG = `${window.location.protocol}//${window.location.host}${newPath}`;
  }
  if (pathType === "relative") {
    filePaths.monosSVG = newPath;
  }
  return
}

export async function setCSSPath(newPath, pathType) {
  if (!pathType || pathType === "absolute") {
    filePaths.css = `${window.location.protocol}//${window.location.host}${newPath}`;
  }
  if (pathType === "relative") {
    filePaths.css = newPath;
  }

  return;
}

