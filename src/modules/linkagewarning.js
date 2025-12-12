import { domElements, commonMonosExtended, monos_with_2linkage, linkageSettings } from './globalvars.js';
import { glycantojson } from './glycantoJSON.js';
import { outputname } from './outputname.js';

/**
 * Check if the current structure has any ??-? linkages and show/hide warning accordingly
 * Shows warning whenever structure contains ??-? (unless user dismissed it)
 * @param {string} name - The IUPAC name of the structure
 */
export function checkAndDisplayLinkageWarning(name) {
  const warningDiv = document.getElementById('linkageWarningDiv');
  
  if (!warningDiv) {
    // Warning div not in DOM yet
    return;
  }
  
  // Show warning if structure has ??-? linkages and user hasn't dismissed it
  if (!linkageSettings.warningDismissed && name && name.includes('??-?')) {
    warningDiv.style.display = 'block';
  } else {
    warningDiv.style.display = 'none';
  }
}

/**
 * Dismiss the warning until page refresh
 */
export function dismissLinkageWarning() {
  linkageSettings.warningDismissed = true;
  const warningDiv = document.getElementById('linkageWarningDiv');
  if (warningDiv) {
    warningDiv.style.display = 'none';
  }
}

/**
 * Apply standard child linkage positions to all ??-? linkages in the structure
 * This replaces ??-? with ?1-? for most monosaccharides and ?2-? for sialic acids
 * Also enables the toggle switch and updates the global setting
 */
export function fixUnknownLinkages() {
  const nameInput = document.getElementById(domElements.nameInputID);
  if (!nameInput || !nameInput.value) {
    return;
  }
  
  const currentName = nameInput.value;
  
  // Parse the structure to JSON
  let structureObj;
  try {
    const jsonString = glycantojson(currentName);
    structureObj = JSON.parse(jsonString);
  } catch (e) {
    console.error('Error parsing structure:', e);
    alert('Unable to parse the current structure. Please check the name format.');
    return;
  }
  
  // Recursively fix linkages in the structure
  fixLinkagesRecursive(structureObj);
  
  // Enable the toggle and update global setting
  const toggle = document.getElementById('standardLinkagesToggle');
  if (toggle) {
    toggle.checked = true;
    // Update the global variable
    linkageSettings.applyStandardLinkages = true;
  }
  
  // Output the updated structure
  outputname(structureObj);
}

/**
 * Recursively traverse the structure and fix ??-? linkages
 * @param {Object} node - Current node in the glycan structure
 */
function fixLinkagesRecursive(node) {
  if (!node) return;
  
  // Fix the current node's linkage if it's ??-?
  if (node.linkage === '??-?') {
    const mono = node.monosaccharide;
    
    if (commonMonosExtended.includes(mono)) {
      if (monos_with_2linkage.includes(mono)) {
        node.linkage = '?2-?';
      } else {
        node.linkage = '?1-?';
      }
    }
    // For uncommon monosaccharides, we leave it as ??-? (conservative)
  }
  
  // Recursively process children
  if (node.children && Array.isArray(node.children)) {
    for (const child of node.children) {
      fixLinkagesRecursive(child);
    }
  }
}
